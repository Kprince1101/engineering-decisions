import { useState, useEffect } from 'react';

type VoteTotals = Record<string, number>;
type SupportState = Record<string, string | null>; // domain -> supported option

type UseVotingReturn = {
    votes: VoteTotals | null;
    isLoading: boolean;
    error: string | null;
    hasVoted: (option: string) => boolean;
    submitVote: (option: string) => Promise<void>;
};

const SUPPORT_STORAGE_KEY = 'support';

/**
 * Client-side voting hook with Vercel KV persistence
 * 
 * - Tracks user's supported option per domain in localStorage
 * - Fetches aggregate totals from API
 * - Supports toggle behavior (add/remove)
 */
export function useVoting(domainId: string = 'ui-systems'): UseVotingReturn {
    const [votes, setVotes] = useState<VoteTotals | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [supportedOption, setSupportedOption] = useState<string | null>(null);

    // Load user's support state from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(SUPPORT_STORAGE_KEY);
        if (stored) {
            try {
                const parsed: SupportState = JSON.parse(stored);
                setSupportedOption(parsed[domainId] || null);
            } catch (e) {
                // Ignore parse errors - start fresh
                setSupportedOption(null);
            }
        }
    }, [domainId]);

    // Fetch current vote totals
    useEffect(() => {
        fetchVotes();
    }, [domainId]);

    const fetchVotes = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`/api/vote?domain=${domainId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch votes');
            }
            const data = await response.json();
            setVotes(data.votes);
            setError(null);
        } catch (e) {
            setError('Unable to load vote totals');
            console.error('Error fetching votes:', e);
        } finally {
            setIsLoading(false);
        }
    };

    const hasVoted = (option: string): boolean => {
        return supportedOption === option;
    };

    const submitVote = async (option: string) => {
        const isCurrentlySupported = hasVoted(option);

        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    option,
                    domain: domainId,
                    action: isCurrentlySupported ? 'remove' : undefined
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit vote');
            }

            const data = await response.json();
            setVotes(data.votes);

            // Update local support state
            const newSupportedOption = isCurrentlySupported ? null : option;
            setSupportedOption(newSupportedOption);

            // Persist to localStorage
            const stored = localStorage.getItem(SUPPORT_STORAGE_KEY);
            const supportState: SupportState = stored ? JSON.parse(stored) : {};
            supportState[domainId] = newSupportedOption;
            localStorage.setItem(SUPPORT_STORAGE_KEY, JSON.stringify(supportState));

            setError(null);
        } catch (e) {
            setError('Failed to update support');
            console.error('Error submitting vote:', e);
            throw e;
        }
    };

    return {
        votes,
        isLoading,
        error,
        hasVoted,
        submitVote,
    };
}

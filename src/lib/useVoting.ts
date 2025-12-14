import { useState, useEffect } from 'react';

type VoteTotals = Record<string, number>;

type UseVotingReturn = {
    votes: VoteTotals | null;
    isLoading: boolean;
    error: string | null;
    hasVoted: (option: string) => boolean;
    submitVote: (option: string) => Promise<void>;
};

/**
 * Phase 2.1: Client-side voting hook with server-side persistence
 * 
 * - Tracks support in localStorage (UX enhancement)
 * - Fetches aggregate totals from API
 * - Server handles toggle logic
 */
export function useVoting(domainId: string = 'ui-systems'): UseVotingReturn {
    const [votes, setVotes] = useState<VoteTotals | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userVotes, setUserVotes] = useState<Set<string>>(new Set());

    const STORAGE_KEY = `${domainId}-votes`;

    // Load user's previous votes from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setUserVotes(new Set(parsed));
            } catch (e) {
                // Ignore parse errors - start fresh
            }
        } else {
            setUserVotes(new Set());
        }
    }, [STORAGE_KEY]);

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
        return userVotes.has(option);
    };

    const submitVote = async (option: string) => {
        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ option, domain: domainId }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit vote');
            }

            const data = await response.json();
            setVotes(data.votes);

            // Update local state based on server response
            const updated = new Set(userVotes);
            if (data.supported) {
                updated.add(option);
            } else {
                updated.delete(option);
            }
            setUserVotes(updated);

            // Persist to localStorage
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(updated)));

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

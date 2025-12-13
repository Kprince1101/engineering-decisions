import { useState, useEffect } from 'react';

type VoteOption = 'mantine' | 'shadcn' | 'chakra' | 'antd';

type VoteTotals = Record<VoteOption, number>;

type UseVotingReturn = {
    votes: VoteTotals | null;
    isLoading: boolean;
    error: string | null;
    hasVoted: (option: VoteOption) => boolean;
    submitVote: (option: VoteOption) => Promise<void>;
};

const STORAGE_KEY = 'ui-systems-votes';

/**
 * Phase 2.1: Client-side voting hook with server-side persistence
 * 
 * - Tracks support in localStorage (UX enhancement)
 * - Fetches aggregate totals from API
 * - Server handles toggle logic
 */
export function useVoting(): UseVotingReturn {
    const [votes, setVotes] = useState<VoteTotals | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [userVotes, setUserVotes] = useState<Set<VoteOption>>(new Set());

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
        }
    }, []);

    // Fetch current vote totals
    useEffect(() => {
        fetchVotes();
    }, []);

    const fetchVotes = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('/api/vote');
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

    const hasVoted = (option: VoteOption): boolean => {
        return userVotes.has(option);
    };

    const submitVote = async (option: VoteOption) => {
        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ option }),
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

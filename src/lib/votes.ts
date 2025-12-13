import type { Vote, VoteSummary } from '@/types/vote';

// In-memory vote storage (stub)
// TODO: Replace with database persistence
const votes: Vote[] = [];

export function recordVote(vote: Omit<Vote, 'id' | 'timestamp'>): Vote {
    const newVote: Vote = {
        ...vote,
        id: generateVoteId(),
        timestamp: Date.now(),
    };

    votes.push(newVote);
    return newVote;
}

export function getVotesByTopic(topicId: string): Vote[] {
    return votes.filter((vote) => vote.topicId === topicId);
}

export function getVoteSummary(topicId: string): VoteSummary[] {
    const topicVotes = getVotesByTopic(topicId);
    const total = topicVotes.length;

    if (total === 0) {
        return [];
    }

    const grouped = topicVotes.reduce((acc, vote) => {
        const key = vote.optionId;
        acc[key] = (acc[key] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return Object.entries(grouped).map(([optionId, count]) => ({
        topicId,
        optionId,
        count,
        percentage: (count / total) * 100,
    }));
}

function generateVoteId(): string {
    return `vote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

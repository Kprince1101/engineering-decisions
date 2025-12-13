export type Vote = {
    id: string;
    topicId: string;
    optionId: string;
    userId?: string;
    sessionHash: string;
    timestamp: number;
};

export type VoteSummary = {
    topicId: string;
    optionId: string;
    count: number;
    percentage: number;
};

export type VoteRequest = {
    topicId: string;
    optionId: string;
    sessionHash: string;
};

export type VoteResponse = {
    success: boolean;
    vote?: Vote;
    error?: string;
};

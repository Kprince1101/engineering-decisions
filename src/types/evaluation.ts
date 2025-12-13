export type Topic = {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: string;
};

export type Option = {
    id: string;
    topicId: string;
    name: string;
    slug: string;
    description: string;
};

export type EvaluationSection = {
    id: string;
    title: string;
    content: string;
};

export type Tradeoff = {
    id: string;
    optionId: string;
    category: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
};

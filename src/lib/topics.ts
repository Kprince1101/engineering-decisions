// Generic evaluation topic model
export type EvaluationTopic = {
    id: string;
    title: string;
    description: string;
};

// Single topic instance for UI systems evaluation
export const uiSystemsTopic: EvaluationTopic = {
    id: 'ui-systems',
    title: 'UI Systems',
    description: 'Evaluation of React component libraries',
};

// TODO: Add more topics as needed (e.g., state management, testing frameworks)

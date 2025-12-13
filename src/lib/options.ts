// Generic evaluation option model
export type EvaluationOption = {
    id: string;
    label: string;
    topicId: string;
};

// Options for UI systems topic
// TODO: Replace with database or CMS integration
export const uiSystemsOptions: EvaluationOption[] = [
    {
        id: 'mantine',
        label: 'Mantine',
        topicId: 'ui-systems',
    },
    {
        id: 'shadcn',
        label: 'shadcn/ui',
        topicId: 'ui-systems',
    },
    {
        id: 'chakra',
        label: 'Chakra UI',
        topicId: 'ui-systems',
    },
    {
        id: 'antd',
        label: 'Ant Design',
        topicId: 'ui-systems',
    },
];

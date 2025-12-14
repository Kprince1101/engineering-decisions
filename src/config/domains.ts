export type EvaluationSection = {
    id: string;
    label: string;
};

export type HeaderLink = {
    label: string;
    href: string;
};

export type EvaluationDomain = {
    id: string;
    label: string;
    description?: string;
    enabled: boolean;
    defaultPage: string;
    sections: EvaluationSection[];
    headerLinks: HeaderLink[];
};

export const evaluationDomains: EvaluationDomain[] = [
    {
        id: 'ui-systems',
        label: 'UI Libraries',
        enabled: true,
        defaultPage: 'mantine',
        sections: [
            { id: 'context', label: 'Context' },
            { id: 'components', label: 'Components' },
            { id: 'advanced', label: 'Advanced' },
            { id: 'tradeoffs', label: 'Tradeoffs' },
        ],
        headerLinks: [
            { label: 'Mantine', href: '/topic/ui-systems/mantine' },
            { label: 'shadcn/ui', href: '/topic/ui-systems/shadcn' },
            { label: 'Chakra', href: '/topic/ui-systems/chakra' },
            { label: 'AntD', href: '/topic/ui-systems/antd' },
        ],
    },
    {
        id: 'package-managers',
        label: 'Package Managers',
        enabled: true,
        defaultPage: 'npm',
        sections: [
            { id: 'context', label: 'Context' },
            { id: 'workflow', label: 'Workflow' },
            { id: 'performance', label: 'Performance' },
            { id: 'features', label: 'Unique Features' },
            { id: 'tradeoffs', label: 'Tradeoffs' },
        ],
        headerLinks: [
            { label: 'npm', href: '/topic/package-managers/npm' },
            { label: 'yarn', href: '/topic/package-managers/yarn' },
            { label: 'pnpm', href: '/topic/package-managers/pnpm' },
        ],
    },
    {
        id: 'testing-frameworks',
        label: 'Testing Frameworks',
        enabled: false,
        defaultPage: 'jest',
        sections: [
            { id: 'context', label: 'Context' },
            { id: 'components', label: 'Components' },
            { id: 'advanced', label: 'Advanced' },
            { id: 'tradeoffs', label: 'Tradeoffs' },
        ],
        headerLinks: [],
    },
];

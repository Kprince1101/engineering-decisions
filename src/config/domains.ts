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
        enabled: true,
        defaultPage: 'jest',
        sections: [
            { id: 'context', label: 'Context' },
            { id: 'workflow', label: 'Workflow' },
            { id: 'performance', label: 'Performance' },
            { id: 'debuggability', label: 'Debuggability' },
            { id: 'tradeoffs', label: 'Tradeoffs' },
        ],
        headerLinks: [
            { label: 'Jest', href: '/topic/testing-frameworks/jest' },
            { label: 'Vitest', href: '/topic/testing-frameworks/vitest' },
            { label: 'Mocha', href: '/topic/testing-frameworks/mocha' },
            { label: 'Playwright', href: '/topic/testing-frameworks/playwright' },
            { label: 'Cypress', href: '/topic/testing-frameworks/cypress' },
        ],
    },
    {
        id: 'build-tools',
        label: 'Build Tools',
        enabled: true,
        defaultPage: 'vite',
        sections: [
            { id: 'context', label: 'Context' },
            { id: 'dev-experience', label: 'Dev Experience' },
            { id: 'build-output', label: 'Build Output' },
            { id: 'performance', label: 'Performance' },
            { id: 'tradeoffs', label: 'Tradeoffs' },
        ],
        headerLinks: [
            { label: 'Vite', href: '/topic/build-tools/vite' },
            { label: 'Webpack', href: '/topic/build-tools/webpack' },
            { label: 'Rollup', href: '/topic/build-tools/rollup' },
            { label: 'esbuild', href: '/topic/build-tools/esbuild' },
            { label: 'Turbopack', href: '/topic/build-tools/turbopack' },
        ],
    },
    {
        id: 'data-fetching',
        label: 'Data Fetching',
        enabled: true,
        defaultPage: 'react-query',
        sections: [
            { id: 'context', label: 'Context' },
            { id: 'caching-model', label: 'Caching Model' },
            { id: 'mutation-semantics', label: 'Mutation Semantics' },
            { id: 'error-loading', label: 'Error & Loading States' },
            { id: 'tradeoffs', label: 'Tradeoffs' },
        ],
        headerLinks: [
            { label: 'React Query', href: '/topic/data-fetching/react-query' },
            { label: 'SWR', href: '/topic/data-fetching/swr' },
            { label: 'Apollo', href: '/topic/data-fetching/apollo' },
            { label: 'Relay', href: '/topic/data-fetching/relay' },
            { label: 'tRPC', href: '/topic/data-fetching/trpc' },
        ],
    },
    {
        id: 'state-management',
        label: 'State Management',
        enabled: true,
        defaultPage: 'redux-toolkit',
        sections: [
            { id: 'context', label: 'Context' },
            { id: 'mental-model', label: 'Mental Model' },
            { id: 'scale-characteristics', label: 'Scale Characteristics' },
            { id: 'debugging-tooling', label: 'Debugging & Tooling' },
            { id: 'tradeoffs', label: 'Tradeoffs' },
        ],
        headerLinks: [
            { label: 'Redux Toolkit', href: '/topic/state-management/redux-toolkit' },
            { label: 'Zustand', href: '/topic/state-management/zustand' },
            { label: 'Jotai', href: '/topic/state-management/jotai' },
            { label: 'Signals', href: '/topic/state-management/signals' },
            { label: 'Context', href: '/topic/state-management/context' },
        ],
    },
];

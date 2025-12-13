import { AntdComponents, ChakraComponents, MantineComponents, ShadcnComponents } from './components';

type ComponentsSectionProps = {
    option?: 'mantine' | 'shadcn' | 'chakra' | 'antd';
};

const COMPONENTS_MAP = {
    antd: <AntdComponents />,
    chakra: <ChakraComponents />,
    mantine: <MantineComponents />,
    shadcn: <ShadcnComponents />,
};

export function ComponentsSection({ option = 'mantine' }: ComponentsSectionProps) {
    return COMPONENTS_MAP[option] ?? null;
}

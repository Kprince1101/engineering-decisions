import { AntdContext, ChakraContext, MantineContext, ShadcnContext } from './context';

type ContextSectionProps = {
    option?: 'mantine' | 'shadcn' | 'chakra' | 'antd';
};

const CONTEXT_MAP = {
    antd: <AntdContext />,
    chakra: <ChakraContext />,
    mantine: <MantineContext />,
    shadcn: <ShadcnContext />,
};

export function ContextSection({ option = 'mantine' }: ContextSectionProps) {
    return CONTEXT_MAP[option] ?? null;
}

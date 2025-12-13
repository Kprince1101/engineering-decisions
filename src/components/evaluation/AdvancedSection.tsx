import { AntdAdvanced, ChakraAdvanced, MantineAdvanced, ShadcnAdvanced } from './advanced';

type AdvancedSectionProps = {
    option?: 'mantine' | 'shadcn' | 'chakra' | 'antd';
};

const ADVANCED_MAP = {
    antd: <AntdAdvanced />,
    chakra: <ChakraAdvanced />,
    mantine: <MantineAdvanced />,
    shadcn: <ShadcnAdvanced />,
};

export function AdvancedSection({ option = 'mantine' }: AdvancedSectionProps) {
    return ADVANCED_MAP[option] ?? null;
}

import { AntdTradeoffs, ChakraTradeoffs, MantineTradeoffs, ShadcnTradeoffs } from './tradeoffs';

type TradeoffsSectionProps = {
    option?: 'mantine' | 'shadcn' | 'chakra' | 'antd';
};

const TRADEOFFS_MAP = {
    antd: <AntdTradeoffs />,
    chakra: <ChakraTradeoffs />,
    mantine: <MantineTradeoffs />,
    shadcn: <ShadcnTradeoffs />,
};

export function TradeoffsSection({ option = 'mantine' }: TradeoffsSectionProps) {
    return TRADEOFFS_MAP[option] ?? null;
}

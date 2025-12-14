'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { ChakraContext } from '@/components/evaluation/context/ChakraContext';
import { ChakraComponents } from '@/components/evaluation/components/ChakraComponents';
import { ChakraAdvanced } from '@/components/evaluation/advanced/ChakraAdvanced';
import { ChakraTradeoffs } from '@/components/evaluation/tradeoffs/ChakraTradeoffs';

export default function ChakraPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ChakraContext />}
            {activeSection === 'components' && <ChakraComponents />}
            {activeSection === 'advanced' && <ChakraAdvanced />}
            {activeSection === 'tradeoffs' && <ChakraTradeoffs />}
        </ContentContainer>
    );
}
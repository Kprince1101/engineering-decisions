'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { MantineContext } from '@/components/evaluation/context/MantineContext';
import { MantineComponents } from '@/components/evaluation/components/MantineComponents';
import { MantineAdvanced } from '@/components/evaluation/advanced/MantineAdvanced';
import { MantineTradeoffs } from '@/components/evaluation/tradeoffs/MantineTradeoffs';

export default function MantinePage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <MantineContext />}
            {activeSection === 'components' && <MantineComponents />}
            {activeSection === 'advanced' && <MantineAdvanced />}
            {activeSection === 'tradeoffs' && <MantineTradeoffs />}
        </ContentContainer>
    );
}
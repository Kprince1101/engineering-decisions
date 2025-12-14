'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { ShadcnContext } from '@/components/evaluation/context/ShadcnContext';
import { ShadcnComponents } from '@/components/evaluation/components/ShadcnComponents';
import { ShadcnAdvanced } from '@/components/evaluation/advanced/ShadcnAdvanced';
import { ShadcnTradeoffs } from '@/components/evaluation/tradeoffs/ShadcnTradeoffs';

export default function ShadcnPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ShadcnContext />}
            {activeSection === 'components' && <ShadcnComponents />}
            {activeSection === 'advanced' && <ShadcnAdvanced />}
            {activeSection === 'tradeoffs' && <ShadcnTradeoffs />}
        </ContentContainer>
    );
}
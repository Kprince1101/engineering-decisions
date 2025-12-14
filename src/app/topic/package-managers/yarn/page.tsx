'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { YarnContext } from '@/components/evaluation/context/YarnContext';
import { YarnComponents } from '@/components/evaluation/components/YarnComponents';
import { YarnPerformance } from '@/components/evaluation/performance/YarnPerformance';
import { YarnFeatures } from '@/components/evaluation/features/YarnFeatures';
import { YarnTradeoffs } from '@/components/evaluation/tradeoffs/YarnTradeoffs';

export default function YarnPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <YarnContext />}
            {activeSection === 'workflow' && <YarnComponents />}
            {activeSection === 'performance' && <YarnPerformance />}
            {activeSection === 'features' && <YarnFeatures />}
            {activeSection === 'tradeoffs' && <YarnTradeoffs />}
        </ContentContainer>
    );
}

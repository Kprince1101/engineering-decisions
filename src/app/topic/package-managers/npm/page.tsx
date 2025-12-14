'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { NpmContext } from '@/components/evaluation/context/NpmContext';
import { NpmComponents } from '@/components/evaluation/components/NpmComponents';
import { NpmPerformance } from '@/components/evaluation/performance/NpmPerformance';
import { NpmFeatures } from '@/components/evaluation/features/NpmFeatures';
import { NpmTradeoffs } from '@/components/evaluation/tradeoffs/NpmTradeoffs';

export default function NpmPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <NpmContext />}
            {activeSection === 'workflow' && <NpmComponents />}
            {activeSection === 'performance' && <NpmPerformance />}
            {activeSection === 'features' && <NpmFeatures />}
            {activeSection === 'tradeoffs' && <NpmTradeoffs />}
        </ContentContainer>
    );
}

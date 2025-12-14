'use client';

import { ContentContainer } from '@/components/content';
import { EsbuildContext } from '@/components/evaluation/context/EsbuildContext';
import { EsbuildDevExperience } from '@/components/evaluation/dev-experience/EsbuildDevExperience';
import { EsbuildBuildOutput } from '@/components/evaluation/build-output/EsbuildBuildOutput';
import { EsbuildPerformance } from '@/components/evaluation/performance/EsbuildPerformance';
import { EsbuildTradeoffs } from '@/components/evaluation/tradeoffs/EsbuildTradeoffs';
import { useSection } from '@/contexts/SectionContext';

export default function EsbuildPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <EsbuildContext />}
            {activeSection === 'dev-experience' && <EsbuildDevExperience />}
            {activeSection === 'build-output' && <EsbuildBuildOutput />}
            {activeSection === 'performance' && <EsbuildPerformance />}
            {activeSection === 'tradeoffs' && <EsbuildTradeoffs />}
        </ContentContainer>
    );
}

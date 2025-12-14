'use client';

import { ContentContainer } from '@/components/content';
import { ViteContext } from '@/components/evaluation/context/ViteContext';
import { ViteDevExperience } from '@/components/evaluation/dev-experience/ViteDevExperience';
import { ViteBuildOutput } from '@/components/evaluation/build-output/ViteBuildOutput';
import { VitePerformance } from '@/components/evaluation/performance/VitePerformance';
import { ViteTradeoffs } from '@/components/evaluation/tradeoffs/ViteTradeoffs';
import { useSection } from '@/contexts/SectionContext';

export default function VitePage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ViteContext />}
            {activeSection === 'dev-experience' && <ViteDevExperience />}
            {activeSection === 'build-output' && <ViteBuildOutput />}
            {activeSection === 'performance' && <VitePerformance />}
            {activeSection === 'tradeoffs' && <ViteTradeoffs />}
        </ContentContainer>
    );
}

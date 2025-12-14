'use client';

import { ContentContainer } from '@/components/content';
import { WebpackContext } from '@/components/evaluation/context/WebpackContext';
import { WebpackDevExperience } from '@/components/evaluation/dev-experience/WebpackDevExperience';
import { WebpackBuildOutput } from '@/components/evaluation/build-output/WebpackBuildOutput';
import { WebpackPerformance } from '@/components/evaluation/performance/WebpackPerformance';
import { WebpackTradeoffs } from '@/components/evaluation/tradeoffs/WebpackTradeoffs';
import { useSection } from '@/contexts/SectionContext';

export default function WebpackPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <WebpackContext />}
            {activeSection === 'dev-experience' && <WebpackDevExperience />}
            {activeSection === 'build-output' && <WebpackBuildOutput />}
            {activeSection === 'performance' && <WebpackPerformance />}
            {activeSection === 'tradeoffs' && <WebpackTradeoffs />}
        </ContentContainer>
    );
}

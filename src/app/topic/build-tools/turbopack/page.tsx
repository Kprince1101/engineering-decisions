'use client';

import { ContentContainer } from '@/components/content';
import { TurbopackContext } from '@/components/evaluation/context/TurbopackContext';
import { TurbopackDevExperience } from '@/components/evaluation/dev-experience/TurbopackDevExperience';
import { TurbopackBuildOutput } from '@/components/evaluation/build-output/TurbopackBuildOutput';
import { TurbopackPerformance } from '@/components/evaluation/performance/TurbopackPerformance';
import { TurbopackTradeoffs } from '@/components/evaluation/tradeoffs/TurbopackTradeoffs';
import { useSection } from '@/contexts/SectionContext';

export default function TurbopackPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <TurbopackContext />}
            {activeSection === 'dev-experience' && <TurbopackDevExperience />}
            {activeSection === 'build-output' && <TurbopackBuildOutput />}
            {activeSection === 'performance' && <TurbopackPerformance />}
            {activeSection === 'tradeoffs' && <TurbopackTradeoffs />}
        </ContentContainer>
    );
}

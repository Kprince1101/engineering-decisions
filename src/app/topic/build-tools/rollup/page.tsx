'use client';

import { ContentContainer } from '@/components/content';
import { RollupContext } from '@/components/evaluation/context/RollupContext';
import { RollupDevExperience } from '@/components/evaluation/dev-experience/RollupDevExperience';
import { RollupBuildOutput } from '@/components/evaluation/build-output/RollupBuildOutput';
import { RollupPerformance } from '@/components/evaluation/performance/RollupPerformance';
import { RollupTradeoffs } from '@/components/evaluation/tradeoffs/RollupTradeoffs';
import { useSection } from '@/contexts/SectionContext';

export default function RollupPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <RollupContext />}
            {activeSection === 'dev-experience' && <RollupDevExperience />}
            {activeSection === 'build-output' && <RollupBuildOutput />}
            {activeSection === 'performance' && <RollupPerformance />}
            {activeSection === 'tradeoffs' && <RollupTradeoffs />}
        </ContentContainer>
    );
}

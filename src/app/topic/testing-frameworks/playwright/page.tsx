'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { PlaywrightContext } from '@/components/evaluation/context/PlaywrightContext';
import { PlaywrightWorkflow } from '@/components/evaluation/workflow/PlaywrightWorkflow';
import { PlaywrightPerformance } from '@/components/evaluation/performance/PlaywrightPerformance';
import { PlaywrightDebuggability } from '@/components/evaluation/debuggability/PlaywrightDebuggability';
import { PlaywrightTradeoffs } from '@/components/evaluation/tradeoffs/PlaywrightTradeoffs';

export default function PlaywrightPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <PlaywrightContext />}
            {activeSection === 'workflow' && <PlaywrightWorkflow />}
            {activeSection === 'performance' && <PlaywrightPerformance />}
            {activeSection === 'debuggability' && <PlaywrightDebuggability />}
            {activeSection === 'tradeoffs' && <PlaywrightTradeoffs />}
        </ContentContainer>
    );
}

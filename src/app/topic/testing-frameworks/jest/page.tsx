'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { JestContext } from '@/components/evaluation/context/JestContext';
import { JestWorkflow } from '@/components/evaluation/workflow/JestWorkflow';
import { JestPerformance } from '@/components/evaluation/performance/JestPerformance';
import { JestDebuggability } from '@/components/evaluation/debuggability/JestDebuggability';
import { JestTradeoffs } from '@/components/evaluation/tradeoffs/JestTradeoffs';

export default function JestPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <JestContext />}
            {activeSection === 'workflow' && <JestWorkflow />}
            {activeSection === 'performance' && <JestPerformance />}
            {activeSection === 'debuggability' && <JestDebuggability />}
            {activeSection === 'tradeoffs' && <JestTradeoffs />}
        </ContentContainer>
    );
}

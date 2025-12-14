'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { VitestContext } from '@/components/evaluation/context/VitestContext';
import { VitestWorkflow } from '@/components/evaluation/workflow/VitestWorkflow';
import { VitestPerformance } from '@/components/evaluation/performance/VitestPerformance';
import { VitestDebuggability } from '@/components/evaluation/debuggability/VitestDebuggability';
import { VitestTradeoffs } from '@/components/evaluation/tradeoffs/VitestTradeoffs';

export default function VitestPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <VitestContext />}
            {activeSection === 'workflow' && <VitestWorkflow />}
            {activeSection === 'performance' && <VitestPerformance />}
            {activeSection === 'debuggability' && <VitestDebuggability />}
            {activeSection === 'tradeoffs' && <VitestTradeoffs />}
        </ContentContainer>
    );
}

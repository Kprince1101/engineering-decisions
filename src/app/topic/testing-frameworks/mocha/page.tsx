'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { MochaContext } from '@/components/evaluation/context/MochaContext';
import { MochaWorkflow } from '@/components/evaluation/workflow/MochaWorkflow';
import { MochaPerformance } from '@/components/evaluation/performance/MochaPerformance';
import { MochaDebuggability } from '@/components/evaluation/debuggability/MochaDebuggability';
import { MochaTradeoffs } from '@/components/evaluation/tradeoffs/MochaTradeoffs';

export default function MochaPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <MochaContext />}
            {activeSection === 'workflow' && <MochaWorkflow />}
            {activeSection === 'performance' && <MochaPerformance />}
            {activeSection === 'debuggability' && <MochaDebuggability />}
            {activeSection === 'tradeoffs' && <MochaTradeoffs />}
        </ContentContainer>
    );
}

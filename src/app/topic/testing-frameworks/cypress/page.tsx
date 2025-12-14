'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { CypressContext } from '@/components/evaluation/context/CypressContext';
import { CypressWorkflow } from '@/components/evaluation/workflow/CypressWorkflow';
import { CypressPerformance } from '@/components/evaluation/performance/CypressPerformance';
import { CypressDebuggability } from '@/components/evaluation/debuggability/CypressDebuggability';
import { CypressTradeoffs } from '@/components/evaluation/tradeoffs/CypressTradeoffs';

export default function CypressPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <CypressContext />}
            {activeSection === 'workflow' && <CypressWorkflow />}
            {activeSection === 'performance' && <CypressPerformance />}
            {activeSection === 'debuggability' && <CypressDebuggability />}
            {activeSection === 'tradeoffs' && <CypressTradeoffs />}
        </ContentContainer>
    );
}

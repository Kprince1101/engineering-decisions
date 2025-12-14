'use client';

import { useSection } from '@/contexts/SectionContext';
import { ContentContainer } from '@/components/content';
import { PnpmContext } from '@/components/evaluation/context/PnpmContext';
import { PnpmComponents } from '@/components/evaluation/components/PnpmComponents';
import { PnpmPerformance } from '@/components/evaluation/performance/PnpmPerformance';
import { PnpmFeatures } from '@/components/evaluation/features/PnpmFeatures';
import { PnpmTradeoffs } from '@/components/evaluation/tradeoffs/PnpmTradeoffs';

export default function PnpmPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <PnpmContext />}
            {activeSection === 'workflow' && <PnpmComponents />}
            {activeSection === 'performance' && <PnpmPerformance />}
            {activeSection === 'features' && <PnpmFeatures />}
            {activeSection === 'tradeoffs' && <PnpmTradeoffs />}
        </ContentContainer>
    );
}

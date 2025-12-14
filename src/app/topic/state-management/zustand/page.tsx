'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { ZustandContext } from '@/components/evaluation/context/ZustandContext';
import { ZustandMentalModel } from '@/components/evaluation/mental-model/ZustandMentalModel';
import { ZustandScaleCharacteristics } from '@/components/evaluation/scale-characteristics/ZustandScaleCharacteristics';
import { ZustandDebuggingTooling } from '@/components/evaluation/debugging-tooling/ZustandDebuggingTooling';
import { ZustandTradeoffs } from '@/components/evaluation/tradeoffs/ZustandTradeoffs';

export default function ZustandPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ZustandContext />}
            {activeSection === 'mental-model' && <ZustandMentalModel />}
            {activeSection === 'scale-characteristics' && <ZustandScaleCharacteristics />}
            {activeSection === 'debugging-tooling' && <ZustandDebuggingTooling />}
            {activeSection === 'tradeoffs' && <ZustandTradeoffs />}
        </ContentContainer>
    );
}

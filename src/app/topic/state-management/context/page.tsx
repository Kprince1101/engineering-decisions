'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { ContextOnlyContext } from '@/components/evaluation/context/ContextOnlyContext';
import { ContextOnlyMentalModel } from '@/components/evaluation/mental-model/ContextOnlyMentalModel';
import { ContextOnlyScaleCharacteristics } from '@/components/evaluation/scale-characteristics/ContextOnlyScaleCharacteristics';
import { ContextOnlyDebuggingTooling } from '@/components/evaluation/debugging-tooling/ContextOnlyDebuggingTooling';
import { ContextOnlyTradeoffs } from '@/components/evaluation/tradeoffs/ContextOnlyTradeoffs';

export default function ContextPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ContextOnlyContext />}
            {activeSection === 'mental-model' && <ContextOnlyMentalModel />}
            {activeSection === 'scale-characteristics' && <ContextOnlyScaleCharacteristics />}
            {activeSection === 'debugging-tooling' && <ContextOnlyDebuggingTooling />}
            {activeSection === 'tradeoffs' && <ContextOnlyTradeoffs />}
        </ContentContainer>
    );
}

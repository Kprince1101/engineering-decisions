'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { SignalsContext } from '@/components/evaluation/context/SignalsContext';
import { SignalsMentalModel } from '@/components/evaluation/mental-model/SignalsMentalModel';
import { SignalsScaleCharacteristics } from '@/components/evaluation/scale-characteristics/SignalsScaleCharacteristics';
import { SignalsDebuggingTooling } from '@/components/evaluation/debugging-tooling/SignalsDebuggingTooling';
import { SignalsTradeoffs } from '@/components/evaluation/tradeoffs/SignalsTradeoffs';

export default function SignalsPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <SignalsContext />}
            {activeSection === 'mental-model' && <SignalsMentalModel />}
            {activeSection === 'scale-characteristics' && <SignalsScaleCharacteristics />}
            {activeSection === 'debugging-tooling' && <SignalsDebuggingTooling />}
            {activeSection === 'tradeoffs' && <SignalsTradeoffs />}
        </ContentContainer>
    );
}

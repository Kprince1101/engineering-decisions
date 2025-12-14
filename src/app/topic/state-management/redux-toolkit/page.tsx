'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { ReduxToolkitContext } from '@/components/evaluation/context/ReduxToolkitContext';
import { ReduxToolkitMentalModel } from '@/components/evaluation/mental-model/ReduxToolkitMentalModel';
import { ReduxToolkitScaleCharacteristics } from '@/components/evaluation/scale-characteristics/ReduxToolkitScaleCharacteristics';
import { ReduxToolkitDebuggingTooling } from '@/components/evaluation/debugging-tooling/ReduxToolkitDebuggingTooling';
import { ReduxToolkitTradeoffs } from '@/components/evaluation/tradeoffs/ReduxToolkitTradeoffs';

export default function ReduxToolkitPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ReduxToolkitContext />}
            {activeSection === 'mental-model' && <ReduxToolkitMentalModel />}
            {activeSection === 'scale-characteristics' && <ReduxToolkitScaleCharacteristics />}
            {activeSection === 'debugging-tooling' && <ReduxToolkitDebuggingTooling />}
            {activeSection === 'tradeoffs' && <ReduxToolkitTradeoffs />}
        </ContentContainer>
    );
}

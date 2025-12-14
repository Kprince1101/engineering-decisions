'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { JotaiContext } from '@/components/evaluation/context/JotaiContext';
import { JotaiMentalModel } from '@/components/evaluation/mental-model/JotaiMentalModel';
import { JotaiScaleCharacteristics } from '@/components/evaluation/scale-characteristics/JotaiScaleCharacteristics';
import { JotaiDebuggingTooling } from '@/components/evaluation/debugging-tooling/JotaiDebuggingTooling';
import { JotaiTradeoffs } from '@/components/evaluation/tradeoffs/JotaiTradeoffs';

export default function JotaiPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <JotaiContext />}
            {activeSection === 'mental-model' && <JotaiMentalModel />}
            {activeSection === 'scale-characteristics' && <JotaiScaleCharacteristics />}
            {activeSection === 'debugging-tooling' && <JotaiDebuggingTooling />}
            {activeSection === 'tradeoffs' && <JotaiTradeoffs />}
        </ContentContainer>
    );
}

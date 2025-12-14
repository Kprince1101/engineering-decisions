'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { RelayContext } from '@/components/evaluation/context/RelayContext';
import { RelayCachingModel } from '@/components/evaluation/caching-model/RelayCachingModel';
import { RelayMutationSemantics } from '@/components/evaluation/mutation-semantics/RelayMutationSemantics';
import { RelayErrorLoading } from '@/components/evaluation/error-loading/RelayErrorLoading';
import { RelayTradeoffs } from '@/components/evaluation/tradeoffs/RelayTradeoffs';

export default function RelayPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <RelayContext />}
            {activeSection === 'caching-model' && <RelayCachingModel />}
            {activeSection === 'mutation-semantics' && <RelayMutationSemantics />}
            {activeSection === 'error-loading' && <RelayErrorLoading />}
            {activeSection === 'tradeoffs' && <RelayTradeoffs />}
        </ContentContainer>
    );
}

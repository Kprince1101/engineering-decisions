'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { TRPCContext } from '@/components/evaluation/context/TRPCContext';
import { TRPCCachingModel } from '@/components/evaluation/caching-model/TRPCCachingModel';
import { TRPCMutationSemantics } from '@/components/evaluation/mutation-semantics/TRPCMutationSemantics';
import { TRPCErrorLoading } from '@/components/evaluation/error-loading/TRPCErrorLoading';
import { TRPCTradeoffs } from '@/components/evaluation/tradeoffs/TRPCTradeoffs';

export default function TRPCPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <TRPCContext />}
            {activeSection === 'caching-model' && <TRPCCachingModel />}
            {activeSection === 'mutation-semantics' && <TRPCMutationSemantics />}
            {activeSection === 'error-loading' && <TRPCErrorLoading />}
            {activeSection === 'tradeoffs' && <TRPCTradeoffs />}
        </ContentContainer>
    );
}

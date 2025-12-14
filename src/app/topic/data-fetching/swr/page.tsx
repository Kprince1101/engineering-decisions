'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { SWRContext } from '@/components/evaluation/context/SWRContext';
import { SWRCachingModel } from '@/components/evaluation/caching-model/SWRCachingModel';
import { SWRMutationSemantics } from '@/components/evaluation/mutation-semantics/SWRMutationSemantics';
import { SWRErrorLoading } from '@/components/evaluation/error-loading/SWRErrorLoading';
import { SWRTradeoffs } from '@/components/evaluation/tradeoffs/SWRTradeoffs';

export default function SWRPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <SWRContext />}
            {activeSection === 'caching-model' && <SWRCachingModel />}
            {activeSection === 'mutation-semantics' && <SWRMutationSemantics />}
            {activeSection === 'error-loading' && <SWRErrorLoading />}
            {activeSection === 'tradeoffs' && <SWRTradeoffs />}
        </ContentContainer>
    );
}

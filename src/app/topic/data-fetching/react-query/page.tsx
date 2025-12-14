'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { ReactQueryContext } from '@/components/evaluation/context/ReactQueryContext';
import { ReactQueryCachingModel } from '@/components/evaluation/caching-model/ReactQueryCachingModel';
import { ReactQueryMutationSemantics } from '@/components/evaluation/mutation-semantics/ReactQueryMutationSemantics';
import { ReactQueryErrorLoading } from '@/components/evaluation/error-loading/ReactQueryErrorLoading';
import { ReactQueryTradeoffs } from '@/components/evaluation/tradeoffs/ReactQueryTradeoffs';

export default function ReactQueryPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ReactQueryContext />}
            {activeSection === 'caching-model' && <ReactQueryCachingModel />}
            {activeSection === 'mutation-semantics' && <ReactQueryMutationSemantics />}
            {activeSection === 'error-loading' && <ReactQueryErrorLoading />}
            {activeSection === 'tradeoffs' && <ReactQueryTradeoffs />}
        </ContentContainer>
    );
}

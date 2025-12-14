'use client';

import { ContentContainer } from '@/components/content';
import { useSection } from '@/contexts/SectionContext';
import { ApolloContext } from '@/components/evaluation/context/ApolloContext';
import { ApolloCachingModel } from '@/components/evaluation/caching-model/ApolloCachingModel';
import { ApolloMutationSemantics } from '@/components/evaluation/mutation-semantics/ApolloMutationSemantics';
import { ApolloErrorLoading } from '@/components/evaluation/error-loading/ApolloErrorLoading';
import { ApolloTradeoffs } from '@/components/evaluation/tradeoffs/ApolloTradeoffs';

export default function ApolloPage() {
    const { activeSection } = useSection();

    return (
        <ContentContainer>
            {activeSection === 'context' && <ApolloContext />}
            {activeSection === 'caching-model' && <ApolloCachingModel />}
            {activeSection === 'mutation-semantics' && <ApolloMutationSemantics />}
            {activeSection === 'error-loading' && <ApolloErrorLoading />}
            {activeSection === 'tradeoffs' && <ApolloTradeoffs />}
        </ContentContainer>
    );
}

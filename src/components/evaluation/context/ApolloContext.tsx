import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ApolloContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Apollo: Context</h2>

                <p>
                    Apollo Client was built specifically for GraphQL, providing normalized caching, automatic query batching, and optimistic UI updates.
                    Released in 2016 alongside GraphQL's growing adoption, Apollo became the de facto GraphQL client for React applications—not because it was the only option, but because it handled the complexity that naive GraphQL usage exposed.
                </p>

                <p>
                    The library's architecture is tightly coupled to GraphQL's data model. Apollo normalizes responses into a flat cache keyed by typename and id, enabling automatic cache updates when mutations return updated entities.
                    This works brilliantly when your API matches Apollo's assumptions but creates friction when it doesn't.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        GraphQL shifted complexity from endpoints to clients—instead of multiple REST calls, you query a graph and the client must cache, normalize, and coordinate updates.
                        Apollo addresses this by providing a normalized cache that understands GraphQL's type system, automatically deduplicating entities and updating the UI when data changes.
                    </p>

                    <p>
                        The library also handles GraphQL-specific concerns: query batching, fragment composition, subscription management, and pagination patterns.
                        These features are valuable if you're committed to GraphQL but add overhead if your use case is simpler.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Apollo is designed for applications where GraphQL is the primary data layer and normalized caching matters.
                        If your backend returns overlapping entities across queries, Apollo's cache prevents duplicate rendering and keeps the UI consistent automatically.
                    </p>

                    <p>
                        The library assumes you control both client and server or your GraphQL API follows conventions Apollo expects (typenames, consistent IDs).
                        Teams using third-party GraphQL APIs or non-standard schemas may fight Apollo's normalization strategy.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Apollo emerged when GraphQL was new and teams were discovering its complexity. Early adopters built custom caching layers or used Relay (Facebook's opinionated GraphQL client).
                        Apollo provided a middle ground: powerful caching without Relay's strict requirements.
                    </p>

                    <p>
                        The library dominated the GraphQL ecosystem for years. However, as GraphQL matured, alternatives appeared—urql for simpler use cases, React Query with GraphQL support for flexibility.
                        Apollo remains powerful but its complexity is questioned more often as teams realize simpler tools may suffice.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

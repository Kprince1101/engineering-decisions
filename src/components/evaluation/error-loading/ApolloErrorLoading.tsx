import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ApolloErrorLoading() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Apollo: Error & Loading States</h2>

                <p>
                    Apollo provides <code>loading</code>, <code>error</code>, and <code>data</code> from <code>useQuery</code>. The <code>loading</code> field is true during initial fetch and false once data exists, even during background refetches.
                    For background fetch indicators, check <code>networkStatus</code> which provides granular states: refetch, poll, setVariables, etc. This detailed status helps differentiate types of loading but adds complexity.
                </p>

                <p>
                    Apollo's error handling is GraphQL-aware. GraphQL returns data and errors simultaneously (partial success scenarios), but Apollo's <code>error</code> field only represents network errors or complete query failures.
                    Partial errors (some fields resolve, others fail) appear in <code>data</code> but with null fields, requiring manual error checking even when <code>error</code> is undefined.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Loading state semantics">
                    <p>
                        <code>loading</code> is true for the first fetch only. Subsequent refetches (from variable changes, invalidation, or polling) don't set <code>loading</code> true—check <code>networkStatus === NetworkStatus.refetch</code> instead.
                        This distinction helps avoid showing spinners during background updates but requires understanding Apollo's NetworkStatus enum.
                    </p>

                    <p>
                        Fetch policies affect loading behavior. <code>cache-first</code> (default) returns cached data instantly with <code>loading: false</code> if data exists. <code>network-only</code> sets <code>loading: true</code> even with cached data.
                        The interaction between fetch policy, cache state, and loading field is subtle—teams often debug unexpected loading states due to policy mismatches.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Error handling patterns">
                    <p>
                        GraphQL errors come in two forms: network errors (Apollo can't reach the server) and GraphQL errors (server returned errors in the response).
                        Apollo surfaces both through the <code>error</code> field, but you must check <code>error.networkError</code> vs <code>error.graphQLErrors</code> to distinguish them. Handling these differently requires manual error inspection.
                    </p>

                    <p>
                        Error policies control error handling: <code>none</code> (treat any error as failure), <code>ignore</code> (ignore GraphQL errors), <code>all</code> (return both data and errors).
                        The <code>all</code> policy handles partial success but means you must check both <code>data</code> and <code>error</code> to determine success—a common source of bugs when teams assume error's absence means success.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Partial failures and fallbacks">
                    <p>
                        GraphQL's partial failure model is powerful but complex. A query can return data for some fields while others error (due to resolver failures or permissions).
                        Apollo returns this as successful <code>data</code> with null fields and an <code>error</code> object containing GraphQL errors. Handling this requires checking both <code>data</code> nullability and <code>error</code> contents.
                    </p>

                    <p>
                        Retry behavior is configurable but off by default for queries (enabled for mutations). This differs from SWR and React Query's automatic retries.
                        Teams wanting retry logic must configure <code>apolloClient.link</code> with retry middleware, increasing setup complexity compared to libraries with retry built-in.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

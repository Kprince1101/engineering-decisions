import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReactQueryMutationSemantics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Query: Mutation Semantics</h2>

                <p>
                    React Query separates reads (queries) from writes (mutations) explicitly. Mutations use <code>useMutation</code>, which doesn't cache responses or manage loading states globally like queries.
                    Instead, mutations provide lifecycle callbacks: <code>onMutate</code> (before request), <code>onSuccess</code> (after success), <code>onError</code> (on failure), and <code>onSettled</code> (always).
                    These callbacks coordinate cache updates, optimistic UI, and rollback logic.
                </p>

                <p>
                    The library doesn't automatically invalidate queries after mutations—you must explicitly call <code>queryClient.invalidateQueries()</code> or update cache manually.
                    This makes mutation effects explicit but requires discipline. Forget to invalidate a related query and the UI shows stale data until the next background refetch.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Optimistic updates">
                    <p>
                        Optimistic updates happen in <code>onMutate</code>. You manually update the cache with expected results before the mutation completes, making the UI feel instant.
                        React Query provides <code>queryClient.setQueryData()</code> for this. The pattern works but requires understanding cache structure and manually implementing rollback logic if the mutation fails.
                    </p>

                    <p>
                        The <code>onMutate</code> callback returns a context object passed to <code>onError</code> for rollback. You snapshot previous data, apply optimistic changes, then restore on failure.
                        This pattern is powerful but verbose—teams often write helper functions to reduce boilerplate for common optimistic update patterns.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Rollback and error handling">
                    <p>
                        Rollback is manual. If an optimistic mutation fails, your <code>onError</code> callback must restore previous cache state using the context from <code>onMutate</code>.
                        React Query doesn't automatically undo optimistic updates—you implement rollback logic per mutation. This flexibility allows custom error handling but means more code.
                    </p>

                    <p>
                        Concurrent mutations on the same resource can cause race conditions. React Query doesn't queue mutations or handle conflicts automatically.
                        If two mutations update the same entity simultaneously, the last one wins. Teams needing stronger consistency must implement queueing or locking manually.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Side-effect coordination">
                    <p>
                        Mutations can trigger multiple side effects: invalidate queries, update unrelated cache entries, trigger analytics, show notifications.
                        React Query's callback system coordinates these through <code>onSuccess</code> and <code>onSettled</code>, but sequencing complex workflows requires care.
                    </p>

                    <p>
                        Global mutation observers let you react to all mutations across the application. This is useful for cross-cutting concerns like error logging or analytics.
                        However, coupling too much logic to mutation lifecycle makes reasoning about data flow harder—balance centralized coordination with local mutation logic.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

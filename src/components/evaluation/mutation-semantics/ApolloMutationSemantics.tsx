import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ApolloMutationSemantics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Apollo: Mutation Semantics</h2>

                <p>
                    Apollo mutations are GraphQL operations with automatic cache integration. When a mutation returns an updated entity (with <code>__typename</code> and <code>id</code>), Apollo automatically updates the normalized cache and all queries referencing that entity rerender.
                    This works elegantly for update operations but requires manual cache manipulation for creates, deletes, or complex changes.
                </p>

                <p>
                    Mutations provide an <code>update</code> function for manual cache writes and <code>refetchQueries</code> for forcing query re-execution.
                    These mechanisms give control but add complexity—teams must decide between automatic normalization (when it works), manual cache updates (verbose but precise), or refetching (simple but slower).
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Optimistic updates">
                    <p>
                        Apollo's <code>optimisticResponse</code> provides type-safe optimistic updates. You specify the expected mutation response shape, and Apollo updates the cache immediately using this fake data.
                        When the real response arrives, Apollo replaces optimistic data with server data. This pattern is cleaner than manual cache manipulation but requires duplicating response shape.
                    </p>

                    <p>
                        For normalized entities, optimistic updates work automatically—Apollo merges optimistic data into the cache using the same normalization as real responses.
                        For list operations (adding to a connection), you combine <code>optimisticResponse</code> with the <code>update</code> function to manually insert items. This hybrid approach works but requires understanding both systems.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Rollback and error handling">
                    <p>
                        Apollo automatically rolls back optimistic updates if mutations fail. The optimistic data is removed, and the cache reverts to its pre-mutation state.
                        This automatic rollback reduces boilerplate compared to libraries requiring manual snapshot/restore logic.
                    </p>

                    <p>
                        However, if you used the <code>update</code> function for manual cache writes, rollback doesn't happen automatically—your changes persist even if the mutation fails.
                        This inconsistency means optimistic responses and manual updates have different error semantics, requiring careful handling to avoid leaving the cache in invalid states.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Side-effect coordination">
                    <p>
                        Apollo's <code>update</code> function receives the cache proxy and mutation result, letting you perform arbitrary cache manipulations: add items to lists, remove entities, update unrelated fields.
                        This imperative API is powerful but verbose—complex mutations result in substantial update function code that's hard to test.
                    </p>

                    <p>
                        Alternatively, <code>refetchQueries</code> lets you specify queries to re-run after mutations. This is simpler but causes network requests even when optimistic updates could avoid them.
                        Balancing update function complexity against refetch performance is a recurring architecture decision in Apollo applications.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

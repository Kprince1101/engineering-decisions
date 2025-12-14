import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ApolloCachingModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Apollo: Caching Model</h2>

                <p>
                    Apollo's cache is normalized—responses are broken into individual entities stored by typename and ID in a flat structure.
                    When a query returns <code>{'{'}'user': {'{'}'id': '1', 'name': 'Alice' {'}'} {'}'}</code>, Apollo stores this as <code>User:1</code> in the cache, not as query-specific data.
                    This normalization means updates to <code>User:1</code> anywhere automatically update all queries referencing that user.
                </p>

                <p>
                    The cache structure mirrors GraphQL's type system. Apollo expects objects to have <code>__typename</code> and a unique identifier (id or custom key).
                    When these conventions are followed, cache updates become automatic—mutate a user, and all UI displaying that user reflects changes without manual invalidation.
                    When conventions aren't followed, Apollo's cache becomes confusing and requires custom configuration.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Cache key strategy">
                    <p>
                        Cache keys are generated from <code>__typename:id</code> by default. Teams can customize this with <code>typePolicies</code> if IDs aren't globally unique or use composite keys.
                        The normalization strategy is powerful when data has natural identifiers but awkward for list queries, aggregations, or denormalized APIs.
                    </p>

                    <p>
                        Apollo caches queries separately from normalized entities. A query's results reference entity IDs, so entity updates propagate to all queries automatically.
                        This indirection is brilliant for consistency but makes debugging harder—understanding why a component rerendered requires tracing entity relationships through the cache.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Staleness and refetch triggers">
                    <p>
                        Apollo doesn't have an explicit staleness model like React Query. Cached data stays fresh until invalidated manually or refetched.
                        The library provides <code>fetchPolicy</code> options: cache-first (default), network-only, cache-and-network, etc. These policies control whether Apollo hits the cache, network, or both.
                    </p>

                    <p>
                        There's no automatic background revalidation. If you want fresh data, you refetch explicitly or use polling.
                        This puts more responsibility on developers to decide when data needs updating, unlike SWR/React Query's automatic strategies.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Cache invalidation">
                    <p>
                        Mutations returning updated entities automatically update the cache if the entity already exists. This works beautifully for updates but requires manual cache manipulation for creates/deletes.
                        The <code>update</code> function in mutations lets you modify cache entries directly, which is powerful but verbose and error-prone.
                    </p>

                    <p>
                        Apollo also provides <code>refetchQueries</code> to re-run queries after mutations. This is simpler than manual cache updates but causes network requests even when optimistic updates would suffice.
                        Choosing between manual cache updates and refetching is an architectural decision with performance implications.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

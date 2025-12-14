import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RelayCachingModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Relay: Caching Model</h2>

                <p>
                    Relay's cache is highly normalized and optimized for GraphQL. Every object with a global ID is stored once, and queries reference these canonical entities.
                    The normalization is more aggressive than Apollo's—Relay requires global object identification (node interface) and enforces this through conventions your GraphQL server must follow.
                </p>

                <p>
                    The cache is managed declaratively through fragments. Components don't query the cache directly; they declare data requirements via fragments, and Relay assembles queries, fetches data, and updates the cache automatically.
                    This indirection reduces manual cache management but requires thinking in Relay's fragment composition model.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Cache key strategy">
                    <p>
                        Relay uses global object identification—every entity has a globally unique ID accessible via the <code>id</code> field.
                        The cache stores objects by these IDs, enabling perfect deduplication and automatic updates. When a mutation returns an updated entity, Relay updates the cache and all subscribed components rerender.
                    </p>

                    <p>
                        This requires server-side coordination. Your GraphQL schema must implement the node interface and generate globally unique IDs.
                        If your API doesn't follow these conventions, Relay becomes significantly harder to use. The cache normalization assumptions are non-negotiable.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Staleness and refetch triggers">
                    <p>
                        Relay assumes cached data is valid until explicitly invalidated or refetched. There's no automatic background revalidation.
                        The framework provides subscription support for real-time updates and manual refetch controls, but you must decide when data needs refreshing.
                    </p>

                    <p>
                        Relay's compiler optimizes queries at build time, enabling aggressive caching without runtime overhead. Queries are hashed and cached with precise dependency tracking.
                        This compile-time approach trades flexibility for performance—changes to queries require rebuilds, but runtime cache lookups are extremely fast.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Cache invalidation">
                    <p>
                        Mutations declare their effects using updater functions. These functions receive the cache store and can add/remove connections, update fields, or invalidate records.
                        The API is imperative and powerful but requires understanding Relay's store structure. Simple updates (entity changes) work automatically; complex changes (list insertions) need manual logic.
                    </p>

                    <p>
                        Relay's connection protocol standardizes pagination and list updates. When you insert an item into a connection following Relay conventions, the framework handles cache updates automatically.
                        This works elegantly when your API follows the protocol but adds friction for non-standard list patterns.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

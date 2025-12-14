import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SWRCachingModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">SWR: Caching Model</h2>

                <p>
                    SWR's cache is keyed by the first argument to <code>useSWR</code>—typically a URL string or key identifying the resource.
                    The cache is global across the application, enabling automatic request deduplication and data sharing between components without prop drilling.
                    This simplicity is SWR's strength: one key, one cached value, minimal conceptual overhead.
                </p>

                <p>
                    The stale-while-revalidate pattern is baked into every request. SWR returns cached data immediately (even if stale), then fetches fresh data in the background.
                    When the fetch completes, the cache updates and components rerender. This optimizes perceived performance—users see instant responses while data freshens behind the scenes.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Cache key strategy">
                    <p>
                        SWR keys are simple strings or serializable values. The library serializes keys to JSON strings internally for cache lookups.
                        This makes reasoning about cache behavior straightforward: same key, same cached data. Dynamic parameters are typically encoded in the key string directly.
                    </p>

                    <p>
                        The simplicity limits expressiveness compared to React Query's hierarchical keys. Invalidating related queries requires manually tracking key relationships.
                        SWR's mutation API provides some helpers, but complex invalidation patterns feel more manual than React Query's partial matching.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Staleness and refetch triggers">
                    <p>
                        SWR revalidates on focus, reconnect, and mount by default. These triggers keep data fresh without configuration but can cause frequent refetching in applications with many active tabs or network transitions.
                        The library provides global configuration to tune revalidation behavior, but defaults assume you always want fresh data.
                    </p>

                    <p>
                        Unlike React Query's explicit staleness, SWR treats all cached data as potentially stale. There's no separate fresh/stale distinction—cache data is displayed while revalidation happens.
                        This simplifies the mental model but offers less control over when network requests occur.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Cache invalidation">
                    <p>
                        SWR's <code>mutate</code> function invalidates cache entries by key. You can trigger revalidation, update cached data directly, or clear cache entries.
                        The API is simpler than React Query but less powerful—no partial key matching or predicate-based invalidation without building it yourself.
                    </p>

                    <p>
                        Global mutation functions let you invalidate keys without accessing the hook directly. This is useful for server actions or outside React components.
                        However, coordinating complex invalidation patterns (like "invalidate all user-related queries") requires maintaining key conventions manually.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

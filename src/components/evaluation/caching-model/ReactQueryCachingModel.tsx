import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReactQueryCachingModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Query: Caching Model</h2>

                <p>
                    React Query's cache is organized around query keys—arrays that uniquely identify a query and its parameters.
                    The cache is a flat map where keys like <code>['users', {'{'}'status': 'active'{'}'}]</code> point to cached data, metadata, and state.
                    This structure enables precise invalidation: you can target specific queries, partial key matches, or invalidate entire query families.
                </p>

                <p>
                    The library tracks staleness explicitly—cached data can be fresh, stale, or inactive. Fresh data is served instantly without refetching. Stale data is served but triggers a background refetch.
                    Inactive data (no components using it) stays cached but can be garbage collected after a configurable time. This staleness model separates "what data to show" from "when to refetch."
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Cache key strategy">
                    <p>
                        Query keys are hierarchical arrays, allowing partial matching for invalidation. A key like <code>['posts', 'list', {'{'}'filter': 'published' {'}'}]</code> can be invalidated exactly, or all posts queries can be invalidated with <code>['posts']</code>.
                        This pattern scales well but requires discipline—inconsistent key structures make invalidation unpredictable.
                    </p>

                    <p>
                        Teams often struggle with key granularity. Too granular and you invalidate too narrowly, leaving stale data elsewhere. Too broad and you refetch unnecessarily.
                        React Query doesn't prescribe key conventions; you build patterns that match your data relationships.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Staleness and refetch triggers">
                    <p>
                        React Query refetches stale queries automatically on several triggers: window focus, component mount, network reconnection, and configurable intervals.
                        Each trigger can be enabled/disabled per query. This automation keeps data fresh without manual intervention but can cause unexpected network traffic if configured too aggressively.
                    </p>

                    <p>
                        The <code>staleTime</code> option controls how long data stays fresh before automatic refetching kicks in. Setting this correctly requires understanding your data's volatility.
                        High-frequency data (live dashboards) needs low staleTime. Static data (configuration) can use infinite staleness and manual invalidation only.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Cache invalidation">
                    <p>
                        Invalidation is explicit—you call <code>queryClient.invalidateQueries()</code> after mutations to mark data as stale.
                        The library doesn't automatically know which queries a mutation affects; you encode those relationships manually.
                        This is flexible but error-prone—forget to invalidate a query and the UI shows stale data until the next automatic refetch.
                    </p>

                    <p>
                        React Query provides partial matching, predicate functions, and exact key matching for invalidation.
                        Complex applications need invalidation strategies that balance precision (only invalidate affected data) with safety (don't miss related queries).
                        Getting this right is an architecture task, not just implementation detail.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReactQueryTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Query: Tradeoffs</h2>

                <p>
                    React Query trades simplicity for power. The library handles common async state patterns elegantly but requires learning its caching model, query key conventions, and invalidation strategies.
                    Teams benefit from not building these primitives themselves, but adopting React Query means adopting its mental models for cache management, staleness, and refetching.
                </p>

                <p>
                    The framework is unopinionated about data fetching—you bring your own fetch function—but opinionated about cache behavior.
                    This flexibility means React Query works with REST, GraphQL, or any async source, but you implement API-specific concerns yourself.
                    For complex backends, this can mean substantial adapter code to bridge API responses to React Query's expectations.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When React Query fits">
                    <p>
                        React Query excels for applications with substantial client-side data requirements, frequent refetching, and complex invalidation patterns.
                        If your app shows dashboards, real-time data, or requires optimistic updates across many components, React Query's caching and coordination justify its complexity.
                    </p>

                    <p>
                        The library works best when teams can establish query key conventions and invalidation strategies early.
                        With strong patterns, React Query eliminates boilerplate and prevents bugs. Without patterns, query key inconsistencies and missed invalidations create subtle correctness issues.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When React Query struggles">
                    <p>
                        Simple apps fetching data once per page load gain little from React Query's complexity. If you're not leveraging automatic refetching, optimistic updates, or cross-component cache sharing, the library is overhead.
                        Server-rendering frameworks like Next.js with server components reduce client-side data fetching needs, making React Query less valuable.
                    </p>

                    <p>
                        Teams without experience in async state libraries face learning curves around query keys, cache invalidation, and staleness configuration.
                        The mental model shift from "fetch in useEffect" to "declare query needs" takes time. Small teams may find this investment doesn't pay off for their use case.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        React Query requires architectural discipline. Someone must establish query key conventions, invalidation patterns, and staleness policies.
                        Without this, teams create inconsistent patterns leading to bugs that are hard to debug (why isn't this refetching? why is this query stale?).
                    </p>

                    <p>
                        The library has excellent documentation and community support. Most React developers encounter React Query in some form, making knowledge transfer easier than niche tools.
                        However, debugging cache behavior still requires understanding React Query internals—the DevTools help but complex invalidation scenarios remain challenging.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

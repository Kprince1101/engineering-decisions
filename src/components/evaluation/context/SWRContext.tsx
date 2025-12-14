import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SWRContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">SWR: Context</h2>

                <p>
                    SWR (stale-while-revalidate) was created by Vercel in 2019, around the same time as React Query, with a similar recognition that server state needs different primitives than local state.
                    The library takes its name from the HTTP cache invalidation strategy: show stale data immediately while fetching fresh data in the background.
                </p>

                <p>
                    SWR's philosophy emphasizes simplicity and a smaller API surface than React Query. The core hook—useSWR—provides caching, revalidation, and loading states with minimal configuration.
                    This minimalism appeals to teams wanting async state management without learning extensive APIs or dealing with configuration decisions.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        SWR addresses the same fundamental problem as React Query: coordinating async data fetching across components without boilerplate.
                        The library's approach is optimized for the common case—simple data fetching with sensible defaults—rather than extensive customization.
                    </p>

                    <p>
                        The stale-while-revalidate pattern means users see data instantly (from cache) while the library fetches updates in the background.
                        This optimizes perceived performance at the cost of occasionally showing stale data, a tradeoff SWR makes explicitly.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        SWR targets applications with straightforward data fetching needs: REST APIs, simple caching requirements, and standard revalidation patterns.
                        It's particularly well-suited for Next.js applications given Vercel's stewardship and integration focus.
                    </p>

                    <p>
                        The library doesn't provide as many configuration options as React Query. This is intentional—SWR optimizes for the 80% case where defaults work.
                        Teams needing fine-grained control over cache behavior, custom retry logic, or complex invalidation may find SWR limiting.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        SWR and React Query emerged simultaneously, both recognizing the async state problem. SWR's design reflects Vercel's product philosophy: opinionated defaults, minimal API, tight Next.js integration.
                        This made SWR the natural choice for many Next.js projects despite React Query's broader feature set.
                    </p>

                    <p>
                        The competition between SWR and React Query has been productive—both libraries influenced each other's development and validated the async state library pattern.
                        Today, they coexist with different design philosophies serving different team preferences.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

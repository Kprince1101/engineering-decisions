import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReactQueryContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Query: Context</h2>

                <p>
                    React Query (now TanStack Query) emerged in 2019 as a response to the reality that fetching data is fundamentally different from managing local state.
                    Most applications were using Redux or useState to store server data, treating async responses as if they were client-side values.
                    This mental model mismatch created problems: stale data, manual cache invalidation, loading state boilerplate, and no coordination between duplicate requests.
                </p>

                <p>
                    The library's core insight is that server state has different characteristics than UI state—it's asynchronous, potentially stale, owned remotely, and often shared across components.
                    React Query provides primitives specifically for this class of state: automatic background refetching, cache invalidation, request deduplication, and optimistic updates.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Before async state libraries, teams wrote substantial boilerplate to handle loading states, error boundaries, race conditions, and cache invalidation.
                        Each feature requiring server data replicated similar patterns: track loading/error/success states, prevent duplicate requests, decide when to refetch, handle stale data.
                    </p>

                    <p>
                        React Query centralizes these concerns. Instead of each component managing its own fetch lifecycle, the library coordinates requests globally, caches responses by query keys, and provides declarative controls for staleness and refetching.
                        This shifts complexity from application code into a library that handles edge cases teams typically get wrong.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        React Query is designed for REST APIs, GraphQL over HTTP, or any async data source where the client doesn't own the data.
                        It assumes data can become stale, that requests may fail, and that multiple components might need the same data simultaneously.
                    </p>

                    <p>
                        The library is framework-agnostic (despite the name)—TanStack Query supports React, Vue, Solid, and Svelte.
                        It's not opinionated about your API layer; you bring your own fetch function. React Query handles caching, synchronization, and lifecycle.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        React Query was released when Redux dominated state management, but teams were misusing it for server data.
                        The paradigm shift—treating server state separately from UI state—resonated immediately. Within two years, React Query became the de facto standard for data fetching in React applications.
                    </p>

                    <p>
                        The library's success influenced the ecosystem: Next.js server components, SWR's design, and even Redux Toolkit Query borrowed concepts.
                        The idea that "server state is different" is now widely accepted, but React Query established the pattern.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

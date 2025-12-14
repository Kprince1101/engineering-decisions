import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SWRErrorLoading() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">SWR: Error & Loading States</h2>

                <p>
                    SWR provides <code>data</code>, <code>error</code>, and <code>isValidating</code> from the hook. The loading state is implicit—if there's no data and no error, the query is loading.
                    This simplicity reduces state checks but means you derive loading state from absence rather than explicit flags, which some teams find less clear than React Query's explicit <code>isLoading</code>.
                </p>

                <p>
                    The stale-while-revalidate pattern means <code>data</code> is often present even during refetches. SWR returns cached data immediately, so components rarely see loading states after initial fetch.
                    This optimizes perceived performance but means you must check <code>isValidating</code> separately if you want to show refresh indicators during background revalidation.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Loading state semantics">
                    <p>
                        The pattern <code>!data && !error</code> represents initial loading. Once data exists, SWR keeps returning it during revalidation, so "loading" only happens on first fetch.
                        This matches user expectations for most UIs—show something immediately, update in background—but requires different mental models than "loading means request in progress."
                    </p>

                    <p>
                        <code>isValidating</code> is true whenever SWR is fetching, regardless of whether cached data exists. Use this for subtle loading indicators (progress bars, spinners in corners) that don't block the UI.
                        The separation of "no data" (initial load) from "fetching updates" (background revalidation) matches user expectations better than a single loading boolean.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Error handling patterns">
                    <p>
                        SWR retries failed requests automatically with exponential backoff. The retry count and delay are configurable globally or per-hook.
                        Errors appear in the <code>error</code> field, and SWR continues retrying in the background until success or maximum retries are exhausted.
                    </p>

                    <p>
                        Error boundaries work naturally with SWR—throw in the component when <code>error</code> exists, and React's error boundaries catch it.
                        This pattern works but means error handling happens outside the component rendering the data, which can be surprising. Explicit error checking is more common than relying on error boundaries.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Partial failures and fallbacks">
                    <p>
                        SWR's <code>fallbackData</code> provides initial data before the first fetch completes. Unlike React Query's placeholder data, fallback data is used as cache until real data loads.
                        This works well for SSR scenarios where server-rendered data seeds the cache, avoiding hydration mismatches.
                    </p>

                    <p>
                        For partial failures, SWR handles each key independently. Multiple <code>useSWR</code> calls in a component each track their own errors, with no built-in coordination.
                        If you need to handle scenarios like "all queries must succeed or show error," you implement that logic manually by checking all error states before rendering.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

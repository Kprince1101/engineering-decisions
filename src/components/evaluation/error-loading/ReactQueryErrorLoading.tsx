import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReactQueryErrorLoading() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Query: Error & Loading States</h2>

                <p>
                    React Query tracks loading and error states per query. A query can be <code>isLoading</code> (first fetch), <code>isFetching</code> (any fetch including background refetch), <code>isError</code>, or <code>isSuccess</code>.
                    These states aren't mutually exclusive—a query can be successful but fetching in the background, enabling stale-while-revalidate patterns without losing the previous data.
                </p>

                <p>
                    The distinction between <code>isLoading</code> and <code>isFetching</code> matters for UI decisions. Show a spinner on initial load (<code>isLoading</code>) but subtle loading indicators for background refetches (<code>isFetching</code>).
                    This granularity helps build responsive UIs but requires understanding which state to check for which scenario.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Loading state semantics">
                    <p>
                        <code>isLoading</code> is true only when there's no cached data and a fetch is in progress. Once data exists (even stale data), <code>isLoading</code> becomes false even if background refetches happen.
                        This means "loading" represents "no data to show" rather than "request in progress." For many UIs, this is the right mental model.
                    </p>

                    <p>
                        Background refetches are signaled by <code>isFetching</code> without clearing existing data. The query remains in <code>isSuccess</code> state while fetching, so components can show stale data with a subtle refresh indicator.
                        This enables optimistic UIs where users interact with cached data while fresh data loads—a better experience than blocking on every refetch.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Error handling patterns">
                    <p>
                        Errors set <code>isError</code> and populate the <code>error</code> field. By default, React Query retries failed queries three times with exponential backoff before surfacing errors.
                        This retry logic is configurable per query, but defaults assume transient network failures are common and worth retrying automatically.
                    </p>

                    <p>
                        Error states persist until the query succeeds or is invalidated. A failed query stays in error state even if components unmount and remount—the cache remembers failure.
                        This prevents retry storms (component remount shouldn't trigger new requests for known-failing queries) but means you must handle error reset explicitly when appropriate.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Partial failures and fallbacks">
                    <p>
                        React Query provides <code>placeholderData</code> and <code>initialData</code> for fallback content. Placeholder data shows while loading but isn't cached. Initial data seeds the cache but requires you to determine if it's fresh.
                        These patterns help avoid loading spinners when reasonable fallbacks exist.
                    </p>

                    <p>
                        For partial failures (some queries succeed, others fail), React Query handles each query independently. There's no built-in concept of query dependencies or rollback if related queries fail.
                        Coordinating multiple queries and handling partial failure scenarios requires application-level logic, typically through query key patterns and manual error checking.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TRPCCachingModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">tRPC: Caching Model</h2>

                <p>
                    tRPC itself doesn't provide caching—it's a type-safe RPC layer. For caching, tRPC integrates with React Query (TanStack Query), exposing typed hooks that wrap React Query's caching behavior.
                    This means tRPC inherits React Query's cache architecture: query keys, staleness tracking, and automatic refetching, but with end-to-end type safety from server to client.
                </p>

                <p>
                    The integration is seamless for TypeScript users. Instead of manually defining query keys and fetch functions, tRPC generates these from procedure definitions.
                    Type safety extends to invalidation—you can't accidentally invalidate non-existent procedures because TypeScript prevents it at compile time.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Cache key strategy">
                    <p>
                        tRPC generates query keys automatically from procedure paths and input parameters.
                        A call like <code>trpc.user.getById.useQuery({'{'}'id': '1' {'}'})</code> creates a cache key combining the procedure path and parameters, similar to React Query's key arrays but type-checked.
                    </p>

                    <p>
                        Invalidation uses procedure paths instead of raw strings. You invalidate <code>trpc.user.getById</code> or all user procedures with <code>trpc.user</code>, and TypeScript ensures the procedures exist.
                        This reduces the class of errors where you invalidate keys that don't match any actual queries.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Staleness and refetch triggers">
                    <p>
                        tRPC queries behave exactly like React Query because they are React Query under the hood. Staleness, refetch triggers, and background updates work identically.
                        The difference is type safety—you can't pass invalid inputs or call non-existent procedures without compilation errors.
                    </p>

                    <p>
                        The same React Query configuration options apply: <code>staleTime</code>, <code>cacheTime</code>, <code>refetchOnWindowFocus</code>, etc.
                        tRPC doesn't add opinions here; it delegates caching strategy to React Query while providing type-safe procedure calls.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Cache invalidation">
                    <p>
                        Invalidation uses tRPC's typed utilities: <code>utils.user.getById.invalidate()</code> or <code>utils.user.invalidate()</code> to invalidate all user procedures.
                        The type system ensures you only invalidate procedures that exist with correct parameter types.
                    </p>

                    <p>
                        This type safety is tRPC's main caching advantage over raw React Query. You can refactor server procedures, and invalidation call sites fail to compile if they reference renamed or removed procedures.
                        This makes large-scale refactoring safer—the type system catches broken cache invalidations at build time.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TRPCErrorLoading() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">tRPC: Error & Loading States</h2>

                <p>
                    tRPC inherits React Query's loading and error states since it uses React Query under the hood. You get <code>isLoading</code>, <code>isFetching</code>, <code>isError</code>, and <code>isSuccess</code> with the same semantics.
                    The difference is type safety—errors are typed based on server procedure definitions, and loading states are associated with type-safe queries.
                </p>

                <p>
                    Because tRPC is just React Query with types, all React Query loading patterns apply: distinguish initial load from background refetch, show stale data while revalidating, handle loading boundaries appropriately.
                    The added value is TypeScript preventing runtime type errors and ensuring error handling code matches server error types.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Loading state semantics">
                    <p>
                        Loading semantics match React Query exactly. <code>isLoading</code> represents "no data to show," <code>isFetching</code> represents "request in progress."
                        The pattern works the same; the types ensure you handle these states correctly. You can't access <code>data</code> when <code>isLoading</code> without TypeScript errors—the type system enforces checking before access.
                    </p>

                    <p>
                        Suspense support follows React Query's implementation. tRPC queries can suspend during initial fetch if you enable Suspense mode, integrating with React's concurrent features.
                        This is opt-in—most teams use the traditional hook API with explicit loading checks rather than Suspense boundaries.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Error handling patterns">
                    <p>
                        Server procedures can throw typed errors using tRPC's error helpers. Client code receives these typed errors in <code>onError</code> callbacks or through the <code>error</code> field.
                        TypeScript knows the error shape based on server definitions—if your procedure throws <code>TRPCError</code> with a custom data payload, client error handling has compile-time access to that structure.
                    </p>

                    <p>
                        This type-safe error handling eliminates runtime type checking. Instead of <code>if (error?.code === 'UNAUTHORIZED')</code>, you get TypeScript-validated error discrimination.
                        Custom error types on the server flow to client code, enabling precise error handling without maintaining separate client/server error documentation.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Partial failures and fallbacks">
                    <p>
                        tRPC procedures are function calls—they either succeed with a typed result or fail with a typed error. There's no GraphQL-style partial success where some fields resolve and others don't.
                        This simplifies error handling (it's binary: success or failure) but means you design APIs differently than GraphQL where partial data is common.
                    </p>

                    <p>
                        Fallback data follows React Query patterns: <code>placeholderData</code> for temporary placeholders, <code>initialData</code> for seeding cache. Both are type-checked against procedure output types.
                        SSR support uses initial data from server-side procedure calls, with types ensuring server and client data shapes match automatically.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

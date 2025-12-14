import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TRPCMutationSemantics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">tRPC: Mutation Semantics</h2>

                <p>
                    tRPC mutations are typed procedures on the server exposed as hooks on the client. The mutation API wraps React Query's <code>useMutation</code>, inheriting its callback system and lifecycle management.
                    The difference is end-to-end type safety—mutation inputs, outputs, and errors are typed from server definition to client usage without code generation.
                </p>

                <p>
                    Mutation semantics are identical to React Query because tRPC uses React Query internally. You get <code>onMutate</code>, <code>onSuccess</code>, <code>onError</code>, and <code>onSettled</code> callbacks with full TypeScript support.
                    The type system ensures you can't pass invalid inputs or mishandle response shapes, reducing runtime errors from API mismatches.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Optimistic updates">
                    <p>
                        Optimistic updates follow React Query patterns—use <code>onMutate</code> to update cache with expected values before the mutation completes.
                        tRPC's utilities provide typed cache update functions: <code>utils.user.getById.setData()</code> to update specific queries with type-checked data.
                    </p>

                    <p>
                        The type safety extends to optimistic data. You can't set cache values that don't match the procedure's output type.
                        This catches mismatches at compile time—if your optimistic update doesn't match server response shape, TypeScript fails before runtime.
                        This reduces a common class of bugs where optimistic and real data have different structures.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Rollback and error handling">
                    <p>
                        Rollback is manual like React Query—snapshot previous data in <code>onMutate</code>, apply optimistic changes, restore on error.
                        tRPC doesn't add automatic rollback but provides typed cache access for snapshot/restore operations. The pattern is the same; the types prevent errors.
                    </p>

                    <p>
                        Error types from server procedures flow to the client. If your mutation throws a custom error type on the server, the client <code>onError</code> callback receives that exact type.
                        This enables type-safe error handling—you can discriminate error types and handle them appropriately without runtime type checking.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Side-effect coordination">
                    <p>
                        tRPC mutations coordinate side effects through React Query's callback system. Invalidate related queries, trigger analytics, show notifications—all in <code>onSuccess</code> or <code>onSettled</code>.
                        The utilities provide typed invalidation: <code>utils.user.invalidate()</code> invalidates all user procedures, and TypeScript ensures the procedure exists.
                    </p>

                    <p>
                        Server-side coordination happens in the procedure itself. Unlike GraphQL where mutations return shaped responses, tRPC procedures are functions—you can trigger side effects (send emails, update databases) in the procedure logic.
                        This keeps side effects server-side where they belong, with the client only handling cache invalidation and UI updates.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

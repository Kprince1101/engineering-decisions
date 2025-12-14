import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SWRMutationSemantics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">SWR: Mutation Semantics</h2>

                <p>
                    SWR handles mutations through the <code>mutate</code> function, which can update cache directly, trigger revalidation, or both.
                    The API is simpler than React Query's mutation hooks—you call <code>mutate(key, newData, options)</code> to update cache and optionally refetch.
                    This simplicity means less configuration but also less structure for complex mutation workflows.
                </p>

                <p>
                    SWR recently added <code>useSWRMutation</code> for more structured mutation handling similar to React Query. This hook provides loading states, error handling, and callbacks but is less mature than React Query's mutation system.
                    Many SWR users still use the original <code>mutate</code> function for simpler cases.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Optimistic updates">
                    <p>
                        Optimistic updates use <code>mutate(key, newData, false)</code>, where the third argument disables revalidation.
                        You update cache immediately, perform the mutation, then call <code>mutate</code> again to revalidate. This pattern works but requires manual coordination between cache updates and network requests.
                    </p>

                    <p>
                        SWR's <code>mutate</code> can accept an async function that receives current data and returns new data. This simplifies some optimistic update patterns but doesn't provide automatic rollback—you handle errors manually.
                        The API is flexible but less guided than React Query's structured callbacks.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Rollback and error handling">
                    <p>
                        Rollback is your responsibility. If an optimistic mutation fails, you must restore previous cache state manually.
                        SWR doesn't track previous values automatically—you snapshot data before mutating and restore on error. This is similar to React Query but without built-in context passing.
                    </p>

                    <p>
                        Error handling for mutations happens through try/catch around mutation functions or error states in <code>useSWRMutation</code>.
                        The library doesn't provide retry logic for mutations by default—you implement retry behavior if needed. This keeps SWR simple but pushes complexity to application code.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Side-effect coordination">
                    <p>
                        SWR mutations are less structured than React Query's, making side-effect coordination more ad-hoc.
                        You call <code>mutate</code> to update cache, trigger revalidation manually, and coordinate related updates through application logic rather than library primitives.
                    </p>

                    <p>
                        For simple cases, this flexibility is freeing—no callback boilerplate, just direct cache updates. For complex workflows involving multiple mutations, related query invalidation, and error handling, the lack of structure means more custom code.
                        SWR optimizes for simple cases at the cost of requiring more manual coordination for complex ones.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

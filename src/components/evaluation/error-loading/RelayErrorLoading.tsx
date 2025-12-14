import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RelayErrorLoading() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Relay: Error & Loading States</h2>

                <p>
                    Relay's loading states are tied to Suspense. Queries suspend during initial fetch, showing Suspense fallbacks automatically.
                    This removes explicit loading checks from components—React handles loading states declaratively through Suspense boundaries.
                    The pattern is cleaner than imperative loading flags but requires understanding Suspense behavior and concurrency patterns.
                </p>

                <p>
                    Refetches and pagination don't suspend by default—Relay provides <code>useTransition</code> integration for showing pending states during updates.
                    This separation of initial load (Suspense) from updates (transitions) matches React's concurrent rendering model but adds mental overhead compared to simple loading booleans.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Loading state semantics">
                    <p>
                        Relay assumes Suspense for loading. Components don't check <code>if (loading)</code>—they render assuming data exists, and Suspense catches promise throws during initial fetch.
                        This works elegantly once understood but requires all parent components to have Suspense boundaries, otherwise unhandled promise throws crash the app.
                    </p>

                    <p>
                        For refetches, use <code>useTransition</code> to show pending states without suspending. The pattern is <code>startTransition(() =&gt; refetch())</code>, and React provides <code>isPending</code> during the transition.
                        This integrates with React's concurrent features but means loading patterns differ between initial load (Suspense) and updates (transitions)—two mental models for one concept.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Error handling patterns">
                    <p>
                        Relay uses Error Boundaries for error handling. Failed queries throw errors that Error Boundaries catch, showing fallback UI declaratively.
                        This removes error checking from components but requires Error Boundary setup and fallback UI design. Errors propagate up the tree until caught, which can be surprising if boundaries aren't placed intentionally.
                    </p>

                    <p>
                        GraphQL errors (partial failures) require explicit handling. Relay provides <code>@required</code> directive to bubble field errors up, but default behavior returns null for failed fields without throwing.
                        Handling partial failures means checking field nullability even though GraphQL schema might mark fields non-null—the runtime and schema guarantees diverge.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Partial failures and fallbacks">
                    <p>
                        Relay's compiler validates data access, preventing accessing fields that might not exist. Nullable fields require explicit null checks, enforced by TypeScript.
                        This catches partial failure handling at compile time—you can't render <code>user.name</code> without checking if <code>user</code> is null first. This safety prevents runtime errors but increases null-checking boilerplate.
                    </p>

                    <p>
                        Preloaded queries avoid waterfalls by starting fetches before component render. This pattern requires restructuring data loading—instead of fetching in components, you fetch in route transitions and pass references to components.
                        This optimizes performance but changes how you architect data loading compared to fetch-in-component patterns other libraries encourage.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

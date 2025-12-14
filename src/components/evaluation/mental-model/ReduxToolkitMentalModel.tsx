import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReduxToolkitMentalModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Redux Toolkit: Mental Model</h2>

                <p>
                    Redux Toolkit preserves Redux's core mental model: application state lives in a single store, updates happen through dispatched actions, and reducers specify how state changes in response to actions.
                    This architecture is explicit—you can trace any state change from action dispatch through reducer to new state. The tradeoff is ceremony: every state change requires defining actions and reducer logic.
                </p>

                <p>
                    RTK reduces Redux boilerplate but maintains its conceptual model. You still think in terms of slices (portions of state), actions (what happened), and reducers (how state responds).
                    The library automates action creator generation and immutable updates (via Immer), but the fundamental pattern remains: declare what happened, specify how state changes.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="How developers reason about state">
                    <p>
                        Redux developers think about state changes as events. To update state, you describe what happened (action), not how to update it (imperative mutation).
                        This declarative approach makes state changes auditable and testable—every action is a record of what occurred, and reducers are pure functions you can test in isolation.
                    </p>

                    <p>
                        The pattern requires discipline. Developers must resist imperative shortcuts (mutating state directly) and follow Redux patterns (actions → reducers → new state).
                        For teams that embrace this model, it provides clarity. For teams that don't, it feels like unnecessary indirection.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Explicitness vs implicit coupling">
                    <p>
                        Redux is maximally explicit. Actions are defined, reducers are separate functions, state shape is clear from slice definitions.
                        This explicitness helps large teams coordinate—it's obvious what actions exist and how they affect state.
                        The cost is verbosity: simple updates require multiple files or function definitions.
                    </p>

                    <p>
                        RTK's createSlice reduces this cost by colocating reducers and action creators, but it doesn't eliminate the conceptual requirement to think in actions and reducers.
                        You're still writing more code than with simpler libraries like Zustand, but you're getting structure and auditability in return.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Learning curve and conceptual overhead">
                    <p>
                        Redux Toolkit is easier to learn than classic Redux but still has conceptual weight. New developers must understand: stores, slices, actions, reducers, dispatch, selectors, and middleware.
                        This is substantial compared to simpler alternatives (Zustand: create a store, call a hook).
                    </p>

                    <p>
                        The learning curve pays off in larger applications where Redux's structure prevents chaos. In smaller applications, the structure is overhead—you're following patterns for problems you don't have yet.
                        The decision is whether you value explicit architecture or minimal API surface.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

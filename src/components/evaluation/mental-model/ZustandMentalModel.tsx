import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ZustandMentalModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Zustand: Mental Model</h2>

                <p>
                    Zustand's mental model is simpler than Redux: create a store with state and functions that update it, consume the store with a hook.
                    There are no actions, reducers, or dispatch—just functions that mutate state (via Immer under the hood) or return new state.
                    This approach feels more like plain JavaScript than Redux's formalized patterns.
                </p>

                <p>
                    The simplicity is intentional. Zustand trusts developers to structure state updates reasonably without enforcing a specific pattern.
                    You can write imperative updates, declarative updates, or mix both. This flexibility reduces ceremony but shifts responsibility to teams to establish conventions.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="How developers reason about state">
                    <p>
                        Zustand developers think about state as a module with functions. Want to update state? Call a function in the store.
                        There's no conceptual layer between intent and execution—you directly invoke functions that change state.
                    </p>

                    <p>
                        This directness makes Zustand easy to understand for newcomers but can lead to inconsistent patterns.
                        Without actions and reducers enforcing structure, teams must decide: do updates happen inside the store, outside, or both? How are side effects coordinated? These questions have answers in Redux; in Zustand, teams answer them.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Explicitness vs implicit coupling">
                    <p>
                        Zustand is less explicit than Redux. Functions in the store can do anything—update local state, call APIs, dispatch other updates.
                        This flexibility is powerful but makes it harder to audit what a store does without reading its implementation.
                    </p>

                    <p>
                        In Redux, actions are a clear inventory of what can happen. In Zustand, you must read the store's exported functions.
                        For small teams or codebases, this is fine. For large teams, the lack of formalized contracts can create confusion—what functions should exist? What do they do?
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Learning curve and conceptual overhead">
                    <p>
                        Zustand's learning curve is minimal. The entire API fits in a few examples: create a store, use a hook, optionally add middleware.
                        Developers familiar with React hooks understand Zustand immediately—it feels like useState but shared.
                    </p>

                    <p>
                        The conceptual overhead comes later, when teams need conventions. How do you organize large stores? When should you split stores? How do you test updates?
                        Zustand doesn't answer these questions, which is freeing for experienced teams but can lead to inconsistent patterns in less disciplined codebases.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

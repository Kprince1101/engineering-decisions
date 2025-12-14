import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SignalsMentalModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Signals: Mental Model</h2>

                <p>
                    Signals introduce a mental model foreign to React: reactive values that automatically notify dependents of changes without triggering component rerenders.
                    In standard React, state changes trigger reconciliation and rerenders. With signals, state changes update only the specific computations or DOM nodes that depend on them.
                </p>

                <p>
                    This model is familiar to developers from Vue, Solid, or Svelte where reactivity is built-in. In React, signals feel like an escape hatch—a way to bypass React's rendering model for performance-critical updates.
                    The mental shift is significant: you're thinking in automatic dependencies and reactive graphs, not React's top-down render flow.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="How developers reason about state">
                    <p>
                        Signals developers think in terms of reactive primitives. A signal is a value; a computed signal derives from other signals; effects run when signals change.
                        The system tracks dependencies automatically—if computation A reads signal B, it reruns when B changes.
                    </p>

                    <p>
                        This automatic dependency tracking eliminates manual optimization but requires understanding what creates dependencies.
                        Reading a signal inside JSX creates a subscription; reading it outside creates a different subscription behavior. These nuances matter and aren't obvious from React experience.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Explicitness vs implicit coupling">
                    <p>
                        Signals are implicitly coupled through reads. When you access a signal's value inside a component or computation, you've created a dependency.
                        This is powerful—no manual subscriptions—but makes data flow harder to trace than explicit patterns like Redux actions.
                    </p>

                    <p>
                        In React, rerenders are explicit—you know setState causes a rerender. With signals, updates propagate automatically through the dependency graph.
                        This magic is efficient but harder to debug when something unexpectedly updates or doesn't update.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Learning curve and conceptual overhead">
                    <p>
                        Signals require learning reactive programming concepts: signals, computed values, effects, batching.
                        For developers from Vue or Solid, this is familiar. For React developers, it's a new mental model that conflicts with React's "everything is a render" philosophy.
                    </p>

                    <p>
                        The conceptual overhead increases when mixing signals with React state. Now you have two state systems with different update semantics, different debugging approaches, and different integration with React features.
                        Knowing when to use signals vs React state becomes a judgment call that teams must develop intuition for.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

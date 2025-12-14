import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SignalsTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Signals: Tradeoffs</h2>

                <p>
                    Signals trade React's rendering model for performance. Fine-grained reactivity enables update precision that React state can't match—only the specific DOM nodes that depend on a signal update, not entire components.
                    This performance comes at the cost of leaving React's ecosystem—signals don't integrate with DevTools, Suspense, or error boundaries the way React state does.
                </p>

                <p>
                    In frameworks designed for signals (Solid, Vue, Preact), this tradeoff makes sense—the entire architecture assumes signals. In React, signals are an optimization layer grafted onto a framework built around different assumptions.
                    This creates a dual state system where signals and React state coexist awkwardly.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where signals shine">
                    <p>
                        Signals excel in performance-critical scenarios: real-time dashboards, animations, charts with high-frequency updates.
                        When React's standard rendering becomes a bottleneck despite optimization (useMemo, React.memo), signals bypass the bottleneck by skipping React's reconciliation entirely.
                    </p>

                    <p>
                        The automatic dependency tracking eliminates manual optimization. You don't manage subscriptions, memoization, or selector performance—signals handle reactivity automatically.
                        For applications where performance optimization is ongoing work, signals simplify this dimension.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where signals struggle">
                    <p>
                        Signals struggle in typical React applications where standard rendering is fast enough. Most UIs don't need fine-grained reactivity—React's performance is adequate, and signals are unnecessary complexity.
                        Without proven performance issues, signals are premature optimization.
                    </p>

                    <p>
                        Signals don't integrate with React's ecosystem. DevTools don't show signal state, Suspense doesn't coordinate with signals, error boundaries don't catch signal errors the same way.
                        You're working around React rather than with it, which creates friction as React evolves.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Signals require learning reactive programming concepts that conflict with React's mental model. Developers must understand when to use signals vs React state, how signals integrate with React lifecycles, and how to debug the dual state system.
                        This is manageable for senior teams but creates confusion for less experienced developers.
                    </p>

                    <p>
                        The React core team hasn't endorsed signals, creating uncertainty. If React introduces competing primitives or changes in ways that break signals integration, teams using signals face migration costs.
                        Adopting signals means accepting this uncertainty.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to introduce signals">
                    <p>
                        Don't introduce signals without proven performance problems. React's standard rendering handles most UIs well—signals are optimization for specific bottlenecks, not general-purpose state management.
                        Profile first, optimize with React patterns (memo, useMemo), and consider signals only when React optimization isn't sufficient.
                    </p>

                    <p>
                        Avoid signals if team familiarity with React is limited. Signals add conceptual overhead on top of React's already substantial learning curve.
                        Teams still learning React fundamentals shouldn't add signals complexity—master React first, then evaluate if signals are necessary.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

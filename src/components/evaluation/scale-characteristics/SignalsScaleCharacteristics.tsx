import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SignalsScaleCharacteristics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Signals: Scale Characteristics</h2>

                <p>
                    Signals scale performance-wise extremely well—fine-grained reactivity means large UIs with high-frequency updates don't degrade.
                    However, signals scale poorly maintainability-wise in React codebases. You're mixing two state systems (React state and signals), two debugging models, and two mental models.
                    This duality creates coordination costs that grow with application complexity.
                </p>

                <p>
                    In frameworks built around signals (Solid, Preact), the entire architecture assumes signals. In React, signals are an optimization layer on top of React's model.
                    This layering means signals in React applications are always an exception, not the norm, which creates cognitive load at scale.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Small app vs large team behavior">
                    <p>
                        In small applications, signals are unnecessary unless you have proven performance issues.
                        React's standard rendering is fast enough for most UIs, and signals add complexity without corresponding value.
                    </p>

                    <p>
                        In large teams, signals require discipline. Developers must know when to use signals (high-frequency updates, performance-critical paths) vs React state (everything else).
                        Without clear guidelines, teams create inconsistent patterns—some state in signals, some in React state, with unclear boundaries.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Refactor cost">
                    <p>
                        Refactoring between React state and signals is non-trivial. The APIs are different, the semantics are different, and the integration points are different.
                        Converting a component from React state to signals (or vice versa) means rewriting the component's state logic, not just changing imports.
                    </p>

                    <p>
                        This refactor cost creates lock-in. Once you commit to signals for a piece of state, changing back is expensive.
                        Teams must be confident in the decision before adopting signals for specific features.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Accidental complexity">
                    <p>
                        Signals in React introduce accidental complexity through dual state systems. Developers must understand React state, signals, and how they interoperate.
                        Effects that read signals behave differently than effects that read React state. Components must explicitly opt into signal reactivity.
                    </p>

                    <p>
                        Debugging becomes harder. React DevTools don't show signal state. Signal updates don't appear in React's profiler.
                        You need separate mental models and tools for understanding what's happening, which is overhead compared to using React state exclusively.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Long-term maintainability">
                    <p>
                        Signals' long-term maintainability in React is uncertain. The React team hasn't endorsed signals and may introduce competing primitives (like useMutableSource or similar).
                        Adopting signals means betting on @preact/signals-react's continued compatibility with React's evolution.
                    </p>

                    <p>
                        In frameworks designed for signals, maintainability is strong—signals are the primary state model, tooling supports them, patterns are well-established.
                        In React, signals are always a secondary pattern, which limits how well they age as React itself evolves.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

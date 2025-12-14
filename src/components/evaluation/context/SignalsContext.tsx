import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SignalsContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Signals: Context</h2>

                <p>
                    Signals are a reactive primitive for state management that has gained prominence in frontend frameworks like Preact, Solid, and Vue.
                    In the React ecosystem, signals appeared through libraries like @preact/signals-react (2023), bringing fine-grained reactivity to React without requiring React's reconciliation for every state change.
                </p>

                <p>
                    The core idea: signals are reactive values that notify subscribers of changes automatically. Unlike React state (which triggers reconciliation and rerenders), signals update only the specific DOM nodes or computations that depend on them.
                    This approach bypasses React's rendering model entirely for state updates, enabling performance characteristics React state can't match.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Signals address React's fundamental tradeoff: React rerenders components when state changes, even if only a small part of the output needs updating.
                        While React is fast enough for most UIs, applications with high-frequency updates (charts, animations, real-time data) can hit performance limits.
                    </p>

                    <p>
                        Signals solve this by making reactivity granular and automatic. A signal value can be read in JSX, and when it changes, only that specific DOM text node updates—no component rerender, no reconciliation, no vdom diff.
                        This precision eliminates entire classes of React performance optimizations (useMemo, React.memo, useCallback).
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Framework context">
                    <p>
                        Signals are mainstream in Solid, Vue 3, and Preact, where they're the primary state model.
                        In React, signals are controversial—they bypass React's rendering model, which means they don't integrate with React DevTools, Suspense boundaries, or error boundaries in the same way.
                    </p>

                    <p>
                        The React core team has explored signals-like primitives (useMutableSource, useSyncExternalStore) but hasn't adopted signals fully.
                        Using signals in React means accepting that part of your state lives outside React's mental model, which has debuggability and integration tradeoffs.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Current React signals landscape">
                    <p>
                        @preact/signals-react is the primary signals implementation for React, maintained by the Preact team.
                        It works by integrating with React's rendering cycle while keeping signal updates outside React's state system.
                        This hybrid approach works but feels foreign to developers expecting React state semantics.
                    </p>

                    <p>
                        Signals in React are best viewed as an advanced optimization technique for specific performance bottlenecks, not a replacement for React state.
                        Most React applications don't need signals—they're overhead unless you have proven performance issues with React's standard rendering model.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

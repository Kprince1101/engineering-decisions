import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ContextOnlyDebuggingTooling() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Context: Debugging & Tooling</h2>

                <p>
                    Context debugging relies on React DevTools, which show context values in the component tree.
                    You can inspect what contexts a component consumes and their current values. This works for simple debugging but lacks the history, time-travel, and action logging that state libraries provide.
                </p>

                <p>
                    For complex state in Context, debugging becomes manual. There's no built-in way to see how context values changed over time or what triggered updates.
                    You add logging to useReducer, instrument Context providers, or use React Profiler to identify rerender causes—all more manual than Redux DevTools.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Time-travel and inspection">
                    <p>
                        Context provides no time-travel debugging. State changes aren't logged or reversible without custom implementation.
                        If you need to debug how context values evolved, you manually log state transitions or build custom DevTools integrations.
                    </p>

                    <p>
                        React DevTools Profiler shows component rerenders and can help identify performance issues, but it doesn't explain why context values changed.
                        You're debugging at the component level, not the state level, which is less direct than Redux's action-based debugging.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="DevTools availability">
                    <p>
                        React DevTools show context values but not state change history. You see current state, not how you got there.
                        For applications with complex context state, understanding bugs requires stepping through code or adding manual logging.
                    </p>

                    <p>
                        There's no Context-specific DevTools extension like Redux DevTools. React DevTools serve Context adequately for simple cases but lack features for complex state debugging.
                        Teams needing advanced debugging often migrate to state libraries for tooling reasons alone.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Production observability">
                    <p>
                        Context provides no built-in production observability. State changes happen via setState or dispatch, which aren't automatically logged.
                        You must instrument Context providers manually to track updates, which is tedious and error-prone.
                    </p>

                    <p>
                        For production debugging, Context's limitations become apparent. Without action logs or state history, reproducing bugs requires user reports, log correlation, and guesswork.
                        State libraries provide this observability out of the box, which is why teams debugging production issues often migrate away from Context.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

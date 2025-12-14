import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ContextOnlyTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Context: Tradeoffs</h2>

                <p>
                    Context trades performance and debugging capabilities for simplicity and zero dependencies. For simple state distribution (theme, locale, auth), Context is perfect—minimal code, React-native patterns, no libraries.
                    The tradeoff appears when applications scale: Context rerenders become expensive, debugging becomes manual, and teams start implementing custom solutions that state libraries provide.
                </p>

                <p>
                    The decision isn't "Context vs state libraries" but "when does Context stop being simple?" If you're optimizing Context with split providers, useMemo wrappers, or custom subscription patterns, you're rebuilding state management.
                    At that point, adopting a library eliminates custom complexity.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where Context shines">
                    <p>
                        Context excels for infrequent state changes shared across components. Theme providers, authentication state, routing context—these are Context's sweet spot.
                        The state changes rarely, rerender cost doesn't matter, and Context's simplicity beats library complexity.
                    </p>

                    <p>
                        Context is ideal when you want zero dependencies. No library to install, update, or migrate when React changes.
                        For libraries, component frameworks, or applications with strict dependency policies, Context provides state distribution without external code.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Context struggles">
                    <p>
                        Context struggles with frequent updates or large consumer counts. Every context change rerenders all consumers, even if they only use part of the value.
                        This rerender behavior forces performance optimization patterns (splitting contexts, memoization) that complicate the simplicity Context offers.
                    </p>

                    <p>
                        Context lacks debugging tools. No time-travel, no action logs, no state history. For applications where understanding state changes is critical, Context's limitations become blocking.
                        Teams end up adding custom logging, which is work state libraries handle automatically.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Context has minimal learning curve—it's React-native, and most developers understand it immediately. This makes onboarding trivial and reduces dependency risk.
                        However, advanced Context patterns (optimization, custom hooks, subscription patterns) aren't obvious and teams rediscover them through performance issues.
                    </p>

                    <p>
                        Context creates implicit coupling that state libraries make explicit. Components deep in the tree might depend on context values without obvious indicators.
                        This coupling is manageable in small codebases but creates maintenance challenges in large applications where understanding dependencies matters.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to introduce state libraries">
                    <p>
                        Don't introduce state libraries if Context handles your needs without performance issues or complex state logic.
                        The simplicity of Context (no dependencies, familiar patterns) is valuable—don't replace it prematurely.
                    </p>

                    <p>
                        Avoid state libraries in small applications or prototypes. The overhead of Redux, Zustand, or Jotai doesn't pay off when state is simple and teams are small.
                        Start with Context, and migrate when you encounter specific problems state libraries solve (performance, debugging, complex coordination).
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

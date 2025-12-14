import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SignalsDebuggingTooling() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Signals: Debugging & Tooling</h2>

                <p>
                    Signals debugging in React is challenging because signals exist outside React's state system.
                    React DevTools don't show signal state, and signal updates don't appear in React's component profiler.
                    You need separate tools and mental models for debugging signals vs React state, which creates friction.
                </p>

                <p>
                    In frameworks designed for signals (Solid, Preact), debugging tools are built around signals and work well.
                    In React, signals are grafted onto the framework, so tooling is less integrated. This is a fundamental limitation of using signals in React—they're always second-class citizens.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Time-travel and inspection">
                    <p>
                        Signals don't provide time-travel debugging in React. Signal updates happen outside React's reconciliation, so there's no history to replay.
                        You can log signal changes manually, but there's no built-in tooling for stepping through signal update history.
                    </p>

                    <p>
                        Inspecting signal state requires custom logging or using framework-specific tools (Preact DevTools for @preact/signals).
                        This is less convenient than Redux DevTools' integrated experience—you're cobbling together debugging approaches rather than using unified tooling.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="DevTools availability">
                    <p>
                        React DevTools don't understand signals. Components using signals still show React state and props, but signal values are invisible.
                        To inspect signals, you add logging, use console debugging, or rely on custom tooling that's less mature than React DevTools.
                    </p>

                    <p>
                        For applications mixing React state and signals, debugging requires two workflows: React DevTools for React state, custom logging for signals.
                        This dual approach is overhead compared to libraries that integrate fully with React DevTools.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Production observability">
                    <p>
                        Signals updates are harder to monitor in production because they don't go through React's rendering system.
                        You can add logging to signal mutations, but there's no centralized point to instrument—signals update directly, bypassing the mechanisms React monitoring tools hook into.
                    </p>

                    <p>
                        For teams needing production observability, signals require custom instrumentation. Every signal update must be logged manually, or you build a layer that wraps signals with monitoring.
                        This is more work than monitoring React state or Redux actions, where the framework provides instrumentation points.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

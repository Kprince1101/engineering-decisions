import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ZustandDebuggingTooling() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Zustand: Debugging & Tooling</h2>

                <p>
                    Zustand provides basic debugging through middleware and browser DevTools integration.
                    The library supports Redux DevTools via middleware, giving access to time-travel debugging and state inspection, but the integration feels secondary—Zustand wasn't designed around DevTools the way Redux was.
                </p>

                <p>
                    Without the DevTools middleware, debugging Zustand is manual. You log state updates, use React DevTools to inspect components, or add custom logging.
                    This is workable but less powerful than Redux's built-in observability.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Time-travel and inspection">
                    <p>
                        Zustand can integrate with Redux DevTools through middleware, enabling time-travel debugging.
                        However, because Zustand doesn't formalize state changes as actions, the DevTools show generic "setState" events rather than descriptive action names.
                        You can add action names manually, but this is optional convention, not enforced structure.
                    </p>

                    <p>
                        The time-travel capability is useful but less powerful than Redux. Without action names describing what changed, the DevTools timeline is less informative.
                        You see state diffs but not the semantic meaning of changes (e.g., "user logged in" vs "state changed").
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="DevTools availability">
                    <p>
                        Zustand's DevTools middleware is opt-in. You wrap your store with devtools() middleware, and state becomes inspectable in the Redux DevTools extension.
                        This works but requires setup—it's not automatic like Redux.
                    </p>

                    <p>
                        The middleware provides state snapshots and diffs, but not action logs (since Zustand doesn't have actions).
                        For teams used to Redux DevTools' action-centric view, Zustand's state-centric view is less detailed.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Production observability">
                    <p>
                        Zustand's lack of formalized actions makes production observability harder. There's no built-in concept of "events" to log.
                        You can add logging inside store functions, but this is manual—every update function must be instrumented.
                    </p>

                    <p>
                        For applications needing detailed production monitoring, you'll build custom middleware to track state changes.
                        This is achievable (Zustand's middleware system is flexible) but requires more work than Redux's action-based logging.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

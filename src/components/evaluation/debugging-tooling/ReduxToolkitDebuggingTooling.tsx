import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReduxToolkitDebuggingTooling() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Redux Toolkit: Debugging & Tooling</h2>

                <p>
                    Redux DevTools are industry-leading. Time-travel debugging, action replay, state diff visualization—these capabilities make Redux state transparent in ways other libraries can't match.
                    You can inspect every state change, rewind to previous states, and export/import state for bug reproduction. This tooling is Redux's strongest advantage over alternatives.
                </p>

                <p>
                    The DevTools work because Redux's architecture is explicitly designed for it. Every state change is an action; every action is logged; state history is preserved.
                    This isn't an afterthought—Redux was built assuming developer tools would inspect the state machine, and the tooling reflects this.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Time-travel and inspection">
                    <p>
                        Redux DevTools let you scrub through application state history like a video timeline.
                        Click on any action, see the state before and after, understand exactly what changed. For debugging complex state interactions, this is invaluable.
                    </p>

                    <p>
                        Time-travel isn't just a demo feature—it's practical for reproducing bugs. Users can export their Redux state when they encounter an issue, and developers can import it to see exactly what happened.
                        No other state library provides this level of reproducibility out of the box.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="DevTools availability">
                    <p>
                        Redux DevTools are a browser extension that integrates with Redux applications automatically.
                        No configuration needed in most cases—install the extension, and Redux state becomes inspectable.
                        The tooling is mature, well-documented, and works consistently across Redux versions.
                    </p>

                    <p>
                        The extension provides action logs, state diffs, a state chart, and performance monitoring.
                        For teams debugging production issues or optimizing performance, these tools surface information that would otherwise require manual logging.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Production observability">
                    <p>
                        Redux's action-based architecture enables production observability. You can log actions to analytics, send errors with action context, or replay user sessions by recording actions.
                        This is harder with libraries that don't formalize state changes as discrete events.
                    </p>

                    <p>
                        Redux middleware makes production monitoring straightforward. Add middleware that logs actions to your monitoring service, and you have complete visibility into user behavior and state changes.
                        This capability is why Redux remains popular in applications where debugging production issues is critical.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

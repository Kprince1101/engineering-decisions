import { SectionBlock, SubsectionBlock } from '@/components/content';

export function PlaywrightDebuggability() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Playwright: Debuggability</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Error output">
                    <p>
                        Playwright's error messages include the action that failed, the selector used, and the page state at failure.
                        Screenshots and traces are automatically captured on failure in headed mode.
                    </p>

                    <p>
                        When assertions fail, the output shows what was expected and what was found in the DOM.
                        Selector-based failures indicate whether the element was not found, not visible, or not in the expected state.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Stack traces">
                    <p>
                        Stack traces point to the test code that triggered the failure.
                        Because Playwright controls browsers remotely, traces don't include browser internals—only the test automation code.
                    </p>

                    <p>
                        The trace viewer feature provides a timeline of all actions leading to failure,
                        with screenshots, network activity, and console logs. This visual debugging is far superior to text-based stack traces.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Failure diagnostics">
                    <p>
                        Playwright's headed mode (--headed) shows the browser during test execution,
                        making it obvious when tests are interacting with the wrong elements or waiting unnecessarily.
                    </p>

                    <p>
                        The Playwright Inspector (--debug flag) provides a step-through debugger for browser automation,
                        showing each action as it executes. This makes debugging flaky tests significantly easier than traditional console logging.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Tooling integration">
                    <p>
                        Playwright integrates with VS Code through an official extension that provides test running, debugging, and trace viewing.
                        The integration is excellent—breakpoints work reliably, and the UI shows browser state during debugging.
                    </p>

                    <p>
                        The trace viewer can be opened in a browser to inspect failed CI runs.
                        Traces include full context (DOM snapshots, network logs, console output), making remote debugging practical.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

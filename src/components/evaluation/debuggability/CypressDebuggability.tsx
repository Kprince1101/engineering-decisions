import { SectionBlock, SubsectionBlock } from '@/components/content';

export function CypressDebuggability() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Cypress: Debuggability</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Error output">
                    <p>
                        Cypress error messages indicate which command failed and why.
                        The Test Runner highlights the failing command in red and shows the application state when failure occurred.
                    </p>

                    <p>
                        Assertion failures show expected vs actual values.
                        Timeout errors indicate what Cypress was waiting for, though understanding why the condition wasn't met requires inspecting application state.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Stack traces">
                    <p>
                        Stack traces in Cypress point to test code, not browser internals.
                        The framework runs tests in the browser, so traces are limited to the test execution context.
                    </p>

                    <p>
                        The Test Runner's command log provides context that stack traces alone can't—it shows every command that executed before failure,
                        with the ability to hover over each command to see application state at that point.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Failure diagnostics">
                    <p>
                        Cypress's time-travel debugging is its standout feature.
                        Clicking on any command in the Test Runner shows the DOM state, network requests, and application state at that moment.
                    </p>

                    <p>
                        This visual debugging eliminates most need for console.log() or debugger statements.
                        Developers can inspect exactly what happened without rerunning tests, making failure diagnosis faster.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Tooling integration">
                    <p>
                        Cypress provides a browser-based Test Runner that is the primary debugging interface.
                        Browser DevTools can be opened to inspect application state, but the Cypress API runs in an iframe which complicates direct DOM manipulation.
                    </p>

                    <p>
                        The .pause() command stops test execution and allows interactive debugging in the browser.
                        Combined with time-travel, this provides a debugging experience that traditional end-to-end frameworks cannot match.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

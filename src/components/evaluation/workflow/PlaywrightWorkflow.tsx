import { SectionBlock, SubsectionBlock } from '@/components/content';

export function PlaywrightWorkflow() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Playwright: Workflow</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Test organization">
                    <p>
                        Playwright uses test() and describe() blocks similar to Jest, organized in .spec.ts files.
                        The framework includes a test generator that records browser interactions and generates test code.
                    </p>

                    <p>
                        Tests can be organized by feature, by user flow, or by page—the framework doesn't enforce structure.
                        Each test runs in an isolated browser context, preventing state leakage between tests.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch mode">
                    <p>
                        Playwright includes headed mode (--headed) that shows the browser while tests run,
                        and UI mode (--ui) that provides a graphical test runner with time-travel debugging.
                    </p>

                    <p>
                        Watch mode reruns tests on file changes. Because tests control real browsers,
                        watch mode feedback is slower than unit test frameworks but still practical for iterative development.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Network and state control">
                    <p>
                        Playwright provides route interception for stubbing network requests, modifying responses, and blocking resources.
                        This enables testing error states and edge cases without backend dependencies.
                    </p>

                    <p>
                        The framework includes storage state management for preserving authentication across tests,
                        reducing the need to log in before each test that requires authentication.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Configuration">
                    <p>
                        Playwright configuration lives in playwright.config.ts and defines browsers, base URL,
                        test patterns, and parallelization settings.
                    </p>

                    <p>
                        Projects can define multiple configurations for different test types (e.g., Chromium vs WebKit).
                        The framework handles browser installation automatically, reducing environment setup friction.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

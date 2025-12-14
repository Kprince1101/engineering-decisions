import { SectionBlock, SubsectionBlock } from '@/components/content';

export function CypressContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Cypress: Context</h2>

                <p>
                    Cypress is an end-to-end testing framework released in 2017 that reimagined browser testing by running directly inside the browser
                    rather than controlling it remotely. This architectural choice enabled faster test execution and a superior debugging experience
                    but introduced limitations around cross-browser support and test isolation.
                </p>

                <p>
                    The framework was designed specifically for modern JavaScript applications and their asynchronous behaviors.
                    It handles waiting, retries, and network stubbing automatically, trading control for convenience in ways that reduce test flakiness
                    but can obscure what tests are actually doing.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Intended scope">
                    <p>
                        Cypress targets end-to-end testing and component testing for web applications.
                        It is optimized for testing user interfaces and user flows, not for unit testing JavaScript logic.
                    </p>

                    <p>
                        The framework assumes a single-page application architecture and provides powerful tools for stubbing network requests,
                        manipulating application state, and interacting with the DOM. These capabilities come with constraints—tests must run in a browser,
                        and certain testing patterns (like cross-origin navigation) require workarounds.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem position">
                    <p>
                        Cypress was the first modern alternative to Selenium that gained widespread adoption.
                        Its developer experience—particularly the time-travel debugging and automatic waiting—set new expectations for end-to-end testing tools.
                    </p>

                    <p>
                        The framework originally supported only Chrome, which limited its use for cross-browser testing.
                        Support for Firefox and Edge was added later, but WebKit (Safari) support remains experimental.
                        This gap has allowed Playwright to compete on multi-browser coverage.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Cypress was founded in 2014 and released publicly in 2017 as a venture-backed startup aiming to improve developer experience in testing.
                        The company's business model initially relied on a paid dashboard service for test recording and parallelization.
                    </p>

                    <p>
                        The project's corporate backing accelerated development and marketing but also created tension between open-source contributions
                        and commercial features. In 2024, Cypress was acquired, which introduced governance uncertainty for some teams.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

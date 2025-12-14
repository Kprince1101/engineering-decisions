import { SectionBlock, SubsectionBlock } from '@/components/content';

export function PlaywrightContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Playwright: Context</h2>

                <p>
                    Playwright is a browser automation framework developed by Microsoft, released in 2020.
                    It was built by former Chrome DevTools team members who also created Puppeteer,
                    addressing limitations they encountered with cross-browser testing and modern web application patterns.
                </p>

                <p>
                    Unlike Jest or Vitest, Playwright controls real browser instances (Chromium, Firefox, WebKit) to test applications
                    as users experience them. This makes it an end-to-end testing tool rather than a unit testing framework—a fundamentally different scope.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Intended scope">
                    <p>
                        Playwright is designed for end-to-end testing, component testing, and browser automation.
                        It excels at testing user flows, cross-browser compatibility, and scenarios that require real browser APIs.
                    </p>

                    <p>
                        The framework includes built-in test runners, assertions, and browser management,
                        making it a complete solution for browser-based testing. It is not suitable for unit testing JavaScript logic
                        that doesn't require browser interaction.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem position">
                    <p>
                        Playwright competes primarily with Cypress and Selenium WebDriver in the end-to-end testing space.
                        Its multi-browser support (Chromium, Firefox, WebKit) and modern API design have made it a strong alternative
                        to Cypress's single-browser focus and Selenium's older architecture.
                    </p>

                    <p>
                        The framework is backed by Microsoft and receives active development, which provides stability but also means
                        its roadmap is influenced by Microsoft's priorities and enterprise use cases.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Playwright was created in 2020 by developers who built Puppeteer at Google.
                        They left to join Microsoft and built Playwright with lessons learned from Puppeteer's single-browser limitation
                        and the challenges of testing modern SPAs.
                    </p>

                    <p>
                        The timing coincided with increased demand for reliable end-to-end testing as frontend applications became more complex
                        and teams sought alternatives to Selenium's flakiness and Cypress's architectural constraints.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function PlaywrightTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Playwright: Tradeoffs</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where it shines">
                    <p>
                        Playwright's multi-browser support (Chromium, Firefox, WebKit) enables genuine cross-browser testing without managing separate tools. 
                        The browser binaries are bundled and version-locked, eliminating environment setup variability.
                    </p>

                    <p>
                        Auto-waiting and retry logic reduce test flakiness compared to Selenium. 
                        The framework understands modern web app patterns (AJAX, SPA navigation) and handles them automatically.
                    </p>

                    <p>
                        The trace viewer and debugging tools are exceptional—they make diagnosing failures in CI or remote environments practical. 
                        Being able to inspect full test context after the fact significantly accelerates debugging.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where it causes friction">
                    <p>
                        The bundled browsers consume significant disk space (hundreds of MB per browser). 
                        In Docker environments or CI with limited storage, this becomes a constraint.
                    </p>

                    <p>
                        End-to-end tests are inherently slower than unit tests—even with parallelization, full test suites take minutes. 
                        This encourages selective test running but can create blind spots if tests aren't run frequently enough.
                    </p>

                    <p>
                        The framework's power introduces complexity—understanding browser contexts, pages, and frames requires mental model overhead 
                        beyond what simpler test frameworks require.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team fit considerations">
                    <p>
                        Teams building web applications that must support multiple browsers benefit directly from Playwright's coverage. 
                        The ability to catch browser-specific bugs before production justifies the infrastructure investment.
                    </p>

                    <p>
                        Teams with dedicated QA engineers or test automation specialists will appreciate Playwright's advanced features—network interception, 
                        storage state, mobile emulation. These capabilities enable sophisticated testing strategies.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to choose it">
                    <p>
                        Avoid Playwright for unit testing or testing JavaScript logic that doesn't require browser APIs. 
                        Jest or Vitest are faster and more appropriate for that scope.
                    </p>

                    <p>
                        If your application only needs to support Chromium and you value Cypress's time-travel debugging, 
                        Cypress may provide a better developer experience despite the single-browser limitation.
                    </p>

                    <p>
                        For teams without CI infrastructure to support parallelized browser testing, 
                        the investment required to run Playwright effectively may exceed its value. Component testing with Jest or Vitest might be more practical.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

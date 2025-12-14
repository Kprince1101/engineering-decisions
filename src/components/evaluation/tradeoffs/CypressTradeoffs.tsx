import { SectionBlock, SubsectionBlock } from '@/components/content';

export function CypressTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Cypress: Tradeoffs</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where it shines">
                    <p>
                        Cypress's developer experience is unmatched for end-to-end testing—the time-travel debugging and Test Runner UI 
                        make writing and debugging tests significantly more pleasant than traditional browser automation.
                    </p>

                    <p>
                        The automatic waiting and retry logic handle asynchronous behavior well, reducing flaky tests compared to Selenium-based approaches. 
                        Tests read clearly because explicit waits are rarely needed.
                    </p>

                    <p>
                        Network stubbing with cy.intercept() provides fine-grained control over application/backend communication, 
                        enabling testing of error states and edge cases that would be difficult to trigger with a real backend.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where it causes friction">
                    <p>
                        The single-browser limitation (primarily Chrome, with Firefox/Edge support feeling secondary) prevents true cross-browser testing. 
                        Teams requiring Safari/WebKit coverage must use additional tools.
                    </p>

                    <p>
                        Parallelization requires Cypress Dashboard (commercial service) or custom orchestration. 
                        The serial execution model means large test suites run slowly without paying for infrastructure or building workarounds.
                    </p>

                    <p>
                        Cypress's iframe-based architecture creates constraints around cross-origin navigation and multiple domains. 
                        Workarounds exist but add complexity for flows that span authentication providers or subdomains.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team fit considerations">
                    <p>
                        Teams prioritizing developer experience and willing to accept single-browser testing will benefit most from Cypress. 
                        The superior debugging tools measurably reduce time spent on test maintenance.
                    </p>

                    <p>
                        Teams with existing Cypress Dashboard subscriptions gain parallelization and test analytics that enhance the value proposition. 
                        Without the dashboard, teams must solve parallelization themselves.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to choose it">
                    <p>
                        Avoid Cypress if cross-browser coverage (especially Safari/WebKit) is a hard requirement. 
                        Playwright provides genuine multi-browser testing without workarounds.
                    </p>

                    <p>
                        If your test flows involve cross-origin navigation, iframe interaction, or multiple domains, 
                        Cypress's architectural limitations will create constant friction. Playwright handles these scenarios more naturally.
                    </p>

                    <p>
                        For teams that need full control over test parallelization without commercial dependencies, 
                        Playwright's built-in sharding and multi-project support provide more flexibility.
                    </p>

                    <p>
                        If governance and commercial backing uncertainty is a concern following Cypress's acquisition, 
                        Playwright's Microsoft backing and open governance may provide more stability confidence.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

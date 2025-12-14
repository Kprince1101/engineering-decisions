import { SectionBlock, SubsectionBlock } from '@/components/content';

export function CypressWorkflow() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Cypress: Workflow</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Test organization">
                    <p>
                        Cypress uses describe/it blocks and organizes tests in cypress/e2e directory by default.
                        The framework encourages a page object pattern but doesn't enforce it.
                    </p>

                    <p>
                        Tests run serially in a single browser instance, which speeds up execution but means tests can't be parallelized
                        without Cypress's paid dashboard service or custom orchestration.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch mode">
                    <p>
                        Cypress Test Runner provides a graphical interface showing tests and application side-by-side.
                        Tests rerun automatically on file changes, with full time-travel debugging available.
                    </p>

                    <p>
                        The time-travel feature lets developers click through test execution steps and inspect DOM state at each point.
                        This debugging experience is significantly better than traditional end-to-end testing tools.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Network and state control">
                    <p>
                        Cypress provides cy.intercept() for stubbing network requests and controlling responses.
                        This API has gone through several iterations (previously cy.route()), creating migration friction for older tests.
                    </p>

                    <p>
                        The framework automatically waits for commands and assertions to pass before proceeding,
                        eliminating most explicit wait statements. This reduces flake but can make test failures harder to debug
                        when assertions retry silently.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Configuration">
                    <p>
                        Cypress configuration lives in cypress.config.ts and defines base URL, viewport size, and plugin settings.
                        The framework uses plugins for extending functionality like file system access or database seeding.
                    </p>

                    <p>
                        Environment variables and test data can be configured per environment (dev, staging, production).
                        The configuration model is well-documented but requires understanding Cypress's execution model
                        (Node process vs browser process).
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

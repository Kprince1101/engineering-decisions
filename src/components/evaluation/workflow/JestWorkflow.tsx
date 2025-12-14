import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JestWorkflow() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jest: Workflow</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Test organization">
                    <p>
                        Jest uses describe/it blocks for organizing tests, following a pattern established by earlier frameworks like Mocha.
                        Tests are typically colocated with source files using .test.js or .spec.js naming conventions,
                        though this is configurable.
                    </p>

                    <p>
                        The framework automatically discovers test files without explicit configuration in most setups.
                        This zero-config discovery works well for standard project structures but can require customization
                        for monorepos or non-standard layouts.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch mode">
                    <p>
                        Jest's watch mode reruns affected tests when files change. The framework uses dependency analysis
                        to determine which tests are impacted, reducing feedback time in large codebases.
                    </p>

                    <p>
                        Watch mode includes an interactive menu for filtering tests, updating snapshots, and controlling test execution.
                        This interface is keyboard-driven and works well for developers comfortable with terminal workflows.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Mocking model">
                    <p>
                        Jest provides automatic mocking for ES modules and CommonJS modules, with manual mocks placed in __mocks__ directories.
                        This magic mocking reduces boilerplate but can create confusion when mock behavior doesn't match expectations.
                    </p>

                    <p>
                        The framework includes jest.fn(), jest.spyOn(), and timer mocking utilities.
                        These are powerful but require understanding Jest's mock lifecycle and clearing strategies to avoid test interdependence.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Configuration">
                    <p>
                        Jest attempts zero-configuration defaults that work for Create React App and similar setups.
                        For custom projects, configuration lives in jest.config.js or package.json.
                    </p>

                    <p>
                        Common configuration needs include transform rules (for TypeScript, JSX), module name mapping (for path aliases),
                        and test environment selection (node vs jsdom). The configuration surface grows complex for non-standard setups.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

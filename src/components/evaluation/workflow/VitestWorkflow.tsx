import { SectionBlock, SubsectionBlock } from '@/components/content';

export function VitestWorkflow() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vitest: Workflow</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Test organization">
                    <p>
                        Vitest uses Jest-compatible describe/it syntax, making migration straightforward.
                        Test files use .test.ts or .spec.ts conventions and are automatically discovered.
                    </p>

                    <p>
                        Because Vitest shares Vite's configuration, path aliases and import resolution work identically in tests and application code.
                        This eliminates a common source of friction where test configuration diverges from build configuration.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch mode">
                    <p>
                        Vitest's watch mode leverages Vite's HMR infrastructure for fast re-execution.
                        Tests rerun almost instantly when files change, often faster than Jest's watch mode in large projects.
                    </p>

                    <p>
                        The framework provides a UI mode with a browser-based test runner and visualizer.
                        This graphical interface appeals to developers who prefer visual feedback over terminal output.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Mocking model">
                    <p>
                        Vitest provides vi.fn(), vi.spyOn(), and timer mocking with Jest-compatible APIs.
                        Module mocking uses vi.mock() and integrates with Vite's module graph.
                    </p>

                    <p>
                        ESM mocking is better supported than in Jest due to Vitest's native ESM architecture,
                        but this also means some CommonJS-specific mocking patterns don't translate directly.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Configuration">
                    <p>
                        Vitest configuration extends vite.config.ts using a test property.
                        This reuses existing Vite configuration for transforms, aliases, and plugins.
                    </p>

                    <p>
                        The shared configuration reduces duplication but means test-specific needs must be expressed
                        within Vite's configuration model, which can feel indirect for complex test setups.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function MochaPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Mocha: Performance</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Startup time">
                    <p>
                        Mocha's startup is fast because it has minimal built-in functionality—no module transformation,
                        no automatic mocking, no complex initialization. It simply discovers and runs tests.
                    </p>

                    <p>
                        This speed advantage assumes test files don't require transpilation.
                        If using TypeScript or modern JavaScript, ts-node or similar tools add back the startup overhead Mocha avoids.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch performance">
                    <p>
                        Mocha lacks built-in watch mode, so watch performance depends on the file watcher used.
                        Tools like nodemon provide basic watching but don't optimize which tests to rerun.
                    </p>

                    <p>
                        Without intelligent re-running, watch mode typically reruns the entire test suite on any change.
                        This works for small projects but becomes impractical at scale.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI behavior">
                    <p>
                        Mocha runs tests serially by default. The --parallel flag enables parallel execution but requires tests to be independent
                        and avoid shared state—a constraint that's not always easy to satisfy.
                    </p>

                    <p>
                        Because Mocha is lightweight, CI runs are fast if tests themselves are fast.
                        The framework adds minimal overhead beyond actual test execution time.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Resource usage">
                    <p>
                        Mocha's memory footprint is small—it loads test files and runs them without heavy infrastructure.
                        Resource usage scales primarily with test complexity, not framework overhead.
                    </p>

                    <p>
                        This efficiency is valuable in memory-constrained environments but assumes tests don't need features
                        that would typically be provided by heavier frameworks.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

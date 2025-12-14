import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JestPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jest: Performance</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Startup time">
                    <p>
                        Jest has noticeable startup overhead, particularly in large projects.
                        The framework must initialize its module transformation pipeline, parse configuration, and discover test files before running tests.
                    </p>

                    <p>
                        This overhead is tolerable in CI but can feel slow during local development when running a single test file.
                        The --maxWorkers=1 flag and targeted file patterns can reduce this cost but don't eliminate it.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch performance">
                    <p>
                        Watch mode is faster than full runs because Jest caches transformed modules and only reruns affected tests.
                        In large codebases, this caching significantly reduces feedback time.
                    </p>

                    <p>
                        Cache invalidation can occasionally cause incorrect test results until cache is cleared (jest --clearCache).
                        This happens infrequently but requires awareness of the caching mechanism.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI behavior">
                    <p>
                        Jest runs tests in parallel across workers by default, utilizing available CPU cores.
                        This parallelization is effective but can cause issues with tests that share resources (databases, file systems).
                    </p>

                    <p>
                        The framework's transformation overhead is amplified in CI environments without persistent caching.
                        Docker-based CI setups benefit from caching node_modules and Jest's cache directory.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Resource usage">
                    <p>
                        Jest spawns multiple worker processes, each running a Node instance.
                        Memory usage scales with worker count—large test suites can consume significant RAM.
                    </p>

                    <p>
                        The --runInBand flag forces serial execution in a single process, reducing memory usage
                        but increasing total execution time. This trade-off is necessary in memory-constrained environments.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

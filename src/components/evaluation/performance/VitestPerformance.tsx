import { SectionBlock, SubsectionBlock } from '@/components/content';

export function VitestPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vitest: Performance</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Startup time">
                    <p>
                        Vitest's startup is faster than Jest because it uses Vite's optimized module loading and esbuild-based transformation.
                        The difference is most noticeable in TypeScript projects where Vitest avoids full type-checking during test runs.
                    </p>

                    <p>
                        Initial startup still has overhead while Vite's dependency pre-bundling runs,
                        but subsequent runs benefit from Vite's aggressive caching.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch performance">
                    <p>
                        Watch mode in Vitest is exceptionally fast due to Vite's HMR infrastructure.
                        Test re-execution after file changes often happens in milliseconds, even in large projects.
                    </p>

                    <p>
                        This speed advantage compounds during development—faster feedback loops encourage running tests more frequently,
                        which can improve code quality through tighter test-driven workflows.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI behavior">
                    <p>
                        Vitest parallelizes tests across workers similar to Jest. The framework's faster transformation step
                        reduces total CI time, particularly for TypeScript codebases.
                    </p>

                    <p>
                        CI caching strategies that cache node_modules and Vite's cache directory see significant speedups.
                        The framework's dependency on Vite means Vite's caching behavior must be understood for optimal CI performance.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Resource usage">
                    <p>
                        Vitest's worker model is similar to Jest's, with comparable memory usage at scale.
                        The framework's use of esbuild for transformation reduces CPU usage compared to Babel-based transformation.
                    </p>

                    <p>
                        The --pool=forks and --pool=threads options control worker implementation,
                        allowing teams to optimize for their specific test suite characteristics and environment constraints.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

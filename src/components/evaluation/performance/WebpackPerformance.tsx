import { SectionBlock, SubsectionBlock } from '@/components/content';

export function WebpackPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Webpack: Performance</h2>

                <p>
                    Webpack's performance has improved significantly from version 4 to 5, with better caching and optimizations.
                    However, the fundamental architecture—processing the entire dependency graph for development—means build times
                    scale with application size more than modern alternatives.
                </p>

                <p>
                    The tool's maturity means extensive optimization knobs exist (parallel builds, cache configurations, chunk splitting strategies),
                    but tuning these requires expertise and ongoing maintenance as the application evolves.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Build time scaling">
                    <p>
                        Webpack's development server startup requires building the initial bundle before serving content.
                        In large applications, this can take minutes—time developers wait before they can interact with the application.
                        Incremental rebuilds are faster but still process entire chunks.
                    </p>

                    <p>
                        Production builds scale with dependency graph complexity and plugin processing.
                        Heavily optimized configurations with parallelization and caching can reduce build times,
                        but baseline performance is slower than esbuild or comparable to Rollup.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Memory consumption">
                    <p>
                        Webpack holds substantial application state in memory: the dependency graph, module cache, and compilation results.
                        Large applications can consume several gigabytes of memory during builds,
                        causing issues on developer machines with limited RAM or in CI environments with memory constraints.
                    </p>

                    <p>
                        Memory usage can be tuned through cache strategies and parallelization settings,
                        but reducing memory often increases build time. These tradeoffs require benchmarking specific to each project.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI environment impact">
                    <p>
                        Webpack builds in CI benefit from persistent caching (filesystem cache in v5) but still require significant time
                        for large applications. Cold builds without cache can exceed 10 minutes for complex projects,
                        impacting deployment pipeline speed.
                    </p>

                    <p>
                        Parallel builds help on multi-core CI machines, but Webpack's JavaScript-based processing limits maximum parallelization
                        compared to native bundlers. Teams optimizing CI often explore alternatives or accept the build time cost.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

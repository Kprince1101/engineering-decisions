import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RollupPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Rollup: Performance</h2>

                <p>
                    Rollup's performance is optimized for output quality rather than build speed.
                    The tool's scope-hoisting and tree-shaking require analyzing the full module graph,
                    which takes more time than simpler bundling strategies. This tradeoff makes sense for library builds
                    where build frequency is low and output quality matters.
                </p>

                <p>
                    For application development, Rollup's build times are comparable to Webpack—neither particularly fast nor slow.
                    The tool doesn't include a development server, so performance comparisons focus on production build speed.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Build time scaling">
                    <p>
                        Rollup's build time scales with module count and complexity. The scope-hoisting optimization requires analyzing
                        how modules interact, which is more expensive than simpler concatenation strategies.
                        Large applications with thousands of modules see proportional build time increases.
                    </p>

                    <p>
                        Watch mode rebuilds are incremental but still require substantial work for changes affecting many modules.
                        The lack of development server optimizations means Rollup is typically not the only tool in application workflows.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Memory consumption">
                    <p>
                        Rollup's memory usage is moderate—higher than minimal bundlers but lower than Webpack with extensive plugins.
                        The module graph must be held in memory during scope-hoisting analysis,
                        but Rollup's focus on production builds means memory optimization isn't as critical as development server tools.
                    </p>

                    <p>
                        Large library builds with many output formats (ESM, CommonJS, UMD) may spike memory as Rollup generates multiple bundles.
                        This is usually acceptable given the infrequent build scenario.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI environment impact">
                    <p>
                        Rollup in CI provides consistent, predictable build times. The tool doesn't have complex caching strategies
                        or optimizations to configure—builds are deterministic and reproducible.
                        This simplicity reduces CI configuration overhead.
                    </p>

                    <p>
                        For library publishing workflows, Rollup's build time is acceptable because it runs less frequently than application deploys.
                        The output quality benefits justify the time investment for package consumers.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function EsbuildPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">esbuild: Performance</h2>

                <p>
                    esbuild's defining characteristic is extreme speed—10-100x faster than JavaScript-based bundlers for comparable tasks.
                    This performance comes from Go's compiled nature, aggressive parallelization, and architectural decisions
                    that prioritize speed over comprehensive optimization.
                </p>

                <p>
                    The speed advantage is most dramatic in large codebases and CI environments where build time compounds.
                    For small projects, esbuild is still faster but the absolute time savings are less impactful.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Build time scaling">
                    <p>
                        esbuild's build time scales better than other bundlers due to parallelization—the tool uses all available CPU cores effectively.
                        Large applications that take minutes in Webpack often build in seconds with esbuild,
                        though this advantage diminishes if extensive post-processing (Terser, PostCSS) is added.
                    </p>

                    <p>
                        Incremental rebuild performance is exceptional—watch mode updates in milliseconds because esbuild efficiently determines
                        what needs reprocessing. This makes full page reload workflows competitive with HMR-based tools.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Memory consumption">
                    <p>
                        esbuild uses memory efficiently through Go's runtime and concurrent processing design.
                        Large builds consume less memory than Webpack equivalents because esbuild doesn't maintain extensive caching structures
                        or plugin state—it re-parses and rebuilds quickly enough that aggressive caching isn't necessary.
                    </p>

                    <p>
                        The memory efficiency enables building larger projects on resource-constrained machines or CI environments,
                        reducing infrastructure costs when build parallelization is limited by memory rather than CPU.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI environment impact">
                    <p>
                        esbuild dramatically reduces CI build times—pipelines that took 10 minutes may complete in under one.
                        This acceleration enables faster deployment cycles and reduced CI costs through shorter runner time.
                    </p>

                    <p>
                        The cold start performance (no warm cache) is still excellent, unlike bundlers that require persistent caching for acceptable speed.
                        This makes esbuild reliable in ephemeral CI environments where cache restoration adds overhead.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

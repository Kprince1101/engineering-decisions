import { SectionBlock, SubsectionBlock } from '@/components/content';

export function VitePerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vite: Performance</h2>

                <p>
                    Vite's performance profile is split: development is extremely fast due to unbundled ESM serving,
                    while production builds use Rollup and are comparable to other bundlers. This asymmetry means development experience
                    improves significantly while production build times remain conventional.
                </p>

                <p>
                    The tool's speed advantage is most noticeable in large applications where traditional bundlers struggle.
                    Small projects don't benefit as much because the absolute time differences are minimal.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Build time scaling">
                    <p>
                        Vite's development server startup time is nearly constant regardless of application size—only the entry point loads initially.
                        This contrasts with bundlers that must process the entire dependency graph upfront.
                        Cold starts complete in seconds rather than minutes for large applications.
                    </p>

                    <p>
                        Production builds using Rollup scale similar to other bundlers. Large applications with complex dependency graphs
                        still take minutes to build, though Rollup's tree-shaking can reduce overall work compared to less aggressive bundlers.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Memory consumption">
                    <p>
                        Vite's development mode uses less memory than full bundlers because it doesn't hold the entire application graph in memory.
                        Only requested modules are transformed and cached. This matters for large monorepos where memory pressure affects developer machines.
                    </p>

                    <p>
                        Production builds consume memory comparable to Rollup directly. The dependency pre-bundling step using esbuild
                        is memory-efficient, but the final Rollup build requires holding the full module graph.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI environment impact">
                    <p>
                        Vite's production builds in CI are standard bundler speed—neither particularly fast nor slow.
                        The development server advantages don't apply to CI where builds run once. Teams optimizing CI time
                        may explore esbuild or other faster production bundlers.
                    </p>

                    <p>
                        Dependency pre-bundling with esbuild can speed up first builds when dependencies change frequently.
                        This caching helps in environments where node_modules is rebuilt often, though proper layer caching is more impactful.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

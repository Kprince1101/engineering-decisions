import { SectionBlock, SubsectionBlock } from '@/components/content';

export function EsbuildTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">esbuild: Tradeoffs</h2>

                <p>
                    esbuild trades ecosystem compatibility and optimization sophistication for extreme build speed.
                    The tool is 10-100x faster than JavaScript bundlers but deliberately limits features to maintain that performance.
                    This makes esbuild excellent as a build primitive but constraining as a standalone application bundler.
                </p>

                <p>
                    The Go implementation and plugin architecture create barriers to extensibility—plugins cannot use JavaScript libraries directly,
                    limiting the ecosystem compared to tools with JavaScript-based plugin systems.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When esbuild fits">
                    <p>
                        esbuild excels when build speed is the primary concern: large monorepos with slow CI, development tooling where instant feedback matters,
                        or as a component within other tools (Vite uses esbuild for dependency pre-bundling).
                        Projects with straightforward build requirements benefit without hitting feature limitations.
                    </p>

                    <p>
                        Teams comfortable with esbuild's opinionated choices and limited customization will find the speed transformative.
                        The tool works well when the default behavior is acceptable and extensive plugins aren't needed.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When esbuild struggles">
                    <p>
                        Projects requiring sophisticated optimizations (aggressive minification, complex code splitting, CSS modules)
                        may find esbuild's feature set insufficient. The tool intentionally omits optimizations that would compromise speed.
                    </p>

                    <p>
                        Complex build pipelines with custom transformations hit plugin system limitations.
                        JavaScript-heavy plugin ecosystems (PostCSS, various preprocessors) require workarounds or separate processing steps,
                        reducing the speed advantage when extensive post-processing is needed.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        esbuild reduces build frustration for teams suffering from slow bundlers—the speed improvement is immediately noticeable
                        and improves developer experience measurably. This productivity gain can justify accepting feature limitations.
                    </p>

                    <p>
                        Teams must evaluate whether the feature tradeoffs are acceptable for their use case.
                        The tool works best when adopted as part of a larger toolchain (via Vite, Remix, etc.) rather than as the sole build solution,
                        allowing speed benefits while other tools handle edge cases.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

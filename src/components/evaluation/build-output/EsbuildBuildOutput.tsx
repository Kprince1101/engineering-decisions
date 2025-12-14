import { SectionBlock, SubsectionBlock } from '@/components/content';

export function EsbuildBuildOutput() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">esbuild: Build Output</h2>

                <p>
                    esbuild's production output prioritizes build speed over aggressive optimization.
                    The tool produces clean, functional bundles quickly but doesn't implement some optimizations that slower bundlers perform.
                    This tradeoff works when build time matters more than marginal bundle size differences.
                </p>

                <p>
                    The bundler's limitations around tree-shaking and minification mean teams sometimes use esbuild for development transforms
                    and switch to Rollup or Terser for production. This hybrid approach balances speed and optimization.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Bundle splitting strategy">
                    <p>
                        esbuild supports code splitting through dynamic imports and entry points but doesn't provide Webpack-level control
                        over chunk granularity. The automatic splitting strategy is simple and fast, suitable for many applications
                        without manual tuning.
                    </p>

                    <p>
                        Manual chunk configuration is limited—teams needing sophisticated splitting strategies may find esbuild's options insufficient.
                        The tool prioritizes simplicity and speed over optimization flexibility.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Asset handling">
                    <p>
                        esbuild handles common asset types (CSS, images, JSON) natively without loader configuration.
                        CSS is bundled and minified, images can be loaded as data URLs or files, and JSON imports work out of the box.
                        This reduces configuration compared to plugin-based systems.
                    </p>

                    <p>
                        Advanced asset processing (PostCSS, image optimization) requires plugins or external tools.
                        esbuild's plugin system exists but is less extensive than Webpack's, deliberately limiting scope to maintain performance.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Output size characteristics">
                    <p>
                        esbuild's tree-shaking is less aggressive than Rollup's. The tool performs basic dead code elimination
                        but doesn't inline functions or optimize as aggressively to maintain build speed. Bundle sizes are competitive
                        but not necessarily smallest-in-class.
                    </p>

                    <p>
                        Built-in minification is faster than Terser but produces slightly larger output. Teams obsessed with minimum bundle size
                        may post-process esbuild output with other minifiers, though this defeats the speed advantage.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

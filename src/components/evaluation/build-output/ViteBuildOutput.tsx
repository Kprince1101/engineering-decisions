import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ViteBuildOutput() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vite: Build Output</h2>

                <p>
                    Vite's production builds use Rollup, which produces clean, optimized bundles with effective tree-shaking.
                    The output is modern JavaScript by default (targeting browsers with ESM support), though legacy browser support
                    is possible through additional configuration and the @vitejs/plugin-legacy plugin.
                </p>

                <p>
                    The shift from native ESM in dev to Rollup bundles in production is Vite's fundamental tradeoff.
                    This gap means teams must test production builds to catch issues that don't surface during development.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Bundle splitting strategy">
                    <p>
                        Vite uses Rollup's code splitting capabilities, automatically splitting vendor dependencies from application code
                        and creating separate chunks for dynamic imports. The defaults work well for most applications without manual configuration.
                    </p>

                    <p>
                        Manual chunk splitting is possible through Rollup's `manualChunks` configuration when the automatic strategy
                        produces suboptimal splits. This requires understanding both your dependency graph and Rollup's chunking algorithm.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Asset handling">
                    <p>
                        Vite processes static assets (images, fonts, CSS) with content hashing for long-term caching.
                        Small assets can be inlined as base64, while larger files get separate URLs. These defaults are reasonable but configurable.
                    </p>

                    <p>
                        CSS is extracted into separate files rather than injected via JavaScript, which improves initial render performance.
                        CSS code splitting works with dynamic imports, creating CSS chunks that load with their JavaScript counterparts.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Output size characteristics">
                    <p>
                        Vite's Rollup-based builds produce compact output due to effective tree-shaking and scope hoisting.
                        The tool removes unused code at the module level, which works well for ES module dependencies but less effectively for CommonJS.
                    </p>

                    <p>
                        Modern output targets produce smaller bundles than legacy browser transpilation. Teams supporting older browsers
                        pay a size cost for polyfills and syntax transforms, which Vite handles through separate legacy bundles if configured.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

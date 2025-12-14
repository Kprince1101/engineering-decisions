import { SectionBlock, SubsectionBlock } from '@/components/content';

export function WebpackBuildOutput() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Webpack: Build Output</h2>

                <p>
                    Webpack's production output is highly configurable, supporting multiple bundle formats, sophisticated code splitting,
                    and fine-grained optimization control. The tool's maturity means it handles edge cases and legacy requirements that newer bundlers skip,
                    but this flexibility requires careful configuration to achieve optimal results.
                </p>

                <p>
                    The same bundler runs in dev and production, ensuring consistency between environments.
                    This reduces surprises but means production builds can be slower than tools that use faster bundlers for production.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Bundle splitting strategy">
                    <p>
                        Webpack's SplitChunksPlugin provides extensive control over how code is split into chunks.
                        Default heuristics split vendor code from application code and create separate chunks for shared modules,
                        but teams often tune these settings based on caching and loading patterns.
                    </p>

                    <p>
                        The configuration complexity stems from conflicting goals: fewer chunks reduce HTTP requests but increase cache invalidation,
                        while more granular chunks improve caching but increase waterfall requests. Webpack exposes knobs for these tradeoffs.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Asset handling">
                    <p>
                        Webpack treats all assets as modules, processing them through loaders. Images can be inlined, optimized, or emitted as files.
                        Fonts, SVGs, and other resources follow configurable rules. This unified approach is powerful but requires explicit loader configuration.
                    </p>

                    <p>
                        CSS handling varies by configuration—styles can be injected via JavaScript, extracted to separate files,
                        or processed with CSS modules. Each approach has performance implications that teams must evaluate for their use case.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Output size characteristics">
                    <p>
                        Webpack's tree-shaking improved significantly in version 5 but still lags behind Rollup for pure ES modules.
                        The tool handles CommonJS dependencies but cannot eliminate unused exports as effectively due to dynamic nature of CJS.
                    </p>

                    <p>
                        Module concatenation (scope hoisting) reduces output size by merging modules when safe.
                        This optimization is comparable to Rollup but requires opt-in configuration and doesn't work in all scenarios.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

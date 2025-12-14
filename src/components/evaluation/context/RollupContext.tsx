import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RollupContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Rollup: Context</h2>

                <p>
                    Rollup was created in 2015 specifically for building JavaScript libraries, with a focus on producing clean,
                    standards-compliant ES module output. Unlike application bundlers, Rollup prioritizes output quality and tree-shaking effectiveness
                    over features like hot module replacement or asset management.
                </p>

                <p>
                    The tool pioneered tree-shaking by analyzing ES module static structure to eliminate unused code.
                    This made Rollup the preferred choice for library authors who needed minimal bundle sizes and readable output,
                    though it required more configuration for application development use cases.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Rollup addressed the library distribution problem where CommonJS bundlers produced bloated, hard-to-read output
                        with unnecessary runtime code. Library authors needed clean ES module bundles that consuming projects could tree-shake effectively.
                    </p>

                    <p>
                        The framework's scope-hoisting approach concatenates modules without wrapper functions,
                        producing output that resembles hand-written code. This matters for libraries where bundle inspection
                        and dead code elimination in consuming projects are priorities.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Rollup targets library development and scenarios where output quality matters more than dev server features.
                        It excels at producing multiple output formats (ESM, CommonJS, UMD) from a single codebase.
                    </p>

                    <p>
                        The tool assumes developers understand module systems and are comfortable with explicit configuration.
                        It doesn't provide defaults for common application patterns like CSS processing or asset handling—these require plugins.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Rollup gained adoption among library maintainers (Vue, React, D3) who valued its clean output and tree-shaking.
                        This created a network effect where developers learned Rollup for library work even if they used Webpack for applications.
                    </p>

                    <p>
                        Vite's decision to use Rollup for production builds validated Rollup's architecture for output quality,
                        while acknowledging that development server speed required a different approach. This hybrid pattern has become influential.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function WebpackContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Webpack: Context</h2>

                <p>
                    Webpack was released in 2012 as a module bundler that treated everything—JavaScript, CSS, images, fonts—as modules
                    that could be imported and transformed. This unified approach to assets was novel and enabled sophisticated build pipelines
                    that previous tools couldn't support.
                </p>

                <p>
                    The tool became the de facto standard for React and complex single-page applications because it solved real problems
                    around code splitting, tree shaking, and asset management. This dominance created strong network effects but also meant
                    teams inherited Webpack's complexity even when simpler tools would suffice.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Webpack addressed the growing complexity of frontend asset management in the early 2010s.
                        Before bundlers, teams manually concatenated scripts, managed load order, and handled assets separately from code.
                    </p>

                    <p>
                        The framework's loader and plugin system enabled treating all resources as part of the module graph,
                        with transformations (Babel, TypeScript, Sass) integrated into the build. This unified pipeline reduced tooling fragmentation
                        but introduced configuration overhead.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Webpack was designed for complex applications requiring sophisticated asset pipelines, code splitting, and optimization.
                        It excels when build requirements are non-standard or when fine-grained control over output is necessary.
                    </p>

                    <p>
                        The tool's flexibility comes from its plugin architecture, which allows extending almost any build phase.
                        This power is valuable for edge cases but creates decision fatigue for common scenarios that other tools handle with defaults.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Webpack gained dominance through React's ecosystem—Create React App, Next.js, and major frameworks adopted it,
                        making Webpack knowledge transferable across projects. This created a self-reinforcing cycle of adoption.
                    </p>

                    <p>
                        The framework's maturity is both strength and liability. It supports legacy patterns and edge cases that newer tools don't,
                        but this backwards compatibility means the codebase and API carry design decisions from a different era of web development.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

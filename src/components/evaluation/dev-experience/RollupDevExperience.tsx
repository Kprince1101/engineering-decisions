import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RollupDevExperience() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Rollup: Dev Experience</h2>

                <p>
                    Rollup's development experience is optimized for library authoring rather than application development.
                    The tool focuses on producing clean output bundles rather than providing fast dev servers or hot module replacement.
                    This makes Rollup excellent for its intended use case but limiting for iterative application work.
                </p>

                <p>
                    Teams using Rollup for applications typically combine it with separate dev servers or use frameworks like Vite
                    that handle development separately. Rollup's value proposition is production output quality, not development ergonomics.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Configuration surface">
                    <p>
                        Rollup's configuration is more explicit than Vite's defaults but simpler than Webpack's.
                        The API focuses on input/output paths and plugin chains rather than complex loader systems.
                        This explicitness works well for libraries with specific output requirements.
                    </p>

                    <p>
                        The plugin ecosystem is mature but smaller than Webpack's. Common transformations (TypeScript, Babel) require manual plugin setup.
                        This overhead is acceptable for library projects where configuration changes infrequently.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Debugging workflow">
                    <p>
                        Rollup's watch mode rebuilds on file changes but doesn't provide a dev server or hot reload.
                        Developers typically run a separate static server and manually refresh browsers, which works for libraries
                        but is slow for application development.
                    </p>

                    <p>
                        Build errors are generally clear because Rollup's plugin chain is simpler than Webpack's.
                        The tool's focus on ES modules means fewer transformation steps where errors can hide.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Hot reload behavior">
                    <p>
                        Rollup doesn't include hot module replacement—it's a production bundler.
                        Teams needing HMR use separate tools (Vite, WMR) or accept manual page refreshes.
                        This limitation is intentional given Rollup's scope.
                    </p>

                    <p>
                        For library development, the lack of HMR matters less because the workflow involves building,
                        linking to a test application, and validating behavior. Fast rebuilds are more important than hot updates.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

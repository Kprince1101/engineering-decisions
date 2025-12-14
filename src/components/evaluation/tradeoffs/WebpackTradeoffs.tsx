import { SectionBlock, SubsectionBlock } from '@/components/content';

export function WebpackTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Webpack: Tradeoffs</h2>

                <p>
                    Webpack trades simplicity and speed for flexibility and ecosystem maturity.
                    The tool handles virtually any build requirement through its loader and plugin system,
                    but this power comes with configuration complexity and slower performance than modern alternatives.
                </p>

                <p>
                    The framework's dominance means extensive community knowledge, debugging resources, and solved edge cases.
                    This network effect creates inertia—switching away requires re-solving problems Webpack handles, even if the tool itself is heavy.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When Webpack fits">
                    <p>
                        Webpack excels for complex applications with non-standard build requirements: custom asset pipelines,
                        sophisticated code splitting strategies, or edge cases where the mature ecosystem provides proven solutions.
                        Teams with existing Webpack expertise can leverage that knowledge rather than relearning tools.
                    </p>

                    <p>
                        Projects requiring strong dev/prod parity benefit from Webpack's consistent architecture across environments.
                        Legacy applications needing gradual modernization can use Webpack's flexibility to support transition patterns.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Webpack struggles">
                    <p>
                        Small to medium applications with standard requirements suffer from Webpack's overhead without gaining value from its flexibility.
                        The configuration burden and slow builds are costs without corresponding benefits when simpler tools suffice.
                    </p>

                    <p>
                        Teams without build system expertise face steep learning curves. Webpack's power requires understanding concepts
                        (loaders, plugins, chunk graphs) that aren't necessary with opinionated tools.
                        This expertise requirement increases onboarding time and maintenance burden.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Webpack requires dedicated build system knowledge on the team. Someone must understand configuration,
                        debug cryptic errors, and maintain the setup as requirements evolve. This expertise is valuable but specialized.
                    </p>

                    <p>
                        The slow development feedback loop affects team productivity—developers wait for rebuilds, reducing flow state.
                        For large teams, this accumulated wait time represents meaningful cost that might justify exploring faster alternatives.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

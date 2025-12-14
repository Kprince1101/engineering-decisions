import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RollupTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Rollup: Tradeoffs</h2>

                <p>
                    Rollup optimizes for output quality over build features, making it ideal for libraries but limiting for application development.
                    The tool produces the cleanest bundles through scope hoisting and aggressive tree-shaking,
                    but lacks development server capabilities and application-focused defaults.
                </p>

                <p>
                    This narrow focus is deliberate—Rollup solves the library distribution problem exceptionally well
                    without attempting to be a complete application build tool. Teams using Rollup understand this scope.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When Rollup fits">
                    <p>
                        Library development is Rollup's sweet spot: producing ES module, CommonJS, and UMD bundles from TypeScript or modern JavaScript,
                        with tree-shakable exports that consuming projects can optimize. Output quality and readability matter more than build speed.
                    </p>

                    <p>
                        Projects needing multiple output formats or particularly clean production bundles benefit from Rollup's scope hoisting.
                        Vite's adoption of Rollup for production validates this architectural choice.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Rollup struggles">
                    <p>
                        Application development requires complementary tools—Rollup alone doesn't provide dev servers, HMR, or modern DX features.
                        Teams using Rollup for applications typically build custom tooling around it or combine it with other tools.
                    </p>

                    <p>
                        Complex asset pipelines require extensive plugin configuration. While the plugin ecosystem is mature,
                        it's less comprehensive than Webpack's loader system for non-JavaScript assets.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Library maintainers benefit from Rollup's output quality and multi-format builds without needing deep bundler expertise.
                        The configuration is more approachable than Webpack while producing better output than simpler bundlers.
                    </p>

                    <p>
                        Application teams using Rollup must accept managing separate development tooling or using frameworks like Vite that integrate Rollup.
                        Direct Rollup usage for applications requires comfort with explicit, lower-level tool composition.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

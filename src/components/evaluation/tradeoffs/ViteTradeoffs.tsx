import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ViteTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vite: Tradeoffs</h2>

                <p>
                    Vite's fundamental tradeoff is dev/prod parity for development speed.
                    By using native ESM in development and Rollup bundles in production, Vite achieves near-instant server startup
                    but creates a gap where code behaves differently between environments.
                </p>

                <p>
                    This architectural split is deliberate—the speed improvement justifies the parity cost for most teams.
                    However, subtle bugs that only surface in production builds remain a risk that requires testing discipline.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When Vite fits">
                    <p>
                        Vite works best for modern web applications targeting evergreen browsers where fast iteration matters.
                        React, Vue, or Svelte applications with standard build requirements benefit from zero-config defaults and excellent DX.
                        Teams valuing developer happiness and willing to test production builds will find Vite compelling.
                    </p>

                    <p>
                        The tool suits greenfield projects where legacy browser support isn't required and the dependency graph uses ES modules.
                        Large applications benefit most because the speed advantage scales with size.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Vite struggles">
                    <p>
                        Projects requiring extensive legacy browser support pay costs for polyfills and dual-bundle strategies.
                        The modern-first architecture works against projects where IE11 or older browsers are meaningful traffic.
                    </p>

                    <p>
                        Complex build pipelines with custom asset processing or non-standard transformations may exceed Vite's plugin ecosystem.
                        Teams migrating from heavily customized Webpack setups may find gaps where Rollup plugins don't match Webpack loader functionality.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Vite reduces configuration overhead compared to Webpack, making onboarding faster for new developers.
                        The simpler mental model means less build system expertise required for common tasks.
                    </p>

                    <p>
                        Teams must develop discipline around testing production builds since dev mode doesn't catch all issues.
                        CI pipelines should build and test production bundles, not just run dev servers.
                        This testing overhead is manageable but requires process enforcement.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

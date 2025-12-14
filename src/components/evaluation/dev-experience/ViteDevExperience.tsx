import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ViteDevExperience() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vite: Dev Experience</h2>

                <p>
                    Vite's development experience centers on near-instant server startup and fast hot module replacement.
                    The framework serves unbundled ES modules directly to the browser, transforming files on-demand rather than building upfront.
                    This architectural choice makes development server responsiveness independent of application size.
                </p>

                <p>
                    The trade-off is dev/prod parity—development uses native ESM while production uses Rollup bundles.
                    Most teams accept this gap because the iteration speed improvement is substantial, but edge cases exist where code works in dev and fails in production.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Configuration surface">
                    <p>
                        Vite provides opinionated defaults that work for most modern projects without configuration.
                        A blank `vite.config.js` suffices for basic React or Vue applications. This zero-config approach reduces onboarding friction
                        compared to Webpack's required setup.
                    </p>

                    <p>
                        Extending defaults requires understanding Vite's plugin system and Rollup configuration for production builds.
                        The mental model is simpler than Webpack but still requires learning Vite-specific concepts.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Debugging workflow">
                    <p>
                        Browser DevTools work naturally with Vite because source files are served directly during development.
                        Source maps are unnecessary for TypeScript/JSX since transformations happen transparently.
                        This reduces the disconnect between code and running application.
                    </p>

                    <p>
                        Production debugging requires source maps since Rollup bundles and minifies code.
                        The dev/prod gap means certain issues (chunk loading, circular dependencies) may only surface in production builds.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Hot reload behavior">
                    <p>
                        Vite's HMR preserves React component state better than traditional bundlers because it operates at the module level
                        rather than rebuilding chunks. Updates typically apply in under 100ms regardless of application size.
                    </p>

                    <p>
                        Full page reloads still occur for certain changes (config updates, new dependencies), but these are less frequent than with Webpack.
                        The responsiveness creates a tight feedback loop that improves iteration speed noticeably.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

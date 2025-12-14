import { SectionBlock, SubsectionBlock } from '@/components/content';

export function EsbuildDevExperience() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">esbuild: Dev Experience</h2>

                <p>
                    esbuild's development experience is defined by extreme build speed—10-100x faster than JavaScript-based bundlers.
                    This performance comes from Go's compiled nature and aggressive parallelization. Rebuilds that take seconds in Webpack
                    complete in milliseconds with esbuild.
                </p>

                <p>
                    The tradeoff is limited customization and a smaller plugin ecosystem. esbuild makes opinionated choices about what features to support,
                    deliberately excluding capabilities that would compromise performance. This works when esbuild is a build component, not the entire toolchain.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Configuration surface">
                    <p>
                        esbuild's API is minimal—most options are flags for output format, target environments, and basic transformations.
                        This simplicity is intentional; the tool doesn't try to handle every use case. Missing features usually require different tools or workarounds.
                    </p>

                    <p>
                        The plugin system exists but is limited compared to Webpack or Rollup. Plugins can intercept file loads and transforms,
                        but cannot access JavaScript APIs directly—they communicate through serialization boundaries. This architectural choice preserves performance.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Debugging workflow">
                    <p>
                        esbuild generates source maps that work well with browser DevTools. Build errors are clear and fast to surface—the speed means
                        the feedback loop for syntax errors or import issues is near-instant.
                    </p>

                    <p>
                        Configuration errors are less common because there's less configuration. The tool's limited scope means fewer edge cases
                        where behavior is surprising, though this comes at the cost of flexibility.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Hot reload behavior">
                    <p>
                        esbuild includes basic watch mode and a dev server with live reload, but not true hot module replacement.
                        The server reloads the full page on changes. This is acceptable given rebuild speed—full reloads with esbuild can be faster than HMR with Webpack.
                    </p>

                    <p>
                        Tools like Vite use esbuild for dependency pre-bundling but implement their own HMR system.
                        This pattern leverages esbuild's speed while avoiding its HMR limitations.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

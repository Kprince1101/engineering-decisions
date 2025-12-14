import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TurbopackBuildOutput() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Turbopack: Build Output</h2>

                <p>
                    Turbopack's production output is currently limited—as of 2024, the tool is only recommended for Next.js development mode.
                    Production builds still use Webpack. This means Turbopack's value is development speed rather than production optimization,
                    though Vercel plans eventual production support.
                </p>

                <p>
                    When production builds do become available, the output characteristics will depend on whether Turbopack matches
                    Webpack's optimization capabilities or makes different tradeoffs between build speed and bundle size.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Bundle splitting strategy">
                    <p>
                        Turbopack's production bundle splitting strategy is undefined since production builds currently use Webpack.
                        The development mode doesn't perform traditional bundling—it serves transformed modules similar to Vite's approach.
                    </p>

                    <p>
                        Future production support will likely optimize for Next.js's patterns (server components, route-based splitting),
                        potentially differing from general-purpose bundler strategies to better match Next.js conventions.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Asset handling">
                    <p>
                        Asset handling in Turbopack development mode mirrors Next.js conventions—images use next/image optimizations,
                        CSS modules work natively, and static assets are served with content hashing. This integration is tighter than generic bundlers.
                    </p>

                    <p>
                        The coupling to Next.js means asset handling patterns that work in Next.js work in Turbopack,
                        but teams using custom asset pipelines may find less flexibility than Webpack's loader system provides.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Output size characteristics">
                    <p>
                        Production output size is currently determined by Webpack since that's what Next.js uses for production builds.
                        Turbopack's eventual production bundles will be evaluated against Webpack and Rollup benchmarks,
                        but optimization philosophy (speed vs. size) remains to be seen.
                    </p>

                    <p>
                        The Rust implementation could enable optimizations that JavaScript bundlers cannot perform efficiently,
                        or it could prioritize build speed over aggressive optimization like esbuild does.
                        This is speculation until production builds are supported.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

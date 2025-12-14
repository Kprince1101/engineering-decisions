import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TurbopackPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Turbopack: Performance</h2>

                <p>
                    Turbopack's performance promise is incremental computation that scales—only reprocessing what changed rather than rebuilding graphs.
                    Benchmarks from Vercel show significant speedups over Webpack for Next.js development,
                    though real-world performance depends on project structure and update patterns.
                </p>

                <p>
                    The Rust implementation provides compiled-language performance while the incremental architecture
                    aims to make build time independent of application size for most changes.
                    This ambitious goal requires validating in production workloads before fully trusting.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Build time scaling">
                    <p>
                        Turbopack's incremental model should keep rebuild times constant as applications grow—changes to isolated modules
                        shouldn't trigger work proportional to total app size. This differs from traditional bundlers where dependency graphs
                        create cascading invalidation.
                    </p>

                    <p>
                        Initial cold start performance is comparable to other Rust-based tools—faster than JavaScript bundlers but not necessarily
                        faster than esbuild. The incremental advantage emerges over repeated builds during development sessions.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Memory consumption">
                    <p>
                        Turbopack's memory characteristics are not well documented as of 2024.
                        The incremental computation model requires caching intermediate results, which could increase memory usage,
                        or the Rust implementation could be more efficient than JavaScript bundlers. Real-world data is limited.
                    </p>

                    <p>
                        For Next.js applications with server components and complex routing, memory usage will depend on how much computation state
                        Turbopack maintains. This becomes clearer as production use cases emerge.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI environment impact">
                    <p>
                        Turbopack's CI impact is undefined since production builds currently use Webpack.
                        When production support arrives, the incremental model may not provide advantages in CI where builds typically run from clean state.
                        Cold start performance will matter more than incremental reprocessing.
                    </p>

                    <p>
                        If Turbopack can cache computation across CI runs effectively, it might enable faster builds than clean-state bundlers.
                        This depends on whether the incremental cache can be serialized and restored efficiently.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

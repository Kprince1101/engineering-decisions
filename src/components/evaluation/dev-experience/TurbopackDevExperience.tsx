import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TurbopackDevExperience() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Turbopack: Dev Experience</h2>

                <p>
                    Turbopack's development experience is designed specifically for Next.js, with deep integration for server components,
                    API routes, and incremental static regeneration. The tool's incremental computation model promises near-instant updates
                    regardless of application size, though real-world performance depends on project structure.
                </p>

                <p>
                    As of 2024, Turbopack is opt-in for Next.js development and not recommended for production.
                    This experimental status means teams trade maturity for promised performance improvements, with limited ecosystem support outside Next.js.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Configuration surface">
                    <p>
                        Turbopack's configuration is minimal because it's integrated into Next.js—most settings are inferred from Next.js conventions.
                        This reduces configuration overhead but increases coupling to Next.js's evolution and decisions.
                    </p>

                    <p>
                        Customization options are limited compared to Webpack. The tool doesn't support arbitrary loaders or plugins—teams needing
                        unsupported transformations may need to wait for Turbopack updates or fall back to Webpack.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Debugging workflow">
                    <p>
                        Turbopack generates source maps and integrates with Next.js's error overlay for development errors.
                        The debugging experience should be comparable to Webpack-based Next.js, though edge cases may surface differently.
                    </p>

                    <p>
                        Build failures or unexpected behavior may be harder to diagnose because Turbopack's internals are less documented
                        and the community is smaller. The Rust implementation creates contributor barriers compared to JavaScript tools.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Hot reload behavior">
                    <p>
                        Turbopack's HMR is designed to handle Next.js's server component model efficiently, with fast updates for both client and server code.
                        The incremental approach should scale better than Webpack as applications grow.
                    </p>

                    <p>
                        Real-world HMR performance depends on project structure—highly coupled modules still trigger cascading updates.
                        The promised improvements are most noticeable in large codebases where Webpack struggles.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TurbopackContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Turbopack: Context</h2>

                <p>
                    Turbopack was announced in 2022 by Vercel as the successor to Webpack, designed specifically for Next.js and modern React patterns.
                    Written in Rust and architected around incremental computation, it aims to be both faster than existing bundlers
                    and better suited to the hot module replacement patterns that modern frameworks require.
                </p>

                <p>
                    The tool represents a bet that framework-specific bundlers can provide better experiences than general-purpose tools.
                    By optimizing for Next.js's mental model (server components, API routes, edge runtime), Turbopack can make assumptions
                    that generic bundlers cannot.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Turbopack addresses the mismatch between modern React's architecture (server components, streaming, edge deployment)
                        and general-purpose bundlers built before these patterns existed. Next.js's Webpack configuration grew increasingly complex
                        to bridge this gap.
                    </p>

                    <p>
                        The framework's incremental computation model aims to make updates scale to larger codebases—only reprocessing what changed
                        rather than rebuilding dependency graphs. This matters more as applications grow beyond sizes where full rebuilds are acceptable.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Turbopack is explicitly designed for Next.js, though Vercel suggests it may support other frameworks eventually.
                        This narrow focus allows optimizations that wouldn't make sense for general bundlers but increases coupling to Next.js's evolution.
                    </p>

                    <p>
                        The tool is in active development (as of 2024) and not yet recommended for production.
                        This experimental status means teams must weigh promised performance gains against maturity risks and limited ecosystem.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Turbopack's announcement coincided with Vercel's deeper investment in the Next.js ecosystem and React Server Components.
                        The timing suggests Turbopack is infrastructure for features that existing bundlers struggle to support efficiently.
                    </p>

                    <p>
                        The choice of Rust follows esbuild's precedent that native-compiled bundlers can be dramatically faster.
                        However, Rust introduces contributor barriers and ecosystem fragmentation different from esbuild's Go implementation.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

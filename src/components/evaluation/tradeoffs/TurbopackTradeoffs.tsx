import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TurbopackTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Turbopack: Tradeoffs</h2>

                <p>
                    Turbopack trades framework-agnosticism and maturity for Next.js-specific optimizations and promised performance improvements.
                    The tool is tightly coupled to Next.js and Vercel's ecosystem, which enables deep integration but limits portability
                    and increases dependency on a single vendor's roadmap.
                </p>

                <p>
                    As of 2024, Turbopack remains experimental for development and unsupported for production.
                    This immaturity means teams bet on future stability rather than current reliability when adopting it.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When Turbopack fits">
                    <p>
                        Next.js applications suffering from slow Webpack builds may benefit from Turbopack's development mode performance.
                        Teams deeply invested in the Vercel/Next.js ecosystem and comfortable with experimental tooling can explore early adoption.
                    </p>

                    <p>
                        Large Next.js applications where development server performance is a pain point are the target use case.
                        If the incremental computation model delivers as promised, the iteration speed improvement could be significant.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Turbopack struggles">
                    <p>
                        Any project not using Next.js cannot adopt Turbopack—the tool has no framework-agnostic mode.
                        This creates risk for teams concerned about vendor lock-in or framework migration paths.
                    </p>

                    <p>
                        Production use cases must still use Webpack, limiting Turbopack's value to development speed.
                        Teams needing production build improvements won't benefit until Turbopack supports that use case,
                        and the timeline is uncertain.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Turbopack increases coupling to Vercel's ecosystem and roadmap. Teams adopting it depend on Vercel's continued investment
                        and alignment with their needs. This concentration risk differs from community-driven tools with multiple maintainers.
                    </p>

                    <p>
                        The experimental status means teams must be comfortable with breaking changes, limited documentation,
                        and potential bugs. Early adopters gain performance but pay debugging and stability costs.
                        Conservative teams should wait for production-ready status.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function SWRTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">SWR: Tradeoffs</h2>

                <p>
                    SWR trades customization for simplicity. The library provides excellent defaults for common cases—automatic revalidation, request deduplication, cache sharing—with minimal configuration.
                    This makes SWR faster to adopt than React Query but less flexible for complex requirements. Teams wanting fine-grained control over cache behavior may find SWR limiting.
                </p>

                <p>
                    The stale-while-revalidate pattern is baked deeply into SWR's design. This optimizes for perceived performance (show stale data instantly) but means you're always working with potentially stale data.
                    For use cases requiring guaranteed fresh data, this pattern creates friction—you end up fighting SWR's defaults rather than benefiting from them.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When SWR fits">
                    <p>
                        SWR works best for applications where simplicity matters more than configuration. If React Query feels like too much API surface for your needs, SWR's smaller footprint is appealing.
                        Next.js applications benefit from SWR's Vercel stewardship and integration focus, though React Query works fine in Next.js too.
                    </p>

                    <p>
                        The library excels when automatic revalidation (on focus, reconnect) matches your product requirements. For dashboards, admin panels, or collaborative tools where data freshness matters and stale data is acceptable temporarily, SWR's defaults work elegantly.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When SWR struggles">
                    <p>
                        Complex invalidation patterns are more manual in SWR than React Query. Without partial key matching or predicate-based invalidation built-in, coordinating related cache updates requires custom code.
                        Applications with intricate data relationships may find React Query's invalidation primitives more powerful.
                    </p>

                    <p>
                        SWR's smaller API means less configurability. If you need custom retry logic, complex polling strategies, or query dependencies, you build these yourself or accept SWR's behavior.
                        The simplicity that makes SWR appealing for straightforward use cases becomes a limitation for applications with non-standard requirements.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        SWR's smaller API reduces onboarding time compared to React Query. Teams can be productive quickly without learning extensive configuration options.
                        However, this simplicity means less shared vocabulary for discussing async state patterns—teams build custom solutions rather than using library primitives.
                    </p>

                    <p>
                        The Vercel ecosystem connection helps Next.js teams—SWR is well-documented for Next.js patterns, and Vercel's blog posts often use SWR examples.
                        However, this ecosystem coupling means SWR is less common in non-Next.js React applications, reducing knowledge transfer across different project types.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

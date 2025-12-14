import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RelayTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Relay: Tradeoffs</h2>

                <p>
                    Relay trades flexibility and ease-of-adoption for optimization and consistency guarantees at scale. The framework requires architectural commitment—your GraphQL server must follow Relay conventions, your components must use fragments, and your build process must run the Relay compiler.
                    This investment pays off in large applications where performance and correctness matter more than rapid prototyping, but it's overhead for smaller projects.
                </p>

                <p>
                    The compiler-based approach enables optimizations other libraries can't achieve: build-time query composition, perfect request deduplication, minimal cache updates.
                    However, compiler dependency means changes to data requirements require rebuilds, and debugging involves understanding generated code, not just what you wrote. This complexity is Facebook-scale engineering brought to your application.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When Relay fits">
                    <p>
                        Relay is built for applications where GraphQL is the primary data layer and performance at scale is critical.
                        If you're building products with complex data requirements, thousands of components, and teams needing guaranteed consistency, Relay's architectural opinions prevent entire classes of bugs.
                    </p>

                    <p>
                        The framework works best when you control both client and server. If you can design your GraphQL schema following Relay conventions (global object identification, connections, mutations), the framework's automation works elegantly.
                        The server-side investment is substantial but enables client-side capabilities other libraries can't match.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Relay struggles">
                    <p>
                        Small to medium applications don't benefit from Relay's complexity. The compiler, fragment system, and architectural patterns are overhead when simpler libraries suffice.
                        If your team is exploring GraphQL or building MVPs, Relay's learning curve and server requirements are premature optimization.
                    </p>

                    <p>
                        Third-party GraphQL APIs rarely follow Relay conventions. If you're consuming external GraphQL services, Relay's assumptions about global IDs, connection protocols, and mutation response shapes often don't match.
                        You can work around this with custom configurations, but at that point, Relay's value proposition weakens compared to more flexible libraries.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Relay requires senior engineering investment. The fragment composition model, compiler workflow, and server conventions aren't concepts junior developers pick up quickly.
                        Teams need GraphQL expertise, React proficiency, and willingness to learn Relay-specific patterns. This knowledge requirement is the highest among data fetching libraries.
                    </p>

                    <p>
                        The framework's smaller community compared to Apollo or React Query means fewer resources and slower ecosystem development.
                        Relay is production-proven (it powers Facebook) but requires more self-sufficiency—you'll solve problems through source code reading and first-principles thinking rather than finding solutions in community forums.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

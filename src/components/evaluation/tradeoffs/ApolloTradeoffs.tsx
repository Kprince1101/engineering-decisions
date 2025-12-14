import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ApolloTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Apollo: Tradeoffs</h2>

                <p>
                    Apollo trades setup complexity and GraphQL coupling for powerful normalized caching. The library works brilliantly when your GraphQL API follows Apollo's conventions—global IDs, typename consistency, standard mutation responses.
                    When conventions don't align, Apollo requires substantial configuration and custom cache manipulation that can be more complex than simpler libraries.
                </p>

                <p>
                    The framework is GraphQL-specific. This deep integration enables features like automatic cache updates and fragment composition, but it also means Apollo is heavyweight if you're not leveraging GraphQL's full capabilities.
                    Teams using GraphQL primarily as "flexible REST" may not benefit from Apollo's sophistication compared to lighter alternatives like urql or React Query with GraphQL support.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When Apollo fits">
                    <p>
                        Apollo excels for complex GraphQL applications with overlapping entity requests, frequent mutations, and real-time subscriptions.
                        If your app queries the same entities in different contexts and mutations need to update UI across the application, Apollo's normalized cache eliminates manual coordination.
                    </p>

                    <p>
                        The library's maturity shows in edge case handling: pagination protocols, optimistic responses, error policies, batch link configurations.
                        Large applications benefit from these features, but they come with conceptual overhead. Apollo assumes you need these capabilities—if you don't, the complexity doesn't justify itself.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Apollo struggles">
                    <p>
                        Simple GraphQL use cases don't require normalized caching. If queries are independent and mutations don't update shared entities across the UI, Apollo's normalization adds complexity without value.
                        Lighter clients (urql, React Query) provide GraphQL support with less overhead for these scenarios.
                    </p>

                    <p>
                        Apollo's cache can be opaque—understanding why a component rerendered or why cache didn't update requires debugging the normalized cache structure.
                        The DevTools help but complex cache interactions (nested updates, manual cache writes, refetch policies) remain difficult to reason about without deep Apollo knowledge.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Apollo requires GraphQL expertise beyond basic queries and mutations. Team members need to understand cache normalization, type policies, fragment composition, and link chains.
                        This knowledge requirement is significant—junior developers struggle with Apollo's concepts compared to simpler data fetching libraries.
                    </p>

                    <p>
                        The library's popularity means extensive community resources and solved problems. Most Apollo issues teams encounter are documented in GitHub issues or Stack Overflow.
                        However, this popularity is declining as simpler alternatives gain adoption, potentially affecting long-term community support and ecosystem development.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

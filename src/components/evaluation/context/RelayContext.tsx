import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RelayContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Relay: Context</h2>

                <p>
                    Relay is Facebook's GraphQL client, built alongside GraphQL itself in 2015. Unlike libraries that retrofit GraphQL onto existing patterns, Relay was designed from first principles around GraphQL's capabilities.
                    The result is a framework with strong opinions about data loading, colocation, and performance—opinions that enable powerful optimizations but require architectural commitment.
                </p>

                <p>
                    Relay's core philosophy is that components should declare their data requirements inline using fragments, and the framework should handle fetching, caching, and updates automatically.
                    This colocation pattern scales to massive applications (Facebook-scale) because data requirements are explicit and components remain portable across different query contexts.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Relay addresses the coordination problem that emerges in large GraphQL applications: how do you compose queries from component data requirements without overfetching or creating waterfall requests?
                        The framework's fragment composition system lets components declare minimal data needs, then Relay assembles optimized queries at build time.
                    </p>

                    <p>
                        The library also solves consistency at scale—Relay's normalized cache ensures that when data updates anywhere, all UI depending on that data reflects changes immediately.
                        Pagination, connection patterns, and optimistic updates are handled through conventions Relay enforces.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Relay is built for applications where GraphQL is the data layer and performance/consistency matter more than flexibility.
                        The framework requires control over both client and server—your GraphQL API must follow Relay's conventions (cursor-based pagination, global object identification, specific mutation response shapes).
                    </p>

                    <p>
                        This isn't a library you adopt incrementally. Relay's compiler, fragment system, and architectural patterns require restructuring how you build components.
                        The investment makes sense for large, long-lived applications but is overhead for smaller projects.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Relay was open-sourced in 2015 as GraphQL's reference client implementation. Its complexity scared many teams toward simpler alternatives like Apollo.
                        For years, Relay had a reputation as "too hard" despite powering Facebook's web applications successfully.
                    </p>

                    <p>
                        Relay Modern (2017) and subsequent versions improved developer experience but maintained the same architectural principles.
                        Today, Relay remains the most sophisticated GraphQL client but serves a narrower audience: teams building complex applications where Relay's optimization capabilities justify its learning curve.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

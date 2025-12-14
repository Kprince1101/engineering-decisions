import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RelayMutationSemantics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Relay: Mutation Semantics</h2>

                <p>
                    Relay mutations are declarative—you define mutation configurations specifying how the cache should update, and Relay handles the mechanics.
                    The framework provides several updater types: automatic updates for entity changes, connection updaters for lists following the connection protocol, and manual updaters for custom logic.
                    This declarative approach reduces boilerplate when conventions are followed but requires understanding Relay's mutation patterns.
                </p>

                <p>
                    Relay's compiler validates mutations at build time, catching configuration errors before runtime. Mutation responses must match declared shapes, connections must follow the protocol, and updater functions receive typed store access.
                    This type safety prevents entire classes of bugs common in imperative mutation systems but increases upfront complexity.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Optimistic updates">
                    <p>
                        Relay's <code>optimisticResponse</code> is compile-time validated against mutation response types. You provide fake data matching the expected shape, and Relay applies it to the cache immediately.
                        The normalization happens automatically—optimistic entities update the cache like real responses, with rollback built-in if the mutation fails.
                    </p>

                    <p>
                        For connection updates (adding items to lists), Relay provides <code>optimisticUpdater</code> functions that manipulate the store directly.
                        These are more powerful than optimistic responses but require imperative cache manipulation. The pattern works for complex updates but moves away from Relay's declarative strengths.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Rollback and error handling">
                    <p>
                        Relay automatically rolls back optimistic updates on mutation failure. The optimistic data is removed, manual updater changes are reverted, and the cache returns to its pre-mutation state.
                        This automatic rollback is more comprehensive than Apollo's—even manual store manipulations in <code>optimisticUpdater</code> are undone.
                    </p>

                    <p>
                        Error handling happens through mutation callbacks. Relay provides <code>onCompleted</code> and <code>onError</code>, but the library handles cache cleanup automatically.
                        This reduces error-handling boilerplate compared to libraries requiring manual rollback logic but means less control over partial failure scenarios.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Side-effect coordination">
                    <p>
                        Relay's <code>updater</code> functions receive the store and mutation payload, enabling complex cache manipulations: inserting into connections, deleting records, updating unrelated fields.
                        The API is imperative but type-safe—TypeScript ensures you access valid fields and follow store conventions.
                    </p>

                    <p>
                        The connection protocol standardizes list operations. When mutations follow Relay's conventions (edge/node structure, cursor pagination), adding/removing items from lists works declaratively.
                        This eliminates manual splice logic but requires backend cooperation—your GraphQL server must implement the protocol.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

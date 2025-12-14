import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ZustandScaleCharacteristics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Zustand: Scale Characteristics</h2>

                <p>
                    Zustand scales well in codebases that maintain discipline around conventions. Because Zustand doesn't enforce patterns, teams must establish them—how stores are structured, where updates happen, how side effects are coordinated.
                    With conventions, Zustand remains simple at scale. Without conventions, it devolves into inconsistent patterns that are hard to maintain.
                </p>

                <p>
                    The library's small API surface is an asset for small teams moving fast but can become a liability in large teams where structure prevents coordination costs.
                    Zustand trusts developers to do the right thing; Redux enforces it. The scale question is whether your team needs enforcement.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Small app vs large team behavior">
                    <p>
                        In small applications, Zustand is ideal. Minimal boilerplate, fast to implement, easy to understand.
                        Developers can be productive immediately without learning Redux patterns or dealing with action creators.
                    </p>

                    <p>
                        In large teams, Zustand requires more active coordination. Without Redux's forced structure, teams must align on: store organization, update patterns, testing strategies.
                        This alignment is achievable but requires effort—it's not automated by the library.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Refactor cost">
                    <p>
                        Zustand refactors are simpler than Redux—you're updating functions in a store, not actions, reducers, and selectors.
                        The tradeoff is less compile-time safety. In Redux, TypeScript errors guide refactors (update this action, now update this reducer). In Zustand, you must find consumers manually or rely on runtime errors.
                    </p>

                    <p>
                        For breaking changes to store APIs, Zustand provides no help—you're searching the codebase for usage.
                        This is manageable in small codebases but becomes risky in large applications where store consumers might be in unexpected places.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Accidental complexity">
                    <p>
                        Zustand has minimal accidental complexity. The library doesn't introduce middleware layers, normalization patterns, or selector libraries.
                        What you write is what you get—a store with functions. This simplicity is refreshing but means you implement any sophisticated patterns yourself.
                    </p>

                    <p>
                        For applications needing complex state coordination, you'll build abstractions on top of Zustand.
                        At some point, you're recreating Redux patterns (centralized updates, action-like functions, testing utilities) without Redux's tooling or community patterns.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Long-term maintainability">
                    <p>
                        Zustand's long-term maintainability depends on team discipline. Well-structured Zustand codebases age well—simple patterns remain simple.
                        Poorly structured Zustand codebases accumulate technical debt faster than Redux because there's less structure preventing bad patterns.
                    </p>

                    <p>
                        The library is stable and widely used, so it's unlikely to disappear or require major refactors.
                        However, Zustand knowledge is less transferable than Redux—team turnover means training new developers on your Zustand patterns, not industry-standard Redux patterns.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

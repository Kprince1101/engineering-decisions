import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JotaiScaleCharacteristics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jotai: Scale Characteristics</h2>

                <p>
                    Jotai scales differently than Redux or Zustand. The atomic model prevents monolithic state structures, which is good, but creates potential for atom proliferation, which is bad.
                    In large applications, hundreds of atoms can exist, and understanding their dependency graph becomes non-trivial. The granularity that makes Jotai powerful also makes it complex at scale.
                </p>

                <p>
                    The library works best in applications with compositional state—where state naturally decomposes into independent pieces.
                    For applications with deeply hierarchical or inherently global state, Jotai's atomic model can feel forced, leading to awkward atom structures or abandoning the atomic approach for specific state.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Small app vs large team behavior">
                    <p>
                        In small applications, Jotai's atomic model is elegant. You define atoms as needed, compose them, and enjoy automatic reactivity.
                        The library's integration with Suspense and async atoms makes modern React patterns feel natural.
                    </p>

                    <p>
                        In large teams, Jotai requires coordination around atom organization. Without conventions, atoms proliferate without clear ownership or boundaries.
                        Teams must establish patterns: where atoms live, how they're named, when to split or merge atoms. This is achievable but not automatic.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Refactor cost">
                    <p>
                        Jotai refactors can be subtle. Changing an atom's value type propagates through derived atoms and consumers.
                        TypeScript helps, but atom dependencies aren't always obvious—a component might read an atom that derives from the atom you're changing.
                    </p>

                    <p>
                        The atomic model makes local refactors easy (change one atom) but global refactors harder (atoms are scattered, not centralized like Redux slices).
                        Finding all atoms related to a feature requires understanding the dependency graph, which isn't always clear from code structure.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Accidental complexity">
                    <p>
                        Jotai introduces complexity through atom composition. Simple use cases are simple, but complex state dependencies create intricate atom graphs.
                        Debugging "why did this component rerender" requires tracing atom dependencies, which can span multiple derived atoms.
                    </p>

                    <p>
                        The library's async atom support adds conceptual overhead. Atoms can suspend, handle loading states, or derive from other async atoms.
                        This is powerful but means developers must understand React Suspense, error boundaries, and async atom lifecycle—concepts simpler libraries don't require.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Long-term maintainability">
                    <p>
                        Jotai's maintainability depends on atom organization. Well-organized atoms (clear boundaries, documented dependencies) age well.
                        Poorly organized atoms (unclear ownership, tangled dependencies) create maintenance burden—understanding what atoms do requires tracing code, not reading documentation.
                    </p>

                    <p>
                        The library is newer than Redux, so long-term patterns are still emerging. Teams adopting Jotai are betting on the atomic model's viability and accepting less community precedent.
                        This is reasonable for teams comfortable being early adopters but risky for teams wanting proven patterns.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JotaiMentalModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jotai: Mental Model</h2>

                <p>
                    Jotai's mental model is compositional: state is a collection of atoms (independent values) that can derive from other atoms.
                    Instead of thinking "I have a store with slices," you think "I have atoms that depend on each other."
                    This bottom-up approach matches React's component model better than Redux's top-down store model.
                </p>

                <p>
                    Atoms are primitives—they don't know about each other unless explicitly composed. A derived atom reads other atoms and computes a value.
                    This granularity enables precise reactivity: components subscribe only to the atoms they read, not entire slices of state.
                    The tradeoff is conceptual: you're managing relationships between atoms, not a unified state shape.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="How developers reason about state">
                    <p>
                        Jotai developers think about state as a graph of dependencies. Each atom is a node; derived atoms create edges.
                        When an atom updates, only the derived atoms depending on it recompute, and only components reading those atoms rerender.
                    </p>

                    <p>
                        This model is powerful for complex UIs where many pieces of state derive from a few primitives.
                        It's less intuitive for state that is naturally hierarchical or global—modeling "user profile" as separate atoms for name, email, avatar feels granular but awkward compared to a single user object in Redux.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Explicitness vs implicit coupling">
                    <p>
                        Jotai is implicitly coupled through atom dependencies. When atom B derives from atom A, there's no action or reducer documenting this relationship—it's in the derived atom's implementation.
                        This makes dependencies less obvious than Redux (where selectors make reads explicit) but more obvious than Context (where anything might consume anything).
                    </p>

                    <p>
                        The atomic model encourages single-responsibility atoms, which improves modularity.
                        However, debugging "why did this component rerender" requires tracing atom dependencies, which can be non-obvious in large graphs.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Learning curve and conceptual overhead">
                    <p>
                        Jotai's API is small—atom, useAtom, derived atoms—but the conceptual model is different from Redux or Zustand.
                        Developers must shift from thinking in stores to thinking in atoms, which takes time. The payoff is fine-grained reactivity without manual optimization.
                    </p>

                    <p>
                        The library integrates with React Suspense and async atoms, adding conceptual weight.
                        Teams must understand not just atoms but how atoms suspend, how to handle loading states, and how async atoms compose. This is powerful but complex—Jotai is not the simplest state library.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

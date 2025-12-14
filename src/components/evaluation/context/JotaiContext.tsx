import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JotaiContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jotai: Context</h2>

                <p>
                    Jotai is an atomic state management library for React, released in 2020. Instead of a centralized store, Jotai models state as atoms—independent units that can be composed and derived.
                    This bottom-up approach contrasts with Redux's top-down single store model, enabling more granular subscriptions and updates.
                </p>

                <p>
                    The library was created by the same author as Zustand but takes a different philosophical approach.
                    Where Zustand simplifies the Redux model, Jotai reimagines state management around React's atomic update model—each atom is like a useState that can be shared and composed across components.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Jotai addresses the performance limitations of Context and the boilerplate of Redux by making state granular by default.
                        With Context, updating one value rerenders all consumers. With Redux, you write selectors and deal with normalization. With Jotai, components subscribe only to the atoms they use.
                    </p>

                    <p>
                        The atomic model enables fine-grained reactivity without manual optimization. If a component reads three atoms, it only rerenders when those specific atoms change.
                        This eliminates the need for useMemo, selector libraries, or manual subscription management that other approaches require.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Jotai is designed for applications where state is compositional—values derive from other values, and updates need to be surgically precise.
                        It works well for complex UIs with many interdependent pieces of state that would be awkward to model in a single store.
                    </p>

                    <p>
                        The library integrates with React Suspense and Concurrent features, making it suitable for applications leveraging modern React capabilities.
                        However, this integration means Jotai assumes you're using current React versions—legacy React codebases can't adopt Jotai without upgrading.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Atomic model philosophy">
                    <p>
                        Jotai's atoms are conceptually similar to Recoil (Facebook's atomic state library) but with a simpler API and no experimental warnings.
                        The model works well when state is naturally decomposed into independent pieces, but it can feel awkward for state that is inherently global or hierarchical.
                    </p>

                    <p>
                        Unlike Redux where you think in "slices of a store," Jotai encourages thinking in "networks of atoms."
                        This shift is powerful for certain problems (derived state, async dependencies) but adds conceptual overhead compared to simpler libraries like Zustand.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

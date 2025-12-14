import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JotaiTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jotai: Tradeoffs</h2>

                <p>
                    Jotai trades centralized state for fine-grained reactivity. The atomic model enables surgical updates—components rerender only when the specific atoms they read change.
                    This precision eliminates performance optimization work but requires thinking about state as a composition of atoms rather than slices of a store. The mental model shift is substantial.
                </p>

                <p>
                    The library is designed for modern React—Suspense integration, concurrent features, async atoms. If you're using current React patterns, Jotai feels natural.
                    If you're maintaining legacy React code or avoiding Suspense, Jotai's advantages are less compelling, and its atomic model is overhead.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where Jotai shines">
                    <p>
                        Jotai excels in applications with compositional state—where values derive from other values and dependencies are complex.
                        The atomic model makes these relationships explicit and automatic. For complex UIs with interdependent state, Jotai's granularity prevents performance issues that plague Context.
                    </p>

                    <p>
                        The library works well for teams embracing modern React features. Jotai's Suspense integration, async atoms, and concurrent mode support make advanced React patterns straightforward.
                        If your team is pushing React's boundaries, Jotai provides primitives that match React's direction.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Jotai struggles">
                    <p>
                        Jotai struggles when state is naturally hierarchical or global. Modeling a user session as separate atoms for email, name, avatar, preferences feels granular but awkward.
                        For state that conceptually belongs together, Redux slices or Zustand stores are more intuitive than atom composition.
                    </p>

                    <p>
                        The library's atomic model creates complexity at scale. Large applications can have hundreds of atoms, and understanding their dependency graph requires tooling and discipline.
                        Debugging "why did this rerender" means tracing atom dependencies, which isn't always obvious from code structure.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Jotai requires team buy-in to the atomic mental model. Developers must shift from thinking in stores to thinking in atoms and compositions.
                        This isn't intuitive for teams familiar with Redux or Zustand—it's a different paradigm that takes time to internalize.
                    </p>

                    <p>
                        The library is newer than Redux or even Zustand, so community resources are less extensive. Teams encounter edge cases without established patterns.
                        This is acceptable for teams comfortable being early adopters but risky for teams wanting proven solutions.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to introduce Jotai">
                    <p>
                        Don't introduce Jotai if your team isn't using modern React patterns. Without Suspense and concurrent features, Jotai's integration advantages disappear, and you're left with a complex atomic model without corresponding benefits.
                    </p>

                    <p>
                        Avoid Jotai for simple state management. If your state is straightforward and doesn't need fine-grained reactivity, simpler libraries (Zustand, Context) are less overhead.
                        Jotai is powerful but complex—use it when you need its capabilities, not as a default choice.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

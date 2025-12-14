import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReduxToolkitTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Redux Toolkit: Tradeoffs</h2>

                <p>
                    Redux Toolkit trades initial simplicity for long-term structure. The library requires understanding actions, reducers, and middleware upfront, which is overhead for small applications.
                    The payoff comes in large codebases where Redux's patterns prevent chaos and its DevTools enable debugging at scale. The question is whether you're optimizing for current team size or future scale.
                </p>

                <p>
                    RTK modernizes Redux without abandoning its core architecture. This means you get better ergonomics (less boilerplate) while maintaining Redux's strengths (time-travel debugging, middleware, predictable state updates).
                    However, RTK is still Redux—if Redux's mental model doesn't fit your team or application, RTK won't change that.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where Redux Toolkit shines">
                    <p>
                        RTK excels in large applications with complex state coordination. When multiple teams work on interconnected features, Redux's explicit architecture creates shared patterns.
                        The DevTools are unmatched for debugging production issues, making RTK valuable in applications where understanding user behavior is critical.
                    </p>

                    <p>
                        RTK works well for teams that value structure over flexibility. If you want enforced patterns, centralized state, and industry-standard conventions, RTK provides this out of the box.
                        The learning curve pays off through consistency—every developer follows similar patterns.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Redux Toolkit struggles">
                    <p>
                        RTK is overhead for simple applications. If your state is mostly server-driven (via React Query) or component-local, Redux's architecture is premature.
                        Smaller teams moving fast often find lighter libraries (Zustand, Jotai) better match their velocity needs.
                    </p>

                    <p>
                        RTK's Redux heritage means it carries conceptual weight even with improved APIs. Developers must understand the action/reducer model, middleware, and selectors.
                        For teams wanting minimal state management, this is more conceptual overhead than necessary.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        RTK benefits from Redux's ecosystem and community. Most React developers have encountered Redux, making knowledge transfer easier.
                        Hiring is simpler—"React/Redux experience" is a common requirement. Documentation and solved problems are extensive.
                    </p>

                    <p>
                        However, RTK requires team buy-in to Redux patterns. If developers resist the action/reducer model or want more flexibility, RTK feels constraining.
                        The library works best when teams embrace structure and don't view it as bureaucracy.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to introduce Redux Toolkit">
                    <p>
                        Don't introduce RTK if your state is primarily server-driven. React Query or SWR handle async state better than Redux thunks.
                        Don't introduce RTK in small applications without complex coordination—Context or Zustand are simpler for straightforward state sharing.
                    </p>

                    <p>
                        Avoid RTK if your team lacks experience with Redux patterns and timelines are tight. The learning curve is real, and forcing Redux adoption without team understanding creates resistance.
                        Choose simpler libraries first; migrate to RTK when complexity justifies it.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

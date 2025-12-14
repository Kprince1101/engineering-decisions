import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ContextOnlyScaleCharacteristics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Context: Scale Characteristics</h2>

                <p>
                    Context scales poorly beyond a certain complexity threshold. What starts as simple state distribution becomes a performance and maintainability problem as applications grow.
                    Multiple contexts proliferate, performance optimization patterns emerge (split contexts, useMemo wrappers), and the simplicity that made Context appealing disappears.
                </p>

                <p>
                    The scale issue isn't Context itself but what teams build on top of it. When applications outgrow simple Context usage, teams implement custom solutions—selector patterns, subscription mechanisms, optimization layers.
                    At this point, you're maintaining a custom state library instead of using a proven one.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Small app vs large team behavior">
                    <p>
                        In small applications, Context is perfect. You need to share theme, locale, or auth state—Context does this with minimal code.
                        The lack of structure doesn't matter because the state is simple and changes infrequently.
                    </p>

                    <p>
                        In large teams, Context's lack of structure creates friction. Without conventions, every developer creates contexts differently.
                        Some use useReducer, some useState, some custom hooks. There's no shared vocabulary or pattern, making code reviews and onboarding harder.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Refactor cost">
                    <p>
                        Context refactors can be risky because dependencies are implicit. A component might consume context deep in its implementation, and moving that component outside the Provider breaks it.
                        Unlike state libraries where imports make dependencies explicit, Context dependencies are runtime.
                    </p>

                    <p>
                        Changing context value shapes means finding all consumers, which is harder than finding Redux selector usage or Zustand hook calls.
                        The implicit nature of Context makes refactors less safe—you discover breaks at runtime, not compile time.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Accidental complexity">
                    <p>
                        Context introduces accidental complexity through performance optimization. The "rerender all consumers on any change" behavior forces teams to split contexts or add useMemo.
                        These patterns aren't obvious from Context's basic API, and teams rediscover them through performance problems.
                    </p>

                    <p>
                        Advanced Context usage (selector patterns with useContext, subscription-based updates, memo wrappers) becomes complex enough that state libraries would be simpler.
                        You're building state management primitives instead of using library-provided ones.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Long-term maintainability">
                    <p>
                        Context's long-term maintainability depends on application size. For simple state distribution, Context ages well—the pattern is React-native and stable.
                        For complex state management, Context patterns become technical debt as they diverge from standard solutions.
                    </p>

                    <p>
                        The challenge is knowing when to migrate. Teams often realize they need a state library after implementing half of one on Context.
                        At that point, migrating is expensive because Context usage is woven throughout the application. Earlier adoption of a library would have been simpler.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

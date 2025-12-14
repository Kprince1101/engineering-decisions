import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ContextOnlyContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Context: Context</h2>

                <p>
                    React Context (createContext) has existed since React 16.3 (2018) as a built-in mechanism for passing data through the component tree without props drilling.
                    Context is often discussed alongside state management libraries, but it's not a state library—it's a dependency injection mechanism. State lives in useState or useReducer; Context just makes it accessible.
                </p>

                <p>
                    The distinction matters. Context doesn't optimize rerenders, manage subscriptions, or provide middleware. It distributes values.
                    Many applications use Context as their only "state management" solution, which works until performance or debugging becomes a concern.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="What Context actually does">
                    <p>
                        Context creates a way for descendant components to access values without passing props through every intermediate component.
                        You create a context, provide a value at some level of the tree, and consume that value in any descendant with useContext.
                    </p>

                    <p>
                        The primary benefit is developer ergonomics—eliminating props drilling makes code cleaner.
                        The primary cost is render optimization: when a Context value changes, every component consuming that context rerenders, even if they only use part of the value.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Common misconceptions">
                    <p>
                        Context is not a replacement for Redux or state libraries. It doesn't manage state—it distributes it.
                        You still need useState, useReducer, or another mechanism to create and update state. Context just makes that state accessible without props.
                    </p>

                    <p>
                        Context doesn't solve state management complexity. If your state logic is complex, it's still complex in Context.
                        What state libraries provide is structure, debugging tools, middleware, and performance optimizations that Context doesn't offer.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Context is sufficient">
                    <p>
                        For many applications, Context + useReducer provides enough structure without external dependencies.
                        If your state changes infrequently (theme, auth, locale), Context rerenders don't matter. If your state is simple, Context's lack of structure is fine.
                    </p>

                    <p>
                        The decision to use Context alone should be deliberate, not default. If you find yourself optimizing Context performance with useMemo, splitting contexts, or writing complex reducers, you're rebuilding what state libraries provide.
                        At that point, adopting a library eliminates custom complexity.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

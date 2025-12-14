import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReduxToolkitContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Redux Toolkit: Context</h2>

                <p>
                    Redux emerged in 2015 to solve shared state management in large React applications. The original Redux API required extensive boilerplate—action creators, reducers, action types, manual immutability—which worked but slowed development.
                    Redux Toolkit (RTK) was released in 2019 as the official recommended way to use Redux, reducing boilerplate while preserving Redux's core architecture.
                </p>

                <p>
                    RTK addresses the legitimate criticisms of classic Redux without abandoning its mental model: centralized state, unidirectional data flow, time-travel debugging.
                    The library provides utilities for store setup, slice creation, and async logic that eliminate repetitive code while maintaining Redux's predictability guarantees.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Why state management libraries exist">
                    <p>
                        React's built-in state (useState, useReducer, Context) works well for component-local concerns and simple shared state.
                        State management libraries become relevant when applications have complex cross-component coordination, optimistic updates, undo/redo, or need to inspect state changes for debugging or analytics.
                    </p>

                    <p>
                        The decision to introduce a state library is architectural. Small applications rarely need them—Context and props drilling are simpler.
                        Large applications benefit from explicit state management when implicit coupling through Context causes performance issues or makes data flow hard to trace.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When React state is sufficient">
                    <p>
                        Most React applications don't need Redux or any state library. If your state is mostly server-driven (fetched from APIs), a data fetching library like React Query often suffices.
                        If your state is component-local or only shared between a parent and children, useState and props work fine.
                    </p>

                    <p>
                        State libraries add value when you need: predictable state updates across many components, time-travel debugging, complex state transformations, or when Context rerenders become a performance problem.
                        Without these needs, a state library is premature complexity.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical evolution">
                    <p>
                        Redux dominated React state management from 2015-2019 despite its boilerplate because it solved real problems: predictable updates, DevTools, middleware for async logic.
                        As React added Hooks (2019), lighter alternatives emerged—Zustand, Jotai, Recoil—that provided similar capabilities with less ceremony.
                    </p>

                    <p>
                        Redux Toolkit was Redux's response: keep the architecture (single store, reducers, actions) but reduce boilerplate to competitive levels.
                        The ecosystem has since fragmented—Redux for teams wanting explicit structure, atomic libraries (Jotai) for granular updates, signals for fine-grained reactivity, and Context for simple cases.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

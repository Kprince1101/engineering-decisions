import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ZustandContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Zustand: Context</h2>

                <p>
                    Zustand (German for "state") was created in 2019 as a minimal alternative to Redux for React applications. The library provides a single hook-based API for creating and consuming stores, avoiding the ceremony of actions, reducers, and providers.
                    Zustand's philosophy is simplicity: give developers the smallest API surface that still enables shared state, subscriptions, and middleware.
                </p>

                <p>
                    The library works by creating stores outside React's component tree—similar to Redux but without requiring a Provider.
                    This approach reduces boilerplate and makes stores feel more like plain JavaScript modules, but it also means Zustand doesn't integrate with React DevTools the way Context does.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Zustand addresses Redux fatigue: teams wanted centralized state without the boilerplate of action creators, reducers, and type definitions.
                        The library lets you create a store with a single function call and consume it with a hook—no Provider wrapping, no connect HOCs, no dispatch/action patterns.
                    </p>

                    <p>
                        For small to medium applications, Zustand's API feels appropriately sized. You get shared state, subscriptions, and middleware without the architectural overhead of Redux.
                        The tradeoff is less structure—Zustand doesn't enforce patterns, so teams must establish conventions themselves.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Zustand is designed for applications that need shared state but not the full Redux architecture.
                        It works well when you have state that multiple unrelated components need to access, but you don't need time-travel debugging, strict action logging, or complex middleware chains.
                    </p>

                    <p>
                        The library is deliberately unopinionated. It provides primitives (stores, subscriptions, middleware) but doesn't dictate how you organize state or structure updates.
                        This flexibility is valuable for teams that want control, but it can lead to inconsistent patterns in larger codebases.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem position">
                    <p>
                        Zustand has become popular in the React ecosystem as the "just enough" state library—lighter than Redux, more structured than Context.
                        It's particularly common in projects that started with Context, hit performance issues, and wanted a solution without adopting Redux's conceptual overhead.
                    </p>

                    <p>
                        The library's small bundle size and minimal API make it appealing for component libraries and micro-frontends where Redux feels too heavy.
                        However, this simplicity means Zustand lacks the extensive tooling, middleware ecosystem, and community patterns that Redux provides.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

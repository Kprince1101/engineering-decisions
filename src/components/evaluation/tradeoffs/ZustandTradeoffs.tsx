import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ZustandTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Zustand: Tradeoffs</h2>

                <p>
                    Zustand trades structure for simplicity. The library's minimal API makes it easy to adopt and productive immediately, but the lack of enforced patterns means teams must establish conventions themselves.
                    For disciplined teams, this flexibility is freeing. For teams without strong patterns, Zustand can lead to inconsistent approaches that become technical debt.
                </p>

                <p>
                    The library occupies a middle ground: more structured than Context, less opinionated than Redux.
                    This makes Zustand appealing for teams outgrowing Context but not needing Redux's full architecture. The question is whether your team needs more structure or less—Zustand assumes you want less.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where Zustand shines">
                    <p>
                        Zustand excels in small to medium applications where developer velocity matters. The library gets out of your way—create a store, use a hook, ship features.
                        For teams that hit Context performance issues but don't want Redux complexity, Zustand is the obvious choice.
                    </p>

                    <p>
                        The library works well for component libraries or micro-frontends where bundle size matters. Zustand is tiny compared to Redux, and its no-Provider architecture simplifies integration.
                        For applications where state management is a small part of the codebase, Zustand's minimalism is appropriate.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Zustand struggles">
                    <p>
                        Zustand struggles in large codebases without conventions. The flexibility that makes Zustand easy to adopt becomes a liability when patterns diverge across teams.
                        Without enforced structure, Zustand stores can become inconsistent—different update patterns, different testing approaches, different organization strategies.
                    </p>

                    <p>
                        The library's debugging tools are less sophisticated than Redux. If time-travel debugging or detailed action logs matter for your application, Zustand's optional DevTools integration doesn't match Redux's built-in capabilities.
                        Teams needing production observability must build custom instrumentation.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        Zustand has low onboarding friction. The API is small enough to learn in an afternoon, and developers familiar with React hooks understand Zustand immediately.
                        However, this simplicity means less shared knowledge—Zustand patterns are team-specific, not industry-standard.
                    </p>

                    <p>
                        The library requires discipline. Without Redux's enforced patterns, teams must establish conventions and maintain them through code review and documentation.
                        This works for senior teams but can lead to inconsistency in less experienced groups.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to introduce Zustand">
                    <p>
                        Don't introduce Zustand if your application is small enough for Context. Zustand is better than Context at scale, but for simple state distribution, Context is simpler—no dependencies, React-native patterns.
                    </p>

                    <p>
                        Avoid Zustand if you need Redux's debugging capabilities or middleware ecosystem. Zustand can integrate with Redux DevTools, but it's not the same as Redux's native support.
                        If time-travel debugging or detailed state logging is critical, Redux is the better choice.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

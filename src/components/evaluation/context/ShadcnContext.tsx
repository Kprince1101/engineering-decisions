import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function ShadcnContext() {
    return (
        <ContentContainer>
            <SectionBlock title="shadcn/ui: Context">
                <SubsectionBlock heading="What Problem shadcn/ui Solves">
                    <p>
                        shadcn/ui addresses the ownership problem inherent in component libraries. Instead of
                        installing a dependency you don't control, you copy components directly into your codebase.
                        This avoids abstraction leakage, version lock-in, and the friction of working around
                        opinionated APIs when your needs diverge.
                    </p>
                    <p>
                        Built on Radix UI primitives and Tailwind CSS, shadcn/ui provides accessible, unstyled
                        building blocks that you style and maintain yourself. You're not using a library—you're
                        adopting a component pattern and taking full responsibility for it.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ideal Team Characteristics">
                    <ul>
                        <li><strong>Frontend fundamentals:</strong> Teams comfortable reading, modifying, and debugging component code</li>
                        <li><strong>Design system ownership:</strong> Teams that already have or are building a design system and need components to match it</li>
                        <li><strong>Long-term thinking:</strong> Teams willing to maintain UI primitives as internal code, not external dependencies</li>
                        <li><strong>Tailwind familiarity:</strong> Teams already using Tailwind or willing to adopt utility-first CSS</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Where shadcn/ui Fits Best">
                    <ul>
                        <li>Long-lived products where component evolution is expected and valued</li>
                        <li>Design-system-driven organizations with dedicated frontend or design ops teams</li>
                        <li>Projects requiring full control over markup, styling, and behavior</li>
                        <li>Environments where dependency management and upgrade risk are serious concerns</li>
                        <li>Teams that view components as owned assets, not rented abstractions</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Where shadcn/ui Is a Poor Fit">
                    <ul>
                        <li>Teams seeking rapid scaffolding with minimal customization</li>
                        <li>Small teams without deep frontend expertise or time to maintain components</li>
                        <li>Prototypes, MVPs, or short-lived applications where speed trumps ownership</li>
                        <li>Teams that expect batteries-included patterns (loading states, validation, form utilities)</li>
                        <li>Projects not using Tailwind or unwilling to adopt utility-first CSS</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Philosophical Stance">
                    <p>
                        shadcn/ui is <strong>ownership-first</strong>. The copy-paste model means you own the code
                        forever. There are no breaking changes because there's no dependency to upgrade. You modify
                        components to fit your needs without fighting an abstraction.
                    </p>
                    <p>
                        This approach assumes maturity. You need to understand Radix UI's headless primitives,
                        Tailwind's utility classes, and React patterns like composition and controlled components.
                        If your team lacks this foundation, shadcn/ui will feel like busywork instead of empowerment.
                    </p>
                    <p>
                        The tradeoff is clear: you gain control and long-term flexibility, but you assume maintenance
                        burden and the responsibility to evolve components as your product grows. This is not a library—it's
                        a starting point for a component system you will own.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

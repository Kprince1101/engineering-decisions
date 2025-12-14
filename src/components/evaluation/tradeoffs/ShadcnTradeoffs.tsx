import { ContentContainer, SectionBlock, SubsectionBlock, CalloutNote } from '@/components/content';

export function ShadcnTradeoffs() {
    return (
        <ContentContainer>
            <SectionBlock title="shadcn/ui: Tradeoffs">
                <SubsectionBlock heading="Design Drift & Consistency Risk">
                    <p>
                        <strong>Lack of enforced design tokens:</strong> shadcn/ui components use Tailwind utilities directly.
                        While your tokens live in <code>tailwind.config.js</code>, nothing prevents developers from using
                        arbitrary values (<code>bg-[#ff0000]</code>, <code>p-[13px]</code>) that bypass the token system.
                        This happens more often than teams expect, especially under deadline pressure.
                    </p>
                    <p>
                        <strong>Visual drift across teams:</strong> In organizations with multiple teams or product areas,
                        components diverge. Team A modifies Button to add analytics tracking. Team B adds a loading state.
                        Team C changes the focus ring. Six months later, you have three Button implementations with incompatible
                        APIs. This is not theoretical—it's the default outcome without active governance.
                    </p>
                    <p>
                        <strong>Governance challenges in large orgs:</strong> Maintaining consistency requires centralized
                        ownership, regular component audits, and enforcement through code review. Large organizations struggle
                        with this. Without a dedicated design systems team treating components as critical infrastructure,
                        shadcn/ui leads to fragmentation, not consistency.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Maintenance & Bus Factor">
                    <p>
                        <strong>Knowledge concentration risk:</strong> Components live in your codebase, which means someone
                        on your team must understand them deeply. If one or two people own the component system and they leave,
                        you lose institutional knowledge. New maintainers must reverse-engineer decisions, patterns, and edge cases.
                    </p>
                    <p>
                        <strong>Onboarding difficulty:</strong> New developers can't just "read the docs" for your component
                        library—they need to read your code, understand your patterns, learn your Tailwind config, and grasp
                        your accessibility standards. This is slower and more expensive than onboarding to an established library.
                        For teams with high turnover, this cost compounds.
                    </p>
                    <p>
                        <strong>Cost of losing key contributors:</strong> If the engineer who set up your component system leaves,
                        the team loses context on why certain decisions were made, how Radix primitives are composed, and what
                        edge cases exist. This is mitigated by documentation, but documentation requires discipline most teams lack.
                    </p>
                    <p>
                        <strong>Documentation burden:</strong> You must document your component APIs, composition patterns, and
                        usage guidelines internally. This is real work that competes with feature development. Teams that skip
                        this documentation end up with tribal knowledge, slow onboarding, and inconsistent usage.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Velocity vs Sustainability">
                    <p>
                        <strong>Slower initial development:</strong> shadcn/ui does not accelerate initial development. Building
                        a feature with composed, owned components takes longer than using batteries-included libraries. You wire
                        form state manually. You compose dialogs explicitly. You handle loading states yourself. This is overhead.
                    </p>
                    <p>
                        <strong>Long-term payoff vs short-term friction:</strong> The ownership model pays off over years, not
                        months. If your product has a 3+ year lifespan and evolving design requirements, owning components is
                        valuable. If you're building an MVP, a prototype, or a short-lived project, the upfront cost isn't justified.
                    </p>
                    <p>
                        <strong>Impact on delivery timelines:</strong> Teams switching from batteries-included libraries to shadcn/ui
                        experience a velocity drop. Features that took days now take weeks. This is especially painful if leadership
                        expects consistent delivery speed. Plan for this. Communicate it. Budget for it.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Accessibility Regression Risk">
                    <p>
                        <strong>Responsibility beyond Radix primitives:</strong> Radix handles interactive primitives, but you're
                        responsible for everything else—semantic HTML, label associations, heading hierarchy, focus indicators,
                        screen reader announcements. Developers unfamiliar with accessibility will introduce regressions without
                        realizing it.
                    </p>
                    <p>
                        <strong>Testing requirements:</strong> Because you own the components, you must test them. Automated
                        accessibility testing (axe, Lighthouse) catches obvious issues, but subtle problems (incorrect focus order,
                        missing live regions, broken keyboard navigation) require manual testing with screen readers and keyboard-only
                        navigation. This is time-consuming and requires expertise.
                    </p>
                    <p>
                        <strong>Risk of subtle regressions:</strong> A developer modifying a Dialog component might inadvertently
                        break focus trapping by restructuring markup. Another might remove an ARIA attribute while refactoring.
                        These regressions are invisible in visual testing and only caught through accessibility audits or user reports.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When Not to Choose shadcn/ui">
                    <p>
                        Be explicit: shadcn/ui is a poor fit for the following scenarios.
                    </p>
                    <ul>
                        <li>
                            <strong>Small or junior-heavy teams:</strong> If your team lacks senior frontend engineers with deep
                            React, Tailwind, and accessibility knowledge, shadcn/ui will slow you down. Components require maintenance,
                            governance, and expertise. Without that foundation, you'll build a fragile system.
                        </li>
                        <li>
                            <strong>Rapid prototypes or MVPs:</strong> If you need to ship quickly and validate ideas, shadcn/ui's
                            ownership model is overhead you don't need. Use a batteries-included library (Mantine, Chakra, MUI) to
                            move fast, then migrate later if the product survives.
                        </li>
                        <li>
                            <strong>Teams without design leadership:</strong> If your team lacks a design system, design ops, or
                            strong design-engineering collaboration, shadcn/ui provides no structure. You'll end up with inconsistent
                            components and no clear direction. Use a library with opinionated defaults.
                        </li>
                        <li>
                            <strong>Environments needing fast, consistent delivery:</strong> If your organization prioritizes feature
                            velocity over long-term maintainability, shadcn/ui will frustrate stakeholders. The upfront cost of
                            composing components and maintaining consistency competes with shipping features.
                        </li>
                        <li>
                            <strong>Orgs unwilling to invest in internal UI ownership:</strong> shadcn/ui assumes you treat UI components
                            as critical infrastructure worth investing in. If your organization views components as "just use a library,"
                            the ownership model won't have organizational support. Components will rot, drift, and become technical debt.
                        </li>
                        <li>
                            <strong>Projects not using Tailwind:</strong> shadcn/ui is built on Tailwind. If your team uses CSS modules,
                            styled-components, or CSS-in-JS, shadcn/ui is not an option. The entire model assumes Tailwind's utility-first
                            approach.
                        </li>
                        <li>
                            <strong>Teams that need "just works" solutions:</strong> If your team wants components that handle loading
                            states, validation, form utilities, and notifications out of the box, shadcn/ui is the wrong choice. It provides
                            primitives, not solutions. You build the solutions yourself.
                        </li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="What shadcn/ui Does Well">
                    <p>
                        To balance the tradeoffs, acknowledge where shadcn/ui excels:
                    </p>
                    <ul>
                        <li>Long-lived products with evolving design requirements and dedicated frontend teams</li>
                        <li>Organizations with design systems teams that treat UI components as owned infrastructure</li>
                        <li>Teams comfortable with Tailwind, Radix, and composition-first patterns</li>
                        <li>Projects where dependency management, upgrade risk, and long-term maintainability outweigh short-term velocity</li>
                        <li>Teams willing to invest in documentation, governance, and component stewardship</li>
                    </ul>
                    <p>
                        If these describe your context, shadcn/ui is worth serious consideration. If they don't, choose a library
                        with more abstraction and less ownership burden.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

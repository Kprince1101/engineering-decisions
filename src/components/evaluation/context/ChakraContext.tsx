import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ChakraContext() {
    return (
        <SectionBlock title="Chakra UI: Context">
            <SubsectionBlock heading="What Problem Chakra UI Solves">
                <p>
                    Chakra UI addresses the accessibility and theming burden that many teams face when building
                    production applications. It provides accessible component primitives with a theme-provider
                    model, allowing teams to build consistent UIs without manually implementing ARIA patterns
                    or managing design tokens across components.
                </p>
                <p>
                    Built on <strong>style props</strong> rather than utility classes, Chakra UI offers a CSS-in-JS
                    approach that feels natural to React developers. Components accept style props directly
                    (<code>bg="blue.500"</code>, <code>p={4}</code>), making customization intuitive without leaving JSX.
                    The theme system centralizes design decisions while maintaining component-level flexibility.
                </p>
                <p>
                    Chakra UI sits between batteries-included libraries like Mantine and ownership-first approaches
                    like shadcn/ui. You get accessible defaults and a theme system, but you retain control over
                    composition and styling decisions. It's opinionated about accessibility, flexible about design.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Ideal Team Characteristics">
                <ul>
                    <li><strong>Accessibility-first mindset:</strong> Teams where WCAG compliance and keyboard navigation are non-negotiable requirements</li>
                    <li><strong>Design-system awareness:</strong> Teams that understand design tokens (colors, spacing, typography) and want centralized control</li>
                    <li><strong>CSS-in-JS familiarity:</strong> Teams comfortable with style props and runtime styling, or willing to adopt this pattern</li>
                    <li><strong>Moderate customization needs:</strong> Teams that need more flexibility than Material UI but less ownership burden than shadcn/ui</li>
                    <li><strong>Migration context:</strong> Teams migrating away from Material UI or Bootstrap looking for modern, accessible alternatives</li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="Where Chakra UI Fits Best">
                <ul>
                    <li>Product applications where accessibility is a legal or compliance requirement</li>
                    <li>Internal tools that need professional polish without extensive custom design</li>
                    <li>Startups building MVPs that need to scale into production-grade applications</li>
                    <li>Teams with moderate design requirements—custom enough to need theming, not custom enough to warrant full ownership</li>
                    <li>Applications targeting diverse user bases where keyboard navigation and screen reader support are critical</li>
                    <li>Design-system-driven teams that want a theme provider without building one from scratch</li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="Where Chakra UI Is a Poor Fit">
                <ul>
                    <li>Highly custom, brand-driven UIs where every component is a bespoke design implementation</li>
                    <li>Tailwind-first teams deeply invested in utility-class workflows and build-time CSS generation</li>
                    <li>Teams wanting full markup ownership and zero runtime styling overhead</li>
                    <li>Extremely performance-sensitive surfaces where runtime CSS-in-JS introduces measurable overhead</li>
                    <li>Projects requiring static CSS extraction for CDN optimization or strict CSP policies</li>
                    <li>Teams that view components as code to own, not dependencies to configure</li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="Philosophical Stance">
                <p>
                    Chakra UI is <strong>theme-driven and accessibility-first</strong>. The theme provider is central
                    to the architecture—design tokens flow from a single source of truth into every component. Style
                    props offer flexibility without requiring utility-class familiarity, making customization approachable
                    for teams accustomed to CSS-in-JS patterns.
                </p>
                <p>
                    Accessibility is not optional. Every component ships with proper ARIA attributes, keyboard navigation,
                    and focus management. This is a strength for teams that lack accessibility expertise, but it also means
                    you're working within Chakra's accessibility model. If you need to deviate from standard patterns,
                    you're fighting the framework.
                </p>
                <p>
                    The tradeoff is between <strong>flexibility and abstraction</strong>. Chakra UI is more flexible than
                    Material UI but more abstracted than shadcn/ui. You can customize extensively via themes and style props,
                    but you're still using Chakra's components, not owning them. This is productive for teams that want
                    guardrails without full ownership burden, but limiting for teams that need complete control over markup
                    and styling implementation.
                </p>
                <p>
                    Chakra UI assumes you value <strong>developer experience and accessibility defaults</strong> over
                    bundle size optimization and static CSS extraction. If those assumptions align with your priorities,
                    Chakra UI is a pragmatic choice. If not, you'll find the runtime styling overhead and abstraction
                    layers frustrating.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

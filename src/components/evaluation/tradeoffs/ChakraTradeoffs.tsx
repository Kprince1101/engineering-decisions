import { SectionBlock, SubsectionBlock, CalloutNote } from '@/components/content';

export function ChakraTradeoffs() {
    return (
        <SectionBlock title="Chakra UI: Tradeoffs">
            <SubsectionBlock heading="Runtime Performance & Scale">
                <p>
                    <strong>CSS-in-JS overhead on large surfaces:</strong> Chakra's runtime styling becomes measurable
                    on data-heavy UIs. Dashboards with hundreds of components, tables with thousands of rows, or grids
                    with complex nesting incur style computation cost on every render. This overhead is small per component
                    but compounds at scale. Teams with performance budgets or low-end device support often hit this ceiling.
                </p>
                <p>
                    <strong>Cost of frequent re-renders:</strong> In interactive UIs where state changes trigger re-renders
                    (live updating dashboards, real-time collaboration tools, animation-heavy interfaces), Chakra's runtime
                    styling recalculates on every render. This can degrade frame rates and responsiveness. Teams optimizing
                    for 60fps interactions or smooth animations often find Chakra's abstraction incompatible with their
                    performance goals.
                </p>
                <p>
                    <strong>SSR and static generation friction:</strong> Chakra's runtime CSS-in-JS conflicts with Next.js's
                    static optimization goals. While SSR works, it requires extracting styles on the server and hydrating on
                    the client, increasing the initial HTML payload and time-to-interactive. Teams prioritizing static
                    generation, aggressive CDN caching, or minimal JavaScript payloads find this overhead counterproductive.
                </p>
                <p>
                    <strong>When this becomes unacceptable:</strong> If your app targets low-bandwidth users, prioritizes
                    Lighthouse scores above 95, or runs on constrained devices (older phones, tablets, kiosks), Chakra's
                    runtime cost may violate your performance budget. Profiling reveals the cost, but mitigating it requires
                    ejecting from Chakra or accepting the tradeoff.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Design-System Governance Risk">
                <p>
                    <strong>Token sprawl without enforcement:</strong> Chakra's theme system is JavaScript objects, not
                    typed contracts. Developers can reference tokens that don't exist, create arbitrary values
                    (<code>bg="#ff0000"</code> instead of <code>bg="red.500"</code>), or inconsistently apply spacing.
                    Without linting, code review, and governance, token usage drifts. This undermines the consistency
                    Chakra's theme system promises.
                </p>
                <p>
                    <strong>Theme config complexity at scale:</strong> As design systems evolve, Chakra's theme object
                    grows—component variants, semantic tokens, responsive breakpoints, color modes. Large themes become
                    hundreds of lines of nested JavaScript. Managing this complexity, ensuring consistency across variants,
                    and avoiding duplication requires dedicated ownership. Teams without design systems engineers struggle
                    to maintain coherent themes.
                </p>
                <p>
                    <strong>Lack of enforced semantic tokens:</strong> Chakra doesn't enforce semantic token usage. A
                    developer can use <code>colors.blue.500</code> instead of <code>colors.brand.primary</code>, bypassing
                    your semantic layer. This makes rebranding or theme changes fragile—you can't globally swap semantic
                    tokens if components reference raw color values. Teams need linting rules and vigilance to enforce this.
                </p>
                <p>
                    <strong>Multi-brand theme maintenance burden:</strong> While Chakra supports runtime theme switching,
                    maintaining multiple brand themes (ensuring token parity, testing visual consistency, handling edge cases)
                    is significant work. Each theme must be validated, tested, and kept in sync with design updates. For
                    organizations with 3+ brands, this governance overhead compounds.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Abstraction Limits">
                <p>
                    <strong>When props are no longer enough:</strong> Chakra's prop-based customization works for standard
                    use cases, but highly custom designs hit friction. Non-standard layouts, complex animations, or brand-specific
                    interactions require working around Chakra via the <code>sx</code> prop, <code>styled</code> API, or custom
                    components. At this point, Chakra's abstraction becomes a constraint, not a convenience.
                </p>
                <p>
                    <strong>Friction with custom layouts and animations:</strong> Chakra components enforce specific DOM
                    structures. Modal has a fixed layout (overlay, content, header, body, footer). If your design requires
                    a different structure or custom animations, you're rewriting the component or using lower-level primitives.
                    This negates the value of Chakra's abstraction—you're paying the runtime cost without the convenience.
                </p>
                <p>
                    <strong>Component variant system limitations:</strong> Defining custom variants via theme overrides is
                    powerful but limited. Complex variants with conditional logic, nested overrides, or responsive behavior
                    become unwieldy. The theme API is flexible but not infinitely so. Teams with extremely custom design
                    requirements often abandon Chakra's variant system and build custom components entirely.
                </p>
                <p>
                    <strong>Ejection cost from Chakra components:</strong> When teams hit Chakra's limits, ejecting is
                    expensive. You can't gradually migrate—you're either using Chakra's Modal or building your own. There's
                    no middle ground. Teams end up with a hybrid codebase: Chakra for simple components, custom code for
                    complex ones. This inconsistency increases cognitive load and onboarding difficulty.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Accessibility Regression Risk">
                <p>
                    <strong>Guarantees apply only to Chakra components:</strong> Chakra's accessibility is automatic for
                    its components, but custom components built with Box, Flex, and Stack have no accessibility guarantees.
                    A custom dropdown, carousel, or command palette requires manual ARIA attributes, keyboard navigation,
                    and focus management. Teams often assume "we're using Chakra, so we're accessible," but this only holds
                    for Chakra components.
                </p>
                <p>
                    <strong>Custom code can silently break accessibility:</strong> When developers build custom UI using
                    Chakra's layout primitives, accessibility regressions are invisible. A custom modal built from Box
                    won't trap focus. A custom select won't announce options to screen readers. These issues aren't caught
                    by visual testing and require dedicated accessibility audits to surface.
                </p>
                <p>
                    <strong>Testing burden shifts back to the team:</strong> While Chakra components are tested for
                    accessibility, your custom code isn't. Teams must implement automated testing (axe, jest-axe) and
                    manual validation (keyboard navigation, screen reader testing). For teams without accessibility
                    expertise, this burden is significant and often underestimated.
                </p>
                <p>
                    <strong>Semantic HTML requires discipline:</strong> Chakra's layout components (Box, Flex, Grid) render
                    divs by default. Developers must use the <code>as</code> prop to render semantic elements
                    (<code>&lt;Box as="section"&gt;</code>). If teams skip this—and they often do under pressure—the app
                    becomes div soup, harming accessibility and SEO. Chakra enables semantic HTML but doesn't enforce it.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="When Not to Choose Chakra UI">
                <p>
                    Be explicit: Chakra UI is a poor fit for the following scenarios.
                </p>
                <ul>
                    <li>
                        <strong>Performance-critical dashboards or data-heavy UIs:</strong> If your app renders thousands
                        of components, updates frequently, or targets low-end devices, Chakra's runtime CSS-in-JS will
                        introduce measurable overhead. Teams with strict performance budgets should choose static CSS
                        solutions or lighter abstractions.
                    </li>
                    <li>
                        <strong>Tailwind-first or utility-first teams:</strong> If your team is deeply invested in Tailwind's
                        utility-class workflow and build-time CSS generation, Chakra's runtime style props and CSS-in-JS
                        will feel foreign. The mental models don't align. Stick with shadcn/ui or other Tailwind-based solutions.
                    </li>
                    <li>
                        <strong>Teams requiring full markup ownership:</strong> If your design system demands complete control
                        over DOM structure, class names, and rendering logic, Chakra's abstraction is too opaque. You're
                        configuring components via props, not owning their implementation. Use shadcn/ui or build components
                        from scratch.
                    </li>
                    <li>
                        <strong>Highly bespoke, brand-driven products:</strong> If every component is a custom design with
                        unique interactions, animations, and layouts, Chakra's abstraction fights you. You'll spend more time
                        working around Chakra than benefiting from it. Custom component libraries built on headless primitives
                        are a better fit.
                    </li>
                    <li>
                        <strong>Static site generation with aggressive caching:</strong> If your app prioritizes static HTML
                        generation, CDN caching, and minimal client-side JavaScript, Chakra's runtime styling conflicts with
                        these goals. The SSR overhead and hydration cost undermine static optimization strategies.
                    </li>
                    <li>
                        <strong>Organizations unwilling to accept runtime styling costs:</strong> If your organization has
                        strict performance budgets, Lighthouse score requirements above 95, or mandates minimal JavaScript
                        payloads, Chakra's baseline cost (ChakraProvider, Emotion runtime, theme utilities) may be prohibitive.
                        Evaluate whether the theming convenience justifies the cost.
                    </li>
                    <li>
                        <strong>Teams without design system ownership:</strong> Chakra's theme system requires active maintenance—
                        defining tokens, managing variants, ensuring consistency. Without dedicated design systems engineers or
                        design ops, Chakra's theme becomes unmanageable. Teams will create inconsistent variants, bypass tokens,
                        and lose the system's value.
                    </li>
                    <li>
                        <strong>Prototypes or short-lived projects with extreme time pressure:</strong> While Chakra accelerates
                        development compared to building from scratch, it's still more overhead than simple HTML/CSS for throwaway
                        prototypes. If the project's lifespan is measured in weeks and design consistency doesn't matter, raw HTML
                        or minimal CSS frameworks are faster.
                    </li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="What Chakra UI Does Well">
                <p>
                    To balance the tradeoffs, acknowledge where Chakra UI excels:
                </p>
                <ul>
                    <li>Teams prioritizing accessibility without deep expertise—Chakra's components enforce WCAG patterns automatically</li>
                    <li>Applications requiring runtime theming (dark mode, multi-brand, user customization)—Chakra's theme provider makes this seamless</li>
                    <li>Product teams building internal tools, admin panels, or form-heavy applications where performance is adequate and consistency matters</li>
                    <li>Organizations migrating from Material UI seeking modern alternatives with better theming and lighter bundles</li>
                    <li>Teams comfortable with CSS-in-JS and willing to accept runtime costs for developer experience and theming flexibility</li>
                    <li>Projects where semantic tokens, centralized design decisions, and component-level consistency are non-negotiable</li>
                </ul>
                <p>
                    If these priorities align with your context, Chakra UI is a pragmatic choice. If performance, markup
                    ownership, or static optimization are primary concerns, evaluate alternatives. The framework is excellent
                    at what it does, but what it does has costs.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

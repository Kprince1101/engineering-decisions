import { ContentContainer, SectionBlock, SubsectionBlock, CalloutNote } from '@/components/content';

export function ChakraAdvanced() {
    return (
        <ContentContainer>
            <SectionBlock title="Advanced">
                <CalloutNote>
                    This section examines Chakra UI's system-level architecture—how the theme-driven,
                    CSS-in-JS model behaves at scale, where runtime abstractions provide value, and where
                    they introduce constraints or costs.
                </CalloutNote>

                <SubsectionBlock heading="Theme Architecture & Token Strategy">
                    <p>
                        <strong>Centralized theme via ChakraProvider:</strong> All design tokens live in a single
                        theme object passed to <code>ChakraProvider</code>. This object defines colors, spacing,
                        typography, shadows, borders, and component-specific defaults. Components consume tokens
                        via style props (<code>bg="blue.500"</code>, <code>p={4}</code>). This centralization
                        ensures consistency but also means every token change flows through a single source of truth.
                    </p>
                    <p>
                        <strong>Token definition and override model:</strong> Chakra's default theme is comprehensive,
                        covering hundreds of tokens. Teams extend or override this theme via <code>extendTheme()</code>.
                        Overrides are deep-merged, allowing granular control. This is convenient for incremental
                        customization but also means teams inherit Chakra's token structure. If your design system
                        uses different naming conventions or token hierarchies, you're adapting to Chakra, not the
                        other way around.
                    </p>
                    <p>
                        <strong>Runtime vs build-time tradeoffs:</strong> Chakra's theme is evaluated at runtime.
                        Component styles are generated dynamically via Emotion's CSS-in-JS engine. This allows runtime
                        theme switching (light/dark mode, multi-brand) without rebuilding the app. The cost is runtime
                        overhead—styles are computed and injected on every render. For apps with strict performance
                        budgets or static hosting requirements (CDN with aggressive caching), this can be a constraint.
                    </p>
                    <p>
                        <strong>Multi-brand and scale considerations:</strong> Chakra's runtime theming supports
                        multi-brand applications elegantly. Different brands can have different themes, and switching
                        is as simple as changing the ChakraProvider's theme prop. However, at scale, managing multiple
                        theme objects (ensuring token parity, testing visual regressions across brands) introduces
                        maintenance overhead. Teams need tooling and governance to keep themes consistent.
                    </p>
                    <p>
                        <strong>Token governance at scale:</strong> Because tokens are JavaScript objects, they're
                        not type-safe by default. A developer can reference <code>colors.brand.primary</code> even
                        if it doesn't exist. TypeScript helps, but Chakra's theme typing is complex and teams often
                        work around it. Linting and code review are necessary to prevent token drift and arbitrary
                        values (<code>bg="#ff0000"</code> instead of <code>bg="red.500"</code>).
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Accessibility Guarantees at Scale">
                    <p>
                        <strong>What Chakra guarantees:</strong> Chakra components enforce accessibility patterns
                        automatically. Buttons have proper focus states, Modals trap focus and manage ARIA attributes,
                        FormControls wire labels to inputs. These guarantees are built into the components and difficult
                        to break accidentally. For teams without accessibility expertise, this is a significant safety net.
                    </p>
                    <p>
                        <strong>Where custom components can break guarantees:</strong> When teams build custom components
                        using Chakra primitives (Box, Flex, Stack), accessibility is manual. A custom dropdown built
                        from Box and Button won't have keyboard navigation, ARIA roles, or focus management unless you
                        implement it. Chakra's accessibility only extends to its components, not arbitrary compositions.
                    </p>
                    <p>
                        <strong>Testing expectations in large apps:</strong> At scale, teams often combine Chakra
                        components with custom UI. Testing accessibility becomes a mix of trusting Chakra's components
                        (safe) and auditing custom code (risky). Automated tools (axe, Lighthouse) catch some issues,
                        but manual keyboard testing and screen reader validation are necessary. The assumption that
                        "Chakra handles accessibility" doesn't hold for custom implementations.
                    </p>
                    <p>
                        <strong>ARIA and semantic HTML responsibilities:</strong> Chakra components use semantic HTML
                        where appropriate, but layout components (Box, Flex, Grid) render divs by default. Teams must
                        use the <code>as</code> prop to render semantic elements (<code>&lt;Box as="section"&gt;</code>).
                        If teams skip this, they end up with div soup, which harms accessibility and SEO. Chakra doesn't
                        enforce semantic correctness—it enables it.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CSS-in-JS Runtime Cost">
                    <p>
                        <strong>Emotion runtime overhead:</strong> Chakra uses Emotion for CSS-in-JS. Styles are
                        computed at runtime, serialized to CSS strings, and injected into the document head. This
                        happens on every render for dynamic styles. For small apps, the overhead is negligible. For
                        large apps with complex UIs (hundreds of components, deep nesting, frequent re-renders), the
                        cost accumulates. Runtime style generation can become a bottleneck on lower-end devices.
                    </p>
                    <p>
                        <strong>SSR considerations:</strong> Chakra supports SSR (Next.js, Remix, etc.), but runtime
                        CSS-in-JS introduces complexity. Styles must be extracted on the server and hydrated on the
                        client. This requires careful configuration and adds to the initial HTML payload. Teams using
                        static generation or aggressive caching may find the runtime styling overhead incompatible with
                        their performance goals.
                    </p>
                    <p>
                        <strong>Performance implications on large surfaces:</strong> In data-heavy UIs (dashboards,
                        tables, grids with thousands of rows), Chakra's runtime styling can degrade performance.
                        Each cell or row rendering a Chakra component incurs style computation cost. Teams with
                        performance-sensitive surfaces often use virtualization (react-window, react-virtual) or fall
                        back to static CSS for critical paths. Chakra's abstraction doesn't optimize for extreme scale.
                    </p>
                    <p>
                        <strong>Bundle size tradeoffs:</strong> Chakra ships a comprehensive component library, which
                        increases bundle size. Tree-shaking helps, but the core (ChakraProvider, theme utilities,
                        Emotion runtime) is unavoidable. For apps where every kilobyte matters, Chakra's baseline cost
                        may be prohibitive. Teams optimizing for Lighthouse scores or low-bandwidth users often choose
                        lighter alternatives.
                    </p>
                    <p>
                        <strong>When CSS-in-JS is worth it:</strong> The runtime cost is justified when teams need
                        runtime theming (dark mode, multi-brand, user customization) or want to avoid managing CSS files
                        and class name collisions. If your app doesn't require these features, you're paying the cost
                        without the benefit. Evaluate whether Chakra's runtime abstractions align with your product's
                        requirements.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Composition & Customization Limits">
                    <p>
                        <strong>Where props are enough:</strong> For standard use cases, Chakra's prop-based customization
                        is sufficient. You can adjust spacing, colors, sizes, and variants without touching CSS. This
                        works well for 80% of UI patterns—buttons, forms, cards, modals. Props are discoverable via
                        TypeScript autocomplete, reducing the learning curve.
                    </p>
                    <p>
                        <strong>Where abstraction fights customization:</strong> For highly custom designs (brand-specific
                        layouts, non-standard interactions, animation-heavy UIs), Chakra's abstractions become constraints.
                        Components expect you to use style props and theme tokens. When you need arbitrary CSS, you use
                        the <code>sx</code> prop or <code>styled</code> API, which feels like working around the framework.
                        This friction increases with design complexity.
                    </p>
                    <p>
                        <strong>Component variant systems:</strong> Chakra supports component variants via theme overrides,
                        allowing teams to define custom button styles globally. This is powerful but requires understanding
                        Chakra's variant API and theme structure. Teams with complex design systems often find themselves
                        writing extensive theme code to match their requirements. The abstraction doesn't disappear—it
                        shifts to theme configuration.
                    </p>
                    <p>
                        <strong>When teams need to eject:</strong> Teams hit Chakra's limits when they need full control
                        over markup structure, animations, or behavior. Chakra's Modal, for example, enforces a specific
                        DOM structure. If your design requires a different layout, you're either rewriting the component
                        or using a lower-level primitive. At this point, teams either drop Chakra or use it only for
                        simple components, building custom solutions for complex ones.
                    </p>
                    <p>
                        <strong>Mixing Chakra with custom code:</strong> Many teams use Chakra for forms, buttons, and
                        basic UI, but build custom components for unique surfaces (landing pages, marketing sites, product
                        tours). This hybrid approach works but introduces inconsistency. Developers need to know when to
                        use Chakra and when to write custom code. This decision-making overhead is real and ongoing.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem & Integration">
                    <p>
                        <strong>React Hook Form and Formik integration:</strong> Chakra components integrate cleanly with
                        React Hook Form and Formik via standard props. The accessibility wiring (FormControl, error messages)
                        remains automatic. This makes Chakra a good fit for form-heavy applications, but teams still own
                        validation logic and submission handling. Chakra reduces boilerplate but doesn't replace form libraries.
                    </p>
                    <p>
                        <strong>Data fetching agnosticism:</strong> Chakra has no opinions on data fetching. Teams use
                        React Query, SWR, Apollo, or fetch directly. Chakra components display data but don't manage it.
                        This is a strength—it keeps Chakra focused on UI—but it also means teams need separate solutions
                        for state, caching, and loading states beyond what Chakra's Button <code>isLoading</code> prop provides.
                    </p>
                    <p>
                        <strong>Next.js compatibility:</strong> Chakra works well with Next.js. The App Router and Pages
                        Router are both supported. SSR and static generation work with proper configuration (Emotion setup
                        in <code>_document.tsx</code> for Pages Router, Emotion cache for App Router). However, Chakra's
                        runtime CSS-in-JS can conflict with Next.js's performance optimizations (static CSS extraction,
                        aggressive caching). Teams prioritizing Next.js's static generation benefits may find Chakra's
                        runtime overhead counterproductive.
                    </p>
                    <p>
                        <strong>Migration from Material UI:</strong> Teams migrating from Material UI to Chakra often do
                        so for better theming, lighter bundle sizes, or more modern APIs. The migration is straightforward
                        conceptually (component parity is high), but time-consuming in practice. Every MUI component must
                        be replaced with a Chakra equivalent, and custom styles must be converted to Chakra's style props
                        or theme system. Teams should allocate weeks to months for large codebases.
                    </p>
                    <p>
                        <strong>TypeScript support:</strong> Chakra has strong TypeScript support. Props are well-typed,
                        theme tokens have type inference (with setup), and most common patterns are covered. However, the
                        theme typing can be complex, and teams with custom theme structures often disable or work around it.
                        TypeScript helps catch errors but doesn't eliminate the learning curve for Chakra's API surface.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

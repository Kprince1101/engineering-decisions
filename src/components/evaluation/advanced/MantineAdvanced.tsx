import { SectionBlock, SubsectionBlock, CalloutNote } from '@/components/content';

export function MantineAdvanced() {
    return (
        <SectionBlock title="Mantine: Advanced">
            <SubsectionBlock heading="Theming & Design Tokens">
                <p>
                    <strong>MantineProvider & Theme Overrides:</strong> Mantine uses a theme object passed to MantineProvider
                    at the app root. All components consume this theme via context. You can override colors, spacing, fonts,
                    radius, shadows, and component-specific defaults.
                </p>
                <p>
                    <strong>Control & Flexibility:</strong> The theme system is comprehensive but opinionated. You define
                    color palettes as arrays of 10 shades per color. While this provides consistency, teams with existing
                    design tokens may need to map their system into Mantine's structure rather than the reverse.
                </p>
                <p>
                    <strong>Runtime Theme Switching:</strong> Mantine supports light/dark mode toggling via <code>colorScheme</code>.
                    Switching is synchronous and re-renders the provider tree. For large apps, consider memoization strategies
                    to avoid unnecessary re-renders.
                </p>
                <p>
                    <strong>CSS Variables Strategy:</strong> Mantine generates CSS variables from the theme object, allowing
                    runtime customization without rebuilding styles. However, deep customization may require understanding
                    Mantine's internal variable naming conventions.
                </p>
                <p>
                    <strong>Scaling Themes:</strong> For teams with strict design systems, Mantine works best when your system
                    aligns with its structure. If you need granular token control (e.g., separate tokens for border-radius-sm-button
                    vs border-radius-sm-input), you'll need to use component-level overrides or the styles API.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Composition & Extensibility">
                <p>
                    <strong>Component Composition Patterns:</strong> Mantine components are designed to compose naturally.
                    Most components accept standard React props (className, style, children) and Mantine-specific props
                    (size, variant, color). Polymorphic components (like Button) can render as different elements via
                    the <code>component</code> prop.
                </p>
                <p>
                    <strong>Customization Depth:</strong> You can customize via props, theme overrides, or the Styles API.
                    The Styles API allows targeting internal component parts (e.g., Button's inner label vs loader) with
                    inline styles or CSS modules. This is powerful but requires understanding component internals.
                </p>
                <p>
                    <strong>Escape Hatches:</strong> When you need full control, Mantine provides <code>unstyled</code> variants
                    for many components, removing all default styles. Alternatively, use the <code>classNames</code> and
                    <code>styles</code> props to override specific component parts. For extreme cases, you may need to fork
                    or wrap components.
                </p>
                <p>
                    <strong>Limits of Composition:</strong> Mantine's batteries-included approach means components come with
                    built-in behavior (e.g., Button loading states, Select filtering). If your requirements diverge significantly
                    from these defaults, you may fight the library rather than extend it gracefully.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Accessibility Primitives">
                <p>
                    <strong>Default ARIA Behavior:</strong> Mantine components ship with ARIA attributes out of the box.
                    Modals have <code>role="dialog"</code>, buttons have proper <code>aria-disabled</code>, and form inputs
                    connect labels with <code>id</code> and <code>htmlFor</code> automatically.
                </p>
                <p>
                    <strong>Focus Management:</strong> Focus trapping in overlays (Modal, Drawer) is handled via @mantine/hooks.
                    When a modal opens, focus moves to the first focusable element and cycles within the modal. On close,
                    focus returns to the trigger element. This is reliable but assumes standard DOM structure.
                </p>
                <p>
                    <strong>Keyboard Navigation:</strong> Components like Select, MultiSelect, and DatePicker support arrow key
                    navigation, Enter to select, and Escape to close. These are handled internally, reducing manual implementation.
                    However, custom keyboard shortcuts may conflict if not carefully coordinated.
                </p>
                <p>
                    <strong>What's Handled vs Manual:</strong> Mantine handles the majority of WCAG 2.1 AA requirements for
                    standard components. You still need to ensure semantic HTML, proper heading hierarchy, and meaningful
                    alt text. Screen reader announcements for dynamic content (e.g., live regions) require manual setup.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Performance Considerations">
                <p>
                    <strong>Bundle Size Tradeoffs:</strong> Mantine is a comprehensive library. Importing from <code>@mantine/core</code>
                    brings core components, but each component includes its own styles and logic. Tree-shaking works at the component
                    level, but you can't eliminate unused variants or internal utilities without custom bundler config.
                </p>
                <p>
                    <strong>Component Granularity:</strong> Components are relatively large because they include multiple variants,
                    states, and accessibility features. A Button includes loading state, polymorphic rendering, and multiple size/variant
                    combinations. This is convenient but adds weight compared to minimal component libraries.
                </p>
                <p>
                    <strong>Cost of Batteries-Included:</strong> The hooks and utilities (@mantine/hooks, @mantine/form) are separate
                    packages, which helps with code-splitting. However, the notification system, modals, and overlays require provider
                    wrappers that sit high in the component tree, potentially affecting render performance if not memoized.
                </p>
                <p>
                    <strong>When Performance Tuning Becomes Necessary:</strong> For apps with complex forms, large lists, or frequent
                    theme changes, you may need to introduce React.memo, useMemo, and careful context isolation. Mantine doesn't enforce
                    performance best practices—it provides the tools, but optimization is your responsibility.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Integration & Ecosystem">
                <p>
                    <strong>Form Libraries:</strong> Mantine provides @mantine/form for simple cases, but it integrates cleanly with
                    React Hook Form, Formik, and Final Form. Inputs expose standard <code>value</code>, <code>onChange</code>, and
                    <code>error</code> props, making integration straightforward. Validation patterns are your choice.
                </p>
                <p>
                    <strong>Validation Libraries:</strong> Works well with Zod, Yup, and Joi. Mantine's form utilities can consume
                    validation schemas, or you can wire validation manually. No lock-in to a specific validation approach.
                </p>
                <p>
                    <strong>Data-Fetching Compatibility:</strong> Mantine is UI-only and agnostic to data-fetching. Use it with
                    React Query, SWR, Apollo, or plain fetch. The Select and Autocomplete components accept data arrays, so async
                    loading is your responsibility (wrap in Suspense, handle loading states, etc.).
                </p>
                <p>
                    <strong>SSR / Next.js Friendliness:</strong> Mantine supports SSR with Next.js App Router and Pages Router.
                    The MantineProvider works server-side, and styles are injected correctly. However, components that rely on
                    browser APIs (e.g., modals, notifications) need client-side rendering. Use <code>'use client'</code> directives
                    appropriately. Color scheme persistence (light/dark mode) requires client-side storage.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

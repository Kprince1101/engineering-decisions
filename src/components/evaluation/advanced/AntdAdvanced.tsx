import { ContentContainer, SectionBlock, SubsectionBlock, CalloutNote } from '@/components/content';

export function AntdAdvanced() {
    return (
        <ContentContainer>
            <SectionBlock title="Advanced">
                <CalloutNote>
                    This section examines Ant Design's system-level architecture—how its prescriptive,
                    enterprise-optimized model behaves at scale, where strong defaults accelerate delivery,
                    and where rigidity becomes a constraint.
                </CalloutNote>

                <SubsectionBlock heading="Enterprise UX Consistency at Scale">
                    <p>
                        <strong>Strong defaults across teams:</strong> Ant Design's prescriptive design system ensures
                        visual and behavioral consistency across distributed teams without coordination overhead. When
                        dozens of engineers across multiple teams build admin panels, CRMs, and dashboards, they produce
                        interfaces that feel cohesive because Ant Design enforces uniformity. Component APIs are standardized,
                        interaction patterns are predictable, and visual language is consistent. For large enterprises,
                        this reduces fragmentation and support burden.
                    </p>
                    <p>
                        <strong>Reduced decision surface:</strong> Ant Design eliminates many design decisions by providing
                        opinionated defaults. Table pagination position, form label alignment, modal button order, notification
                        placement—these are decided for you. This accelerates delivery because teams don't debate styling or
                        interaction patterns. The tradeoff is reduced flexibility. When requirements don't align with Ant Design's
                        opinions, teams must either accept the defaults or invest significant effort customizing.
                    </p>
                    <p>
                        <strong>Predictable workflows for users:</strong> Because Ant Design applications share interaction
                        patterns, users transfer knowledge across products. A user familiar with one Ant Design admin panel
                        understands how tables sort, how forms validate, and how modals confirm. This reduces training time
                        and cognitive load for enterprise users who interact with multiple internal tools daily. For consumer
                        products targeting broad audiences, this uniformity can feel generic.
                    </p>
                    <p>
                        <strong>Design system governance without design systems teams:</strong> Ant Design provides a complete
                        design system without requiring dedicated design systems engineers. Teams without design leadership or
                        design ops can still ship visually consistent applications. This is valuable for cost-conscious enterprises
                        or engineering-heavy organizations. However, teams with existing design systems often find Ant Design's
                        opinions incompatible with their visual language, making migration or integration difficult.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Performance Characteristics">
                    <p>
                        <strong>Table rendering cost at scale:</strong> Ant Design's Table renders all rows by default, which
                        introduces performance overhead for large datasets. A table with 1,000 rows renders 1,000 DOM nodes,
                        even if only 20 are visible. For enterprise applications with moderate dataset sizes (hundreds of rows
                        per page), this is manageable. For data-heavy dashboards displaying thousands or tens of thousands of
                        rows, rendering degrades noticeably. Virtual scrolling exists but is opt-in and complicates implementation.
                    </p>
                    <p>
                        <strong>Pagination vs virtualization tradeoffs:</strong> Ant Design optimizes for pagination over
                        virtualization. Pagination is built into Table with minimal configuration. Virtualization requires
                        additional libraries (rc-virtual-list) and careful integration. For enterprise workflows where users
                        paginate through data rather than scrolling large datasets, pagination is sufficient. For analytics
                        dashboards or monitoring tools requiring real-time updates across thousands of rows, virtualization
                        becomes necessary but friction increases.
                    </p>
                    <p>
                        <strong>Form complexity at scale:</strong> Ant Design's Form manages state for all fields, which
                        introduces overhead for forms with dozens or hundreds of fields. Each field update triggers validation
                        and re-renders. For standard enterprise forms (10-30 fields), performance is acceptable. For dynamic
                        forms with complex conditional logic, nested field arrays, or real-time validation across many fields,
                        Form's abstraction can become a bottleneck. Teams with extreme form complexity often integrate React
                        Hook Form or Formik instead.
                    </p>
                    <p>
                        <strong>Component density and rendering overhead:</strong> Ant Design components are feature-rich,
                        which means they render more DOM nodes and execute more JavaScript than minimal alternatives. A Button
                        includes icon support, loading states, and multiple variants. A Table includes sorting, filtering,
                        selection, and expansion logic. For UIs with hundreds of components on screen (complex dashboards, dense
                        admin panels), this overhead compounds. Runtime performance is acceptable on modern hardware but degrades
                        on older devices or resource-constrained environments.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Bundle Size & Dependency Weight">
                    <p>
                        <strong>Ant Design footprint:</strong> Ant Design is a comprehensive library with significant bundle
                        size. The core library, even with tree-shaking, adds hundreds of kilobytes to the bundle. This includes
                        component logic, icon sets, styles, and utility functions. For enterprise applications where bundle size
                        is secondary to feature completeness, this is acceptable. For performance-sensitive consumer applications
                        targeting low-bandwidth users or mobile devices, this footprint is prohibitive.
                    </p>
                    <p>
                        <strong>Impact on initial load:</strong> Ant Design's bundle size increases time-to-interactive,
                        especially on slower networks. Enterprise users typically access applications from office networks or
                        corporate devices where bandwidth and hardware are adequate. Initial load time is measured in seconds,
                        not milliseconds. For consumer-facing products competing on performance metrics (Lighthouse scores, Core
                        Web Vitals), Ant Design's baseline cost is difficult to justify.
                    </p>
                    <p>
                        <strong>Icon library weight:</strong> Ant Design includes a comprehensive icon library (@ant-design/icons)
                        that adds to bundle size even with tree-shaking. Teams using many icons must carefully manage imports to
                        avoid bundling unused assets. For applications with minimal icon usage, this library is overhead. For
                        enterprise applications requiring consistent iconography, the library is valuable but requires discipline
                        to use efficiently.
                    </p>
                    <p>
                        <strong>Enterprise tolerance vs consumer expectations:</strong> Enterprise applications tolerate larger
                        bundles because users value functionality over load time. A 2-second initial load is acceptable if the
                        application delivers productivity. Consumer applications face different expectations—users abandon sites
                        that don't load within 1-2 seconds. Ant Design optimizes for enterprise tolerance, not consumer expectations.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Customization & Escape Hatches">
                    <p>
                        <strong>Render props and component overrides:</strong> Ant Design components expose render props
                        (e.g., Table's column render functions, Form's renderFormItem) for customization. These hooks allow
                        teams to inject custom UI while retaining Ant Design's structure and behavior. This works well for
                        standard customizations—custom cell renderers, field layouts, status badges. For deep customizations
                        requiring structural changes, render props are insufficient and teams must abandon the component entirely.
                    </p>
                    <p>
                        <strong>CSS overrides complexity:</strong> Customizing Ant Design's visual language requires CSS
                        overrides, which introduce specificity wars and maintenance burden. Ant Design's styles are scoped
                        and specific, making overrides fragile. Changes to component internals in new versions can break custom
                        styles. Teams with strong brand requirements often find CSS customization unsustainable and either accept
                        Ant Design's defaults or build custom components.
                    </p>
                    <p>
                        <strong>Theme configuration limitations:</strong> Ant Design 5.x introduced CSS-in-JS theming via
                        ConfigProvider, allowing token overrides (colors, spacing, border radius). This improves customization
                        compared to earlier versions but still assumes your design system aligns with Ant Design's token structure.
                        Teams with fundamentally different visual languages (e.g., Material Design, iOS-style interfaces) find
                        theming insufficient. The abstraction fights you when requirements diverge significantly.
                    </p>
                    <p>
                        <strong>When the abstraction fights you:</strong> Ant Design excels when requirements align with its
                        opinions. When they don't—non-standard table interactions, unconventional form layouts, novel navigation
                        patterns—customization friction increases exponentially. Teams spend more time working around Ant Design
                        than benefiting from it. The break-even point is when customization effort exceeds the effort of building
                        components from scratch. For highly custom applications, this happens quickly.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem & Integration">
                    <p>
                        <strong>Data-heavy application support:</strong> Ant Design integrates well with data-fetching libraries
                        (React Query, SWR, Apollo). Table components accept data arrays without requiring specific formats,
                        making integration straightforward. For enterprise applications fetching data from REST or GraphQL APIs,
                        Ant Design's components consume and display data efficiently. The library doesn't dictate data-fetching
                        patterns, which is a strength.
                    </p>
                    <p>
                        <strong>Routing and layout patterns:</strong> Ant Design's Layout, Menu, and Breadcrumb components assume
                        routing integration but don't prescribe a specific router. Teams use React Router, Next.js routing, or
                        other solutions without conflict. However, Ant Design's layout patterns assume traditional multi-page
                        applications with side navigation and breadcrumbs. Single-page applications with unconventional navigation
                        (e.g., dashboard-first, modal-driven workflows) find less support.
                    </p>
                    <p>
                        <strong>Auth-heavy admin tools:</strong> Ant Design is well-suited for auth-gated admin interfaces with
                        role-based access control. Components like Menu and Table support conditional rendering based on permissions.
                        Many enterprises build admin panels where different user roles see different features—Ant Design's component
                        model accommodates this pattern naturally. Teams building public-facing, authentication-optional applications
                        find this optimization less relevant.
                    </p>
                    <p>
                        <strong>Long-lived enterprise systems:</strong> Ant Design is designed for long-lived internal tools that
                        evolve over years. The library has been stable for years, with predictable release cycles and conservative
                        breaking changes. For enterprises maintaining applications over 5-10 year lifespans, this stability is valuable.
                        However, Ant Design's evolution is slower than modern alternatives. Teams wanting cutting-edge features or
                        modern patterns may find the library conservative.
                    </p>
                    <p>
                        <strong>Migration and integration challenges:</strong> Integrating Ant Design into existing applications
                        with different styling systems (Tailwind, CSS Modules, styled-components) introduces conflicts. Ant Design's
                        global styles and opinionated components don't compose well with other libraries. Teams often adopt Ant Design
                        wholesale or not at all—partial integration is difficult. For brownfield projects or incremental migrations,
                        this all-or-nothing nature is a barrier.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

import { SectionBlock, SubsectionBlock, CalloutNote } from '@/components/content';

export function AntdTradeoffs() {
    return (
        <SectionBlock title="Ant Design: Tradeoffs">
            <SubsectionBlock heading="Performance & Payload Risk">
                <p>
                    <strong>Heavy initial load for consumer applications:</strong> Ant Design's bundle size is substantial—
                    hundreds of kilobytes even with tree-shaking and code splitting. For enterprise applications accessed
                    over corporate networks, this is tolerable. For consumer-facing applications competing on performance
                    (Lighthouse scores, Core Web Vitals, mobile experience), this baseline cost is prohibitive. Initial
                    load times measured in seconds alienate users accustomed to instant experiences.
                </p>
                <p>
                    <strong>DOM density at scale:</strong> Ant Design components render feature-rich markup. Tables with
                    sorting, filtering, and selection generate complex DOM structures. Forms with validation and layout
                    management add wrapper elements. At scale—dashboards with hundreds of components, tables with thousands
                    of rows—DOM density degrades rendering performance. Older devices, mobile browsers, and resource-constrained
                    environments struggle. Enterprise users on modern hardware tolerate this; consumer users on budget phones don't.
                </p>
                <p>
                    <strong>Lack of virtualization by default:</strong> Ant Design's Table renders all rows, which is
                    acceptable for paginated data (hundreds of rows per page) but unacceptable for real-time dashboards
                    or analytics tools displaying thousands of rows. Virtual scrolling exists but requires additional
                    libraries and integration effort. For applications where large dataset visualization is core functionality,
                    Ant Design's default behavior is insufficient.
                </p>
                <p>
                    <strong>Poor fit for consumer-facing applications:</strong> Consumer applications prioritize fast load
                    times, smooth animations, and minimal JavaScript payloads. Ant Design optimizes for feature completeness
                    and enterprise workflows, not performance metrics. Teams building consumer products—e-commerce, content
                    sites, mobile-first apps—find Ant Design's performance profile incompatible with user expectations and
                    business requirements.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Design Rigidity & Brand Constraints">
                <p>
                    <strong>Limited visual differentiation:</strong> Ant Design applications are recognizably Ant Design.
                    The visual language—button styles, form layouts, table aesthetics, modal structure—is distinctive and
                    consistent. For internal tools where brand identity is secondary to functionality, this is acceptable.
                    For consumer products where visual differentiation is a competitive advantage, Ant Design's uniformity
                    is a liability. Your product looks like every other Ant Design app.
                </p>
                <p>
                    <strong>Strong Ant Design "look" resists customization:</strong> Theming Ant Design to match a unique
                    brand requires extensive CSS overrides, custom component variants, and potentially forking components.
                    The visual language is deeply embedded in component structure, spacing, and interaction patterns. Teams
                    with strong brand guidelines (specific typography, unconventional spacing, unique interaction patterns)
                    spend more time fighting Ant Design than benefiting from it.
                </p>
                <p>
                    <strong>High effort to fully rebrand:</strong> Rebranding an Ant Design application to eliminate its
                    visual signature requires overriding dozens of components, managing CSS specificity conflicts, and testing
                    visual regressions across every component variant. For teams with dedicated design systems engineers and
                    clear brand requirements, this effort often exceeds the effort of building a custom component library.
                    The break-even point arrives quickly.
                </p>
                <p>
                    <strong>Marketing and brand-driven products suffer:</strong> Marketing sites, landing pages, and
                    brand-driven consumer products require visual creativity and differentiation. Ant Design's enterprise
                    aesthetic—functional, dense, information-first—is incompatible with marketing goals. These contexts
                    need custom design, not prescriptive defaults. Ant Design adds weight without value.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Customization & Escape Cost">
                <p>
                    <strong>CSS override fragility:</strong> Customizing Ant Design's visual appearance via CSS overrides
                    introduces maintenance burden and regression risk. Ant Design's styles are scoped and specific, requiring
                    high-specificity selectors to override. When Ant Design releases updates that change component internals,
                    custom styles break. Teams maintaining CSS overrides across versions face ongoing maintenance cost and
                    visual regressions.
                </p>
                <p>
                    <strong>Render prop complexity for deep customization:</strong> Ant Design exposes render props for
                    customization (Table column renderers, Form item layouts), but these hooks are limited to UI—they don't
                    change component structure or behavior. For customizations requiring different DOM structure, event handling,
                    or interaction patterns, render props are insufficient. Teams must either accept Ant Design's structure or
                    abandon the component and build custom alternatives.
                </p>
                <p>
                    <strong>Theme system assumes Ant Design's token structure:</strong> Ant Design 5.x's theming via ConfigProvider
                    allows token overrides, but assumes your design system uses Ant Design's token hierarchy (primary color,
                    border radius, spacing scale). Teams with fundamentally different token systems (e.g., semantic tokens,
                    multi-tier spacing, component-specific overrides) find theming limiting. The abstraction works when your
                    design system resembles Ant Design's; it fights you when it doesn't.
                </p>
                <p>
                    <strong>Ejection difficulty and all-or-nothing adoption:</strong> Ant Design components are tightly coupled—
                    using Table often pulls in Form, Modal, and other dependencies through shared utilities and styles. Partial
                    adoption is difficult. Teams either adopt Ant Design wholesale or not at all. Ejecting from Ant Design after
                    adoption requires replacing every component, which is expensive. This lock-in risk is real and should factor
                    into adoption decisions.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Developer Experience Tradeoffs">
                <p>
                    <strong>Verbose configuration for complex components:</strong> Table column definitions, Form field
                    configurations, and Menu structures are verbose. A table with 20 columns requires 200+ lines of configuration.
                    Forms with validation rules, conditional fields, and layout specifications grow large quickly. This verbosity
                    is explicit and readable, but it's also tedious to write and maintain. Teams with many tables and forms spend
                    significant time on configuration.
                </p>
                <p>
                    <strong>Steep learning curve for comprehensive API surface:</strong> Ant Design's API surface is large.
                    Each component has dozens of props, configuration options, and interaction modes. Learning how to use Table
                    effectively—sorting, filtering, selection, expandable rows, fixed columns—requires reading extensive
                    documentation and experimenting with examples. For teams new to Ant Design, productivity ramps slowly. Senior
                    developers accelerate; junior developers struggle.
                </p>
                <p>
                    <strong>Debugging complexity in abstracted components:</strong> When Ant Design components don't behave
                    as expected, debugging is difficult. Components abstract DOM structure, event handling, and state management.
                    Understanding why a Table doesn't sort correctly or a Form doesn't validate requires reading Ant Design's
                    source code and understanding its internals. Teams without deep React knowledge or patience for source diving
                    find debugging frustrating.
                </p>
                <p>
                    <strong>Documentation and examples assume enterprise context:</strong> Ant Design's documentation optimizes
                    for enterprise use cases—admin panels, CRMs, dashboards. Teams building non-enterprise applications—consumer
                    products, mobile apps, marketing sites—find fewer relevant examples. Adapting Ant Design to non-enterprise
                    contexts requires creativity and experimentation, which slows development.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="When Not to Choose Ant Design">
                <p>
                    Be explicit: Ant Design is a poor fit for the following scenarios.
                </p>
                <ul>
                    <li>
                        <strong>Consumer-facing products prioritizing performance:</strong> If your application targets consumers
                        on mobile devices, competes on load time, or requires Lighthouse scores above 90, Ant Design's bundle size
                        and runtime overhead are unacceptable. Choose lighter alternatives optimized for performance.
                    </li>
                    <li>
                        <strong>Marketing sites and landing pages:</strong> Marketing contexts require visual creativity, brand
                        differentiation, and fast load times. Ant Design's enterprise aesthetic, heavy bundle, and prescriptive
                        design language are incompatible with marketing goals. Use minimal CSS frameworks or custom implementations.
                    </li>
                    <li>
                        <strong>Mobile-first applications:</strong> Ant Design is optimized for desktop interfaces. While responsive
                        breakpoints exist, the component density, interaction patterns, and visual language feel heavy on mobile
                        devices. Mobile-first products need lighter, touch-optimized UI libraries.
                    </li>
                    <li>
                        <strong>Performance-critical dashboards with large datasets:</strong> If your application displays thousands
                        of rows in real-time, updates frequently, or requires virtualized scrolling as a default, Ant Design's Table
                        component is insufficient. Use specialized data grid libraries (ag-Grid, TanStack Table) or build custom solutions.
                    </li>
                    <li>
                        <strong>Teams with strong design ownership and unique visual language:</strong> If your organization has
                        dedicated designers, an established design system, or brand guidelines that differ significantly from Ant
                        Design's aesthetic, customization effort will exceed the benefit. Build components that match your design
                        system instead of fighting Ant Design's opinions.
                    </li>
                    <li>
                        <strong>Small teams without enterprise-scale needs:</strong> Small teams building MVPs, prototypes, or
                        applications with simple UIs don't need Ant Design's comprehensive feature set. The bundle weight, learning
                        curve, and configuration overhead aren't justified. Use simpler alternatives (Chakra UI, Mantine, shadcn/ui)
                        or raw HTML/CSS.
                    </li>
                    <li>
                        <strong>Projects requiring frequent, deep customization:</strong> If your requirements regularly diverge from
                        standard enterprise patterns—novel interactions, unconventional layouts, experimental UIs—Ant Design's
                        abstraction will fight you constantly. Build custom components where you control structure and behavior.
                    </li>
                    <li>
                        <strong>Teams prioritizing bundle size and load time:</strong> If every kilobyte matters—low-bandwidth users,
                        international markets, mobile-first audiences—Ant Design's baseline cost is too high. Optimize for performance
                        with static CSS, minimal JavaScript, and lightweight components.
                    </li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="What Ant Design Does Well">
                <p>
                    To balance the tradeoffs, acknowledge where Ant Design excels:
                </p>
                <ul>
                    <li>Large enterprises building internal tools, admin panels, and back-office systems where consistency and productivity outweigh customization</li>
                    <li>Teams without design resources who need opinionated defaults and predictable UX patterns</li>
                    <li>Data-heavy applications requiring comprehensive Table components with sorting, filtering, pagination, and export</li>
                    <li>Organizations standardizing UI across dozens of teams and products without central design governance</li>
                    <li>Long-lived enterprise systems where stability, maturity, and conservative evolution are more valuable than cutting-edge features</li>
                    <li>Auth-gated admin interfaces with role-based access, complex forms, and workflow-driven interactions</li>
                    <li>Teams willing to accept Ant Design's visual language and interaction patterns in exchange for rapid delivery and consistency</li>
                </ul>
                <p>
                    If these priorities align with your context, Ant Design is a pragmatic choice. If performance, brand
                    differentiation, or customization flexibility are primary concerns, evaluate alternatives. The framework
                    is excellent at what it optimizes for, but what it optimizes for is narrow.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

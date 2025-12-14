import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function AntdContext() {
    return (
        <ContentContainer>
            <SectionBlock title="Ant Design: Context">
                <SubsectionBlock heading="What Problem Ant Design Solves">
                    <p>
                        Ant Design addresses the consistency and coordination problem that large enterprise teams face
                        when building complex, data-heavy applications across distributed engineering organizations.
                        It provides a prescriptive design system with opinionated interaction patterns, ensuring visual
                        and behavioral uniformity across products without requiring centralized design governance.
                    </p>
                    <p>
                        Built for <strong>enterprise dashboards and admin interfaces</strong>, Ant Design optimizes for
                        data density, complex workflows, and rapid delivery. It assumes applications are form-heavy, table-heavy,
                        and workflow-driven. The design language prioritizes clarity, information hierarchy, and functional
                        efficiency over brand expression or visual novelty.
                    </p>
                    <p>
                        Ant Design is <strong>prescriptive by design</strong>. It does not ask teams to define their own
                        design system—it provides one. This reduces decision paralysis, eliminates bikeshedding, and enables
                        distributed teams to build UIs that feel consistent without coordination overhead. For large organizations
                        where consistency at scale is more valuable than visual differentiation, this is a feature, not a limitation.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ideal Team Characteristics">
                    <ul>
                        <li><strong>Large engineering organizations:</strong> Teams with dozens or hundreds of engineers building multiple products that need to feel cohesive</li>
                        <li><strong>Enterprise or B2B environments:</strong> Organizations building internal tools, back-office systems, or SaaS platforms for business users</li>
                        <li><strong>Distributed or offshore teams:</strong> Teams where coordination is expensive and design consistency is difficult to enforce through process alone</li>
                        <li><strong>Teams prioritizing delivery speed over customization:</strong> Organizations where shipping features quickly matters more than pixel-perfect brand alignment</li>
                        <li><strong>Limited design resources:</strong> Teams without dedicated designers or design systems engineers who need opinionated defaults</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Ant Design Fits Best">
                    <ul>
                        <li>Admin dashboards and management interfaces with complex data tables, filters, and CRUD operations</li>
                        <li>CRM-style applications with forms, workflows, status indicators, and multi-step processes</li>
                        <li>Internal tools and back-office products where functional efficiency outweighs brand identity</li>
                        <li>Data-heavy applications requiring charts, graphs, statistics panels, and real-time updates</li>
                        <li>Products with many repetitive workflows where interaction patterns should be predictable and consistent</li>
                        <li>Large enterprises standardizing UI across multiple teams and products without central design oversight</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Ant Design Is a Poor Fit">
                    <ul>
                        <li>Brand-driven consumer products where visual identity and differentiation are competitive advantages</li>
                        <li>Highly custom or experimental UIs requiring novel interaction patterns or unconventional layouts</li>
                        <li>Mobile-first experiences—Ant Design is optimized for desktop and feels heavy on mobile devices</li>
                        <li>Marketing sites, landing pages, or content-focused applications where storytelling and visual design drive engagement</li>
                        <li>Teams seeking visual differentiation or unique design language—Ant Design apps are recognizably Ant Design</li>
                        <li>Teams with strong design-system ownership requirements who want to define their own visual language</li>
                        <li>Performance-sensitive consumer applications where bundle size and runtime overhead are critical constraints</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Philosophical Stance">
                    <p>
                        Ant Design is <strong>prescriptive, not flexible</strong>. It embodies strong opinions about layout,
                        spacing, interaction patterns, color usage, and information hierarchy. These opinions are not configurable—they
                        are the design system. Teams that adopt Ant Design accept its visual language and interaction model.
                        Customization is possible but friction increases significantly when deviating from defaults.
                    </p>
                    <p>
                        The design philosophy prioritizes <strong>uniformity as a feature</strong>. When every admin panel in
                        an organization looks similar, users transfer knowledge across products. Muscle memory works. Onboarding
                        is faster. Support burden decreases. For enterprises managing dozens of internal tools, this uniformity
                        is operationally valuable, even if it sacrifices visual creativity.
                    </p>
                    <p>
                        Ant Design assumes <strong>data density matters more than whitespace</strong>. Tables are dense. Forms
                        are compact. Dashboards pack information efficiently. This optimizes for professional users who spend
                        hours daily in the application and value information density over aesthetic minimalism. Consumer-facing
                        products with casual users often find this density overwhelming.
                    </p>
                    <p>
                        The tradeoff is explicit: <strong>reduced design freedom in exchange for speed, predictability, and scale</strong>.
                        Teams that accept Ant Design's opinions ship faster, maintain consistency effortlessly, and avoid design
                        system overhead. Teams that fight Ant Design's opinions spend significant effort customizing, theming,
                        and working around constraints. The framework is most valuable when you embrace its philosophy, not when
                        you resist it.
                    </p>
                    <p>
                        Ant Design assumes <strong>enterprise workflows, not consumer experiences</strong>. It optimizes for
                        users who are trained, professional, and task-focused. Interaction patterns assume familiarity with
                        enterprise software conventions (breadcrumbs, side navigation, status badges, action menus). For consumer
                        products targeting broad, non-technical audiences, these patterns can feel dated or unnecessarily complex.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

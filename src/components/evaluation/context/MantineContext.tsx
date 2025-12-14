import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function MantineContext() {
    return (
        <ContentContainer>
            <SectionBlock title="Mantine: Context">
                <SubsectionBlock heading="What Problem Mantine Solves">
                    <p>
                        Mantine provides a comprehensive component library with built-in theming,
                        accessibility, and utility functions. It reduces the need to build common
                        UI patterns from scratch while maintaining flexibility for customization.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ideal Team Characteristics">
                    <ul>
                        <li><strong>Team size:</strong> Small to medium teams (2-15 developers)</li>
                        <li><strong>Design maturity:</strong> Teams without a dedicated design system or design ops</li>
                        <li><strong>Speed vs control:</strong> Teams prioritizing delivery speed over pixel-perfect custom design</li>
                        <li><strong>Technical comfort:</strong> Teams comfortable with opinionated defaults and hook-based patterns</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Mantine Fits Best">
                    <ul>
                        <li>Internal tooling and admin panels</li>
                        <li>Data-heavy dashboards and analytics interfaces</li>
                        <li>Rapid MVP and prototype development</li>
                        <li>Projects where accessibility and theming are requirements but not differentiators</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Where Mantine May Not Be Ideal">
                    <ul>
                        <li>Strict design systems requiring granular design token control</li>
                        <li>Projects with heavy design-token governance or brand compliance requirements</li>
                        <li>Teams that need full control over every styling detail</li>
                        <li>Consumer-facing products with highly custom, brand-specific UI patterns</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Philosophical Stance">
                    <p>
                        Mantine is <strong>opinionated</strong> in its approach. It provides batteries-included
                        components with sensible defaults, prioritizing developer experience and rapid development.
                        This makes it productive for teams that can work within its patterns, but potentially
                        constraining for teams requiring extensive customization.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

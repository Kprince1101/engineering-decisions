import { SectionBlock, SubsectionBlock, CalloutNote } from '@/components/content';

export function MantineTradeoffs() {
    return (
        <SectionBlock title="Mantine: Tradeoffs">
            <SubsectionBlock heading="Design-System Rigidity vs Flexibility">
                <p>
                    <strong>The Problem:</strong> Mantine's theme system is comprehensive but structurally opinionated.
                    If your design system uses a different token taxonomy (e.g., semantic tokens like <code>color-action-primary</code>
                    instead of color arrays), you'll spend time mapping between systems rather than using Mantine's primitives directly.
                </p>
                <p>
                    <strong>Visual Drift Risk:</strong> In large teams, developers can override components via className,
                    inline styles, or the Styles API. Without strict enforcement (linting, code review, design system governance),
                    your UI will diverge from the intended design. Mantine provides tools but not guardrails.
                </p>
                <p>
                    <strong>Multi-Brand Systems:</strong> If you need to support multiple brands with distinct visual identities
                    (different color palettes, typography, component behaviors), Mantine's single-theme-per-provider model becomes
                    awkward. You'll need multiple providers or runtime theme swapping, both of which add complexity.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Bundle Size & Abstraction Cost">
                <p>
                    <strong>Convenience Has Weight:</strong> Mantine components include loading states, variants, size options,
                    and accessibility features by default. This makes them productive but heavy. A Button component is larger
                    than a minimal <code>&lt;button&gt;</code> wrapper because it includes logic you may not need.
                </p>
                <p>
                    <strong>When This Becomes Problematic:</strong> For performance-critical applications (e.g., marketing pages,
                    mobile-first experiences, regions with slow networks), Mantine's bundle size is a tradeoff. Tree-shaking helps,
                    but you can't eliminate unused variants or internal utilities without ejecting from the library.
                </p>
                <p>
                    <strong>Abstraction Tax:</strong> Every abstraction has a cost. Mantine's hooks (@mantine/hooks) and form
                    utilities (@mantine/form) are convenient, but if you only need one or two utilities, you're better off
                    writing them yourself or using focused libraries.
                </p>
            </SubsectionBlock>                <SubsectionBlock heading="Customization Escape Cost">
                <p>
                    <strong>When Defaults Stop Being Enough:</strong> Mantine's components are designed for common cases.
                    When you need behavior that diverges from defaults (e.g., a Select with custom filtering logic, a Button
                    with non-standard loading UI), you hit the Styles API or unstyled variants. Both have learning curves.
                </p>
                <p>
                    <strong>Styles API Complexity:</strong> The Styles API is powerful but requires understanding Mantine's
                    internal component structure. You need to know which parts are named what (e.g., <code>root</code>, <code>label</code>,
                    <code>input</code>) and how they interact. This is not intuitive and increases onboarding time.
                </p>
                <p>
                    <strong>Deep Override Friction:</strong> If you need to override behavior (not just styles), you may need
                    to fork components or wrap them heavily. At that point, you're maintaining Mantine internals in your codebase,
                    which defeats the purpose of using a library.
                </p>
            </SubsectionBlock>                <SubsectionBlock heading="Long-Term Maintainability">
                <p>
                    <strong>Upgrade Cadence:</strong> Mantine has a history of breaking changes between major versions.
                    v6 to v7 changed theming APIs, removed deprecated components, and altered hook signatures. If you're
                    risk-averse or have limited engineering bandwidth, this is a liability.
                </p>
                <p>
                    <strong>API Churn:</strong> While the library is actively maintained, rapid iteration means APIs can shift.
                    Features marked as experimental may stabilize or be removed. Plan for migration time in your roadmap.
                </p>
                <p>
                    <strong>Internal Abstraction Leakage:</strong> Mantine uses @mantine/hooks internally for focus management,
                    form state, and window events. If a hook changes behavior, it can affect multiple components. You're trusting
                    the maintainers to handle this carefully, which they generally do, but it's a dependency risk.
                </p>
            </SubsectionBlock>                <SubsectionBlock heading="When Not to Choose Mantine">
                <p>
                    Be explicit: Mantine is a bad fit for the following scenarios.
                </p>
                <ul>
                    <li>
                        <strong>Heavily regulated design systems:</strong> If you work in industries with strict brand compliance
                        (financial services, government, enterprise SaaS with design ops teams), Mantine's opinionated structure
                        will fight your governance model. Use a headless library (Radix, React Aria) or build components in-house.
                    </li>
                    <li>
                        <strong>Pixel-perfect design enforcement:</strong> If designers expect exact spacing, typography, and
                        component behavior with zero deviation, Mantine's defaults will require constant overrides. The friction
                        isn't worth it. Use a lower-level library or CSS-in-JS primitives.
                    </li>
                    <li>
                        <strong>Extremely performance-sensitive surfaces:</strong> Marketing landing pages, mobile-first e-commerce,
                        or applications targeting low-end devices should prioritize bundle size. Mantine's convenience comes at
                        a weight cost. Use lighter alternatives or hand-rolled components.
                    </li>
                    <li>
                        <strong>Fully custom interaction patterns:</strong> If your product has novel UI behaviors (drag-and-drop
                        dashboards, complex data visualizations, real-time collaborative interfaces), Mantine's components won't
                        map cleanly. Build custom or use specialized libraries.
                    </li>
                    <li>
                        <strong>Teams with strong "not invented here" culture:</strong> If your team values full control and
                        dislikes external dependencies, Mantine will frustrate. You'll spend more time customizing than building.
                        Use unstyled primitives or build your own system.
                    </li>
                </ul>
            </SubsectionBlock>                <SubsectionBlock heading="What Mantine Does Well">
                <p>
                    To balance the tradeoffs, acknowledge where Mantine excels:
                </p>
                <ul>
                    <li>Internal tools and admin panels that prioritize speed over brand uniqueness</li>
                    <li>Teams without dedicated design systems or design ops</li>
                    <li>Prototypes and MVPs where accessibility and theming are requirements but not differentiators</li>
                    <li>Projects where developer experience and productivity are the primary constraints</li>
                </ul>
            </SubsectionBlock>
        </SectionBlock>
    );
}
import { SectionBlock, SubsectionBlock } from '@/components/content';

export function YarnTradeoffs() {
    return (
        <SectionBlock title="yarn: Tradeoffs">
            <SubsectionBlock heading="Pros">
                <ul>
                    <li><strong>Innovation:</strong> Features like PnP and Zero-Installs push the boundary of what's possible.</li>
                    <li><strong>Monorepos:</strong> Excellent workspace tools and plugin ecosystem.</li>
                    <li><strong>Stability:</strong> v1 is battle-tested; v2+ is strictly correct.</li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="Cons">
                <ul>
                    <li><strong>Complexity:</strong> PnP can be difficult to configure and debug with certain tools.</li>
                    <li><strong>Fragmentation:</strong> The split between v1 (Classic) and v2+ (Berry) causes confusion.</li>
                    <li><strong>Learning Curve:</strong> Higher barrier to entry than npm.</li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="Team Fit">
                <p>
                    Ideal for large engineering organizations that need strict control, advanced monorepo features,
                    and are willing to invest in tooling configuration.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

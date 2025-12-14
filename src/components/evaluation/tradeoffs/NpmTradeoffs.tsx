import { SectionBlock, SubsectionBlock } from '@/components/content';

export function NpmTradeoffs() {
    return (
        <SectionBlock title="npm: Tradeoffs">
            <SubsectionBlock heading="Pros">
                <ul>
                    <li><strong>Ubiquity:</strong> Pre-installed with Node.js; zero setup required.</li>
                    <li><strong>Compatibility:</strong> Works with everything; the default target for all tools.</li>
                    <li><strong>Stability:</strong> Mature and reliable for standard use cases.</li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="Cons">
                <ul>
                    <li><strong>Performance:</strong> Slower than competitors, especially in large projects.</li>
                    <li><strong>Disk Usage:</strong> Heavy duplication of files across projects.</li>
                    <li><strong>Phantom Dependencies:</strong> Flat node_modules allows importing unlisted dependencies.</li>
                </ul>
            </SubsectionBlock>

            <SubsectionBlock heading="Team Fit">
                <p>
                    Best for teams that want the path of least resistance and don't have complex monorepo needs.
                    If you don't want to think about your package manager, use npm.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

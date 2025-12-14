import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function PnpmTradeoffs() {
    return (
        <ContentContainer>
            <SectionBlock title="pnpm: Tradeoffs">
                <SubsectionBlock heading="Pros">
                    <ul>
                        <li><strong>Speed:</strong> Consistently the fastest install times.</li>
                        <li><strong>Efficiency:</strong> Massive disk space savings via content-addressable storage.</li>
                        <li><strong>Correctness:</strong> Strict dependency resolution prevents phantom dependencies.</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Cons">
                    <ul>
                        <li><strong>Compatibility:</strong> Some tools assume a flat node_modules structure and may break (though this is rare now).</li>
                        <li><strong>Complexity:</strong> Symlinked structure can be confusing to navigate manually.</li>
                    </ul>
                </SubsectionBlock>

                <SubsectionBlock heading="Team Fit">
                    <p>
                        The best all-rounder for modern development. Excellent for monorepos and developers working
                        on multiple projects. It strikes a balance between the strictness of Yarn Berry and the
                        compatibility of npm.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

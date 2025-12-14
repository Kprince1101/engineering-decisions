import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function YarnAdvanced() {
    return (
        <ContentContainer>
            <SectionBlock title="Advanced Capabilities">
                <SubsectionBlock heading="Plug'n'Play (PnP)">
                    <p>
                        Yarn Berry introduced PnP, which replaces <code>node_modules</code> with a map file.
                        This eliminates I/O heavy copy operations, making installs nearly instant and ensuring
                        perfect strictness. However, it requires custom loader logic that can break tools
                        expecting a real file system structure.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Zero-Installs">
                    <p>
                        By committing the offline cache to git, Yarn allows CI jobs to start immediately without
                        network requests or installation steps. This significantly reduces CI build times and
                        improves reproducibility.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Extensibility">
                    <p>
                        Yarn has a modular architecture that allows writing plugins in TypeScript. This enables
                        teams to enforce custom rules or add new commands to the CLI.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

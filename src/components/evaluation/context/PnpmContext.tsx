import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function PnpmContext() {
    return (
        <ContentContainer>
            <SectionBlock title="Context">
                <SubsectionBlock heading="What Problem pnpm Solves">
                    <p>
                        pnpm (Performant npm) solves the disk space efficiency and "phantom dependency" problems
                        inherent in the flat <code>node_modules</code> structure used by npm and Yarn v1.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical Background">
                    <p>
                        pnpm introduced a content-addressable storage mechanism where packages are stored globally
                        on the disk and hard-linked into projects. This approach drastically reduces disk usage
                        for multi-project developers and speeds up installation by avoiding file duplication.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Adoption Patterns">
                    <p>
                        pnpm is currently the fastest-growing package manager, widely adopted by modern monorepos
                        and frameworks (like Vue and Vite). Its strict dependency handling prevents access to
                        packages not explicitly declared in <code>package.json</code>, catching bugs early.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

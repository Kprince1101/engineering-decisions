import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function PnpmComponents() {
    return (
        <ContentContainer>
            <SectionBlock title="pnpm: Workflow & Ergonomics">
                <SubsectionBlock heading="Install Experience">
                    <p>
                        pnpm is extremely fast, often outperforming both npm and Yarn. It uses a global store,
                        so installing a package that exists in another project on the same machine is nearly instant.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Lockfiles">
                    <p>
                        Uses <code>pnpm-lock.yaml</code>. Like Yarn, it uses a YAML format that is readable and
                        git-friendly.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Workspaces">
                    <p>
                        pnpm has first-class workspace support. Its filtering syntax (<code>--filter</code>) is
                        powerful and intuitive for running commands across specific subsets of a monorepo.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CLI Ergonomics">
                    <p>
                        The CLI is similar to npm (<code>pnpm install</code>, <code>pnpm add</code>). It enforces
                        strictness by default, meaning you cannot require a package that isn't in your package.json,
                        preventing "phantom dependency" bugs.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

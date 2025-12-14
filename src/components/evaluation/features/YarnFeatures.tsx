import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function YarnFeatures() {
    return (
        <ContentContainer>
            <SectionBlock title="Unique Features">
                <SubsectionBlock heading="Plug'n'Play (PnP)">
                    <p>
                        Yarn Berry introduced PnP, a strategy that completely removes <code>node_modules</code>.
                        Instead, it generates a single <code>.pnp.cjs</code> file that maps imports to specific
                        locations in the global cache. This eliminates I/O heavy copy operations and ensures
                        strict dependency resolution (no phantom dependencies).
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Zero-Installs">
                    <p>
                        Because PnP relies on a stable cache rather than a massive <code>node_modules</code> folder,
                        Yarn allows you to commit the <code>.yarn/cache</code> folder to git. This means a fresh
                        clone of the repository is immediately ready to run—no <code>yarn install</code> required.
                        This dramatically speeds up CI pipelines.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Constraints">
                    <p>
                        Yarn includes a built-in constraint engine (written in Prolog) that allows you to enforce
                        rules across your workspaces. For example, you can ensure that every package in a monorepo
                        uses the exact same version of <code>react</code> or that no package depends on a specific
                        forbidden library.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function PnpmAdvanced() {
    return (
        <ContentContainer>
            <SectionBlock title="pnpm: Advanced Capabilities">
                <SubsectionBlock heading="Content-Addressable Storage">
                    <p>
                        pnpm stores files in a global store (~/.pnpm-store). If you have 100 projects using
                        lodash, pnpm stores it once on disk and hard-links it to each project. This saves
                        gigabytes of space.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Symlinked node_modules">
                    <p>
                        pnpm creates a non-flat <code>node_modules</code> structure using symlinks. This
                        accurately reflects the dependency tree and prevents access to hoisted dependencies,
                        solving the "phantom dependency" problem while remaining compatible with the Node.js
                        resolution algorithm.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI Performance">
                    <p>
                        pnpm is excellent for CI. Its install speed is consistently top-tier, and its caching
                        mechanisms are robust. It also supports fetching only the dependencies needed for a
                        specific subset of a monorepo.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

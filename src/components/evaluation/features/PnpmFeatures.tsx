import { SectionBlock, SubsectionBlock } from '@/components/content';

export function PnpmFeatures() {
    return (
        <SectionBlock title="pnpm: Unique Features">
            <SubsectionBlock heading="Symlinked node_modules">
                <p>
                    pnpm creates a non-flat <code>node_modules</code> structure using symlinks. This
                    accurately reflects the dependency tree and prevents access to hoisted dependencies,
                    solving the "phantom dependency" problem while remaining compatible with the Node.js
                    resolution algorithm.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

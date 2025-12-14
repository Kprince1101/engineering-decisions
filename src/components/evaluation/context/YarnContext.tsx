import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function YarnContext() {
    return (
        <SectionBlock title="yarn: Context">
            <SubsectionBlock heading="What Problem Yarn Solves">
                <p>
                    Yarn was created by Facebook (Meta) to address critical performance, security, and
                    reliability issues in early versions of npm. It introduced the concept of a lockfile
                    (<code>yarn.lock</code>) to ensure deterministic installs across environments.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Historical Background">
                <p>
                    Released in 2016, Yarn v1 ("Classic") revolutionized the ecosystem by proving that
                    installs could be fast and reliable. It forced npm to improve significantly.
                    Yarn v2+ ("Berry") later introduced Plug'n'Play (PnP) to eliminate <code>node_modules</code>,
                    though this radical shift caused ecosystem fragmentation.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Adoption Patterns">
                <p>
                    Yarn v1 remains heavily used in legacy enterprise codebases and React Native projects.
                    Yarn v2+ (Modern Yarn) has a dedicated following for its strictness and zero-install
                    capabilities but faces resistance due to PnP compatibility issues.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

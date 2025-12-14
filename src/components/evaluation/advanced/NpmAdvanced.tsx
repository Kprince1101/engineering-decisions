import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function NpmAdvanced() {
    return (
        <ContentContainer>
            <SectionBlock title="Advanced Capabilities">
                <SubsectionBlock heading="Performance & Disk Usage">
                    <p>
                        Historically slow, npm has improved but still generally trails behind pnpm and Yarn Berry.
                        It copies packages into every <code>node_modules</code> folder, leading to significant
                        disk space usage in multi-project environments.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Caching">
                    <p>
                        npm maintains a local cache of tarballs. While this speeds up subsequent installs,
                        it does not deduplicate files on disk like pnpm does.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Security">
                    <p>
                        npm includes <code>npm audit</code> which runs automatically on install. While helpful,
                        it is often criticized for reporting false positives or low-impact vulnerabilities
                        that cause "audit fatigue."
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function NpmFeatures() {
    return (
        <ContentContainer>
            <SectionBlock title="npm: Unique Features">
                <SubsectionBlock heading="Security Audits">
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

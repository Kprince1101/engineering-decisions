import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function YarnPerformance() {
    return (
        <SectionBlock title="yarn: Performance">
            <SubsectionBlock heading="Zero-Installs">
                <p>
                    By committing the offline cache to git, Yarn allows CI jobs to start immediately without
                    network requests or installation steps. This significantly reduces CI build times and
                    improves reproducibility.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

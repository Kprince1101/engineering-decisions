'use client';

import { useState } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { NpmContext } from '@/components/evaluation/context/NpmContext';
import { NpmComponents } from '@/components/evaluation/components/NpmComponents';
import { NpmPerformance } from '@/components/evaluation/performance/NpmPerformance';
import { NpmFeatures } from '@/components/evaluation/features/NpmFeatures';
import { NpmTradeoffs } from '@/components/evaluation/tradeoffs/NpmTradeoffs';
import { evaluationDomains } from '@/config/domains';

export default function NpmPage() {
    const domain = evaluationDomains.find(d => d.id === 'package-managers')!;
    const [section, setSection] = useState('context');

    return (
        <>
            <SectionTabs sections={domain.sections} active={section} onChange={setSection} />
            <DocumentSurface>
                <ContentContainer>
                    {section === 'context' && <NpmContext />}
                    {section === 'workflow' && <NpmComponents />}
                    {section === 'performance' && <NpmPerformance />}
                    {section === 'features' && <NpmFeatures />}
                    {section === 'tradeoffs' && <NpmTradeoffs />}
                </ContentContainer>
            </DocumentSurface>
        </>
    );
}

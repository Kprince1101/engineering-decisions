'use client';

import { useState } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { YarnContext } from '@/components/evaluation/context/YarnContext';
import { YarnComponents } from '@/components/evaluation/components/YarnComponents';
import { YarnPerformance } from '@/components/evaluation/performance/YarnPerformance';
import { YarnFeatures } from '@/components/evaluation/features/YarnFeatures';
import { YarnTradeoffs } from '@/components/evaluation/tradeoffs/YarnTradeoffs';
import { evaluationDomains } from '@/config/domains';

export default function YarnPage() {
    const domain = evaluationDomains.find(d => d.id === 'package-managers')!;
    const [section, setSection] = useState('context');

    return (
        <>
            <SectionTabs sections={domain.sections} active={section} onChange={setSection} />
            <DocumentSurface>
                <ContentContainer>
                    {section === 'context' && <YarnContext />}
                    {section === 'workflow' && <YarnComponents />}
                    {section === 'performance' && <YarnPerformance />}
                    {section === 'features' && <YarnFeatures />}
                    {section === 'tradeoffs' && <YarnTradeoffs />}
                </ContentContainer>
            </DocumentSurface>
        </>
    );
}

'use client';

import { useState } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { PnpmContext } from '@/components/evaluation/context/PnpmContext';
import { PnpmComponents } from '@/components/evaluation/components/PnpmComponents';
import { PnpmPerformance } from '@/components/evaluation/performance/PnpmPerformance';
import { PnpmFeatures } from '@/components/evaluation/features/PnpmFeatures';
import { PnpmTradeoffs } from '@/components/evaluation/tradeoffs/PnpmTradeoffs';
import { evaluationDomains } from '@/config/domains';

export default function PnpmPage() {
    const domain = evaluationDomains.find(d => d.id === 'package-managers')!;
    const [section, setSection] = useState('context');

    return (
        <>
            <SectionTabs sections={domain.sections} active={section} onChange={setSection} />
            <DocumentSurface>
                <ContentContainer>
                    {section === 'context' && <PnpmContext />}
                    {section === 'workflow' && <PnpmComponents />}
                    {section === 'performance' && <PnpmPerformance />}
                    {section === 'features' && <PnpmFeatures />}
                    {section === 'tradeoffs' && <PnpmTradeoffs />}
                </ContentContainer>
            </DocumentSurface>
        </>
    );
}

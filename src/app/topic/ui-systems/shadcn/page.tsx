'use client';

import { useState } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { ShadcnContext } from '@/components/evaluation/context/ShadcnContext';
import { ShadcnComponents } from '@/components/evaluation/components/ShadcnComponents';
import { ShadcnAdvanced } from '@/components/evaluation/advanced/ShadcnAdvanced';
import { ShadcnTradeoffs } from '@/components/evaluation/tradeoffs/ShadcnTradeoffs';
import { evaluationDomains } from '@/config/domains';

export default function ShadcnPage() {
    const domain = evaluationDomains.find(d => d.id === 'ui-systems')!;
    const [section, setSection] = useState('context');

    return (
        <>
            <SectionTabs sections={domain.sections} active={section} onChange={setSection} />
            <DocumentSurface>
                <ContentContainer>
                    {section === 'context' && <ShadcnContext />}
                    {section === 'components' && <ShadcnComponents />}
                    {section === 'advanced' && <ShadcnAdvanced />}
                    {section === 'tradeoffs' && <ShadcnTradeoffs />}
                </ContentContainer>
            </DocumentSurface>
        </>
    );
}
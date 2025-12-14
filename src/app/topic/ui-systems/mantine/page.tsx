'use client';

import { useState } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { MantineContext } from '@/components/evaluation/context/MantineContext';
import { MantineComponents } from '@/components/evaluation/components/MantineComponents';
import { MantineAdvanced } from '@/components/evaluation/advanced/MantineAdvanced';
import { MantineTradeoffs } from '@/components/evaluation/tradeoffs/MantineTradeoffs';
import { evaluationDomains } from '@/config/domains';

export default function MantinePage() {
    const domain = evaluationDomains.find(d => d.id === 'ui-systems')!;
    const [section, setSection] = useState('context');

    return (
        <>
            <SectionTabs sections={domain.sections} active={section} onChange={setSection} />
            <DocumentSurface>
                <ContentContainer>
                    {section === 'context' && <MantineContext />}
                    {section === 'components' && <MantineComponents />}
                    {section === 'advanced' && <MantineAdvanced />}
                    {section === 'tradeoffs' && <MantineTradeoffs />}
                </ContentContainer>
            </DocumentSurface>
        </>
    );
}
'use client';

import { useState } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { AntdContext } from '@/components/evaluation/context/AntdContext';
import { AntdComponents } from '@/components/evaluation/components/AntdComponents';
import { AntdAdvanced } from '@/components/evaluation/advanced/AntdAdvanced';
import { AntdTradeoffs } from '@/components/evaluation/tradeoffs/AntdTradeoffs';
import { evaluationDomains } from '@/config/domains';

export default function AntdPage() {
    const domain = evaluationDomains.find(d => d.id === 'ui-systems')!;
    const [section, setSection] = useState('context');

    return (
        <>
            <SectionTabs sections={domain.sections} active={section} onChange={setSection} />
            <DocumentSurface>
                <ContentContainer>
                    {section === 'context' && <AntdContext />}
                    {section === 'components' && <AntdComponents />}
                    {section === 'advanced' && <AntdAdvanced />}
                    {section === 'tradeoffs' && <AntdTradeoffs />}
                </ContentContainer>
            </DocumentSurface>
        </>
    );
}
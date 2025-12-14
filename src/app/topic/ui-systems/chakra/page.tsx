'use client';

import { useState } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { ChakraContext } from '@/components/evaluation/context/ChakraContext';
import { ChakraComponents } from '@/components/evaluation/components/ChakraComponents';
import { ChakraAdvanced } from '@/components/evaluation/advanced/ChakraAdvanced';
import { ChakraTradeoffs } from '@/components/evaluation/tradeoffs/ChakraTradeoffs';
import { evaluationDomains } from '@/config/domains';

export default function ChakraPage() {
    const domain = evaluationDomains.find(d => d.id === 'ui-systems')!;
    const [section, setSection] = useState('context');

    return (
        <>
            <SectionTabs sections={domain.sections} active={section} onChange={setSection} />
            <DocumentSurface>
                <ContentContainer>
                    {section === 'context' && <ChakraContext />}
                    {section === 'components' && <ChakraComponents />}
                    {section === 'advanced' && <ChakraAdvanced />}
                    {section === 'tradeoffs' && <ChakraTradeoffs />}
                </ContentContainer>
            </DocumentSurface>
        </>
    );
}
'use client';

import { useState } from 'react';
import { Header } from '@/components/shell/Header';
import { SectionTabs, Section } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { ChakraContext } from '@/components/evaluation/context/ChakraContext';
import { ChakraComponents } from '@/components/evaluation/components/ChakraComponents';
import { ChakraAdvanced } from '@/components/evaluation/advanced/ChakraAdvanced';
import { ChakraTradeoffs } from '@/components/evaluation/tradeoffs/ChakraTradeoffs';

export default function ChakraPage() {
    const [section, setSection] = useState<Section>('context');

    return (
        <>
            <Header>
                <SectionTabs active={section} onChange={setSection} />
            </Header>

            <main className="bg-slate-100 py-24">
                <div className="flex justify-center">
                    <DocumentSurface>
                        <ContentContainer>
                            {section === 'context' && <ChakraContext />}
                            {section === 'components' && <ChakraComponents />}
                            {section === 'advanced' && <ChakraAdvanced />}
                            {section === 'tradeoffs' && <ChakraTradeoffs />}
                        </ContentContainer>
                    </DocumentSurface>
                </div>
            </main>
        </>
    );
}
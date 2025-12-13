'use client';

import { useState } from 'react';
import { Header } from '@/components/shell/Header';
import { SectionTabs, Section } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { MantineContext } from '@/components/evaluation/context/MantineContext';
import { MantineComponents } from '@/components/evaluation/components/MantineComponents';
import { MantineAdvanced } from '@/components/evaluation/advanced/MantineAdvanced';
import { MantineTradeoffs } from '@/components/evaluation/tradeoffs/MantineTradeoffs';

export default function MantinePage() {
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
                            {section === 'context' && <MantineContext />}
                            {section === 'components' && <MantineComponents />}
                            {section === 'advanced' && <MantineAdvanced />}
                            {section === 'tradeoffs' && <MantineTradeoffs />}
                        </ContentContainer>
                    </DocumentSurface>
                </div>
            </main>
        </>
    );
}
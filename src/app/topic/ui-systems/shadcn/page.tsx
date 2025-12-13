'use client';

import { useState } from 'react';
import { Header } from '@/components/shell/Header';
import { SectionTabs, Section } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { ShadcnContext } from '@/components/evaluation/context/ShadcnContext';
import { ShadcnComponents } from '@/components/evaluation/components/ShadcnComponents';
import { ShadcnAdvanced } from '@/components/evaluation/advanced/ShadcnAdvanced';
import { ShadcnTradeoffs } from '@/components/evaluation/tradeoffs/ShadcnTradeoffs';

export default function ShadcnPage() {
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
                            {section === 'context' && <ShadcnContext />}
                            {section === 'components' && <ShadcnComponents />}
                            {section === 'advanced' && <ShadcnAdvanced />}
                            {section === 'tradeoffs' && <ShadcnTradeoffs />}
                        </ContentContainer>
                    </DocumentSurface>
                </div>
            </main>
        </>
    );
}
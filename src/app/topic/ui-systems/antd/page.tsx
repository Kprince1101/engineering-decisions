'use client';

import { useState } from 'react';
import { Header } from '@/components/shell/Header';
import { SectionTabs, Section } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { ContentContainer } from '@/components/content';
import { AntdContext } from '@/components/evaluation/context/AntdContext';
import { AntdComponents } from '@/components/evaluation/components/AntdComponents';
import { AntdAdvanced } from '@/components/evaluation/advanced/AntdAdvanced';
import { AntdTradeoffs } from '@/components/evaluation/tradeoffs/AntdTradeoffs';

export default function AntDesignPage() {
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
                            {section === 'context' && <AntdContext />}
                            {section === 'components' && <AntdComponents />}
                            {section === 'advanced' && <AntdAdvanced />}
                            {section === 'tradeoffs' && <AntdTradeoffs />}
                        </ContentContainer>
                    </DocumentSurface>
                </div>
            </main>
        </>
    );
}
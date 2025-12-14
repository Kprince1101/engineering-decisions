'use client';

import type { ReactNode } from 'react';
import { SectionProvider, useSection } from '@/contexts/SectionContext';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { evaluationDomains } from '@/config/domains';

function UISystemsLayoutContent({ children }: { children: ReactNode }) {
    const domain = evaluationDomains.find(d => d.id === 'ui-systems')!;
    const { activeSection, setActiveSection } = useSection();

    return (
        <>
            <SectionTabs
                sections={domain.sections}
                active={activeSection}
                onChange={setActiveSection}
            />
            <DocumentSurface className="w-full max-w-6xl">
                {children}
            </DocumentSurface>
        </>
    );
}

export default function UISystemsLayout({ children }: { children: ReactNode }) {
    return (
        <SectionProvider initialSection="context">
            <UISystemsLayoutContent>
                {children}
            </UISystemsLayoutContent>
        </SectionProvider>
    );
}

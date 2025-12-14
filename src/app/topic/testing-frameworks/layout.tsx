'use client';

import type { ReactNode } from 'react';
import { SectionProvider, useSection } from '@/contexts/SectionContext';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { evaluationDomains } from '@/config/domains';

function TestingFrameworksLayoutContent({ children }: { children: ReactNode }) {
    const domain = evaluationDomains.find(d => d.id === 'testing-frameworks')!;
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

export default function TestingFrameworksLayout({ children }: { children: ReactNode }) {
    return (
        <SectionProvider initialSection="context">
            <TestingFrameworksLayoutContent>
                {children}
            </TestingFrameworksLayoutContent>
        </SectionProvider>
    );
}

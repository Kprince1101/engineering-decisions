'use client';

import type { ReactNode } from 'react';
import { SectionProvider, useSection } from '@/contexts/SectionContext';
import { SectionTabs } from '@/components/shell/SectionTabs';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import { evaluationDomains } from '@/config/domains';

function PackageManagersLayoutContent({ children }: { children: ReactNode }) {
    const domain = evaluationDomains.find(d => d.id === 'package-managers')!;
    const { activeSection, setActiveSection } = useSection();

    return (
        <div style={{ width: '85%' }} className="mx-auto">
            <SectionTabs
                sections={domain.sections}
                active={activeSection}
                onChange={setActiveSection}
            />
            <DocumentSurface>
                {children}
            </DocumentSurface>
        </div>
    );
}

export default function PackageManagersLayout({ children }: { children: ReactNode }) {
    return (
        <SectionProvider initialSection="context">
            <PackageManagersLayoutContent>
                {children}
            </PackageManagersLayoutContent>
        </SectionProvider>
    );
}

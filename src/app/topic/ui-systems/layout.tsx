import type { ReactNode } from 'react';
import { SectionTabs } from '@/components/shell/SectionTabs';

type LayoutProps = {
    children: ReactNode;
};

export default function UISystemsLayout({ children }: LayoutProps) {
    return (
        <>
            {children}
        </>
    );
}

'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SectionContextValue {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const SectionContext = createContext<SectionContextValue | undefined>(undefined);

export function SectionProvider({ children, initialSection = 'context' }: { children: ReactNode; initialSection?: string }) {
    const [activeSection, setActiveSection] = useState(initialSection);

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    );
}

export function useSection() {
    const context = useContext(SectionContext);
    if (!context) {
        throw new Error('useSection must be used within a SectionProvider');
    }
    return context;
}

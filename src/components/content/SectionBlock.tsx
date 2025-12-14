import { ReactNode } from 'react';

type SectionBlockProps = {
    children: ReactNode;
    title?: string;
    className?: string;
};

/**
 * SectionBlock: Wraps major sections (Context, Components, Advanced, Tradeoffs)
 * 
 * Adds spacing and subtle separation between major sections
 * Optionally renders section title
 */
export function SectionBlock({ children, title, className = '' }: SectionBlockProps) {
    return (
        <section
            className={`flex flex-col gap-4 ${className}`}
            style={{ width: '85%', marginInline: 'auto', paddingBlock: '1.5%' }}
        >
            {title && (
                <h2 className="text-2xl font-semibold text-slate-800" style={{ paddingBlockStart: '1.75rem' }}>
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
}

import { ReactNode } from 'react';

type ContentContainerProps = {
    children: ReactNode;
    /** Optional className for additional customization */
    className?: string;
};

/**
 * ContentContainer: Constrains reading width and centers content
 * 
 * Provides optimal line length for readability
 * Adds consistent vertical rhythm
 */
export function ContentContainer({ children, className = '' }: ContentContainerProps) {
    return (
        <div style={{ paddingBlockStart: '2.75rem' }} className={`max-w-6xl mx-auto space-y-4 leading-relaxed text-slate-800 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 ${className}`}>
            {children}
        </div>
    );
}

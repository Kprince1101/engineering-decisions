import { ReactNode } from 'react';

type SubsectionBlockProps = {
    children: ReactNode;
    heading?: string;
    className?: string;
};

/**
 * SubsectionBlock: Wraps subsections within major sections
 * 
 * Enforces consistent spacing and hierarchy
 * Used for groupings like "What Problem X Solves"
 */
export function SubsectionBlock({ children, heading, className = '' }: SubsectionBlockProps) {
    return (
        <div className={`flex flex-col gap-6 ${className}`}>
            {heading && (
                <h3 className="text-lg font-semibold text-slate-700">
                    {heading}
                </h3>
            )}
            {children}
        </div>
    );
}

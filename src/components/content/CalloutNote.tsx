import { ReactNode } from 'react';

type CalloutNoteProps = {
    children: ReactNode;
    /** Optional className for additional customization */
    className?: string;
};

/**
 * CalloutNote: Neutral informational callout
 * 
 * Used for clarifications, caveats, or framing
 * No color accents beyond subtle border/background
 * Think internal RFC, not marketing
 */
export function CalloutNote({ children, className = '' }: CalloutNoteProps) {
    return (
        <div className={`border-l-2 border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 ${className}`}>
            {children}
        </div>
    );
}

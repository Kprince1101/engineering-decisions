import { ReactNode } from 'react';

type CriteriaGridProps = {
    children: ReactNode;
    /** Optional className for additional customization */
    className?: string;
};

/**
 * CriteriaGrid: Two-column layout for "What matters / Approach" patterns
 * 
 * Responsive: collapses to single column on mobile
 * Used for side-by-side comparison of criteria and implementation
 */
export function CriteriaGrid({ children, className = '' }: CriteriaGridProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
            {children}
        </div>
    );
}

/**
 * CriteriaItem: Individual item within CriteriaGrid
 * 
 * Provides consistent styling for grid items
 */
type CriteriaItemProps = {
    children: ReactNode;
    /** Optional label for the criteria */
    label?: string;
    /** Optional className for additional customization */
    className?: string;
};

export function CriteriaItem({ children, label, className = '' }: CriteriaItemProps) {
    return (
        <div className={`space-y-2 ${className}`}>
            {label && (
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                    {label}
                </div>
            )}
            <div className="text-slate-700">
                {children}
            </div>
        </div>
    );
}

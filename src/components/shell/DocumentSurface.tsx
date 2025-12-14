/**
 * DocumentSurface: Visual separation between app chrome and content
 * 
 * Creates a white, centered document area that sits within the application shell.
 * Establishes clear hierarchy: dark header/nav vs. light content surface.
 */
export function DocumentSurface({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`bg-white px-16 py-16 rounded-lg border border-slate-200 ${className}`}>
            {children}
        </div>
    );
}

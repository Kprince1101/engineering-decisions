type DemoBlockProps = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export function DemoBlock({ title, description, children }: DemoBlockProps) {
    return (
        <div style={{ maxWidth: '100%' }}>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            {children ? (
                <div>{children}</div>
            ) : (
                <p>Demo coming soon</p>
            )}
        </div>
    );
}

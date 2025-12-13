export type Section = 'context' | 'components' | 'advanced' | 'tradeoffs';

interface SectionTabsProps {
    active: Section;
    onChange: (section: Section) => void;
}

export function SectionTabs({ active, onChange }: SectionTabsProps) {
    const tabs: { id: Section; label: string }[] = [
        { id: 'context', label: 'Context' },
        { id: 'components', label: 'Components' },
        { id: 'advanced', label: 'Advanced' },
        { id: 'tradeoffs', label: 'Tradeoffs' },
    ];

    return (
        <nav className="bg-slate-100 border-b border-slate-200 w-full flex justify-center">
            <div className="flex gap-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onChange(tab.id)}
                        className={`px-4 py-3 text-md font-medium border-b-2 transition-colors ${active === tab.id
                            ? 'text-slate-900 border-slate-900'
                            : 'text-slate-600 border-transparent hover:text-slate-900 hover:border-slate-300'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </nav >
    );
}
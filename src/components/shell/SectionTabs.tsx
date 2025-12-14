import { EvaluationSection } from '@/config/domains';

export type Section = string;

interface SectionTabsProps {
    sections: EvaluationSection[];
    active: Section;
    onChange: (section: Section) => void;
}

export function SectionTabs({ sections, active, onChange }: SectionTabsProps) {
    return (
        <nav className="bg-slate-100 border-b border-slate-200 w-full flex justify-center sticky top-16 z-40">
            <div className="flex gap-4">
                {sections.map((tab) => (
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
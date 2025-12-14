'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { DecisionPanel } from './DecisionPanel';
import { evaluationDomains } from '@/config/domains';

/**
 * Sticky header with three zones:
 * [ App Identity ]  [ Library Navigation ]  [ Decision State ]
 * 
 * Voting UI is always visible, turns decision into global state
 */
export function Header({ children }: { children?: ReactNode }) {
    const pathname = usePathname();
    const activeDomain = evaluationDomains.find(d => pathname?.includes(`/topic/${d.id}`))
        || evaluationDomains.find(d => d.id === 'ui-systems');

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-slate-800 w-full shadow-sm">
            <div className="w-full px-8 h-16 flex items-center gap-10">
                {/* Left: App Identity */}
                <Link
                    href={'/'}
                    className="text-lg font-semibold text-slate-100 whitespace-nowrap shrink-0"
                    style={{ fontSize: '1.5rem', color: '#f1f5f9', paddingInlineStart: '2%' }}
                >
                    Engineering Decisions Evaluation Tool
                </Link>

                {/* Center: Navigation */}
                <div className="flex-1 flex justify-center px-4">
                    <nav className="flex gap-8 text-sm font-semibold text-slate-100">
                        {activeDomain?.headerLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`hover:text-white transition-colors pb-1 border-b-2 ${isActive
                                            ? 'border-white text-white'
                                            : 'border-transparent text-slate-100'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right: Decision Panel */}
                <div className="shrink-0 w-[520px] flex justify-end">
                    <DecisionPanel />
                </div>
            </div>
            {children}
        </header>
    );
}

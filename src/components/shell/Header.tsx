'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { DecisionPanel } from './DecisionPanel';

/**
 * Sticky header with three zones:
 * [ App Identity ]  [ Library Navigation ]  [ Decision State ]
 * 
 * Voting UI is always visible, turns decision into global state
 */
export function Header({ children }: { children?: ReactNode }) {
    return (
        <header className="sticky top-0 z-20 bg-slate-950 border-b border-slate-800 shadow-sm">
            <div className="mx-auto max-w-7xl h-16 px-6 flex items-center">
                {/* Left: App Identity */}
                <Link
                    href={'/'}
                    className="text-lg font-semibold text-slate-100 whitespace-nowrap shrink-0"
                    style={{ fontSize: '1.5rem', marginLeft: '2%', color: '#f1f5f9' }}
                >
                    Engineering Decisions
                </Link>

                {/* Center: Navigation */}
                <div className="flex-1 flex justify-center px-4">
                    <nav className="flex gap-8 text-sm font-semibold text-slate-100">
                        <Link
                            href="/topic/ui-systems/mantine"
                            className="hover:text-white transition-colors"
                            style={{ color: '#f1f5f9' }}
                        >
                            Mantine
                        </Link>
                        <Link
                            href="/topic/ui-systems/shadcn"
                            className="hover:text-white transition-colors"
                            style={{ color: '#f1f5f9' }}
                        >
                            shadcn/ui
                        </Link>
                        <Link
                            href="/topic/ui-systems/chakra"
                            className="hover:text-white transition-colors"
                            style={{ color: '#f1f5f9' }}
                        >
                            Chakra
                        </Link>
                        <Link
                            href="/topic/ui-systems/antd"
                            className="hover:text-white transition-colors"
                            style={{ color: '#f1f5f9' }}
                        >
                            AntD
                        </Link>
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

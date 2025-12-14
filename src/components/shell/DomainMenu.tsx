'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { evaluationDomains } from '@/config/domains';

export function DomainMenu() {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <aside
            className={`bg-slate-50 border-r border-slate-200 sticky top-20 transition-all duration-300 relative ${isCollapsed ? 'w-16' : 'w-60'
                }`}
        >
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute -right-3 top-6 z-50 bg-white border border-slate-200 rounded-full p-1 shadow-sm hover:bg-slate-50 text-slate-500"
                title={isCollapsed ? "Expand menu" : "Collapse menu"}
            >
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <div className={`py-6 ${isCollapsed ? 'px-2' : 'px-4'}`}>
                <h2 className={`shrink-0 mb-6 text-lg font-bold uppercase tracking-wide text-slate-500 transition-opacity duration-200 ${isCollapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
                    }`}
                    style={{ paddingInlineStart: isCollapsed ? '0' : '8px' }}>
                    Evaluation Domains
                </h2>
                <nav className="overflow-y-auto">
                    <ul className="flex flex-col gap-2">
                        {evaluationDomains.map((domain) => {
                            // Check if active based on URL
                            const isActive = pathname?.includes(domain.id);

                            if (!domain.enabled) {
                                return (
                                    <li
                                        key={domain.id}
                                        className={`block rounded-md text-md text-slate-400 cursor-not-allowed flex items-center ${isCollapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'}`}
                                        title="Coming Soon"
                                    >
                                        {isCollapsed ? (
                                            <span className="text-xs font-bold select-none">
                                                {domain.label.charAt(0)}
                                            </span>
                                        ) : (
                                            <span style={{ paddingInlineStart: isCollapsed ? '0' : '16px' }} className="truncate">{domain.label}</span>
                                        )}
                                    </li>
                                );
                            }

                            return (
                                <li key={domain.id}>
                                    <Link
                                        href={`/topic/${domain.id}/${domain.defaultPage}`}
                                        className={`block rounded-md text-md transition-colors flex items-center ${isCollapsed ? 'justify-center px-2 py-3' : 'px-4 py-3'
                                            } ${isActive
                                                ? 'font-bold bg-white text-slate-900 shadow-sm'
                                                : 'text-slate-600 hover:bg-white hover:text-slate-900'
                                            }`}
                                        style={{ paddingInlineStart: isCollapsed ? '0' : '16px' }}
                                        title={isCollapsed ? domain.label : undefined}
                                    >
                                        {isCollapsed ? (
                                            <span className="text-lg font-bold select-none">
                                                {domain.label.charAt(0)}
                                            </span>
                                        ) : (
                                            <span className="truncate">{domain.label}</span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            {/* About Link - Footer (positioned at bottom of viewport) */}
            <div
                className={`sticky bottom-0 bg-slate-50 border-t border-slate-200 ${isCollapsed ? 'px-2' : 'px-4'} py-3 ${isCollapsed ? 'opacity-0 h-0 overflow-hidden border-t-0 py-0' : ''}`}
            >
                <Link
                    href="/about"
                    className="block text-xs text-slate-400 hover:text-slate-600 transition-colors"
                    style={{ paddingInlineStart: isCollapsed ? '0' : '16px' }}
                >
                    About
                </Link>
            </div>
        </aside>
    );
}

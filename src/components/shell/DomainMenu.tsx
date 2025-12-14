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

            <div className={`py-6 ${isCollapsed ? 'px-2' : 'pl-12 pr-4'}`}>
                {/* Section Label */}
                <div className={`mb-3 transition-opacity duration-200 ${isCollapsed ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
                    }`}>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400" style={{ paddingInlineStart: '5%' }}>
                        Evaluation Domains
                    </h2>
                </div>

                {/* Domain Navigation */}
                <nav className="overflow-y-auto" style={{ minHeight: '420px' }}>
                    <ul className="space-y-1">
                        {evaluationDomains.map((domain) => {
                            // Check if active based on URL
                            const isActive = pathname?.includes(domain.id);

                            if (!domain.enabled) {
                                return (
                                    <li key={domain.id} style={{ paddingInlineStart: '10%' }}>
                                        <div
                                            className={`flex items-center h-10 rounded-md text-base text-slate-400 cursor-not-allowed bg-slate-100/50 ${isCollapsed ? 'justify-center px-2' : 'pl-8 pr-3'
                                                }`}

                                            title="Coming Soon"
                                        >
                                            {isCollapsed ? (
                                                <span className="text-xs font-medium select-none">
                                                    {domain.label.charAt(0)}
                                                </span>
                                            ) : (
                                                <span className="truncate">{domain.label}</span>
                                            )}
                                        </div>
                                    </li>
                                );
                            }

                            return (
                                <li key={domain.id} style={{ paddingInlineStart: '10%' }}>
                                    <Link
                                        href={`/topic/${domain.id}/${domain.defaultPage}`}
                                        className={`flex items-center h-10 rounded-md text-base font-medium transition-colors ${isCollapsed ? 'justify-center px-2' : 'pl-8 pr-3'
                                            } ${isActive
                                                ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
                                                : 'text-slate-600 hover:bg-white hover:text-slate-900'
                                            }`}
                                        title={isCollapsed ? domain.label : undefined}
                                    >
                                        {isCollapsed ? (
                                            <span className="text-sm font-medium select-none">
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

                {/* Meta / About Section */}
                {!isCollapsed && (
                    <div className="mt-8 pt-6 border-t border-slate-200" style={{ minHeight: '60px' }}>
                        <ul className="space-y-1">
                            <li style={{ paddingInlineStart: '5%' }}>
                                <Link
                                    href="/about"
                                    className="block py-2 m-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                                >
                                    About this tool
                                </Link>
                            </li>
                            <li style={{ paddingInlineStart: '5%' }}>
                                <a
                                    href="https://github.com/Kprince1101/engineering-decisions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 m-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                                >
                                    GitHub Repository
                                </a>
                            </li>
                            <li style={{ paddingInlineStart: '5%' }}>
                                <a
                                    href="https://github.com/Kprince1101/engineering-decisions/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-2 m-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
                                >
                                    Report an issue
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </aside >
    );
}

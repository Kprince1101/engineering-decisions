'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useVoting } from '@/lib/useVoting';

/**
 * Decision Panel: Global support state in header
 * 
 * Compact status panel - scannable support counts and minimal chart
 */
export function DecisionPanel() {
    const pathname = usePathname();
    const { votes, isLoading, error, hasVoted, submitVote } = useVoting();

    // Extract library from pathname
    const currentLibrary = pathname?.match(/\/(mantine|shadcn|chakra|antd)$/)?.[1] as
        'mantine' | 'shadcn' | 'chakra' | 'antd' | undefined;

    if (isLoading) {
        return (
            <div className="text-xs text-slate-400">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-xs text-red-400">
                Error loading support data
            </div>
        );
    }

    const total = votes ? Object.values(votes).reduce((sum, count) => sum + count, 0) : 0;

    return (
        <div
            className="bg-slate-800/50 border border-slate-700 rounded-md py-1.5 text-xs text-slate-200 flex items-center gap-4 h-9 px-4"
            style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }}
        >
            {/* Support Action */}
            {currentLibrary && (
                <>
                    <VoteButton
                        library={currentLibrary}
                        isSupported={hasVoted(currentLibrary)}
                        onToggle={() => submitVote(currentLibrary)}
                    />
                    <div className="h-3 w-px bg-slate-700" />
                </>
            )}

            {/* Support counts - Horizontal Row */}
            {total > 0 ? (
                <>
                    <div className="flex items-center gap-3">
                        {Object.entries(votes || {})
                            .sort(([, a], [, b]) => b - a)
                            .map(([option, count]) => (
                                <div key={option} className="flex items-center gap-1.5">
                                    <span className="text-slate-400">{option}</span>
                                    <span className="text-slate-100 font-medium">{count}</span>
                                </div>
                            ))}
                    </div>

                    <div className="h-3 w-px bg-slate-700" />

                    <div className="flex gap-2">
                        <ExportButton votes={votes} />
                    </div>
                </>
            ) : (
                <p className="text-slate-500 m-0">
                    No support recorded yet
                </p>
            )}
        </div>
    );
}

/**
 * Export buttons with tooltips
 */
function ExportButton({ votes }: { votes: Record<string, number> | null }) {
    if (!votes || Object.values(votes).reduce((sum, count) => sum + count, 0) === 0) {
        return null;
    }

    return (
        <>
            <button
                onClick={() => {
                    const { exportVotesAsJSON } = require('@/lib/voteExport');
                    exportVotesAsJSON(votes);
                }}
                className="text-slate-400 hover:text-slate-200 transition-colors underline underline-offset-2 text-xs"
                title="Download a JSON snapshot for ADRs or documentation."
            >
                Export
            </button>
        </>
    );
}

function VoteButton({
    library,
    isSupported,
    onToggle
}: {
    library: string;
    isSupported: boolean;
    onToggle: () => Promise<void>;
}) {
    const [isToggling, setIsToggling] = useState(false);

    const handleToggle = async () => {
        if (isToggling) return;
        setIsToggling(true);
        try {
            await onToggle();
        } finally {
            setIsToggling(false);
        }
    };

    if (isSupported) {
        return (
            <button
                onClick={handleToggle}
                disabled={isToggling}
                className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-2 whitespace-nowrap"
                style={{ padding: '0.5rem 1rem' }}
                title="Click to remove support"
            >
                {isToggling ? '...' : 'Remove Support'}
            </button>
        );
    }

    const displayName = library.charAt(0).toUpperCase() + library.slice(1);

    return (
        <button
            onClick={handleToggle}
            disabled={isToggling}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded font-medium transition-colors whitespace-nowrap"
            style={{ padding: '0.25rem 0.75rem' }}
            title="Click to support this library"
        >
            {isToggling ? '...' : `Support ${displayName}`}
        </button>
    );
}
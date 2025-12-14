'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useVoting } from '@/lib/useVoting';
import { evaluationDomains } from '@/config/domains';

/**
 * Decision Panel: Global support state in header
 * 
 * Compact status panel - scannable support counts and minimal chart
 */
export function DecisionPanel() {
    const pathname = usePathname();

    // Determine active domain
    const activeDomain = evaluationDomains.find(d => pathname?.includes(`/topic/${d.id}`))
        || evaluationDomains.find(d => d.id === 'ui-systems')!;

    const { votes, isLoading, error, hasVoted, submitVote } = useVoting(activeDomain.id);

    // Extract current option from pathname (last segment)
    // e.g. /topic/ui-systems/mantine -> mantine
    const currentOption = pathname?.split('/').pop();
    const isValidOption = currentOption && activeDomain.headerLinks.some(link => link.href.endsWith(currentOption));

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

    // Merge votes with all available options for the domain to ensure 0s are shown
    const allOptions = activeDomain.headerLinks.map(link => link.href.split('/').pop()!);
    const displayVotes = allOptions.reduce((acc, option) => {
        acc[option] = (votes && votes[option]) || 0;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div
            className="bg-slate-800/50 border border-slate-700 rounded-md py-1.5 text-xs text-slate-200 flex items-center gap-4 h-9 px-4"
            style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', marginRight: '0.5rem' }}
        >
            {/* Support Action */}
            {isValidOption && (
                <>
                    <VoteButton
                        library={currentOption}
                        isSupported={hasVoted(currentOption)}
                        onToggle={() => submitVote(currentOption)}
                    />
                    <div className="h-3 w-px bg-slate-700" />
                </>
            )}

            {/* Support counts - Horizontal Row */}
            <div className="flex items-center gap-3">
                {Object.entries(displayVotes)
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
                <ExportButton votes={displayVotes} />
            </div>
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
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useVoting } from '@/lib/useVoting';

/**
 * Vote Control: Context-aware vote button in header
 * 
 * Shows vote button only when viewing a library page
 * Automatically detects current library from URL
 */
export function VoteControl() {
    const pathname = usePathname();
    const { hasVoted, submitVote } = useVoting();
    const [isVoting, setIsVoting] = useState(false);

    // Extract library from pathname (/topic/ui-systems/mantine -> mantine)
    const currentLibrary = pathname?.match(/\/(mantine|shadcn|chakra|antd)$/)?.[1] as
        'mantine' | 'shadcn' | 'chakra' | 'antd' | undefined;

    if (!currentLibrary) {
        return null; // Not on a library page
    }

    const voted = hasVoted(currentLibrary);

    const handleVote = async () => {
        if (voted || isVoting) return;

        setIsVoting(true);
        try {
            await submitVote(currentLibrary);
        } catch (e) {
            // Error handled by hook
        } finally {
            setIsVoting(false);
        }
    };

    const tooltipText = voted
        ? "You've already voted."
        : "Cast one anonymous vote after reviewing all options.";

    return (
        <button
            onClick={handleVote}
            disabled={voted || isVoting}
            className={`px-3.5 py-1.5 text-xs border rounded font-medium ${voted
                ? 'bg-slate-100 text-slate-400 border-slate-300 cursor-not-allowed opacity-70'
                : 'bg-white text-slate-800 border-slate-300 cursor-pointer hover:bg-slate-50'
                }`}
            title={tooltipText}
        >
            {voted ? '✓ Voted' : isVoting ? 'Voting...' : `Vote for ${currentLibrary}`}
        </button>
    );
}

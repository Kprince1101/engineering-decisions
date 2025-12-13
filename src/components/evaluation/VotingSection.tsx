'use client';

import { useVoting } from '@/lib/useVoting';
import { VoteButton, VoteSummary } from '@/components/voting';
import { VoteExport } from '@/components/voting/VoteExport';

type VotingSectionProps = {
    option: 'mantine' | 'shadcn' | 'chakra' | 'antd';
};

/**
 * Phase 2.0–2.4: Voting section component
 * 
 * Layered on top of evaluation pages
 * Does not modify Phase 1 content
 * 
 * Encourages informed voting after reviewing evaluations
 * Supports export for documentation purposes (Phase 2.4)
 */
export function VotingSection({ option }: VotingSectionProps) {
    const { votes, isLoading, error, hasVoted, submitVote } = useVoting();

    const handleVote = async () => {
        try {
            await submitVote(option);
        } catch (e) {
            // Error already handled by hook
        }
    };

    return (
        <section style={{
            marginTop: '48px',
            padding: '24px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#fafafa'
        }}>
            <h2>Your Vote</h2>
            <p style={{ marginBottom: '16px', color: '#555' }}>
                After reviewing the evaluation above, indicate which option best fits your team's constraints.
            </p>

            <div style={{ marginBottom: '24px' }}>
                <VoteButton
                    option={option}
                    isSupported={hasVoted(option)}
                    onToggle={handleVote}
                    disabled={isLoading}
                />
            </div>

            <VoteSummary votes={votes} isLoading={isLoading} error={error} />

            <VoteExport votes={votes} />

            {votes && Object.values(votes).reduce((sum, count) => sum + count, 0) > 0 && (
                <p style={{
                    marginTop: '20px',
                    fontSize: '13px',
                    color: '#777',
                    fontStyle: 'italic',
                    borderTop: '1px solid #e0e0e0',
                    paddingTop: '16px'
                }}>
                    These results reflect aggregate preferences and should inform—not replace—technical decision-making.
                </p>
            )}
        </section>
    );
}

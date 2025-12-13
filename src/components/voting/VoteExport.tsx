'use client';

import { useState } from 'react';
import { exportVotesAsJSON, copyTextSummaryToClipboard } from '@/lib/voteExport';

type VoteExportProps = {
    votes: Record<string, number> | null;
};

/**
 * Phase 2.4: Vote export controls
 * 
 * Provides JSON export and clipboard copy for documentation purposes
 * No modals, no confirmations, no social features
 */
export function VoteExport({ votes }: VoteExportProps) {
    const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

    if (!votes) {
        return null;
    }

    const handleExportJSON = () => {
        exportVotesAsJSON(votes);
    };

    const handleCopyText = async () => {
        try {
            await copyTextSummaryToClipboard(votes);
            setCopyFeedback('Copied to clipboard');
            setTimeout(() => setCopyFeedback(null), 2000);
        } catch (error) {
            setCopyFeedback('Failed to copy');
            setTimeout(() => setCopyFeedback(null), 2000);
        }
    };

    return (
        <div style={{
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid #e0e0e0',
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
        }}>
            <button
                onClick={handleExportJSON}
                style={{
                    padding: '6px 12px',
                    fontSize: '13px',
                    border: '1px solid #d0d0d0',
                    borderRadius: '4px',
                    backgroundColor: '#fff',
                    color: '#555',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                }}
            >
                Export results
            </button>

            <button
                onClick={handleCopyText}
                style={{
                    padding: '6px 12px',
                    fontSize: '13px',
                    border: '1px solid #d0d0d0',
                    borderRadius: '4px',
                    backgroundColor: '#fff',
                    color: '#555',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                }}
            >
                Copy summary
            </button>

            {copyFeedback && (
                <span style={{
                    fontSize: '13px',
                    color: '#666',
                    fontStyle: 'italic',
                }}>
                    {copyFeedback}
                </span>
            )}
        </div>
    );
}

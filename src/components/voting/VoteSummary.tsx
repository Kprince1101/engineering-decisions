import { VoteChart } from './VoteChart';

type VoteSummaryProps = {
    votes: Record<string, number> | null;
    isLoading: boolean;
    error: string | null;
};

/**
 * Phase 2.2: Vote totals display with visualization
 * 
 * Shows aggregate counts in both text and chart form
 * Chart added in Phase 2.2 for improved readability
 */
export function VoteSummary({ votes, isLoading, error }: VoteSummaryProps) {
    if (isLoading) {
        return <p style={{ fontSize: '14px', color: '#666' }}>Loading vote totals...</p>;
    }

    if (error) {
        return <p style={{ fontSize: '14px', color: '#d32f2f' }}>{error}</p>;
    }

    if (!votes) {
        return null;
    }

    const total = Object.values(votes).reduce((sum, count) => sum + count, 0);

    if (total === 0) {
        return (
            <p style={{ fontSize: '14px', color: '#666' }}>
                No votes recorded yet. Results will appear as participants share their preferences.
            </p>
        );
    }

    return (
        <div>
            {/* Text summary (preserved from Phase 2.0) */}
            <div style={{ fontSize: '14px', marginBottom: '24px' }}>
                <p style={{ fontWeight: 600, marginBottom: '8px' }}>
                    Current totals ({total} {total === 1 ? 'vote' : 'votes'}):
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {Object.entries(votes)
                        .sort(([, a], [, b]) => b - a) // Sort by vote count descending
                        .map(([option, count]) => (
                            <li key={option} style={{ marginBottom: '4px' }}>
                                <strong>{option}:</strong> {count}
                            </li>
                        ))}
                </ul>
            </div>

            {/* Visual chart (added in Phase 2.2) */}
            <VoteChart votes={votes} />
        </div>
    );
}

type VoteChartProps = {
    votes: Record<string, number> | null;
};

/**
 * Phase 2.2: Minimal horizontal bar chart for vote totals
 * 
 * Plain SVG implementation (no external chart library)
 * Neutral colors, no animations, no gamification
 * Shows relative preference without emotional framing
 */
export function VoteChart({ votes }: VoteChartProps) {
    if (!votes) {
        return null;
    }

    // Sort options by vote count descending
    const sortedEntries = Object.entries(votes).sort(([, a], [, b]) => b - a);

    const maxVotes = Math.max(...Object.values(votes), 1); // Avoid division by zero
    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

    // No votes yet - show empty state
    if (totalVotes === 0) {
        return (
            <div style={{
                padding: '24px',
                backgroundColor: '#f9f9f9',
                borderRadius: '4px',
                border: '1px solid #e0e0e0',
                textAlign: 'center',
                color: '#666'
            }}>
                No votes recorded yet. Results will appear as participants share their preferences.
            </div>
        );
    }

    // Chart dimensions
    const barHeight = 32;
    const barSpacing = 16;
    const labelWidth = 100;
    const chartWidth = 400;
    const countWidth = 40;
    const totalWidth = labelWidth + chartWidth + countWidth + 40; // padding
    const totalHeight = sortedEntries.length * (barHeight + barSpacing) + 20;

    return (
        <div style={{ marginTop: '16px' }}>
            <p style={{
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '12px',
                color: '#333'
            }}>
                Current aggregate preferences:
            </p>
            <svg
                width={totalWidth}
                height={totalHeight}
                style={{
                    maxWidth: '100%',
                    height: 'auto',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
            >
                {sortedEntries.map(([option, count], index) => {
                    const y = index * (barHeight + barSpacing);
                    const barWidth = maxVotes > 0
                        ? (count / maxVotes) * chartWidth
                        : 0;

                    return (
                        <g key={option}>
                            {/* Option label */}
                            <text
                                x={0}
                                y={y + barHeight / 2}
                                dominantBaseline="middle"
                                textAnchor="start"
                                fill="#333"
                                fontSize="14"
                                fontWeight="500"
                            >
                                {option}
                            </text>

                            {/* Bar background (light gray track) */}
                            <rect
                                x={labelWidth}
                                y={y}
                                width={chartWidth}
                                height={barHeight}
                                fill="#f0f0f0"
                                rx="2"
                            />

                            {/* Bar (actual vote count) */}
                            <rect
                                x={labelWidth}
                                y={y}
                                width={barWidth}
                                height={barHeight}
                                fill="#6b7280"
                                rx="2"
                            />

                            {/* Vote count label */}
                            <text
                                x={labelWidth + chartWidth + 12}
                                y={y + barHeight / 2}
                                dominantBaseline="middle"
                                textAnchor="start"
                                fill="#666"
                                fontSize="13"
                            >
                                {count}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}

/**
 * Phase 2.4: Vote export utilities
 * 
 * Generates snapshots of voting results for documentation purposes
 * (ADRs, design docs, team discussions)
 */

type VoteSnapshot = {
    timestamp: string;
    votes: Record<string, number>;
};

/**
 * Generate a vote snapshot object with current timestamp
 */
export function createVoteSnapshot(votes: Record<string, number>): VoteSnapshot {
    return {
        timestamp: new Date().toISOString(),
        votes,
    };
}

/**
 * Export votes as downloadable JSON file
 */
export function exportVotesAsJSON(votes: Record<string, number>): void {
    const snapshot = createVoteSnapshot(votes);
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], {
        type: 'application/json',
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ui-library-votes-${formatDateForFilename(new Date())}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

/**
 * Generate plain-text summary for clipboard
 */
export function generateTextSummary(votes: Record<string, number>): string {
    const now = new Date();
    const dateString = formatDateHuman(now);

    // Sort by vote count descending
    const sortedEntries = Object.entries(votes).sort(([, a], [, b]) => b - a);

    // Map option keys to display names
    const displayNames: Record<string, string> = {
        mantine: 'Mantine',
        shadcn: 'shadcn/ui',
        chakra: 'Chakra UI',
        antd: 'Ant Design',
    };

    const lines = [
        `UI Library Vote Snapshot (${dateString})`,
        '',
        ...sortedEntries.map(([option, count]) => {
            const name = displayNames[option] || option;
            return `${name}: ${count}`;
        }),
        '',
        'Note: Results reflect aggregate preferences and are not prescriptive.',
    ];

    return lines.join('\n');
}

/**
 * Copy text summary to clipboard
 */
export async function copyTextSummaryToClipboard(votes: Record<string, number>): Promise<void> {
    const summary = generateTextSummary(votes);
    await navigator.clipboard.writeText(summary);
}

/**
 * Format date for filename (YYYY-MM-DD)
 */
function formatDateForFilename(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Format date for human-readable display (YYYY-MM-DD)
 */
function formatDateHuman(date: Date): string {
    return formatDateForFilename(date); // Same format for simplicity
}

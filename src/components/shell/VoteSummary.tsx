import type { VoteSummary as VoteSummaryType } from '@/types/vote';

type VoteSummaryProps = {
    summary: VoteSummaryType[];
};

export function VoteSummary({ summary }: VoteSummaryProps) {
    return (
        <div>
            <h3>Vote Summary</h3>
            {/* TODO: Display vote results */}
        </div>
    );
}

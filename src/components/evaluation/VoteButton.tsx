type VoteButtonProps = {
    topicId: string;
    optionId: string;
};

export function VoteButton({ topicId, optionId }: VoteButtonProps) {
    // TODO: Add vote handling logic
    // TODO: Add API call to /api/vote
    // TODO: Add loading/disabled state

    return (
        <button>
            Vote
        </button>
    );
}

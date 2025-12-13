type VoteButtonProps = {
    option: 'mantine' | 'shadcn' | 'chakra' | 'antd';
    isSupported: boolean;
    onToggle: () => void;
    disabled?: boolean;
};

/**
 * Phase 2.0: Support toggle button
 * 
 * Triggers support toggle
 * Visual feedback for supported state
 */
export function VoteButton({ option, isSupported, onToggle, disabled }: VoteButtonProps) {
    const handleClick = () => {
        if (!disabled) {
            onToggle();
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={disabled}
            style={{
                padding: '8px 16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: isSupported ? '#f0f0f0' : '#fff',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.6 : 1,
            }}
        >
            {isSupported ? '✓ Supported' : 'Support'}
        </button>
    );
}

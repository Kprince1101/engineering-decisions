import { NextRequest, NextResponse } from 'next/server';
import { getVoteTotals, toggleVote } from '@/lib/voteStore';

/**
 * Phase 2.1: Persistent vote storage with duplicate detection
 * 
 * GET /api/vote - Returns current vote totals
 * POST /api/vote - Toggles support (add/remove)
 */

export async function GET() {
    try {
        const votes = getVoteTotals();
        return NextResponse.json({ votes });
    } catch (error) {
        console.error('Error fetching votes:', error);
        return NextResponse.json(
            { error: 'Failed to fetch vote totals' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { option } = body;

        // Validate option
        if (!option || !['mantine', 'shadcn', 'chakra', 'antd'].includes(option)) {
            return NextResponse.json(
                { error: 'Invalid option. Must be one of: mantine, shadcn, chakra, antd' },
                { status: 400 }
            );
        }

        // Toggle support
        const result = toggleVote(option, request.headers);

        if (!result.success) {
            return NextResponse.json(
                { error: result.message || 'Failed to record vote' },
                { status: 500 }
            );
        }

        // Return updated totals and new state
        const votes = getVoteTotals();
        return NextResponse.json({
            votes,
            supported: result.supported
        });
    } catch (error) {
        console.error('Error recording vote:', error);
        return NextResponse.json(
            { error: 'Failed to process vote' },
            { status: 500 }
        );
    }
}

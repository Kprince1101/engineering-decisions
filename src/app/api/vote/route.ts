import { NextRequest, NextResponse } from 'next/server';
import { getVotes, incrementVote, decrementVote } from '@/lib/voteStore';

/**
 * Vote API - Vercel KV backed
 * 
 * GET /api/vote?domain=... - Returns current vote totals for domain
 * POST /api/vote - Toggles support (add/remove) for option in domain
 */

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const domain = searchParams.get('domain') || 'ui-systems';
        const votes = await getVotes(domain);
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
        const { option, domain = 'ui-systems', action } = body;

        // Validate required fields
        if (!option) {
            return NextResponse.json(
                { error: 'Missing required field: option' },
                { status: 400 }
            );
        }

        if (!domain) {
            return NextResponse.json(
                { error: 'Missing required field: domain' },
                { status: 400 }
            );
        }

        // Perform atomic increment or decrement
        if (action === 'remove') {
            await decrementVote(domain, option);
        } else {
            await incrementVote(domain, option);
        }

        // Return updated vote totals
        const votes = await getVotes(domain);
        return NextResponse.json({ votes });
    } catch (error) {
        console.error('Error recording vote:', error);
        return NextResponse.json(
            { error: 'Failed to process vote' },
            { status: 500 }
        );
    }
}

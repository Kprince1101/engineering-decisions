import { NextRequest, NextResponse } from 'next/server';
import { resetVotes } from '@/lib/voteStore';

/**
 * Vote Reset API Endpoint
 * 
 * POST /api/vote/reset
 * Body: { domain: string, secret: string }
 * 
 * Internal use only - not exposed in UI
 * Requires VOTE_RESET_SECRET environment variable
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { domain, secret } = body;

        // Validate required fields
        if (!domain || typeof domain !== 'string') {
            return NextResponse.json(
                { error: 'Domain is required' },
                { status: 400 }
            );
        }

        if (!secret || typeof secret !== 'string') {
            return NextResponse.json(
                { error: 'Secret is required' },
                { status: 400 }
            );
        }

        // Verify secret
        const validSecret = process.env.VOTE_RESET_SECRET;
        if (!validSecret) {
            return NextResponse.json(
                { error: 'Reset endpoint not configured' },
                { status: 500 }
            );
        }

        if (secret !== validSecret) {
            return NextResponse.json(
                { error: 'Invalid secret' },
                { status: 401 }
            );
        }

        // Reset votes for the domain
        await resetVotes(domain);

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Vote reset error:', error);
        return NextResponse.json(
            { error: 'Reset failed' },
            { status: 500 }
        );
    }
}

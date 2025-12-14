import { kv } from '@vercel/kv';

export type VoteCounts = Record<string, number>;

const votesKey = (domain: string) => `votes:${domain}`;

/** Get all vote counts for a domain */
export async function getVotes(domain: string): Promise<VoteCounts> {
    const votes = await kv.hgetall<VoteCounts>(votesKey(domain));
    return votes ?? {};
}

/** Increment support for an option within a domain */
export async function incrementVote(domain: string, option: string) {
    await kv.hincrby(votesKey(domain), option, 1);
}

/** Decrement support (for toggle-off) */
export async function decrementVote(domain: string, option: string) {
    await kv.hincrby(votesKey(domain), option, -1);
}

/** Reset votes for a domain (optional admin use) */
export async function resetVotes(domain: string) {
    await kv.del(votesKey(domain));
}

import Database from 'better-sqlite3';
import path from 'path';
import crypto from 'crypto';

/**
 * Phase 2.1: Persistent vote storage with SQLite
 * 
 * Features:
 * - Votes persist across server restarts
 * - Server-side duplicate detection via IP hash
 * - Simple file-based storage (no external dependencies)
 */

// SQLite database file location
const DB_PATH = path.join(process.cwd(), 'data', 'votes.db');

// Ensure data directory exists
import fs from 'fs';
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize database
const db = new Database(DB_PATH);

// Create tables if they don't exist
db.exec(`
    CREATE TABLE IF NOT EXISTS votes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        option TEXT NOT NULL,
        ip_hash TEXT NOT NULL,
        timestamp INTEGER NOT NULL,
        UNIQUE(option, ip_hash)
    );
    
    CREATE INDEX IF NOT EXISTS idx_option ON votes(option);
    CREATE INDEX IF NOT EXISTS idx_ip_hash ON votes(ip_hash);
`);

/**
 * Hash IP address for privacy
 * Uses SHA-256 to avoid storing raw IPs
 */
function hashIP(ip: string): string {
    return crypto.createHash('sha256').update(ip).digest('hex');
}

/**
 * Extract IP from request headers
 * Handles X-Forwarded-For and X-Real-IP (common in proxies/CDNs)
 */
function getClientIP(headers: Headers): string {
    const forwardedFor = headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    const realIP = headers.get('x-real-ip');
    if (realIP) {
        return realIP;
    }

    // Fallback (should not happen in production)
    return 'unknown';
}

/**
 * Toggle a vote (Support)
 * If vote exists -> remove it (return { supported: false })
 * If vote doesn't exist -> add it (return { supported: true })
 */
export function toggleVote(option: string, headers: Headers): { success: boolean; supported: boolean; message?: string } {
    const ip = getClientIP(headers);
    const ipHash = hashIP(ip);
    const timestamp = Date.now();

    try {
        // Check if vote exists
        const existing = db.prepare(`
            SELECT id FROM votes WHERE option = ? AND ip_hash = ?
        `).get(option, ipHash);

        if (existing) {
            // Remove vote
            db.prepare(`
                DELETE FROM votes WHERE option = ? AND ip_hash = ?
            `).run(option, ipHash);

            return { success: true, supported: false };
        } else {
            // Add vote
            db.prepare(`
                INSERT INTO votes (option, ip_hash, timestamp)
                VALUES (?, ?, ?)
            `).run(option, ipHash, timestamp);

            return { success: true, supported: true };
        }
    } catch (error: any) {
        console.error('Error toggling vote:', error);
        return {
            success: false,
            supported: false,
            message: 'Failed to toggle support'
        };
    }
}

/**
 * Get vote totals for all options
 */
export function getVoteTotals(): Record<string, number> {
    const stmt = db.prepare(`
        SELECT option, COUNT(*) as count
        FROM votes
        GROUP BY option
    `);

    const rows = stmt.all() as Array<{ option: string; count: number }>;

    // Initialize all options with 0
    const totals: Record<string, number> = {
        mantine: 0,
        shadcn: 0,
        chakra: 0,
        antd: 0,
    };

    // Fill in actual counts
    for (const row of rows) {
        if (row.option in totals) {
            totals[row.option] = row.count;
        }
    }

    return totals;
}

/**
 * Check if an IP has already voted for a specific option
 */
export function hasVoted(option: string, headers: Headers): boolean {
    const ip = getClientIP(headers);
    const ipHash = hashIP(ip);

    const stmt = db.prepare(`
        SELECT COUNT(*) as count
        FROM votes
        WHERE option = ? AND ip_hash = ?
    `);

    const result = stmt.get(option, ipHash) as { count: number };
    return result.count > 0;
}

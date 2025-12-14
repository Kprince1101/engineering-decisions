'use client';

/**
 * Development Console Helpers
 * 
 * Attaches utility functions to window object for browser console use.
 * Only runs client-side. Does not affect SSR or production UI.
 */

declare global {
    interface Window {
        resetVotes?: (domain: string) => Promise<Response>;
        __devHelpersInitialized?: boolean;
    }
}

/**
 * Reset votes for a specific domain via browser console
 * 
 * Usage:
 *   await window.resetVotes('ui-systems')
 *   await window.resetVotes('package-managers')
 */
export function initializeDevHelpers() {
    // Only run in browser
    if (typeof window === 'undefined') {
        return;
    }

    window.resetVotes = async (domain: string): Promise<Response> => {
        const secret = process.env.NEXT_PUBLIC_VOTE_RESET_SECRET;

        if (!secret) {
            console.error('❌ Reset secret not configured');
            throw new Error('NEXT_PUBLIC_VOTE_RESET_SECRET not set');
        }

        if (!domain) {
            console.error('❌ Domain is required');
            throw new Error('Domain parameter is required');
        }

        console.log(`🔄 Resetting votes for domain: ${domain}...`);

        try {
            const response = await fetch('/api/vote/reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ domain, secret }),
            });

            if (!response.ok) {
                const data = await response.json();
                console.error(`❌ Reset failed: ${data.error || response.statusText}`);
                throw new Error(data.error || 'Reset failed');
            }

            console.log(`✅ Votes reset successfully for domain: ${domain}`);
            console.log('🔄 Refresh the page to see updated counts');

            return response;
        } catch (error) {
            console.error('❌ Reset request failed:', error);
            throw error;
        }
    };

    // Log helper availability (only once)
    if (!window.__devHelpersInitialized) {
        console.log('🛠️  Dev helpers loaded. Try: await window.resetVotes("ui-systems")');
        (window as any).__devHelpersInitialized = true;
    }
}

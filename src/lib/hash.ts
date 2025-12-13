/**
 * Generate a simple session hash from browser fingerprint
 * TODO: Implement proper fingerprinting or use a library
 */
export function generateSessionHash(): string {
    if (typeof window === 'undefined') {
        return 'server';
    }

    const fingerprint = [
        navigator.userAgent,
        navigator.language,
        new Date().getTimezoneOffset(),
        screen.width,
        screen.height,
    ].join('|');

    return simpleHash(fingerprint);
}

function simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36);
}

'use client';

import { useEffect } from 'react';
import { initializeDevHelpers } from '@/lib/devHelpers';

/**
 * DevHelperInjector
 * 
 * Client-only component that injects development console helpers.
 * Renders nothing. Does not affect UI or SSR.
 */
export function DevHelperInjector() {
    useEffect(() => {
        initializeDevHelpers();
    }, []);

    return null;
}

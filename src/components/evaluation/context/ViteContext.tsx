import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ViteContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vite: Context</h2>

                <p>
                    Vite emerged in 2020 as a response to slow development server startup times in JavaScript bundlers.
                    Created by Evan You (Vue.js author), it was designed specifically for modern browsers that support native ES modules,
                    eliminating the need to bundle code during development.
                </p>

                <p>
                    The tool's architecture splits dev and production concerns: development uses native ESM with on-demand transformation,
                    while production uses Rollup for optimized bundles. This separation trades consistency for speed—a deliberate choice
                    that works when dev/prod parity issues are manageable.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        Vite addresses the development feedback loop problem that emerged as JavaScript applications grew larger.
                        Traditional bundlers (Webpack, Parcel) needed to process entire dependency graphs before serving any code,
                        causing startup times to scale poorly.
                    </p>

                    <p>
                        By serving source files as native ES modules and transforming them on-demand, Vite achieves near-instant server startup
                        regardless of application size. This architectural shift was only viable after browsers gained reliable ESM support.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        Vite targets modern web application development where fast iteration matters more than legacy browser support.
                        It assumes developers are building for evergreen browsers and can use modern JavaScript features.
                    </p>

                    <p>
                        The framework is opinionated about this modern-first approach—older browser support is possible but requires additional configuration
                        and defeats the performance advantages that justify using Vite.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Vite was released in 2020 during the Vue 3 development cycle as a better dev server for Vue projects.
                        The framework-agnostic architecture attracted React, Svelte, and vanilla JavaScript users,
                        growing beyond its Vue origins.
                    </p>

                    <p>
                        The timing coincided with widespread browser ESM support and frustration with Webpack's complexity.
                        Vite's zero-config defaults and speed advantages resonated with developers seeking simpler tooling.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

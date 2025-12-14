import { SectionBlock, SubsectionBlock } from '@/components/content';

export function RollupBuildOutput() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Rollup: Build Output</h2>

                <p>
                    Rollup produces the cleanest output among JavaScript bundlers, using scope hoisting to concatenate modules
                    without wrapper functions. The resulting code is readable and efficient, making Rollup ideal for libraries
                    where output quality and tree-shakability matter more than build features.
                </p>

                <p>
                    The tool's focus on ES modules means it tree-shakes more effectively than bundlers that support CommonJS extensively.
                    Dependencies using ES module exports benefit from Rollup's dead code elimination at a granular level.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Bundle splitting strategy">
                    <p>
                        Rollup supports code splitting for applications but was designed primarily for library bundling,
                        where single bundles in multiple formats (ESM, CommonJS, UMD) are more common than split application chunks.
                    </p>

                    <p>
                        Application code splitting works through dynamic imports, creating separate chunks automatically.
                        The strategy is simpler than Webpack's but less configurable—Rollup makes reasonable decisions without exposing extensive tuning options.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Asset handling">
                    <p>
                        Rollup's asset handling requires plugins—the core bundler only processes JavaScript.
                        Common transformations (CSS, images, JSON) work through the plugin ecosystem, which is mature but requires explicit setup.
                    </p>

                    <p>
                        This plugin-based approach gives control but creates configuration overhead compared to bundlers with built-in asset handling.
                        For libraries (Rollup's primary use case), minimal asset processing is often acceptable.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Output size characteristics">
                    <p>
                        Rollup's scope hoisting produces smaller output than bundlers using module wrappers.
                        By concatenating modules into a single scope when possible, Rollup eliminates the runtime overhead that Webpack historically included.
                    </p>

                    <p>
                        Tree-shaking is Rollup's strength—the tool pioneered static analysis of ES modules to remove unused exports.
                        This works best when the entire dependency chain uses ES modules, though CommonJS dependencies can be handled with plugins.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function EsbuildContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">esbuild: Context</h2>

                <p>
                    esbuild was created in 2020 by Evan Wallace (Figma co-founder) as an experiment in build tool performance.
                    Written in Go and designed for parallelism from the ground up, it demonstrated that bundlers could be orders of magnitude faster
                    than JavaScript-based tools without sacrificing correctness.
                </p>

                <p>
                    The tool's extreme speed comes from architectural decisions that trade ecosystem compatibility for performance:
                    no plugin API exposure to JavaScript, limited transformation options, and opinionated choices about what features to support.
                    This makes esbuild excellent as a build primitive but limiting as a standalone application bundler.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        esbuild challenges the assumption that JavaScript build tools must be slow.
                        By rewriting bundling logic in Go with aggressive parallelization and efficient parsing,
                        it proves that 100x speedups are possible through better algorithms and implementation.
                    </p>

                    <p>
                        This performance advantage matters most in large codebases and CI environments where build time compounds.
                        For small projects, the absolute time savings are minimal, but the responsiveness improvement is noticeable.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        esbuild is designed as a low-level build primitive that other tools can use, not necessarily as an end-user bundler.
                        Vite uses esbuild for dependency pre-bundling, and many frameworks use it for fast development transforms.
                    </p>

                    <p>
                        The tool deliberately limits scope to maintain speed—no CSS modules, no advanced code splitting strategies,
                        no plugin ecosystem comparable to Webpack or Rollup. These constraints are acceptable when esbuild is a component,
                        not the entire build pipeline.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        esbuild's release in 2020 coincided with growing frustration about JavaScript tooling performance.
                        Its proof-of-concept nature (the author built it partially as a learning exercise) demonstrated what was possible,
                        influencing other tools to prioritize performance.
                    </p>

                    <p>
                        The framework's existence enabled a new generation of tools (Vite, Remix, SvelteKit) that use esbuild internally
                        while providing higher-level abstractions. This composition pattern leverages esbuild's speed without exposing its limitations.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

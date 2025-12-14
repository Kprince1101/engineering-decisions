import { SectionBlock, SubsectionBlock } from '@/components/content';

export function WebpackDevExperience() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Webpack: Dev Experience</h2>

                <p>
                    Webpack's development experience is characterized by strong dev/prod parity—the same bundler runs in both environments—but slower startup
                    and rebuild times compared to modern alternatives. The tool builds the entire application upfront, which scales poorly as codebases grow.
                </p>

                <p>
                    This architectural consistency means fewer surprises between environments but creates friction during development.
                    Teams often optimize Webpack configs extensively to improve dev server performance, trading simplicity for speed.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Configuration surface">
                    <p>
                        Webpack requires explicit configuration for most projects—defining entry points, loaders for different file types,
                        and plugins for optimization. The configuration API is powerful but verbose, with significant learning curve.
                    </p>

                    <p>
                        Tools like Create React App and Next.js abstract Webpack config, providing reasonable defaults.
                        This works until customization is needed, at which point developers must eject or learn complex override patterns.
                        The abstraction either hides complexity entirely or exposes all of it.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Debugging workflow">
                    <p>
                        Webpack's dev server provides source maps that map bundled code back to original sources.
                        When configured correctly, debugging feels natural, but source map quality varies based on loader configuration.
                    </p>

                    <p>
                        Build errors can be cryptic because they often surface from loaders or plugins deep in the processing chain.
                        Understanding whether an error is from Webpack itself, a loader, or application code requires familiarity with the tool's internals.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Hot reload behavior">
                    <p>
                        Webpack's Hot Module Replacement works reliably but rebuild times increase with application size.
                        The tool rebuilds affected chunks rather than individual modules, so changes can trigger more work than strictly necessary.
                    </p>

                    <p>
                        Framework-specific HMR implementations (React Fast Refresh) work well with Webpack but require additional configuration.
                        The underlying HMR API is flexible but low-level, requiring abstraction for good developer experience.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

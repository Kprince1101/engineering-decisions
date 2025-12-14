import { SectionBlock, SubsectionBlock } from '@/components/content';

export function VitestTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vitest: Tradeoffs</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where it shines">
                    <p>
                        Vitest is exceptional for Vite-based projects—configuration is minimal because test and build transformations are shared. 
                        The speed advantage in watch mode makes test-driven development more pleasant.
                    </p>

                    <p>
                        Native ESM support eliminates the transformation overhead and configuration complexity that plagues Jest in ESM projects. 
                        TypeScript works seamlessly without additional setup.
                    </p>

                    <p>
                        The UI mode provides a polished debugging experience that feels modern compared to terminal-only test runners. 
                        This visual approach helps developers new to testing understand test structure and failures.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where it causes friction">
                    <p>
                        Vitest requires Vite, which introduces a dependency even for teams not using Vite for their build. 
                        This coupling is acceptable for Vite projects but feels heavyweight for simple Node.js packages.
                    </p>

                    <p>
                        The Jest compatibility isn't perfect—some Jest-specific APIs and behaviors differ subtly. 
                        Migration from Jest usually succeeds but occasionally requires fixing broken assumptions about mocking or module loading.
                    </p>

                    <p>
                        The ecosystem is younger than Jest's, so third-party libraries may lack Vitest-specific documentation or test utilities. 
                        Jest examples usually translate but require adaptation.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team fit considerations">
                    <p>
                        Teams already using Vite should strongly consider Vitest—the alignment between build and test configuration pays dividends. 
                        The faster feedback loops measurably improve developer experience.
                    </p>

                    <p>
                        Teams migrating from Jest will find the transition smooth due to API compatibility, 
                        but should budget time for addressing subtle differences in mocking and module handling.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to choose it">
                    <p>
                        Avoid Vitest if your project doesn't use Vite and you're unwilling to adopt it. 
                        The framework's value proposition weakens significantly without the Vite integration.
                    </p>

                    <p>
                        If your team relies heavily on Jest-specific plugins or ecosystem tools, verify they work with Vitest before committing. 
                        The compatibility layer is good but not complete.
                    </p>

                    <p>
                        For projects requiring absolute minimal dependencies (embedded systems, CLI tools), Mocha's lighter footprint may be more appropriate.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

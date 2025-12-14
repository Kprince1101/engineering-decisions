import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JestContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jest: Context</h2>

                <p>
                    Jest is a testing framework developed by Meta (Facebook) that emerged as a response to the fragmented JavaScript testing ecosystem.
                    It was designed to work with minimal configuration while providing batteries-included testing for JavaScript applications,
                    particularly React codebases.
                </p>

                <p>
                    The framework bundles test running, assertions, mocking, and coverage analysis into a single package.
                    This integrated approach trades flexibility for convenience—a deliberate choice that reduces decision fatigue
                    but can feel constraining in complex testing scenarios.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Intended scope">
                    <p>
                        Jest is positioned as a general-purpose testing framework capable of handling unit, integration, and snapshot testing.
                        It excels at testing JavaScript logic and React components but is not designed for end-to-end browser testing.
                    </p>

                    <p>
                        The framework assumes a Node.js environment and uses jsdom to simulate browser APIs.
                        This makes tests fast but introduces gaps where browser-specific behavior matters.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem position">
                    <p>
                        Jest became the de facto standard for React applications through its tight integration with React tooling
                        and Create React App's default configuration. This created strong network effects—many developers learned testing through Jest,
                        and many libraries provide Jest-specific test helpers.
                    </p>

                    <p>
                        The framework's zero-config philosophy worked well when JavaScript build tools were stabilizing,
                        but modern bundlers (Vite, esbuild) expose some of Jest's architectural assumptions around module transformation.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Jest was released in 2014 as an opinionated alternative to the flexibility of Mocha + Chai + Sinon.
                        At the time, assembling a testing stack required choosing and configuring multiple libraries—a barrier that Jest eliminated.
                    </p>

                    <p>
                        The framework's snapshot testing feature introduced a new testing pattern that became widely adopted,
                        though it also sparked debates about test maintenance and over-reliance on structural assertions.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

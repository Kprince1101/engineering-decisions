import { SectionBlock, SubsectionBlock } from '@/components/content';

export function MochaTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Mocha: Tradeoffs</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where it shines">
                    <p>
                        Mocha's modularity allows precise control over the testing stack. 
                        Teams with specific requirements for assertion styles, mocking approaches, or reporting formats can compose exactly what they need.
                    </p>

                    <p>
                        The minimal footprint and fast startup make Mocha suitable for environments where resource usage matters—CI systems with limited memory, 
                        edge computing contexts, or CLIs where test runs must be near-instantaneous.
                    </p>

                    <p>
                        Long-term stability is a strength—Mocha's API has been stable for years. 
                        Tests written a decade ago still run without modification, which matters for maintained libraries or long-lived codebases.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where it causes friction">
                    <p>
                        The compositional model creates decision fatigue—new developers must understand Mocha, Chai, Sinon, and how they integrate. 
                        The configuration burden is higher than Jest or Vitest.
                    </p>

                    <p>
                        Lack of built-in watch mode, coverage tools, and smart test re-running means assembling these capabilities separately. 
                        This works but requires more effort than frameworks that bundle these features.
                    </p>

                    <p>
                        Modern JavaScript features require additional configuration (TypeScript, ESM) that batteries-included frameworks handle automatically. 
                        Mocha's unopinionated nature becomes a liability when project complexity grows.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team fit considerations">
                    <p>
                        Teams with deep testing expertise who want precise control over their stack will appreciate Mocha's flexibility. 
                        The ability to swap assertion libraries or reporters without changing the test runner is valuable for specialized needs.
                    </p>

                    <p>
                        Teams seeking quick setup and minimal configuration should choose Jest or Vitest instead. 
                        Mocha's value proposition assumes willingness to invest in stack assembly.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to choose it">
                    <p>
                        Avoid Mocha for projects where zero-config developer experience matters. 
                        Modern frameworks provide better out-of-box experiences for typical web applications.
                    </p>

                    <p>
                        If your team is unfamiliar with JavaScript testing, the cognitive load of understanding multiple libraries 
                        (Mocha + Chai + Sinon) is higher than learning a single integrated framework.
                    </p>

                    <p>
                        For React or frontend-heavy projects, Jest or Vitest provide better ecosystem integration and component testing patterns.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

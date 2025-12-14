import { SectionBlock, SubsectionBlock } from '@/components/content';

export function MochaContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Mocha: Context</h2>

                <p>
                    Mocha is a test runner that has been part of the JavaScript testing ecosystem since 2011.
                    Unlike Jest or Vitest, Mocha intentionally provides minimal built-in functionality—it runs tests and reports results,
                    leaving assertions, mocking, and other concerns to separate libraries.
                </p>

                <p>
                    This modularity was Mocha's original design philosophy: give developers control over their testing stack rather than bundling opinions.
                    This approach maximizes flexibility but requires more configuration and decision-making upfront.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Intended scope">
                    <p>
                        Mocha is a test runner, not a complete testing framework. It provides test organization (describe/it blocks),
                        lifecycle hooks (before/after), and test execution, but does not include assertion libraries, mocking tools, or coverage reporting.
                    </p>

                    <p>
                        Teams typically pair Mocha with Chai (assertions), Sinon (mocking), and Istanbul (coverage).
                        This composition model allows fine-grained control but introduces dependency management overhead.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem position">
                    <p>
                        Mocha predates the batteries-included testing frameworks and was the dominant choice before Jest's rise.
                        Many Node.js libraries still use Mocha in their test suites, particularly in backend and CLI tool projects.
                    </p>

                    <p>
                        The framework's long history means it has extensive third-party plugin support and is well-documented,
                        but it also carries legacy design decisions that can feel dated compared to newer tools.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Mocha was released in 2011 as a more flexible alternative to early testing tools like QUnit.
                        Its unopinionated design resonated with developers who wanted control over their testing stack.
                    </p>

                    <p>
                        As the JavaScript ecosystem matured, the trade-offs shifted—configuration overhead that was acceptable in 2011
                        became friction as zero-config tools like Jest emerged. Mocha's usage has declined in frontend projects
                        but remains common in Node.js backend codebases.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

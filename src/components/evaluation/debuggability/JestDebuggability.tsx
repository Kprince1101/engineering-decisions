import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JestDebuggability() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jest: Debuggability</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Error output">
                    <p>
                        Jest provides detailed diff output for failed assertions, highlighting expected vs actual values.
                        The formatting is readable and color-coded in terminal environments that support it.
                    </p>

                    <p>
                        Error messages include the assertion that failed, the file location, and a stack trace.
                        For complex objects, Jest's diff algorithm shows which nested properties differ,
                        though very large objects can produce overwhelming output.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Stack traces">
                    <p>
                        Jest's stack traces show the test code path but can include framework internals that obscure the actual failure point.
                        The framework attempts to filter irrelevant stack frames but doesn't always succeed.
                    </p>

                    <p>
                        Source maps work reasonably well for TypeScript and transpiled code,
                        though source map quality depends on the transformer configuration. Misaligned line numbers indicate source map issues.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Failure diagnostics">
                    <p>
                        When tests fail due to timeouts or async issues, Jest's error messages can be cryptic.
                        Unhandled promise rejections and missing await statements often produce errors that don't clearly indicate the root cause.
                    </p>

                    <p>
                        The --verbose flag increases output detail, and --no-coverage disables coverage collection which can interfere with debugging.
                        These flags help but require awareness of when to use them.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Tooling integration">
                    <p>
                        Jest integrates with VS Code's debugger through launch configurations.
                        Breakpoints work, but the debugger must attach to the correct worker process, which can require trial and error.
                    </p>

                    <p>
                        The Node inspector (--inspect-brk) allows debugging with Chrome DevTools.
                        This works well but requires manually running tests with the inspect flag rather than using the test runner.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

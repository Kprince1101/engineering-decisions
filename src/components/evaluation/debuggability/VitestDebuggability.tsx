import { SectionBlock, SubsectionBlock } from '@/components/content';

export function VitestDebuggability() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vitest: Debuggability</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Error output">
                    <p>
                        Vitest provides Jest-compatible error output with diff formatting for failed assertions.
                        The framework's use of modern terminal features produces crisp, readable diffs.
                    </p>

                    <p>
                        Error messages are concise and point to the specific assertion that failed.
                        The UI mode offers a graphical view of errors with expandable stack traces and test context.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Stack traces">
                    <p>
                        Stack traces in Vitest are generally cleaner than Jest's because Vitest's codebase is smaller and more focused.
                        Framework internals appear less frequently in traces.
                    </p>

                    <p>
                        Source maps work well due to Vite's built-in support for TypeScript and modern JavaScript.
                        Line numbers align reliably with source code, reducing the friction of debugging transpiled code.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Failure diagnostics">
                    <p>
                        Vitest's error messages for async failures and timeout issues are similar to Jest's—they can be opaque when tests hang or fail silently.
                        The --reporter=verbose flag increases output detail.
                    </p>

                    <p>
                        The framework's UI mode helps diagnose failures by showing test execution in a timeline view,
                        making it easier to identify which assertions passed before failure occurred.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Tooling integration">
                    <p>
                        Vitest integrates with VS Code through the Vitest extension, providing inline test running and debugging.
                        The integration is tighter than Jest's because Vitest's architecture was designed with modern tooling in mind.
                    </p>

                    <p>
                        The --inspect flag enables Node debugging, and the UI mode provides browser-based debugging with DevTools.
                        Having multiple debugging approaches helps when terminal-based debugging is insufficient.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

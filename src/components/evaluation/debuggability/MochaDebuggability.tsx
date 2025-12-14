import { SectionBlock, SubsectionBlock } from '@/components/content';

export function MochaDebuggability() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Mocha: Debuggability</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Error output">
                    <p>
                        Mocha's error output depends on the assertion library used. With Chai, error messages show expected vs actual values but lack the sophisticated diffing that Jest provides.
                    </p>

                    <p>
                        The framework shows which test failed and where, but formatting is minimal.
                        For complex object comparisons, developers often need to add custom logging to understand what differs.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Stack traces">
                    <p>
                        Mocha's stack traces are straightforward—they show the error location without heavy framework overhead.
                        This simplicity makes traces easier to read but provides less context than more integrated frameworks.
                    </p>

                    <p>
                        Source map support depends on the Node.js version and whether --enable-source-maps is used.
                        TypeScript projects require configuring ts-node or similar tools separately.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Failure diagnostics">
                    <p>
                        Mocha's minimal approach to error reporting means failures require more manual investigation.
                        Timeout errors show which test timed out but don't indicate what was waiting or why.
                    </p>

                    <p>
                        The --reporter flag allows choosing different output formats (spec, dot, json).
                        The spec reporter is most useful for debugging, showing test hierarchy and timing information.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Tooling integration">
                    <p>
                        Mocha works with standard Node debugging tools (--inspect).
                        VS Code launch configurations can run Mocha tests in debug mode, though setup requires manual configuration.
                    </p>

                    <p>
                        The lack of built-in IDE integration means teams must configure debugging themselves.
                        This flexibility allows customization but increases setup burden.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

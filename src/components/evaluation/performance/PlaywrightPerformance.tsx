import { SectionBlock, SubsectionBlock } from '@/components/content';

export function PlaywrightPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Playwright: Performance</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Startup time">
                    <p>
                        Playwright's startup involves launching browser instances, which introduces overhead compared to unit test frameworks.
                        The framework manages browser lifecycle efficiently, reusing instances across tests within the same worker.
                    </p>

                    <p>
                        Headed mode (--headed) is slower than headless because it must render the browser UI.
                        Most CI environments use headless mode for this reason.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch performance">
                    <p>
                        Watch mode performance depends on test isolation—each test runs in a fresh browser context,
                        which prevents state leakage but adds per-test overhead.
                    </p>

                    <p>
                        The framework's UI mode provides time-travel debugging that adds overhead but significantly improves
                        the debugging experience when tests fail. This trade-off makes sense during active development.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI behavior">
                    <p>
                        Playwright parallelizes tests across browser instances and can distribute tests across multiple machines.
                        The framework's sharding feature enables horizontal scaling in CI environments with multiple runners.
                    </p>

                    <p>
                        Browser automation is inherently slower than unit tests—full test suites often run in minutes rather than seconds.
                        Effective parallelization and selective test running become essential for maintaining feedback speed.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Resource usage">
                    <p>
                        Each browser instance consumes significant memory and CPU. The --workers flag controls parallelization—lower values reduce resource usage but increase total execution time.
                    </p>

                    <p>
                        Playwright supports multiple browser engines (Chromium, Firefox, WebKit), and running tests across all three multiplies resource requirements.
                        Teams often run full cross-browser suites in CI but use a single browser locally.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

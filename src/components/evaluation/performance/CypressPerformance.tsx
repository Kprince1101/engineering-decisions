import { SectionBlock, SubsectionBlock } from '@/components/content';

export function CypressPerformance() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Cypress: Performance</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Startup time">
                    <p>
                        Cypress startup involves launching both a Node process and a browser instance.
                        The Test Runner UI adds additional overhead but provides visual feedback that compensates for the startup cost.
                    </p>

                    <p>
                        In headless mode (for CI), startup is faster but still slower than unit test frameworks due to browser initialization.
                        The framework keeps the browser instance alive between tests to amortize this cost.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch performance">
                    <p>
                        The Test Runner automatically reruns tests on file changes with full time-travel debugging available.
                        This experience is excellent for development but comes with the overhead of browser-based execution.
                    </p>

                    <p>
                        Tests run serially in a single browser instance, which prevents parallelization but ensures consistent execution.
                        For large test suites, this serial execution becomes a bottleneck during active development.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="CI behavior">
                    <p>
                        Cypress runs tests serially by default. Parallelization requires Cypress Dashboard (paid service)
                        or custom orchestration with multiple CI jobs.
                    </p>

                    <p>
                        The serial execution model means large test suites can take considerable time to run.
                        Teams often split tests into separate CI jobs manually or use the Dashboard's load balancing.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Resource usage">
                    <p>
                        Cypress keeps a browser instance running for the duration of the test suite, maintaining memory for both Node and browser processes.
                        This is more efficient than launching a new browser per test but still resource-intensive.
                    </p>

                    <p>
                        The Test Runner's video recording and screenshot capture features (enabled by default)
                        increase disk I/O and storage usage. These can be disabled for faster CI runs when visual artifacts aren't needed.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

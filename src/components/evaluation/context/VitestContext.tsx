import { SectionBlock, SubsectionBlock } from '@/components/content';

export function VitestContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Vitest: Context</h2>

                <p>
                    Vitest is a testing framework built specifically for the Vite ecosystem, designed to address the architectural mismatch
                    between Jest and modern ESM-first build tools. It emerged in 2021 as Vite gained adoption and developers encountered
                    friction configuring Jest for Vite projects.
                </p>

                <p>
                    The framework reuses Vite's transformation pipeline rather than implementing its own, which eliminates configuration duplication
                    and ensures test code is processed identically to application code. This alignment comes at the cost of being tightly coupled to Vite.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Intended scope">
                    <p>
                        Vitest targets the same testing scenarios as Jest—unit and integration tests for JavaScript logic and components.
                        It is not an end-to-end testing tool and does not replace browser automation frameworks.
                    </p>

                    <p>
                        The framework assumes you are using Vite or are willing to adopt Vite's conventions.
                        For projects already using Vite, this assumption simplifies setup. For projects using other bundlers, it creates a dependency.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Ecosystem position">
                    <p>
                        Vitest provides a Jest-compatible API to reduce migration friction. This compatibility is intentional—it allows teams
                        to switch from Jest without rewriting tests, though some Jest-specific features (like certain matchers or mocking behaviors)
                        may require adjustments.
                    </p>

                    <p>
                        The framework benefits from Vite's growing adoption but lacks the ecosystem maturity and third-party integrations that Jest has accumulated.
                        Libraries that provide Jest-specific test utilities may not offer Vitest equivalents.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        Vitest was created by Anthony Fu in 2021 to solve a specific problem: configuring Jest for Vite projects was complex and error-prone.
                        The framework's rapid adoption reflects broader trends toward ESM-native tooling and build-test alignment.
                    </p>

                    <p>
                        The project is part of the Vite ecosystem (maintained under the same organization) which provides governance stability
                        but also means its roadmap is influenced by Vite's priorities.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

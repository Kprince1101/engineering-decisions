import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JestTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jest: Tradeoffs</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Where it shines">
                    <p>
                        Jest excels in React ecosystems where its defaults align with common patterns. 
                        The zero-config experience works well for Create React App, Next.js, and similar setups.
                    </p>

                    <p>
                        Snapshot testing, while controversial, proves valuable for testing component output and API responses 
                        when used judiciously. The integrated mocking and coverage tools reduce dependency management.
                    </p>

                    <p>
                        The large ecosystem means most libraries provide Jest-specific test utilities or examples. 
                        This network effect reduces friction when adopting new dependencies.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Where it causes friction">
                    <p>
                        Jest struggles with modern ESM-first tooling. Projects using Vite, native ESM, or top-level await 
                        encounter configuration complexity that undermines the zero-config promise.
                    </p>

                    <p>
                        The transformation pipeline adds overhead and complexity, particularly for TypeScript projects. 
                        Understanding Jest's module resolution and mocking requires navigating multiple layers of abstraction.
                    </p>

                    <p>
                        Watch mode performance in large codebases can be slow, and the caching system occasionally produces incorrect results 
                        until manually cleared—a frustrating debugging detour.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team fit considerations">
                    <p>
                        Teams familiar with Jest's patterns benefit from its ubiquity—documentation, examples, and Stack Overflow answers are abundant. 
                        Onboarding new developers to a Jest codebase is straightforward.
                    </p>

                    <p>
                        Teams that value explicit configuration over magic may find Jest's automatic mocking and module resolution confusing. 
                        The framework makes assumptions that work most of the time but fail in hard-to-debug ways when they don't.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When not to choose it">
                    <p>
                        Avoid Jest for Vite-based projects unless willing to accept complex configuration. Vitest provides better integration.
                    </p>

                    <p>
                        If your team requires minimal abstraction and explicit behavior, Mocha's compositional approach may be preferable. 
                        If you're building a library that supports multiple bundlers, Jest's transformation assumptions can complicate testing.
                    </p>

                    <p>
                        For end-to-end testing, Jest is the wrong tool—it simulates browser environments but doesn't control real browsers. 
                        Playwright or Cypress are appropriate for that scope.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

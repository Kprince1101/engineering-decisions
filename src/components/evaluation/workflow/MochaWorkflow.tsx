import { SectionBlock, SubsectionBlock } from '@/components/content';

export function MochaWorkflow() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Mocha: Workflow</h2>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Test organization">
                    <p>
                        Mocha provides describe/it blocks and lifecycle hooks (before, after, beforeEach, afterEach).
                        Test organization is flexible—files can be structured however the team prefers.
                    </p>

                    <p>
                        Because Mocha doesn't include assertions, teams must import an assertion library like Chai.
                        This separation is philosophically clean but adds import overhead to every test file.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Watch mode">
                    <p>
                        Mocha doesn't include built-in watch mode. Teams typically use nodemon or other file watchers
                        to rerun tests on change. This works but lacks the smartness of Jest's dependency-aware watching.
                    </p>

                    <p>
                        The absence of integrated watching is consistent with Mocha's minimalist philosophy
                        but means developers must assemble their own development workflow.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Mocking model">
                    <p>
                        Mocha has no built-in mocking—teams use Sinon or similar libraries.
                        This separation allows choosing mocking strategies but requires understanding multiple libraries.
                    </p>

                    <p>
                        Sinon provides spies, stubs, and mocks with a different API than Jest's mocking.
                        The learning curve is steeper, but the separation of concerns can make test code clearer.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Configuration">
                    <p>
                        Mocha configuration lives in .mocharc.json or mocha.opts files.
                        Configuration is minimal by default—test file patterns, reporters, and timeouts.
                    </p>

                    <p>
                        Because Mocha doesn't handle transpilation, teams must configure Babel or TypeScript separately.
                        This modularity provides control but increases setup complexity for modern JavaScript projects.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

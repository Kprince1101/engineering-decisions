import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ReduxToolkitScaleCharacteristics() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Redux Toolkit: Scale Characteristics</h2>

                <p>
                    Redux Toolkit scales well in large applications because its structure prevents chaos. The single store, explicit actions, and reducer patterns create consistency across teams.
                    When hundreds of developers work on the same codebase, Redux's formalism ensures everyone follows similar patterns, making code predictable even if unfamiliar.
                </p>

                <p>
                    The flip side: Redux structure is overhead in small applications. For teams of 2-5 developers working on straightforward UIs, Redux's architecture is premature.
                    The decision is whether you're optimizing for current simplicity or future scale—Redux bets on the latter.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Small app vs large team behavior">
                    <p>
                        In small applications, Redux feels heavy. You're writing actions and reducers for simple state updates that could be a useState call.
                        The patterns don't pay for themselves until the application grows—more state, more developers, more coordination needs.
                    </p>

                    <p>
                        In large teams, Redux's explicitness becomes valuable. New developers onboard by reading actions (what can happen) and reducers (how state responds).
                        The structure creates shared vocabulary and prevents the proliferation of ad-hoc patterns that happens with less opinionated libraries.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Refactor cost">
                    <p>
                        Redux refactors are mechanical but verbose. Changing state structure means updating reducers, actions, selectors, and potentially components.
                        The good news: TypeScript catches most breaks. The bad news: you're touching many files for conceptually simple changes.
                    </p>

                    <p>
                        The single store structure means global refactors are tractable—you can grep for action types or slice names.
                        This is easier than distributed state (like Context scattered across components) where finding all state consumers is harder.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Accidental complexity">
                    <p>
                        Redux's complexity is mostly essential (managing shared state is inherently complex) but there's accidental complexity too.
                        Normalizing state, managing async logic with thunks, optimizing selectors with reselect—these are patterns teams must learn and maintain.
                    </p>

                    <p>
                        RTK reduces some accidental complexity (automatic action creators, built-in Immer, integrated async with createAsyncThunk) but can't eliminate it entirely.
                        The architecture still requires understanding actions, reducers, middleware, and how they compose.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Long-term maintainability">
                    <p>
                        Redux's long-term maintainability is strong. The patterns haven't changed fundamentally since 2015—codebases written years ago still follow recognizable patterns.
                        This stability means Redux knowledge transfers across projects and hiring is easier (many developers know Redux).
                    </p>

                    <p>
                        The library's maturity also means extensive documentation, solved edge cases, and community patterns for common problems.
                        Teams spend less time inventing solutions and more time implementing features.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

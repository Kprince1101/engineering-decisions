import { SectionBlock, SubsectionBlock } from '@/components/content';

export function ContextOnlyMentalModel() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">React Context: Mental Model</h2>

                <p>
                    Context's mental model is dependency injection: provide a value high in the tree, consume it anywhere below.
                    State still lives in useState or useReducer—Context just makes it accessible without props drilling.
                    This model is simpler than state libraries because it's solving a different problem: distribution, not management.
                </p>

                <p>
                    The mental overhead is minimal for small use cases. Create a context, wrap components in a Provider, use useContext to access the value.
                    Complexity appears when you need performance optimization, multiple contexts, or complex state logic—then you're rebuilding features that state libraries provide.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="How developers reason about state">
                    <p>
                        Context developers think about state the same way they think about local React state—useState, useReducer, props.
                        Context just eliminates the prop-passing layer. The mental model is "React state, but accessible from Context" rather than a new state paradigm.
                    </p>

                    <p>
                        This familiarity is Context's strength and weakness. It's easy to understand because it's just React.
                        But when applications grow, the lack of structure becomes apparent—how do you organize multiple contexts? How do you prevent unnecessary rerenders? Context doesn't answer these questions.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Explicitness vs implicit coupling">
                    <p>
                        Context creates implicit coupling: any component in the tree might consume context, and you can't tell without reading the component code.
                        This is less explicit than Redux (where connect or useSelector makes consumption obvious) but more explicit than global variables.
                    </p>

                    <p>
                        The coupling becomes problematic in large applications. You move a component, and suddenly it breaks because it was implicitly depending on a Context provider higher in the tree.
                        State libraries make these dependencies more visible through import statements and hooks.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Learning curve and conceptual overhead">
                    <p>
                        Context has minimal learning curve—it's built into React, and the API is straightforward. createContext, Provider, useContext.
                        Most React developers use Context without realizing it (theme providers, router context, etc.).
                    </p>

                    <p>
                        The overhead appears when optimizing Context performance. Splitting contexts, using useMemo, creating custom hooks to select partial values—these patterns aren't obvious.
                        At this point, you're implementing primitives that state libraries provide out of the box, which raises the question: should you use Context or adopt a library?
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

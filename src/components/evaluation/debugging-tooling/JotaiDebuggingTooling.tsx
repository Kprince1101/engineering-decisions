import { SectionBlock, SubsectionBlock } from '@/components/content';

export function JotaiDebuggingTooling() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">Jotai: Debugging & Tooling</h2>

                <p>
                    Jotai provides debugging tools through its DevTools package and React DevTools integration.
                    The atomic model makes debugging different from Redux—instead of inspecting a single store, you're inspecting individual atoms and their dependency relationships.
                    This granularity is powerful but requires different mental models for debugging.
                </p>

                <p>
                    The library's DevTools show atom values, dependencies, and update history.
                    However, understanding "why did this component rerender" requires tracing atom dependency graphs, which can be non-obvious in applications with many interconnected atoms.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Time-travel and inspection">
                    <p>
                        Jotai supports time-travel debugging through its DevTools, but the experience is different from Redux.
                        Instead of replaying actions, you're stepping through atom updates. This works but feels less semantic—atom updates don't carry intent the way action names do.
                    </p>

                    <p>
                        Inspecting Jotai state means understanding the atom graph. The DevTools visualize dependencies, but in large applications with hundreds of atoms, this graph becomes complex.
                        Debugging requires both understanding individual atoms and their relationships.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="DevTools availability">
                    <p>
                        Jotai provides jotai-devtools, a separate package for debugging atoms.
                        The tooling shows atom values, update history, and dependency graphs. It integrates with React DevTools, making atoms inspectable alongside component state.
                    </p>

                    <p>
                        The DevTools are newer and less mature than Redux DevTools. Some advanced features (state export/import, action replay) are less polished.
                        For teams used to Redux DevTools' capabilities, Jotai's tooling feels limited.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Production observability">
                    <p>
                        Jotai's atomic model makes production observability granular. You can log specific atom updates, but there's no centralized event log like Redux actions.
                        Monitoring requires instrumenting individual atoms or using Jotai's built-in effects to track changes.
                    </p>

                    <p>
                        For debugging production issues, the lack of centralized action logs is a limitation. You can reconstruct what happened from atom changes, but it requires more effort than reading a Redux action log.
                        Teams needing production observability must build custom monitoring on top of Jotai's primitives.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

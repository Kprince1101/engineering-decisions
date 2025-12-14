import { Header } from '@/components/shell/Header';
import { DomainMenu } from '@/components/shell/DomainMenu';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import {
    ContentContainer,
    SectionBlock,
    CalloutNote,
} from '@/components/content';

export default function AboutPage() {
    return (
        <>
            <Header />

            <main className="bg-slate-100 pt-20 pb-12">
                <div className="w-full px-8 flex items-start gap-">
                    <DomainMenu />
                    <div className="flex-1 min-w-0">
                        <DocumentSurface>
                            <ContentContainer>
                                <SectionBlock>
                                    <h1 className="text-3xl font-semibold text-slate-900" style={{ paddingTop: '3rem' }}>
                                        About This Tool
                                    </h1>
                                </SectionBlock>

                                <SectionBlock>
                                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                        Why this exists
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        Engineering decisions rarely fail because of missing information.
                                        They fail because tradeoffs are implicit, unevenly understood, or discussed too late.
                                    </p>

                                    <p className="mt-4 text-slate-700 leading-relaxed">
                                        This platform exists to make those tradeoffs explicit — in a shared, observable way — before a decision is locked in.
                                    </p>

                                    <p className="mt-4 text-slate-700 leading-relaxed">
                                        Instead of relying on documentation, blog posts, or individual preference, this tool provides a consistent structure for evaluating options against real constraints, defaults, and behavior.
                                    </p>
                                </SectionBlock>

                                <SectionBlock>
                                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                        What this tool is
                                    </h2>

                                    <ul className="space-y-2 text-slate-700 leading-relaxed">
                                        <li>A shared evaluation surface for comparing engineering options</li>
                                        <li>A way to ground discussion in concrete tradeoffs</li>
                                        <li>A decision artifact that can be referenced in design reviews and ADRs</li>
                                        <li>A place where defaults, ergonomics, and constraints are visible</li>
                                    </ul>
                                </SectionBlock>

                                <SectionBlock>
                                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                        Why the interface is intentionally minimal
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        Outside of interactive demos, the interface is deliberately restrained.
                                    </p>

                                    <p className="mt-4 text-slate-700 leading-relaxed">
                                        Visual styling is kept neutral so comparisons stay focused on behavior, ergonomics, and constraints — rather than presentation.
                                        This reduces bias and keeps attention on the tools being evaluated, not on the tool doing the evaluation.
                                    </p>
                                </SectionBlock>

                                <SectionBlock>
                                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                        Technology stack
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        This project is built with a small, intentional set of technologies:
                                    </p>

                                    <ul className="space-y-2 text-slate-700 leading-relaxed">
                                        <li><strong>Next.js</strong> — application framework and routing</li>
                                        <li><strong>React</strong> — UI composition</li>
                                        <li><strong>TypeScript</strong> — type safety and clarity</li>
                                        <li><strong>Tailwind CSS</strong> — layout and typography</li>
                                        <li><strong>Radix UI</strong> — accessible primitives (tooltips, focus management)</li>
                                        <li><strong>Node.js</strong> — runtime and tooling</li>
                                    </ul>

                                    <CalloutNote>
                                        No component libraries are used for the surrounding interface by design.
                                        Evaluated tools are rendered directly where relevant.
                                    </CalloutNote>
                                </SectionBlock>

                                <SectionBlock>
                                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                        Open source
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        The source code is available on GitHub:
                                    </p>

                                    <p className="mt-2">
                                        <a
                                            href="https://github.com/Kprince1101/engineering-decisions"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-slate-900 hover:underline"
                                        >
                                            https://github.com/Kprince1101/engineering-decisions
                                        </a>
                                    </p>
                                </SectionBlock>

                                <SectionBlock>
                                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                                        Feedback & suggestions
                                    </h2>

                                    <p className="text-slate-700 leading-relaxed">
                                        Discussion, corrections, and improvement ideas are tracked via GitHub Issues:
                                    </p>

                                    <p className="mt-2">
                                        <a
                                            href="https://github.com/Kprince1101/engineering-decisions/issues"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-slate-500 hover:text-slate-700 hover:underline"
                                        >
                                            Feedback & suggestions
                                        </a>
                                    </p>
                                </SectionBlock>
                            </ContentContainer>
                        </DocumentSurface>
                    </div>
                </div>
            </main>
        </>
    );
}

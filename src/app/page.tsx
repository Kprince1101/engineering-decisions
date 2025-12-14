import { Header } from '@/components/shell/Header';
import { DomainMenu } from '@/components/shell/DomainMenu';
import { DocumentSurface } from '@/components/shell/DocumentSurface';
import {
  ContentContainer,
  SectionBlock,
  CalloutNote,
} from '@/components/content';

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-slate-100 pt-20 pb-12">
        <div className="w-full px-8 flex items-start gap-10">
          <DomainMenu />
          <div className="flex-1 min-w-0">
            <DocumentSurface>
              <ContentContainer>

                {/* Intro */}
                <SectionBlock>
                  <h1 style={{ paddingBlockStart: '1rem' }} className="text-3xl font-semibold text-slate-900">
                    Engineering Decision Evaluation Platform
                  </h1>

                  <p className="mt-4 text-slate-700 max-w-3xl">
                    A shared evaluation surface for comparing engineering options
                    against real constraints, defaults, and tradeoffs.
                  </p>

                  <p className="mt-4 text-slate-700 max-w-3xl">
                    Outside of demos, the interface is deliberately restrained.
                    Visual styling is kept neutral so comparisons stay focused on
                    behavior, ergonomics, and constraints not presentation.
                  </p>
                </SectionBlock>

                {/* How decisions are made */}
                <SectionBlock>
                  <div className="flex items-center gap-2 mb-6">
                    <h2 className="text-2xl font-semibold text-slate-800">
                      How decisions are made here
                    </h2>

                  </div>

                  <ol className="list-decimal pl-6 space-y-2 text-slate-700 leading-relaxed">
                    <li>
                      Start with the domain (UI libraries, package managers, testing frameworks).
                    </li>
                    <li>
                      Read the Context section to align on the problem being solved.
                    </li>
                    <li>
                      Use Components / Workflow / Performance to surface concrete tradeoffs.
                    </li>
                    <li>
                      Component demos are included to show real behavior and defaults that documentation often glosses over.
                    </li>
                    <li>
                      Review Tradeoffs.
                    </li>
                    <li>
                      Use the decision panel in the header to indicate your support for the technology section you're currently in. You can support multiple technologies.
                    </li>
                    <li>
                      Results can be exported as a json object.
                    </li>
                  </ol>
                </SectionBlock>

              </ContentContainer>
            </DocumentSurface>
          </div>
        </div>
      </main>
    </>
  );
}

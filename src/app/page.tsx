import { Header } from '@/components/shell/Header';
import {
  ContentContainer,
  SectionBlock,
  CalloutNote,
} from '@/components/content';
import * as Tooltip from '@radix-ui/react-tooltip';

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-slate-100 py-12">
        <ContentContainer>
          <SectionBlock>
            <h1 className="text-3xl font-semibold text-slate-900">
              Engineering Decision Evaluation Platform
            </h1>

            <p className="mt-4 text-base text-slate-600 max-w-2xl">
              Select a library from the navigation above to review evaluation
              criteria and participate in decision-making.
            </p>
          </SectionBlock>

          <SectionBlock>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl font-semibold text-slate-800">
                How to use this tool
              </h2>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span className="cursor-help text-slate-400">ⓘ</span>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    side="top"
                    style={{ padding: '0.5rem' }}
                    className="max-w-xs rounded-md bg-slate-900 px-3 py-2 text-xs text-slate-100"
                  >
                    This tool is designed to support informed discussion—not to replace engineering judgment.
                    <Tooltip.Arrow className="fill-slate-900" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </div>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 leading-relaxed">
              <li>
                Review each library across four dimensions: Context, Components,
                Advanced, and Tradeoffs.
              </li>
              <li>
                Compare options based on your team’s constraints and priorities.
              </li>
              <li>
                Use the decision panel in the header to indicate support.
              </li>
              <li>
                Export the snapshot for ADRs, design docs, or team discussion.
              </li>
              <li>
                The component demos are intentionally included to show real behavior, defaults, and constraints that documentation alone often hides.
              </li>
            </ol>

          </SectionBlock>
        </ContentContainer>
      </main>
    </>
  );
}

import { SectionBlock, SubsectionBlock } from '@/components/content';

export function NpmComponents() {
    return (
        <SectionBlock title="npm: Workflow & Ergonomics">
            <SubsectionBlock heading="Install Experience">
                <p>
                    <code>npm install</code> is the standard command. Since v7, it automatically installs
                    peer dependencies, which can be convenient but sometimes leads to conflict errors that
                    require the <code>--legacy-peer-deps</code> flag to resolve.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Lockfiles">
                <p>
                    Uses <code>package-lock.json</code>. It is JSON-based and generally readable, though
                    merge conflicts can be difficult to resolve manually.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Workspaces">
                <p>
                    npm introduced native workspace support in v7. It provides basic monorepo capabilities,
                    allowing dependencies to be hoisted to the root. It is functional but lacks the advanced
                    filtering and topological execution features found in other tools.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="CLI Ergonomics">
                <p>
                    The CLI is verbose but familiar. Commands like <code>npm run</code> are muscle memory
                    for most developers. However, executing binaries requires <code>npx</code>, which is
                    a separate tool bundled with npm.
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

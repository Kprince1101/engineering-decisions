import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function YarnComponents() {
    return (
        <SectionBlock title="Workflow & Ergonomics">
            <SubsectionBlock heading="Install Experience">
                <p>
                    Yarn is known for its speed and pretty output. Modern Yarn (v2+) offers "Zero-Installs"
                    where dependencies are committed to the repo, allowing a project to run immediately after
                    cloning without an install step.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Lockfiles">
                <p>
                    Uses <code>yarn.lock</code>. It uses a custom format (YAML-like) that is easier to read
                    and less prone to merge conflicts than JSON lockfiles.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="Workspaces">
                <p>
                    Yarn pioneered workspaces in the JavaScript ecosystem. It offers robust support for
                    monorepos, with advanced features like constraints (enforcing dependency versions across packages)
                    and plugins.
                </p>
            </SubsectionBlock>

            <SubsectionBlock heading="CLI Ergonomics">
                <p>
                    Yarn's CLI is concise. <code>yarn add</code> is shorter than <code>npm install</code>.
                    It also allows running binaries directly (e.g., <code>yarn jest</code>) without needing
                    a separate <code>npx</code> equivalent (though <code>yarn dlx</code> exists).
                </p>
            </SubsectionBlock>
        </SectionBlock>
    );
}

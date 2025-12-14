import { ContentContainer, SectionBlock, SubsectionBlock } from '@/components/content';

export function NpmContext() {
    return (
        <ContentContainer>
            <SectionBlock title="Context">
                <SubsectionBlock heading="What Problem npm Solves">
                    <p>
                        npm (Node Package Manager) is the default package manager for the Node.js ecosystem.
                        It solves the fundamental problem of sharing and reusing code by providing a central
                        registry and a CLI tool to manage dependencies.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical Background">
                    <p>
                        Created in 2010, npm was the first package manager for Node.js. It established the
                        <code>package.json</code> standard and the <code>node_modules</code> folder structure.
                        For years, it was the only viable option, though it suffered from performance issues
                        and non-deterministic installs in its early versions (pre-v5).
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Adoption Patterns">
                    <p>
                        As the default tool bundled with Node.js, npm has ubiquitous adoption. It is the
                        starting point for almost every JavaScript developer. While alternative package managers
                        have gained significant ground in enterprise and power-user circles, npm remains the
                        standard for tutorials, documentation, and simple projects.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Default Status">
                    <p>
                        npm is installed automatically with Node.js. This "batteries-included" status ensures
                        it is available in every CI environment and developer machine without additional setup steps.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </ContentContainer>
    );
}

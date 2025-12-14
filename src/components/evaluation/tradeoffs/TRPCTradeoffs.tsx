import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TRPCTradeoffs() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">tRPC: Tradeoffs</h2>

                <p>
                    tRPC trades architectural flexibility for end-to-end type safety in TypeScript monorepos. The library works brilliantly when frontend and backend share types, live in the same repository, and are developed by overlapping teams.
                    Outside this context—microservices, external APIs, mobile apps, non-TypeScript clients—tRPC doesn't fit. The framework is deliberately narrow to excel at its specific use case.
                </p>

                <p>
                    The type inference magic eliminates schema definitions and code generation at the cost of coupling client and server tightly.
                    Change a server function signature, and all callers must update—this is a feature for monorepos but a liability for distributed systems or public APIs where backwards compatibility matters.
                    tRPC assumes rapid iteration over API stability.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="When tRPC fits">
                    <p>
                        tRPC excels in full-stack TypeScript applications—Next.js, Remix, or custom full-stack setups where API routes and frontend coexist.
                        If you control both ends of the wire and value type safety over API portability, tRPC eliminates entire categories of runtime errors and API contract drift.
                    </p>

                    <p>
                        The library works best for internal applications or products where the web client is the primary (or only) consumer.
                        Teams tired of maintaining GraphQL schemas, REST API documentation, or dealing with code generation find tRPC's simplicity refreshing—just write TypeScript functions.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="When tRPC struggles">
                    <p>
                        APIs serving multiple clients (web, mobile, external partners) can't use tRPC for all consumers. The library only provides type safety for TypeScript clients with shared types.
                        You end up maintaining tRPC for web and separate APIs for other clients, creating duplication. In these scenarios, GraphQL or properly documented REST scales better.
                    </p>

                    <p>
                        Organizational boundaries complicate tRPC adoption. If frontend and backend teams are separate, sharing types across team boundaries requires coordination.
                        The monorepo assumption—teams collaborating in shared code—doesn't match all company structures. Without organizational alignment, tRPC's coupling creates friction rather than value.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Team implications">
                    <p>
                        tRPC reduces API maintenance burden—no schema files, no code generation, no manual type definitions. This frees teams to focus on features rather than infrastructure.
                        However, this only works when the same developers touch frontend and backend. In organizations with strict frontend/backend separation, tRPC's cross-boundary nature creates handoff complexity.
                    </p>

                    <p>
                        The library's growing popularity, especially in the Next.js ecosystem, means increasing community resources and solved problems.
                        However, tRPC is newer than established libraries, so advanced use cases may lack documented solutions. Teams must be comfortable reading source code and contributing patterns back to the community.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

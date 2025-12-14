import { SectionBlock, SubsectionBlock } from '@/components/content';

export function TRPCContext() {
    return (
        <>
            <SectionBlock>
                <h2 style={{ paddingBlockStart: '1.75rem' }} className="text-2xl font-semibold text-slate-800">tRPC: Context</h2>

                <p>
                    tRPC (TypeScript Remote Procedure Call) was created in 2020 as a reaction against the complexity of GraphQL and the type-unsafety of REST.
                    The library's premise: if your frontend and backend share a TypeScript monorepo, why maintain API schemas separately?
                    tRPC generates end-to-end type safety from server function definitions to client calls without code generation or build steps.
                </p>

                <p>
                    The framework eliminates the API contract layer entirely—server functions are exposed as typed procedures, clients call them like local functions, and TypeScript enforces correctness at compile time.
                    This works because tRPC assumes a specific architecture: TypeScript on both ends, monorepo structure, and shared type definitions.
                </p>
            </SectionBlock>

            <SectionBlock>
                <SubsectionBlock heading="Problem being solved">
                    <p>
                        tRPC addresses the developer experience friction of maintaining API contracts. GraphQL requires schema definitions, code generation, and resolver implementations.
                        REST requires documenting endpoints, request/response types, and manual validation. Both create opportunities for runtime type mismatches despite TypeScript's compile-time safety.
                    </p>

                    <p>
                        By inferring types directly from server implementations, tRPC ensures client and server never drift.
                        Change a server function signature, and clients using it fail to compile until updated. This guarantee is valuable in monorepos where coordination overhead is expensive.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Intended scope">
                    <p>
                        tRPC is designed for full-stack TypeScript applications where frontend and backend share a codebase.
                        It works best in Next.js, Remix, or similar frameworks where API routes and client code coexist naturally.
                        The library doesn't try to solve distributed API problems—it optimizes for monolithic architectures with shared types.
                    </p>

                    <p>
                        This narrow focus is intentional. tRPC doesn't support non-TypeScript clients, federated APIs, or third-party integrations well.
                        If your API serves mobile apps, external partners, or microservices, tRPC's architecture doesn't fit.
                    </p>
                </SubsectionBlock>

                <SubsectionBlock heading="Historical context">
                    <p>
                        tRPC emerged as GraphQL fatigue set in—teams questioned whether GraphQL's complexity was justified for internal APIs.
                        The library proved that type safety doesn't require schema languages or code generation if you control both ends of the wire.
                    </p>

                    <p>
                        tRPC gained traction in the Next.js ecosystem, particularly with the T3 stack popularizing it for full-stack TypeScript apps.
                        The framework's growth reflects broader trends: monorepo adoption, skepticism of over-engineered solutions, and preference for TypeScript-native tools.
                    </p>
                </SubsectionBlock>
            </SectionBlock>
        </>
    );
}

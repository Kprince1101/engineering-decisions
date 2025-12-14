# Engineering Decision Evaluation Tool

A comprehensive framework for evaluating critical engineering choices, documenting tradeoffs, and gathering team consensus through anonymous voting.

## What This Is

This tool helps engineering teams make informed decisions by providing structured evaluation frameworks for different technical topics. It moves beyond simple pros/cons lists to deep, multi-dimensional analysis.

### Current Modules

#### 1. UI Component Systems
Compare React UI component libraries (Ant Design, Chakra UI, Mantine, shadcn/ui) across:
- **Context & Background**: Design philosophy, ecosystem maturity, community size
- **Component Coverage**: Breadth and depth of available components
- **Advanced Features**: TypeScript support, theming, accessibility, performance
- **Tradeoffs & Constraints**: Bundle size, learning curve, customization flexibility

#### 2. Package Managers (Coming Soon)
Evaluation of npm, yarn, and pnpm focusing on performance, security, and workspace management.

## Key Features

- **Structured Analysis**: Consistent evaluation criteria for fair comparison.
- **Anonymous Voting**: Allows teams to register preferences without bias.
- **Decision Records**: Exportable data to support Architecture Decision Records (ADRs).

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Kprince1101/engineering-decisions
cd engineering-decisions

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### First Run

The voting system uses Vercel KV (Redis) for persistence. No database setup required - votes are stored in Redis and isolated by evaluation domain.

## Project Structure

```
engineering-decisions/
├── src/
│   ├── app/
│   │   ├── api/vote/          # Voting API endpoints (GET/POST)
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main evaluation page
│   ├── components/
│   │   ├── evaluation/         # Evaluation content (Phase 1)
│   │   │   ├── context/        # Library context sections
│   │   │   ├── components/     # Component coverage sections
│   │   │   ├── advanced/       # Advanced features sections
│   │   │   ├── tradeoffs/      # Tradeoffs sections
│   │   │   └── VotingSection.tsx
│   │   └── voting/             # Voting UI components (Phase 2)
│   │       ├── VoteButton.tsx
│   │       ├── VoteSummary.tsx
│   │       ├── VoteChart.tsx   # SVG bar chart
│   │       └── VoteExport.tsx  # Export functionality
│   └── lib/
│       ├── voteStore.ts        # Vercel KV integration
│       ├── useVoting.ts        # React voting hook
│       └── voteExport.ts       # Export utilities
├── public/                     # Static assets
```

## Architecture

### Voting System (Phase 2)

**Anonymous & Privacy-Preserving:**
- IP addresses are SHA-256 hashed before storage
**Anonymous & Privacy-Preserving:**
- No IP tracking or user identification
- No user accounts or authentication
- Client-side localStorage manages vote state per domain
- Votes are persisted in Redis with domain-based namespacing

**Technology Stack:**
- **Database**: Vercel KV (Redis) for serverless-safe persistence
- **API**: Next.js App Router API routes (`/api/vote`)
- **Visualization**: Plain SVG (no external charting library)
- **Export**: JSON snapshots + clipboard text summaries

**Storage Structure:**
```
Redis Hash Keys:
votes:ui-systems → { mantine: 5, shadcn: 3, ... }
votes:package-managers → { npm: 10, yarn: 7, pnpm: 8 }
``` Evaluation Content (Phase 1)

All evaluation content is modularized into dedicated files per library:
- Each section (Context, Components, Advanced, Tradeoffs) has 4 library-specific files
- Section routers use object map pattern for clean conditional rendering
- Content is completely isolated from voting functionality

## Features

### Core Evaluation
- Side-by-side comparison of 4 popular React UI libraries
- In-depth analysis across 4 key dimensions
- Neutral, factual presentation (no prescriptive recommendations)
### Core Evaluation
- Side-by-side comparison across multiple evaluation domains
- In-depth analysis across multiple key dimensions
- Neutral, factual presentation (no prescriptive recommendations)

### Voting System
- ✅ Anonymous voting (no user tracking)
- ✅ Persistent storage (Vercel KV / Redis)
- ✅ Domain-scoped vote isolation
- ✅ Real-time vote counts
- ✅ Bar chart visualization
- ✅ Export results (JSON download + clipboard copy)
- ✅ Non-competitive framing ("preferences" not "winners")
```json
{
  "timestamp": "2025-12-12T14:32:00Z",
  "votes": {
    "mantine": 6,
    "shadcn": 4,
    "chakra": 5,
    "antd": 2
  }
}
```

**Clipboard Text:**
```
UI Library Vote Snapshot (2025-12-12)

Mantine: 6
Chakra UI: 5
shadcn/ui: 4
Ant Design: 2

Note: Results reflect aggregate preferences and are not prescriptive.
```

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
npm start
```

### Key Dependencies
- **next**: 15.x (App Router)
- **react**: 19.x
### Key Dependencies
- **next**: 16.x (App Router)
- **react**: 19.x
- **@vercel/kv**: 3.x (voting persistence)
- **typescript**: 5.x

## Deployment

### Vercel (Recommended)
This application is designed for serverless deployment on Vercel:

1. Connect your repository to Vercel
2. Ensure Vercel KV is attached to your project
3. Deploy - votes will persist automatically in Redis

### Environment Variables
The `@vercel/kv` package automatically uses environment variables set by Vercel KV. No manual configuration needed.

**For Vote Reset (Development Only):**
```bash
# Add to .env.local
VOTE_RESET_SECRET=your-secure-secret
NEXT_PUBLIC_VOTE_RESET_SECRET=your-secure-secret
```

### Vote Reset (Console Helper)

For development and testing, you can reset vote counts via the browser console:

```javascript
// Reset votes for a specific domain
await window.resetVotes('ui-systems')
await window.resetVotes('package-managers')
```

This helper:
- Only works when `VOTE_RESET_SECRET` is configured
- Requires the matching secret in `.env.local`
- Does not appear in the UI
- Logs success/error messages to the console
- Requires a page refresh to see updated counts

**Security Note:** Change the default secret in production. The secret is intentionally duplicated as a public env var for internal tooling use.

## Ethical Considerations

This voting system is intentionally designed to:
- **Support decision-making**, not create popularity contests
- **Show aggregate preferences**, not competitive rankings
- **Enable documentation**, not social sharing
- **Respect privacy** with no user tracking

Results are presented neutrally without percentages, rankings, or gamification.

## License

MIT

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel KV Documentation](https://vercel.com/docs/storage/vercel-kv)
- [UI Library Comparison Methodology](./docs/methodology.md)

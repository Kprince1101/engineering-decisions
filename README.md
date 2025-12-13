# Engineering Decisions: UI Library Evaluation Tool

A comprehensive evaluation framework for comparing React UI component libraries (Ant Design, Chakra UI, Mantine, shadcn/ui) with anonymous voting functionality to support informed decision-making.

## What This Is

This tool helps engineering teams evaluate UI libraries across multiple dimensions:
- **Context & Background**: Design philosophy, ecosystem maturity, community size
- **Component Coverage**: Breadth and depth of available components
- **Advanced Features**: TypeScript support, theming, accessibility, performance
- **Tradeoffs & Constraints**: Bundle size, learning curve, customization flexibility

Features an **anonymous voting system** that allows teams to register preferences while viewing aggregate results. Voting is designed as a decision aid, not a popularity contest—results are presented in a neutral, non-competitive format.

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd engineering-decisions

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### First Run

The voting system uses SQLite for persistence. The database will be automatically created at `data/votes.db` on first vote. No additional setup required.

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
│       ├── voteStore.ts        # SQLite database layer
│       ├── useVoting.ts        # React voting hook
│       └── voteExport.ts       # Export utilities
├── data/
│   └── votes.db                # SQLite database (auto-created)
└── public/                     # Static assets
```

## Architecture

### Voting System (Phase 2)

**Anonymous & Privacy-Preserving:**
- IP addresses are SHA-256 hashed before storage
- No user accounts or authentication
- One vote per IP address per library option
- Client-side localStorage prevents accidental re-voting (UX enhancement only)

**Technology Stack:**
- **Database**: SQLite (better-sqlite3) for persistent storage
- **API**: Next.js App Router API routes (`/api/vote`)
- **Visualization**: Plain SVG (no external charting library)
- **Export**: JSON snapshots + clipboard text summaries

**Schema:**
```sql
CREATE TABLE votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    option TEXT NOT NULL,              -- Library name (antd, chakra, mantine, shadcn)
    ip_hash TEXT NOT NULL,             -- SHA-256 hash of voter IP
    timestamp INTEGER NOT NULL,
    UNIQUE(option, ip_hash)            -- Prevents duplicate votes
);
```

### Evaluation Content (Phase 1)

All evaluation content is modularized into dedicated files per library:
- Each section (Context, Components, Advanced, Tradeoffs) has 4 library-specific files
- Section routers use object map pattern for clean conditional rendering
- Content is completely isolated from voting functionality

## Features

### Core Evaluation
- Side-by-side comparison of 4 popular React UI libraries
- In-depth analysis across 4 key dimensions
- Neutral, factual presentation (no prescriptive recommendations)

### Voting System
- ✅ Anonymous voting (IP-based duplicate prevention)
- ✅ Persistent storage (SQLite)
- ✅ Real-time vote counts
- ✅ Bar chart visualization
- ✅ Export results (JSON download + clipboard copy)
- ✅ Non-competitive framing ("preferences" not "winners")

### Export Formats

**JSON Export:**
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
- **better-sqlite3**: 9.x (voting persistence)
- **typescript**: 5.x

## Deployment

### Vercel (Recommended for Prototypes)
**Note**: `better-sqlite3` is not supported on Vercel serverless functions. For production deployment:

1. **Option A**: Migrate to Vercel KV (Redis)
   - Replace `src/lib/voteStore.ts` with Redis client
   - Update API routes to use KV storage

2. **Option B**: Deploy to a platform supporting Node.js native modules
   - Railway, Render, DigitalOcean App Platform
   - Ensure persistent storage volume for `data/votes.db`

### Local Production Testing
```bash
npm run build
npm start
```

## Ethical Considerations

This voting system is intentionally designed to:
- **Support decision-making**, not create popularity contests
- **Show aggregate preferences**, not competitive rankings
- **Enable documentation**, not social sharing
- **Preserve anonymity** via IP hashing

Results are presented neutrally without percentages, rankings, or gamification.

## License

MIT

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [better-sqlite3 Documentation](https://github.com/WiseLibs/better-sqlite3)
- [UI Library Comparison Methodology](./docs/methodology.md) _(if you create this)_

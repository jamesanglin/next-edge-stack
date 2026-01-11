# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development (runs both web and worker in parallel)
pnpm dev

# Run individual apps
pnpm dev:web          # Next.js on port 3000
pnpm dev:worker       # Cloudflare Worker on port 8787

# Testing
pnpm test             # Run all unit tests (Vitest)
pnpm test -- --run    # Run tests once without watch mode
pnpm test:e2e         # Run Playwright e2e tests

# Code quality
pnpm lint             # ESLint
pnpm format           # Prettier

# Build
pnpm build            # Build all workspaces
```

## Architecture

This is a TypeScript monorepo using pnpm workspaces:

- **apps/web**: Next.js 16 frontend (React 19, App Router, TailwindCSS v4)
  - Source in `src/app/` using App Router conventions
  - Path alias: `@/*` maps to `./src/*`
  - Unit tests co-located with source files (e.g., `Component.tsx` → `Component.test.tsx`)

- **apps/worker**: Cloudflare Workers serverless API
  - Entry point: `src/index.ts` exports fetch handler
  - Deploy with `pnpm --filter @rejection-wrapped/worker deploy`
  - Add bindings (KV, Durable Objects) to the `Env` interface

- **packages/ui**: Shared UI components (shadcn/ui)
  - Import as `@workspace/ui/components/ui/button`
  - Contains shadcn components, hooks, and utilities

- **e2e/**: Playwright tests against the web app

## Testing

Unit tests use Vitest with React Testing Library for components. Run a single test file:

```bash
pnpm test apps/web/src/app/page.test.tsx
```

E2E tests run against `localhost:3000` (auto-started). Run a specific test:

```bash
pnpm test:e2e e2e/home.spec.ts
```

## Adding shadcn Components

Run from the web app directory:

```bash
cd apps/web
npx shadcn@latest add <component> --yes
```

Components install to `packages/ui/src/components/ui/`. Import as:

```tsx
import { Button } from "@workspace/ui/components/ui/button";
```

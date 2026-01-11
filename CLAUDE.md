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
  - Unit tests alongside source in `__tests__/`

- **apps/worker**: Cloudflare Workers serverless API
  - Entry point: `src/index.ts` exports fetch handler
  - Deploy with `pnpm --filter @rejection-wrapped/worker deploy`
  - Add bindings (KV, Durable Objects) to the `Env` interface

- **e2e/**: Playwright tests against the web app

## Testing

Unit tests use Vitest with React Testing Library for components. Run a single test file:

```bash
pnpm test apps/web/src/__tests__/example.test.tsx
```

E2E tests run against `localhost:3000` (auto-started). Run a specific test:

```bash
pnpm test:e2e e2e/home.spec.ts
```

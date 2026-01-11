# Project Boilerplate

A modern full-stack TypeScript monorepo with Next.js, Cloudflare Workers, and shared UI components.

## Stack

- **Frontend:** Next.js 16, React 19, TailwindCSS v4
- **Backend:** Cloudflare Workers
- **UI:** shadcn/ui components
- **Testing:** Vitest, Playwright
- **Tooling:** pnpm, TypeScript, ESLint, Prettier

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## Project Structure

```
├── apps/
│   ├── web/          # Next.js frontend
│   └── worker/       # Cloudflare Workers API
├── packages/
│   └── ui/           # Shared UI components
└── e2e/              # Playwright tests
```

## Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `pnpm dev`        | Start all apps in development |
| `pnpm dev:web`    | Start Next.js only            |
| `pnpm dev:worker` | Start Worker only             |
| `pnpm test`       | Run unit tests                |
| `pnpm test:e2e`   | Run E2E tests                 |
| `pnpm lint`       | Run ESLint                    |
| `pnpm typecheck`  | Run TypeScript checks         |
| `pnpm build`      | Build all apps                |

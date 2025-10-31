# Legal CRM - Lawyers' CRM SaaS

A production-ready monorepo for a lawyers' CRM SaaS platform with multi-tenancy, observability, and security built-in.

## Architecture

- **Monorepo**: Turborepo with pnpm workspaces
- **Apps**:
  - `apps/web` - Next.js 15 (App Router, RSC)
  - `apps/api` - NestJS REST API
- **Packages**:
  - `packages/ui` - shadcn/ui + Tailwind components
  - `packages/config` - Shared ESLint, Prettier, TypeScript configs
  - `packages/types` - Zod schemas and TypeScript types
  - `packages/sdk` - Shared API client
  - `packages/auth` - Authentication helpers

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- pnpm >= 8.0.0
- PostgreSQL (for development)

### Installation

```bash
# Install dependencies
pnpm install

# Setup environment variables
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Setup database
pnpm db:migrate
pnpm db:seed

# Start development servers
pnpm dev
```

### Development

- **Web**: http://localhost:3000
- **API**: http://localhost:3001
- **API Docs**: http://localhost:3001/docs

### Commands

```bash
pnpm dev          # Start all apps in dev mode
pnpm build        # Build all apps
pnpm lint         # Lint all apps
pnpm type-check   # Type-check all apps
pnpm test         # Test all apps
pnpm format       # Format code with Prettier
```

### Database Commands

```bash
pnpm db:migrate   # Run Prisma migrations
pnpm db:seed      # Seed the database
pnpm db:studio    # Open Prisma Studio
```

## Features

### Multi-tenancy

- Org-scoped data access via middleware
- Automatic org_id injection in queries
- Role-based access control (RBAC)

### Security

- Rate limiting
- CORS configuration
- Security headers (Helmet)
- CSRF protection
- Secure cookies

### Observability

- Structured logging (Pino)
- Request/response correlation IDs
- OpenTelemetry integration
- Sentry error tracking (placeholder)

### Auth (Placeholder)

- Provider-agnostic interfaces
- Ready for Clerk/Auth.js integration
- Org switcher skeleton

### Notifications (Scaffolding)

- Email (Resend) - disabled by default
- SMS (Twilio) - disabled by default
- Push (FCM) - disabled by default
- DLT registration TODO notes for India compliance

### Feature Flags

- Unleash/ConfigCat support
- Local in-memory fallback

## Environment Variables

See `.env.example` files in each app for required environment variables.

## India-specific Defaults

- Timezone: Asia/Kolkata
- Locale: en-IN
- DLT registration placeholders for SMS compliance

## CI/CD

GitHub Actions workflow includes:
- Install dependencies (with caching)
- Lint and type-check
- Run tests
- Build all apps
- Preview deployments (Vercel for web, Render/Fly placeholder for API)

## License

MIT

# CHANGELOG.md

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

#### 2026-01-18 — Project Setup (Iteration 0)

**Documentation**

- `PROJECT_CONTEXT.md`: Project overview, scope, stack, conventions, current state
- `DECISIONS.md`: 10 Architecture Decision Records (ADR-001 to ADR-010)
- `CHANGELOG.md`: This changelog file
- `CONTRIBUTING.md`: Contribution guidelines with component checklist
- `SECURITY.md`: Security policy and best practices
- `ROADMAP.md`: V1/V2/V3 roadmap
- `LICENSE`: MIT License
- `README.md`: Project introduction and quick start

**Monorepo Structure**

- `package.json`: Root package with workspace scripts
- `pnpm-workspace.yaml`: pnpm workspace configuration
- `tsconfig.json`: TypeScript configuration (strict mode)
- `.eslintrc.cjs`: ESLint configuration
- `.prettierrc`: Prettier configuration
- `.editorconfig`: Editor configuration
- `.gitignore`: Git ignore patterns

**Packages**

- `packages/tokens`: Design tokens package
  - CSS custom properties for colors, spacing, typography, etc.
  - TypeScript type definitions for tokens
  - Light and dark theme support
  - Reduced motion support
- `packages/ui`: UI components package
  - Button component (primary, secondary, tertiary variants)
  - Button sizes (sm, md, lg)
  - Button states (disabled, loading, icon-only)
  - Full CSS with accessibility features
- `packages/tooling`: Build tooling package
  - Snippet generator utility

**Documentation Site (`apps/docs`)**

- Astro configuration with MDX support
- Base layout with header, footer, skip link
- Theme toggle (light/dark)
- Homepage with value proposition
- Getting Started page
- Components index page with categories
- Button component documentation (full template)
- Accessibility guidelines page
- Eco-Design (RGESN) guidelines page
- Privacy policy page
- Legal notice page
- Global CSS reset and base styles
- Design tokens CSS

**Testing**

- `vitest.config.ts`: Vitest configuration
- `playwright.config.ts`: Playwright configuration
- Button unit tests (getButtonClasses, getButtonHTML)
- Button E2E tests (keyboard navigation, focus, axe-core)

**CI/CD**

- `.github/workflows/ci.yml`: GitHub Actions workflow
  - Lint job (ESLint, Prettier, TypeScript)
  - Unit test job
  - E2E test job with Playwright
  - Build job
  - Lighthouse performance audit
- `lighthouserc.json`: Lighthouse CI configuration with performance budgets

### Changed

- N/A

### Fixed

- N/A

### Removed

- N/A

---

## [0.0.0] — 2026-01-18

### Added

- Initial project creation

---

_Format for entries:_

```
- **YYYY-MM-DD** — <type>: <description>
  - Files: `path/to/file`
  - Related: #issue or ADR-XXX
```

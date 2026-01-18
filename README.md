# Accessible UI Kit

> A Material Design-inspired component catalog with excellence in **accessibility** (RGAA/WCAG), **eco-design** (RGESN), and **GDPR compliance**.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🎯 Vision

This project provides a **web platform-first** component library focused on:

- **Accessibility (RGAA / WCAG)**: Full keyboard navigation, visible focus, semantic HTML, correct ARIA usage
- **Eco-design (RGESN)**: Minimal JavaScript, no heavy dependencies, system fonts, optimized assets
- **GDPR Compliance**: No tracking by default, no unnecessary cookies, privacy-first
- **Engineering Quality**: SOLID/DRY/KISS principles, comprehensive testing, clear documentation

## 📦 Packages

| Package | Description |
|---------|-------------|
| `@accessible-ui-kit/docs` | Documentation site (Astro) |
| `@accessible-ui-kit/tokens` | Design tokens (CSS custom properties) |
| `@accessible-ui-kit/ui` | UI components (HTML/CSS/JS) |
| `@accessible-ui-kit/tooling` | Build scripts and utilities |

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.17.0
- pnpm >= 8.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/accessible-ui-kit.git
cd accessible-ui-kit

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Available Scripts

```bash
pnpm dev          # Start docs development server
pnpm build        # Build docs for production
pnpm preview      # Preview production build
pnpm lint         # Run ESLint
pnpm format       # Format with Prettier
pnpm test         # Run unit tests
pnpm test:e2e     # Run E2E tests
pnpm test:a11y    # Run accessibility tests
```

## 📚 Documentation

Visit the documentation site at `http://localhost:4321` after running `pnpm dev`.

Each component includes:
- Live preview and code snippets
- Accessibility guidelines (keyboard interactions, ARIA)
- Eco-design notes (bundle size, alternatives)
- Testing information

## 🧪 Testing

We use a three-tier testing strategy:

1. **Unit tests** (Vitest): Utility functions, token validation
2. **E2E tests** (Playwright): Keyboard navigation, focus management
3. **A11y tests** (axe-core): Automated accessibility checks

```bash
pnpm test         # Unit tests
pnpm test:e2e     # E2E + A11y tests
```

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

MIT — see [LICENSE](./LICENSE) for details.

## 📋 Project Documentation

- [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) — Project state and priorities
- [DECISIONS.md](./DECISIONS.md) — Architecture Decision Records
- [CHANGELOG.md](./CHANGELOG.md) — Change history

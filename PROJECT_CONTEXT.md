# PROJECT_CONTEXT.md — Accessible UI Kit

> Long-term memory file for the project. Updated continuously.

---

## 1. Project Overview

**Name:** Accessible UI Kit  
**Type:** Documentation site + Component library  
**Vision:** A Material Design-inspired component catalog with **excellence** in:

- Accessibility (RGAA/WCAG compliance)
- Eco-design (RGESN principles)
- GDPR compliance (no tracking by default)
- Engineering quality (SOLID/DRY/KISS, security, tests)

**Target:** Web platform-first (HTML/CSS/JS) — no framework dependency for V1.

---

## 2. Scope V1 (MVP)

### Site Features

- [ ] Homepage with value proposition + search + "Get Started"
- [ ] Component catalog with categories (Forms, Navigation, Feedback, Data display, Overlays)
- [ ] Component page template: Preview + Code + Variants + A11y + RGESN + Tests
- [ ] Full-text static search
- [ ] Light/Dark theme with CSS custom properties

### Components V1

| #   | Component                    | Status      | Priority      |
| --- | ---------------------------- | ----------- | ------------- |
| 1   | Button                       | ✅ Done     | P0            |
| 2   | TextField                    | Not started | P0            |
| 3   | Checkbox                     | Not started | P0            |
| 4   | Radio                        | Not started | P0            |
| 5   | Switch                       | Not started | P0            |
| 6   | Select (native + guidelines) | Not started | P1            |
| 7   | Modal/Dialog                 | Not started | P0            |
| 8   | Toast/Alert                  | Not started | P1            |
| 9   | Tabs                         | Not started | P1            |
| 10  | Breadcrumb                   | Not started | P1            |
| 11  | Pagination                   | Not started | P1            |
| 12  | Card                         | Not started | P1            |
| 13  | Tooltip                      | Not started | P2 (optional) |

---

## 3. Tech Stack

| Layer             | Technology                  | Reason                                  |
| ----------------- | --------------------------- | --------------------------------------- |
| SSG               | Astro                       | Fast, static-first, MDX support         |
| Language          | TypeScript (strict)         | Type safety, maintainability            |
| Styling           | Vanilla CSS + CSS variables | No runtime, eco-friendly                |
| Code highlighting | Shiki (built-in Astro)      | Zero-JS syntax highlighting             |
| Unit tests        | Vitest                      | Fast, TS-native                         |
| E2E tests         | Playwright                  | Cross-browser, a11y integration         |
| A11y tests        | axe-core                    | Industry standard                       |
| Linting           | ESLint + Prettier           | Consistency                             |
| Package manager   | pnpm                        | Fast, disk-efficient, monorepo-friendly |
| CI                | GitHub Actions              | Standard, integrated                    |

---

## 4. Repository Structure

```
/
├── apps/
│   └── docs/                 # Astro documentation site
├── packages/
│   ├── ui/                   # Component sources (HTML/CSS/JS)
│   ├── tokens/               # Design tokens (CSS variables)
│   └── tooling/              # Build scripts, validators
├── scripts/                  # Utility scripts
├── PROJECT_CONTEXT.md        # This file
├── DECISIONS.md              # Architecture Decision Records
├── CHANGELOG.md              # Change log
├── CONTRIBUTING.md           # Contribution guidelines
├── SECURITY.md               # Security policy
├── LICENSE                   # License file
└── README.md                 # Project readme
```

---

## 5. Conventions

### Code

- Comments in **English only**
- TypeScript strict mode
- No magic values — use tokens
- Small, focused functions
- No `innerHTML` with uncontrolled input

### Git

- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `test:`
- Branch naming: `feat/component-name`, `fix/issue-description`

### Components

- Each component in `/packages/ui/<component-name>/`
- Must include: HTML, CSS, optional JS
- Must document: keyboard interactions, ARIA usage, known pitfalls

### Testing

- Unit tests for utilities and logic
- E2E tests for keyboard navigation and focus management
- axe-core scan for every component page

---

## 6. Definition of Done

### Global DoD

- [x] Static build works
- [ ] Lighthouse scores meet budgets
- [ ] All tests pass (unit + e2e + a11y)
- [ ] Documentation complete
- [ ] Legal pages present
- [ ] CHANGELOG.md updated
- [ ] PROJECT_CONTEXT.md updated

### Component DoD

- [ ] HTML/CSS/JS code (no framework)
- [ ] All variants implemented
- [ ] Integration snippet ready
- [ ] A11y notes: keyboard, roles, ARIA, common errors
- [ ] RGESN notes: weight, alternatives
- [ ] Tests: 1 unit + 1 e2e + 1 axe check

---

## 7. Current State

**Phase:** Iteration 0 — Setup (Complete) / Iteration 1 — Foundations (In Progress)  
**Last updated:** 2026-01-18

### Completed

- [x] PROJECT_CONTEXT.md created
- [x] DECISIONS.md created (10 ADRs)
- [x] CHANGELOG.md created
- [x] Monorepo initialization (pnpm workspace)
- [x] TypeScript configuration
- [x] ESLint + Prettier configuration
- [x] Design tokens package (CSS variables)
- [x] UI components package structure
- [x] Tooling package with snippet generator
- [x] Astro documentation site setup
- [x] Base layout with navigation
- [x] Theme toggle (light/dark)
- [x] Homepage
- [x] Getting Started page
- [x] Components index page
- [x] Button component (all variants)
- [x] Button documentation page (full template)
- [x] Accessibility guidelines page
- [x] Eco-Design (RGESN) page
- [x] Privacy and Legal pages
- [x] Button unit tests
- [x] Button E2E tests with axe-core
- [x] GitHub Actions CI workflow
- [x] Lighthouse configuration
- [x] ROADMAP.md

### In Progress

- [ ] Install dependencies and verify build
- [ ] Run and fix any test issues

### Next Up

- [ ] TextField component
- [ ] Checkbox component
- [ ] Radio component
- [ ] Switch component

---

## 8. Priority TODO

1. ~~Create documentation files~~ ✅
2. ~~Initialize pnpm monorepo~~ ✅
3. ~~Setup Astro in `/apps/docs`~~ ✅
4. ~~Create tokens package~~ ✅
5. ~~Create UI package structure~~ ✅
6. ~~Configure Vitest + Playwright~~ ✅
7. ~~Setup ESLint + Prettier~~ ✅
8. ~~Create GitHub Actions workflow~~ ✅
9. ~~Build docs layout + navigation~~ ✅
10. ~~Implement Button component~~ ✅
11. Install dependencies and test build
12. Implement TextField component
13. Implement Checkbox/Radio/Switch components
14. Implement Dialog component
15. Implement remaining V1 components

---

## 9. Performance Budgets (Target)

| Metric                   | Budget  |
| ------------------------ | ------- |
| First Contentful Paint   | < 1.5s  |
| Largest Contentful Paint | < 2.5s  |
| Total Blocking Time      | < 200ms |
| Cumulative Layout Shift  | < 0.1   |
| Total JS (initial)       | < 50KB  |
| Total CSS (initial)      | < 30KB  |

---

## 10. Accessibility Targets

- WCAG 2.1 AA compliance minimum
- RGAA 4.1 compliance
- 100% keyboard navigable
- Visible focus indicators
- Respects `prefers-reduced-motion`
- Minimum contrast ratio: 4.5:1 (text), 3:1 (UI)

---

## 11. Notes

- Prefer native HTML elements over custom implementations
- If a component cannot be made accessible properly, provide native alternative + guidelines
- No third-party analytics by default
- No cookies except strictly necessary ones

---

_This file is the source of truth for project state. Update after every significant change._

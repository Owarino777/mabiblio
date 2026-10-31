# DECISIONS.md — Architecture Decision Records

> Lightweight ADRs documenting key architectural and technical decisions.

---

## ADR-001: Static Site Generator — Astro

**Date:** 2026-01-18  
**Status:** Accepted

### Context

We need a static site generator for the documentation site that:

- Produces fast, minimal output
- Supports MDX for component documentation
- Has built-in code highlighting
- Allows islands architecture for minimal JS

### Decision

Use **Astro** as the SSG.

### Rationale

- Zero-JS by default aligns with RGESN eco-design principles
- Built-in Shiki integration for syntax highlighting (no client JS)
- Native MDX support
- Active community and ecosystem
- TypeScript-first
- Easy static deployment

### Consequences

- Team must learn Astro conventions
- Component islands require explicit opt-in for interactivity
- Good: Automatic performance optimization

---

## ADR-002: Design Tokens via CSS Custom Properties

**Date:** 2026-01-18  
**Status:** Accepted

### Context

We need a consistent design system with:

- Theme support (light/dark)
- Maintainable color, spacing, typography scales
- No runtime overhead

### Decision

Use **CSS Custom Properties** (CSS variables) for all design tokens.

### Rationale

- Native browser support (no build step required)
- Zero runtime JS for theming
- Easy dark mode with `:root` / `[data-theme="dark"]`
- Aligns with eco-design (no CSS-in-JS overhead)
- Tokens can be documented and exported

### Consequences

- Requires discipline to use tokens consistently
- No automatic tree-shaking (but CSS is small anyway)
- Good: Simple mental model

### Token Categories

- Colors (semantic + palette)
- Typography (font-family, sizes, weights, line-heights)
- Spacing (scale)
- Radii
- Shadows
- Transitions
- Z-indices

---

## ADR-003: Monorepo with pnpm Workspaces

**Date:** 2026-01-18  
**Status:** Accepted

### Context

Project has multiple packages:

- Documentation site (`apps/docs`)
- UI components (`packages/ui`)
- Design tokens (`packages/tokens`)
- Tooling scripts (`packages/tooling`)

### Decision

Use **pnpm workspaces** for monorepo management.

### Rationale

- Disk-efficient (symlinked node_modules)
- Fast installation
- Native workspace support
- Strict dependency resolution (catches phantom deps)
- Good ecosystem (changesets, turborepo compatible)

### Consequences

- Contributors must use pnpm
- Lockfile is pnpm-specific
- Good: Single repo, atomic commits

---

## ADR-004: Testing Strategy

**Date:** 2026-01-18  
**Status:** Accepted

### Context

Need comprehensive testing covering:

- Unit logic
- End-to-end interactions
- Accessibility compliance

### Decision

Three-tier testing approach:

1. **Vitest** for unit tests
2. **Playwright** for E2E tests
3. **axe-core** (via @axe-core/playwright) for a11y tests

### Rationale

- Vitest: Fast, TS-native, Vite-compatible
- Playwright: Cross-browser, excellent for keyboard/focus testing
- axe-core: Industry standard, catches common a11y issues

### Consequences

- E2E tests require browser installation
- axe-core doesn't catch everything (manual review still needed)
- Good: Automated regression protection

---

## ADR-005: Vanilla CSS over Tailwind/CSS-in-JS

**Date:** 2026-01-18  
**Status:** Accepted

### Context

Styling approach for components that will be copied by users.

### Decision

Use **vanilla CSS** with CSS custom properties.

### Rationale

- Users can copy-paste without dependencies
- No build step required for consumers
- Aligns with "web platform first" philosophy
- Tailwind would require users to have Tailwind setup
- CSS-in-JS adds runtime overhead

### Consequences

- More verbose than utility classes
- No automatic purging (but components are small)
- Good: Maximum portability

---

## ADR-006: No Third-Party Analytics by Default

**Date:** 2026-01-18  
**Status:** Accepted

### Context

RGPD compliance and eco-design require minimal data collection.

### Decision

- No analytics by default
- If analytics needed: self-hosted Matomo only
- Requires explicit consent
- Must be documented

### Rationale

- RGPD: No data collection without consent
- RGESN: Tracking adds unnecessary requests
- Trust: Users expect a privacy-respecting tool

### Consequences

- Less usage data for prioritization
- Good: Privacy-first, simpler legal page

---

## ADR-007: Conventional Commits

**Date:** 2026-01-18  
**Status:** Accepted

### Context

Need consistent commit messages for:

- Changelog generation
- Code review clarity
- Semantic versioning

### Decision

Enforce **Conventional Commits** format.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting (no code change)
- `refactor`: Code change (no feature/fix)
- `test`: Adding/updating tests
- `chore`: Build process, deps, etc.

### Consequences

- Requires discipline
- Can be enforced via commitlint
- Good: Clear history, auto-changelog potential

---

## ADR-008: Native HTML Elements First

**Date:** 2026-01-18  
**Status:** Accepted

### Context

Custom components often break accessibility.

### Decision

Always prefer **native HTML elements** when they provide the required functionality. Custom components only when:

1. Native element is insufficient
2. Accessibility can be guaranteed
3. Benefits outweigh complexity

### Examples

- Use `<button>` not `<div role="button">`
- Use `<select>` not custom dropdown (unless properly ARIA-compliant)
- Use `<dialog>` for modals

### Consequences

- Some components may look "basic"
- Styling native elements can be tricky
- Good: Maximum accessibility by default

---

## ADR-009: MIT License

**Date:** 2026-01-18  
**Status:** Accepted

### Context

Need an open-source license that:

- Allows commercial use
- Is widely understood
- Has minimal restrictions

### Decision

Use **MIT License**.

### Rationale

- Simple and permissive
- Widely adopted in JS ecosystem
- Compatible with most projects
- Encourages adoption

### Consequences

- No copyleft protection
- Good: Maximum adoption potential

---

## ADR-010: Component Documentation Template

**Date:** 2026-01-18  
**Status:** Accepted

### Context

Need consistent documentation across all components.

### Decision

Every component page must include:

1. Title + Description
2. Live Preview
3. Variants
4. API/Parameters
5. Code (HTML/CSS/JS with copy button)
6. Do/Don't guidelines
7. Accessibility section (keyboard, ARIA, errors, checklist)
8. RGESN section (weight, alternatives)
9. Tests section (covered cases, how to run)

### Rationale

- Consistency aids learning
- Checklists prevent omissions
- Transparency builds trust

### Consequences

- More upfront documentation work
- Templates needed
- Good: Quality documentation

---

_Add new decisions as ADR-0XX following the format above._

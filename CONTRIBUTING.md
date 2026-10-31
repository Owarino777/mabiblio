# Contributing to Accessible UI Kit

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🏁 Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. **Install dependencies**: `pnpm install`
4. **Create a branch**: `git checkout -b feat/your-feature`

## 📝 Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code formatting (no logic change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, etc.

### Examples

```
feat(button): add icon button variant
fix(dialog): correct focus trap on close
docs(tokens): document color palette usage
test(tabs): add keyboard navigation e2e test
```

## 🧩 Adding a Component

### 1. Create Component Structure

```
packages/ui/src/<component-name>/
├── index.ts           # Exports
├── <component>.ts     # Logic (if any)
├── <component>.css    # Styles
├── <component>.html   # Template/example
└── README.md          # Component notes
```

### 2. Create Documentation Page

```
apps/docs/src/content/components/<component-name>.mdx
```

Use the component template — see existing components for reference.

### 3. Required Sections

Every component documentation must include:

- [ ] **Title & Description**
- [ ] **Live Preview**
- [ ] **Variants** (all states)
- [ ] **API/Props** (if applicable)
- [ ] **Code Snippets** (HTML/CSS/JS)
- [ ] **Do / Don't** examples
- [ ] **Accessibility**
  - Keyboard interactions
  - ARIA attributes
  - Common pitfalls
  - Checklist
- [ ] **RGESN Notes**
  - Bundle size
  - Eco-friendly alternatives
- [ ] **Tests**
  - Covered cases
  - How to run

### 4. Add Tests

```
packages/ui/src/<component-name>/__tests__/
├── <component>.test.ts       # Unit tests
└── <component>.spec.ts       # E2E tests (optional here, can be in apps/docs)
```

E2E and a11y tests go in:

```
apps/docs/e2e/<component-name>.spec.ts
```

## ✅ Quality Checklist

Before submitting a PR, ensure:

- [ ] Code follows TypeScript strict mode
- [ ] `pnpm lint` passes
- [ ] `pnpm format:check` passes
- [ ] `pnpm test` passes
- [ ] `pnpm test:e2e` passes (if applicable)
- [ ] Documentation is complete
- [ ] CHANGELOG.md is updated
- [ ] No console errors or warnings

## ♿ Accessibility Requirements

All components MUST:

- Be fully keyboard navigable
- Have visible focus indicators
- Use semantic HTML elements
- Include proper ARIA only when necessary
- Respect `prefers-reduced-motion`
- Meet WCAG 2.1 AA contrast ratios

## 🌱 Eco-Design Requirements

Components SHOULD:

- Minimize JavaScript usage
- Prefer CSS-only solutions when possible
- Avoid heavy dependencies
- Be optimized for minimal bundle size

## 🔒 Security

- No `innerHTML` with user input
- No external resource loading without user consent
- Review dependencies for vulnerabilities

## 🧪 Testing Guidelines

### Unit Tests

- Test utility functions
- Test component logic
- Keep tests focused and fast

### E2E Tests

- Test keyboard navigation
- Test focus management
- Test form validation flows

### Accessibility Tests

- Include axe-core scans
- Test screen reader announcements
- Test with keyboard only

## 📬 Pull Request Process

1. Update documentation as needed
2. Update CHANGELOG.md
3. Ensure all checks pass
4. Request review from maintainers
5. Address feedback promptly

## 🙏 Code of Conduct

Be respectful, inclusive, and constructive. We welcome contributors of all backgrounds and experience levels.

---

Questions? Open an issue or start a discussion!

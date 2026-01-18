# ROADMAP.md — Accessible UI Kit

## Vision

Create the most accessible, eco-friendly, and developer-friendly UI component library for the web platform.

---

## V1 — Foundation (Current)

**Status:** In Progress  
**Target:** Q1 2026

### Goals
- ✅ Project setup (monorepo, tooling, CI)
- ✅ Design tokens system
- ✅ Documentation site structure
- 🔄 Core components (8-11 components)
- 🔄 Full test coverage
- ⏳ Lighthouse performance budgets

### Components
| Component | Status |
|-----------|--------|
| Button | ✅ Done |
| TextField | ⏳ Planned |
| Checkbox | ⏳ Planned |
| Radio | ⏳ Planned |
| Switch | ⏳ Planned |
| Select (native) | ⏳ Planned |
| Dialog | ⏳ Planned |
| Toast/Alert | ⏳ Planned |
| Tabs | ⏳ Planned |
| Breadcrumb | ⏳ Planned |
| Pagination | ⏳ Planned |
| Card | ⏳ Planned |

### Deliverables
- [ ] Static documentation site
- [ ] All V1 components with full docs
- [ ] Unit + E2E + A11y tests
- [ ] GitHub Actions CI/CD
- [ ] Deployment guide

---

## V2 — Expansion

**Status:** Planned  
**Target:** Q2 2026

### Goals
- Framework examples (React, Vue, Svelte)
- CLI tool for scaffolding
- Pattern library (common UI patterns)
- Expanded component library

### New Components
- Accordion
- Dropdown Menu
- Combobox (autocomplete)
- Data Table
- Progress Bar
- Skeleton Loader
- Avatar

### Framework Examples
Each component will include:
- React example (no dependency required)
- Vue example
- Svelte example
- Vanilla JS example

### CLI Tool
```bash
npx @accessible-ui-kit/cli add button
npx @accessible-ui-kit/cli add dialog --framework react
```

### Pattern Library
Common UI patterns documented:
- Login form
- Search with suggestions
- Confirmation dialog
- Form validation
- Navigation menu

---

## V3 — Ecosystem

**Status:** Future  
**Target:** Q4 2026

### Goals
- npm packages for tokens and components
- Advanced theming
- Internationalization (i18n)
- Community contributions

### npm Packages
```bash
npm install @accessible-ui-kit/tokens
npm install @accessible-ui-kit/components
```

### Multi-Language Docs
- English (default)
- French (Français)
- Spanish (Español) — community contribution
- German (Deutsch) — community contribution

### Advanced Theming
- Multiple built-in themes
- Theme builder tool
- Design token customization guide

### Community
- Contribution guide for new components
- Template for component proposals
- Regular accessibility audits

---

## V4 — Beyond

### Ideas for the Future
- Figma/Sketch design kit
- VS Code extension for snippets
- Storybook integration guide
- Performance monitoring dashboard
- Automated accessibility regression tests
- Component playground/sandbox

---

## How to Contribute

We welcome contributions at any stage! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Priority Areas
1. **Component implementation** — Help build V1 components
2. **Testing** — Add test coverage
3. **Documentation** — Improve examples and explanations
4. **Accessibility audits** — Test with real assistive technologies
5. **Translations** — Help with i18n (V3)

---

*This roadmap is subject to change based on community feedback and priorities.*

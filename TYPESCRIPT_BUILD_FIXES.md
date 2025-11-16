# TypeScript Build Fixes for GitHub Pages Deployment

> **Date:** November 16, 2025
> **Context:** Deploying Next.js 15 + React 19 + TypeScript 5 (strict mode) to GitHub Pages

---

## Executive Summary

This codebase is a **component template library** (Aceternity UI / shadcn-based) with 121+ root-level components. When deploying to GitHub Pages with static export, TypeScript strict mode reveals type errors that weren't caught during development due to disabled ESLint rules.

### Stack
- Next.js 15.3.5 (App Router)
- React 19.0.0
- TypeScript 5 (strict: true)
- Tailwind CSS v4

---

## Root Cause Analysis

### Why the build fails

1. **TypeScript Strict Mode** is enabled in `tsconfig.json`:
   ```json
   "strict": true
   ```

2. **ESLint rules are disabled** (hiding issues during dev):
   - `@typescript-eslint/no-explicit-any`: OFF
   - `@typescript-eslint/no-unused-vars`: OFF
   - `react-hooks/exhaustive-deps`: OFF

3. **React 19 has stricter typing** than previous versions, especially for refs.

4. **Static export** (`output: 'export'` in next.config.ts) runs full type checking during build.

---

## Issues to Fix

### CRITICAL: Wrong Import Path (1 file)

**File:** `container-text-flip.tsx`
**Line 6:**
```typescript
// WRONG
import { cn } from "@/utils/cn";

// CORRECT
import { cn } from "@/lib/utils";
```

---

### HIGH PRIORITY: Untyped useRef (6 files)

React 19 + TypeScript strict mode requires explicit generic types for `useRef`:

```typescript
// WRONG - creates RefObject<null>
const containerRef = useRef(null);

// CORRECT - creates RefObject<HTMLDivElement | null>
const containerRef = useRef<HTMLDivElement>(null);
```

**Files to fix:**

| File | Line | Current Code | Fix |
|------|------|--------------|-----|
| `vortex.tsx` | 22 | `useRef(null)` | `useRef<HTMLDivElement>(null)` |
| `hero-parallax.tsx` | 25 | `React.useRef(null)` | `React.useRef<HTMLDivElement>(null)` |
| `container-text-flip.tsx` | 31 | `React.useRef(null)` | `React.useRef<HTMLElement>(null)` |
| `animated-modal.tsx` | 80 | `useRef(null)` | `useRef<HTMLDivElement>(null)` |
| `heros/two-column-with-image.tsx` | 15, 81 | `React.useRef(null)` | `React.useRef<HTMLDivElement>(null)` |
| `heros/playful-hero-section.tsx` | 15, 81 | `React.useRef(null)` | `React.useRef<HTMLDivElement>(null)` |
| `stats/stats-with-number-ticker.tsx` | 74 | `useRef(null)` | `useRef<HTMLDivElement>(null)` |

---

### MEDIUM PRIORITY: Dynamic Component Typing (Fixed)

**File:** `3d-card.tsx` (line 137-146)

When using dynamic `as` prop for element type:
```typescript
// WRONG - causes "children expects type never" error
const Tag = as || "div";
return <Tag>{children}</Tag>;

// CORRECT - use type assertion
const Component = Tag as any;
return <Component>{children}</Component>;
```

---

### LOW PRIORITY: Excessive `any` Types (28+ files)

These won't fail the build but reduce type safety:

**Common patterns to avoid:**
```typescript
// BAD
const DesktopNav = ({ navItems }: any) => { ... }
function onMouseMove({ currentTarget, clientX, clientY }: any) { ... }

// BETTER
interface NavItem {
  name: string;
  link: string;
}
const DesktopNav = ({ navItems }: { navItems: NavItem[] }) => { ... }
```

**Most affected files:**
- `navbars/navbar-with-children.tsx` (6 instances)
- `navbars/simple-navbar-with-hover-effects.tsx` (4 instances)
- `evervault-card.tsx` (3 instances)
- `wavy-background.tsx` (4 instances)
- `moving-border.tsx` (3 instances)

---

## Project Structure Fixes (Already Applied)

### Path Alias Configuration

**tsconfig.json** must match actual file structure:
```json
"paths": {
  "@/*": ["./*"]  // NOT "./src/*"
}
```

### Directory Structure

Components must be in locations matching their import paths:

```
components/
├── ErrorReporter.tsx          # for @/components/ErrorReporter
├── sections/                   # for @/components/sections/*
│   ├── navigation.tsx
│   ├── selected-work.tsx
│   ├── contact-footer.tsx
│   ├── store.tsx
│   ├── curious-ideas.tsx
│   └── hero.tsx
└── ui/                         # for @/components/ui/*
    ├── button.tsx
    ├── dialog.tsx
    ├── label.tsx
    ├── sparkles.tsx
    ├── toggle.tsx
    └── canvas-reveal-effect.tsx
```

---

## GitHub Pages Deployment Setup

### next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Enable static export
  basePath: '',               // Root path for username.github.io
  images: {
    unoptimized: true,        // Required for static export
    remotePatterns: [...]
  },
};
```

### GitHub Actions Workflow

File: `.github/workflows/deploy.yml`

Key steps:
1. Checkout code
2. Setup Bun (package manager)
3. Install dependencies (`bun install`)
4. Build (`bun run build`)
5. Upload `./out` directory as artifact
6. Deploy to GitHub Pages

### Repository Settings Required

1. Go to **Settings > Pages**
2. Set **Source** to **GitHub Actions** (not "Deploy from branch")

---

## Fix Implementation Order

1. **Fix import path** in `container-text-flip.tsx`
2. **Fix useRef types** in 6-7 files
3. **Commit and push**
4. **Monitor GitHub Actions** for successful build
5. **Verify site is live** at https://conqueroy.github.io

---

## Future Recommendations

### For Production Readiness

1. **Re-enable ESLint rules** gradually:
   ```javascript
   // eslint.config.mjs
   "@typescript-eslint/no-explicit-any": "warn", // Start with warn
   "react-hooks/exhaustive-deps": "warn",
   ```

2. **Add proper interfaces** for component props instead of `any`

3. **Consider moving all 121 root components** to `components/ui/` or organized subdirectories

4. **Add barrel files** (index.ts) for cleaner imports:
   ```typescript
   // components/ui/index.ts
   export * from './button';
   export * from './dialog';
   // etc.
   ```

5. **Remove @ts-ignore comments** and fix underlying type issues

---

## Alternative: Quick Fix (Not Recommended)

If you need to deploy immediately without fixing types:

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Skips type checking
  },
  // ... rest of config
};
```

**Warning:** This hides real issues and is not recommended for production.

---

## References

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [TypeScript Strict Mode](https://www.typescriptlang.org/tsconfig#strict)
- [React 19 Type Changes](https://react.dev/blog/2024/04/25/react-19)
- [GitHub Pages with Next.js](https://github.com/actions/configure-pages)

---

## Contact

For questions about this deployment setup, refer to the Git history for context on each fix applied.

**Commits in deployment fix series:**
1. Configure GitHub Pages deployment for Next.js
2. Fix module resolution for GitHub Pages deployment
3. Fix TypeScript error in CardItem component
4. Move UI components to components/ui/ directory
5. Fix useRef type in animated-modal component
6. (This commit) Fix all remaining TypeScript errors

# Claude.md - Portfolio Optimization Project Guidelines

**Project**: malvis-portfolio (Next.js 15 + React 19 + Tailwind + Framer Motion + GSAP)
**Goal**: Achieve a blazing-fast, smooth, production-grade portfolio with Lighthouse Performance score of **90+** (ideally 95+ on mobile), while keeping the **exact same visual design, animations feel, hover effects, colors, layout, and user experience**.

---

## Core Philosophy & Mindset

- **Performance First**: Every change must reduce JavaScript execution time, main-thread work, and bundle size.
- **Visual Fidelity**: The site must look and feel **identical** to the current version. No design changes unless explicitly requested.
- **Minimal & Surgical**: Make the smallest possible changes that deliver results.
- **Strict Boundaries**: Do not break existing functionality.

---

## Strict Rules (Never Break These)

1. Do **NOT** change colors, fonts, spacing, layout, or content text unless instructed.
2. Do **NOT** remove or weaken any visual animation — only optimize or replace heavy implementations with lighter CSS equivalents.
3. Do **NOT** add new libraries or features unless explicitly told.
4. Do **NOT** modify files outside the current task scope.
5. Always preserve accessibility, SEO, and dark mode.
6. Always run `npm run build` after changes and report results.
7. When in doubt — ask before big changes.

---

## Performance Optimization Priorities (in order)

1. GSAP ScrollSmoother → Disable / conditionalize
2. Heavy Framer Motion → Replace continuous animations with CSS
3. Lazy loading + `whileInView` with `once: true`
4. Images optimization (`next/image`, sizes, lazy)
5. Metadata & Critical Rendering Path
6. globals.css enhancements (GPU-friendly animations)
7. Bundle size & final cleanups

---

## Workflow for Every Task

1. Read relevant files first.
2. Plan minimal changes.
3. Make surgical edits with clear comments.
4. make sure you are using tailwind css and not plain css
5. Show diffs.
6. Run `npm run build` and report output.
7. Summarize changes + impact.

---

## Key Files

- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/sections/home.tsx`
- `src/components/sections/about_me.tsx`
- `src/components/sections/portfolio.tsx`
- `src/app/globals.css`
- `next.config.ts`

---

**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**
**make sure you are using tailwind css and not plain css**

**Success Criteria**: Lighthouse Performance ≥ 90 on mobile, no visual regression, faster scroll/JS execution.

Start every response with a short plan summary, then execute strictly.

Now begin working on the instructed stage when given a prompt.

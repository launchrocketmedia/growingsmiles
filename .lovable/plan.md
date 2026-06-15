## Goal
Make the footer look clean and professional. The current light sky-blue gradient reads as washed-out. Replace it with a polished deep-navy footer (on-brand) with crisp light text.

## Changes

### 1. `src/styles.css`
- Update `--gradient-footer` to a deep navy gradient using the brand navy, e.g.
  `linear-gradient(165deg, oklch(0.30 0.06 255) 0%, oklch(0.24 0.05 258) 100%)`.

### 2. `src/components/site/Footer.tsx`
- Switch text colors from `text-[var(--color-navy)]` / `text-[var(--color-foreground)]/70` to light tokens: headings/links in white, body copy in `text-white/70`.
- Update hover states to `hover:text-white`.
- Change the top blur glow from `bg-[var(--color-navy)]/5` to `bg-white/10` for a subtle highlight on dark.
- Change the bottom divider from `border-[var(--color-navy)]/10` to `border-white/15`.
- Keep the logo; the existing logo should read fine on navy (verify after build, add subtle drop-shadow if needed).
- Bottom line stays "© 2026 Growing Smiles. All Rights Reserved. Built By Ayush." with the mailto link, restyled for the dark background.

## Verification
- Build compiles.
- Screenshot the footer to confirm clean contrast and the logo is clearly visible on navy.

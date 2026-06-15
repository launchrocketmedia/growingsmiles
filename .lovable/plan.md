### 1. Hero Badge Floating Animations
Add `animate-float` class to:
- The **4.9 Rating** card (`glass` badge at bottom-left of hero image)
- The **Fear-Free Care** card (`glass` badge at top-right of hero image)

Use staggered `animationDelay` values so the two badges float out of phase for a premium feel.

### 2. Desktop Services Cards Floating Animation
Add `animate-float` to each `ServiceCard` in the desktop grid (`sm:grid ...` at `lg:grid-cols-3 xl:grid-cols-4`).
Apply staggered `animationDelay` based on card index (`i`) so the grid has a wave-like floating effect.
Keep the mobile swipeable layout unchanged (no float there to avoid motion sickness on small screens).

### 3. Patient Journey SVG Line Cutout Fix
The dashed connector path in the Patient Journey section uses `viewBox="0 0 100 100"`, but the path itself dips to `x=-15` at the step-3 curve. That negative feedback clipping on the left side in desktop view.

Fix options:
- **Option A (preferred):** Shift all path `x` coordinates rightward by 15 units so the entire path stays within `0–100` (e.g., change `-15` → `15`, `30` → `45`, `75` → `90`). Update `viewBox` to `"0 0 105 100"`.
- **Option B:** Widen the `viewBox` to `"-20 0 120 100"` so negative `x` values are rendered.

I recommend **Option A** — shifting the path keeps the SVG crisp and avoids any browser-specific clipping behavior at the viewBox edge.

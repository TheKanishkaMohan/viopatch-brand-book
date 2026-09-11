# Viopatch — Print-Ready Brand Book & Interactive Review Monograph

> **Strategic Acquisition & Incubation Monograph**  
> Prepared for **Arti Gill · Giga Capital**  
> Published by **Unexo Life Sciences Private Limited** (Est. 1972)  
> **Brand Design System:** Authoritative Reference `BRAND_STYLE_GUIDE.md` (Version 2.0)

---

## Overview

This repository hosts the **Viopatch Brand Book** — a print-ready monograph designed for physical production on high-grade art paper stock with real transdermal patch sachets physically mounted onto facing sample spreads.

It features an interactive **2-Page Facing Spread web application** with an integrated **visual pin-drop commenting and review system** for collaborative feedback.

### 🌐 Live Interactive Review App (GitHub Pages)
👉 **[Open Live Viopatch Brand Book](https://thekanishkamohan.github.io/viopatch-brand-book/)**

---

## Key Features

1. **2-Page Side-by-Side Spread Layout**:
   - Matches Slide Master POTX 16:9 widescreen dimensions ($960\text{ pt} \times 540\text{ pt}$ / $1920 \times 540\text{ px}$ spread).
   - Auto-scales dynamically to fit 100% of the desktop viewport without clipping.
   - Smooth spread-to-spread navigation with keyboard arrow shortcuts (`←` / `→`) and spread dropdown selector.

2. **Brand Style Guide (v2.0) Strict Compliance**:
   - Solid Viopatch Cool Blue (`#0054A6`) cover with zero decorative gradients and zero non-compliant radar/target watermarks.
   - Primary 8 approved brand colors: Cool Blue (`#0054A6`), Dermal Yellow (`#FDCD8B`), Herbal Green (`#379131`), Thermal Orange (`#F26B43`), Menthol Frost (`#0284C7`), Clinical Slate (`#475569`), Statutory Charcoal (`#2A2A28`), and Hospital Grey (`#F2F2F7`).

3. **Pin-Drop Review & Commenting System**:
   - Click **"Comments"** &rarr; **"Drop Pin"** to place a numbered annotation pin anywhere on the open slides.
   - Dynamic pin re-indexing (`#1, #2, #3...`) upon adding or deleting comments.
   - Direct pin deletion via drawer button or **right-clicking** on any pin on the canvas.
   - **One-Click Feedback for Chat**: Export all feedback into formatted GitHub Markdown ready to paste directly into AI/chat workflows.
   - Export/Import comments as JSON, and persistent `localStorage` synchronization.

4. **Print-Ready Standards & Bleed Guides**:
   - Click **"Bleed Guides"** to reveal the 3mm print bleed perimeter and safety margins.
   - Click **"Print"** in the toolbar to generate 1:1 press-ready PDFs with clean vector typography.
   - Physical sample spreads engineered with corner registration marks and target zones for peelable fugitive glue dots ("booger glue").

---

## Monograph Architecture (17 Pages / 9 Spreads)

```
[ SPREAD 0 ]  Page 1: Front Cover (Right / Solo)
[ SPREAD 1 ]  Page 2: Inside Front Cover (BLANK)     │ Page 3: Category White Space & Moats
[ SPREAD 2 ]  Page 4: Knee Patch Description         │ Page 5: Sample 1: Knee Patch Mount
[ SPREAD 3 ]  Page 6: Back XL Description            │ Page 7: Sample 2: Back XL Mount
[ SPREAD 4 ]  Page 8: Regular Multipurpose Desc.     │ Page 9: Sample 3: Regular Mount
[ SPREAD 5 ]  Page 10: Large Patch Description       │ Page 11: Sample 4: Large Patch Mount
[ SPREAD 6 ]  Page 12: Period Pain Patch Desc.       │ Page 13: Sample 5: Period Pain Mount
[ SPREAD 7 ]  Page 14: Incubation Thesis             │ Page 15: Acquisition & CDMO Structure
[ SPREAD 8 ]  Page 16: Regulatory Governance         │ Page 17: Back Cover (Solid Cool Blue)
```

- **Rhythm**: Every product spread pairs **Left Page = SKU Description & Mechanism** with **Right Page = Physical Sample Mount Zone**.

---

## Repository Contents

- `index.html` — Standalone 2-page spread web application with embedded book slides and review commenting engine.
- `style.css` — 2026 Viopatch Brand Design System styling, 16:9 POTX spread geometry, and toggleable bleed overlays.
- `app.js` — Spread controller, viewport auto-scaler, pin placement, `localStorage` manager, and Markdown exporter.
- `assets/` — High-resolution packaging photography and renders for all 5 product lines.
- `VIOPATCH-BRAND-BOOK-TEMPLATE.potx` — 1:1 Slide Master PowerPoint presentation template ($960\text{ pt} \times 540\text{ pt}$).
- `outline-refined.md` — Complete 17-page editorial copy, clinical data, and die-cut specifications.
- `BRAND_STYLE_GUIDE.md` — The authoritative 2026 Viopatch design system specification (Version 2.0).

---

## Confidentiality Notice

*This document contains proprietary commercial concepts prepared exclusively for Giga Capital. Unauthorized reproduction is strictly prohibited.*

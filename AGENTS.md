# Viopatch Repository — AI Agent Operating Instructions

> **Audience:** AI Coding Assistants (Antigravity, Cursor, Claude Code, Copilot, ChatGPT)  
> **Repository:** [TheKanishkaMohan/viopatch-brand-book](https://github.com/TheKanishkaMohan/viopatch-brand-book)  
> **Maintainer:** [@TheKanishkaMohan](https://github.com/TheKanishkaMohan)  
> **Design Authority:** [`BRAND_STYLE_GUIDE.md`](./BRAND_STYLE_GUIDE.md) (Version 2.0)

This document contains technical constraints, design tokens, and operational rules that AI agents must follow when making changes to this codebase.

---

## 1. Architecture & File Roles

```
viopatch-brand-book/
├── index.html              # Core web application (served directly by GitHub Pages at root /)
├── style.css               # Slide styling, 2-page spread flexbox, print die-lines, bleed guides
├── app.js                  # Viewport auto-scaler, wheel navigation, comment pin engine
├── assets/                 # Packaging photography, vector logos, Substack landscape charts
├── templates/              # Official Office templates (version-controlled)
│   ├── VIOPATCH-PRESENTATION-TEMPLATE.potx   # Master 16:9 widescreen PowerPoint Slide Master
│   └── VIOPATCH-DOCUMENT-TEMPLATE.dotx       # Official corporate Word template
├── docs/                   # Master compiled PDF/DOCX collateral
│   ├── VIOPATCH_BRAND_STYLE_GUIDE.pdf
│   ├── VIOPATCH_BRAND_STYLE_GUIDE.pptx
│   ├── VIOPATCH_BRAND_AUDIT_REPORT.docx
│   └── VIOPATCH_BRAND_AUDIT_REPORT.pdf
├── scripts/
│   └── generate_deck.py    # Python compiler that programmatically builds index.html
├── BRAND_STYLE_GUIDE.md    # Single canonical 2026 Brand Design System specification
├── README.md               # Human-friendly 3-step reviewer walkthrough
└── AGENTS.md               # This agent instruction file
```

---

## 2. Slide Master Geometry & Layout Rules

1. **Slide Dimensions are Fixed 1:1 to PPTX Master**:
   - Slide size: $960\text{ pt} \times 540\text{ pt}$ ($16:9$ widescreen standard).
   - Spread size: $1920\text{ px} \times 540\text{ px}$ (two facing pages side-by-side).
   - **Do NOT** change the 2-page spread architecture or the auto-scaler in `app.js`.
2. **Spread Facing Rhythm (16 Pages / 9 Spreads)**:
   - `Spread 0 (Page 00)`: Cover (Single centered slide).
   - `Spread 1 (Pages 01–02)`: Inside Front Cover (Intentionally blank) + Macro Market Thesis.
   - `Spreads 2–6 (Pages 03–12)`: Product Spreads.
     - **Odd Pages (Left)**: SKU Narrative, active ingredients, transdermal flux mechanism, and regulatory badge.
     - **Even Pages (Right)**: Physical Sample Mount Zone with precise millimeter die-cut guidelines, alignment brackets, glue targets, and statutory footer.
   - `Spread 7 (Pages 13–14)`: Investment Thesis ("Roorkee to Roorkee" connection) + The Ask.
   - `Spread 8 (Page 15)`: Back Cover (Single centered slide).

---

## 3. Brand Design System Tokens (Version 2.0)

All visual elements must adhere strictly to `BRAND_STYLE_GUIDE.md`:

### Approved Color Tokens
| Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Cool Blue | `#0054A6` | Cover & Back Cover solid background, primary buttons, headers |
| **Accent / Dermal** | Dermal Yellow | `#FDCD8B` | Logo "VIO" wordmark, transdermal skin layer callouts |
| **Herbal Active** | Herbal Green | `#379131` | Natural herbal formulation tags, AYUSH badges, success checks |
| **Thermal Action** | Thermal Orange | `#F26B43` | Capsaicin & heat therapy callouts |
| **Menthol Action** | Menthol Frost | `#0284C7` | Cooling relief tags, hydrogel layer indicators |
| **Clinical Neutral** | Clinical Slate | `#475569` | Secondary text, borders, die-line markers, grid lines |
| **Statutory Neutral** | Statutory Charcoal| `#2A2A28` | Primary body text, fine print, clinical disclaimers |
| **Surface Neutral** | Hospital Grey | `#F2F2F7` | Slide background cards, sample mount inner surface |

### Strict Design Prohibitions
- **ZERO Gradients**: The cover, back cover, and corporate slides must use solid `#0054A6`. Never use radial or linear gradients on brand slides.
- **ZERO Target / Radar Icons**: Never re-introduce bullseye or concentric circular radar watermarks.
- **Retired Colors**: Never use `#123160`, `#F8FAFC`, `#3044A6`, `#0153A7`, or `#2962FF`.
- **Wordmark Aspect Ratio**: The `VIOPATCH®` logo maintains a strict 3.7:1 aspect ratio.

---

## 4. How to Update Slides: `generate_deck.py` vs `index.html`

- `index.html` is the static production file rendered by GitHub Pages.
- `scripts/generate_deck.py` is the Python source generator that compiles `index.html`.
- **Rule**: If making batch, multi-slide, or structural updates, edit `scripts/generate_deck.py` and run `python scripts/generate_deck.py` from the repo root to re-compile `index.html`. If making a minor typo fix directly in `index.html`, keep `scripts/generate_deck.py` in sync.

---

## 5. 🚩 Significant Change Protocol

> [!IMPORTANT]
> The following actions are classified as **Significant Changes**:
> 1. Modifying physical sample die-line dimensions or glue targets.
> 2. Altering transdermal drug release claims, dosages, or clinical trial numbers.
> 3. Modifying commercial terms, investment ask figures, or manufacturing partnership terms.
> 4. Changing color palette tokens or logo aspect ratios.
> 5. Adding, removing, or re-ordering spreads.
>
> **Agent Requirement:** You must **STOP and summarize the proposed changes to the user**, explaining the rationale and implications, and obtain explicit user confirmation before committing to `main`.

---

## 6. Pre-Commit Checklist

Before pushing any commit:
- [ ] Verify `index.html` renders cleanly in a desktop browser at 100% zoom.
- [ ] Confirm no JavaScript console errors in `app.js`.
- [ ] Confirm both `.gitignore` and `FILE_INDEX.md` remain accurate.
- [ ] Check Git author email: must be configured to GitHub noreply address to satisfy GH007 email privacy rules:
  ```bash
  git config user.email "240866961+TheKanishkaMohan@users.noreply.github.com"
  ```

# Viopatch Brand Book & Review Monograph — Contributor & Agent Guide

> **Live Monograph:** [https://thekanishkamohan.github.io/viopatch-brand-book/](https://thekanishkamohan.github.io/viopatch-brand-book/)  
> **Repository:** [TheKanishkaMohan/viopatch-brand-book](https://github.com/TheKanishkaMohan/viopatch-brand-book)  
> **Repository Maintainer:** [@TheKanishkaMohan](https://github.com/TheKanishkaMohan)  
> **Authoritative Brand Guide:** `BRAND_STYLE_GUIDE.md` (Version 2.0)

This repository contains the print-ready, interactive **Viopatch Brand Book** monograph prepared for **Arti Gill · Giga Capital**.

This document serves as the operational guide for **human reviewers** wishing to iterate on their own copy, and for **AI coding agents** (Antigravity, Claude Code, Cursor, Copilot) making edits to this codebase.

---

## 1. How Reviewers Can Make Changes to Their Own Copy

### Option A: Reviewing & Annotating in the Browser (No Code Setup Required)
1. Open the live site: **[https://thekanishkamohan.github.io/viopatch-brand-book/](https://thekanishkamohan.github.io/viopatch-brand-book/)**.
2. Click **Comments** in the top navigation bar &rarr; click **Drop Pin**.
3. Tap or click anywhere on a slide to place a numbered review pin, select a feedback category, and submit your note.
4. Click **Copy for Agent / Chat (Markdown)** in the review drawer to instantly copy your feedback formatted as GitHub Markdown.
5. Click **Export JSON** to download a local backup file of your review comments.

---

### Option B: Editing the Codebase on Your Own Copy
If you want to edit copy, layouts, or data directly:

1. **Set Up a GitHub Account**:
   - If you do not have an account, create one at [github.com/signup](https://github.com/signup).
2. **Fork the Repository**:
   - Visit [github.com/TheKanishkaMohan/viopatch-brand-book](https://github.com/TheKanishkaMohan/viopatch-brand-book).
   - Click the **Fork** button (top-right) to create an independent copy under your personal account.
3. **Clone Your Fork Locally**:
   ```bash
   git clone https://github.com/<YOUR-GITHUB-USERNAME>/viopatch-brand-book.git
   cd viopatch-brand-book
   ```
4. **Preview & Test Locally**:
   - The monograph is pure static web technology (HTML, CSS, JavaScript) with zero build tools or package managers required.
   - Simply open `index.html` directly in any modern desktop browser (Chrome, Edge, Safari, Firefox), or run a local lightweight server:
     ```bash
     python -m http.server 8000
     ```
     and navigate to `http://localhost:8000`.

---

## 2. How to Get Edit Access to the Repository

To push changes directly to the project repository:

1. **Request Direct Write Access**:
   - Send your GitHub username to **Kanishka Mohan** (`@TheKanishkaMohan`).
   - You will receive an invitation to join the repository as an authorized collaborator with write permissions.
2. **Submit a Pull Request (Recommended Workflow)**:
   - In your local clone, create a new branch:
     ```bash
     git checkout -b review/my-proposed-changes
     ```
   - Commit your changes and push the branch to your fork:
     ```bash
     git push origin review/my-proposed-changes
     ```
   - On GitHub, navigate to the original repository and click **Contribute** &rarr; **Open Pull Request**.
   - Describe your revisions and tag `@TheKanishkaMohan` for review.

---

## 3. What Care to Take Before Merging into `main`

> [!WARNING]
> The `main` branch is configured with automated continuous deployment to **GitHub Pages**. Any commit merged into `main` is published **live within 60 seconds** and is immediately visible to Giga Capital stakeholders.

Before merging any changes into `main`, complete the following verification steps:

### Pre-Merge Verification Checklist
- [ ] **Slide Generator Sync**:
  - `generate_deck.py` is the programmatic compiler for `index.html`.
  - If you modify slide copy, structure, or components, make the changes in `generate_deck.py` and run:
    ```bash
    python generate_deck.py
    ```
  - Ensure `index.html` is regenerated and committed together with `generate_deck.py`.
- [ ] **100% Desktop Viewport Auto-Scaling**:
  - Open `index.html` in your browser at 100% zoom.
  - Verify that both facing pages of each spread fit cleanly side-by-side without vertical or horizontal viewport clipping.
- [ ] **Brand Style Guide Compliance (v2.0)**:
  - Verify that Cover and Back Cover use solid Viopatch Cool Blue (`#0054A6`).
  - Strictly zero gradients on corporate slides.
  - Zero decorative radar/target watermarks.
  - Body text is statutory charcoal (`#2A2A28`), borders are clinical slate (`#475569`), and wordmarks adhere to the 3.7:1 aspect ratio.
- [ ] **Facing Spread Structure (16 Pages / 9 Spreads)**:
  - Page 0: Cover (Single slide).
  - Page 1: Blank Inside Front Cover.
  - Page 2: Macro Market Thesis & Competitive Landscape.
  - Pages 3–12 (Spreads 2–6): Strict rhythm of **Odd Page = SKU Story**, **Even Page = Physical Sample Mount Zone**.
  - Pages 13–14: Investment Thesis ("Roorkee to Roorkee") & The Ask.
  - Page 15: Back Cover (Single slide).
- [ ] **GitHub CLI Email Privacy (GH007)**:
  - If you have "Block command line pushes that expose my email" enabled in GitHub account settings, verify that your local git email is configured to your GitHub no-reply address:
    ```bash
    git config user.email "<id>+<username>@users.noreply.github.com"
    ```
- [ ] **Review Comments System Integrity**:
  - Verify that pin placement, comment drawer opening, comment deletion, and Markdown copying remain fully functional.

---

## 4. Instructions for AI Coding Agents (Antigravity, Claude, Cursor, Copilot)

AI agents modifying this repository must follow these rules without exception:

1. **Slide Master Geometry is Fixed**:
   - The dimensions are locked 1:1 to `VIOPATCH-PRESENTATION-TEMPLATE.potx` ($960\text{ pt} \times 540\text{ pt}$ / $1920\text{ px} \times 540\text{ px}$ spread, 16:9 widescreen standard).
   - Do NOT revert to 3D flipbook canvas engines, do NOT alter the 2-page CSS spread structure, and do NOT alter the viewport auto-scaler script in `app.js`.
2. **Single Source of Truth**:
   - Always edit slide markup in `generate_deck.py` and compile into `index.html` by running `python generate_deck.py`.
   - Never produce divergent markup between `generate_deck.py` and `index.html`.
3. **Style Guide Authority**:
   - The authoritative design system is `BRAND_STYLE_GUIDE.md` (Version 2.0).
   - Never introduce retired colors (`#123160`, `#F8FAFC`, `#3044A6`, `#0153A7`, `#2962FF`).
   - Use only the 8 approved palette tokens: Cool Blue (`#0054A6`), Dermal Yellow (`#FDCD8B`), Herbal Green (`#379131`), Thermal Orange (`#F26B43`), Menthol Frost (`#0284C7`), Clinical Slate (`#475569`), Statutory Charcoal (`#2A2A28`), and Hospital Grey (`#F2F2F7`).
4. **Comments Engine Maintenance**:
   - Maintain centralized DOM event delegation on `#comments-list` (`data-action="delete"`, `data-action="jump"`).
   - Always perform type-safe comment comparisons (`String(c.id) !== String(id)`).
   - Do NOT introduce blocking browser modals (`confirm()`, `prompt()`) that fail on modern mobile or embedded browsers.

---

## 5. 🚩 Flagging "Significant Changes"

> [!IMPORTANT]
> Any change affecting physical production, medical/regulatory claims, commercial deal structure, or master brand geometry is classified as a **Significant Change**.

### What Constitutes a "Significant Change":
1. **Physical Sample Specifications**: Modifying sachet die-line dimensions (e.g. Knee Patch $120 \times 120\text{ mm}$, Back XL $140 \times 100\text{ mm}$, Period Pain $100 \times 100\text{ mm}$), glue dot targets, or paper substrate caliper.
2. **Clinical & Regulatory Claims**: Modifying transdermal release curves, active ingredient ratios, clinical study references, or DCGI / CE / CDSCO statutory disclaimers.
3. **Commercial & Transaction Architecture**: Changes to the Giga Capital incubation thesis, acquisition valuation triggers, royalty structures, or CDMO production scale commitments.
4. **Design System & Palette**: Modifying the primary `#0054A6` color, altering the dual-color `VIO` / `PATCH` wordmark geometry, or introducing new typography.
5. **Spread Pagination & Layout**: Adding, removing, or re-ordering pages, or altering the Left-Right facing rhythm.

### Protocol for Handling Significant Changes:
- **For Human Reviewers**:
  - Tag the Pull Request with the label or title prefix `[SIGNIFICANT CHANGE]`.
  - Summarize the business rationale and request explicit sign-off from `@TheKanishkaMohan` prior to merging into `main`.
- **For AI Agents**:
  - **STOP & FLAG**: When asked to make any change matching the criteria above, the agent must explicitly summarize the proposed change, explain the implications, and wait for the user's explicit confirmation before committing to `main`.
  - Update `outline-refined.md` and `walkthrough.md` whenever an approved significant change is made.

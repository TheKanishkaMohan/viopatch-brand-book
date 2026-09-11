# Viopatch Brand Book — Reviewer & Contributor Guide

> **Live Website:** [https://thekanishkamohan.github.io/viopatch-brand-book/](https://thekanishkamohan.github.io/viopatch-brand-book/)  
> **Repository:** [TheKanishkaMohan/viopatch-brand-book](https://github.com/TheKanishkaMohan/viopatch-brand-book)  
> **Maintainer:** [@TheKanishkaMohan](https://github.com/TheKanishkaMohan)

Welcome to the Viopatch Brand Book repository. Whether you want to leave quick review comments or edit the monograph directly, follow the steps below.

---

## 🚀 How to Review & Make Changes

### Step 1: Review & Drop Comments on the Live Site (Easiest)

1. Open the live site: **[https://thekanishkamohan.github.io/viopatch-brand-book/](https://thekanishkamohan.github.io/viopatch-brand-book/)**.
2. Click **Comments** in the top navigation bar, then click **Drop Pin**.
3. Click anywhere on any slide to pin your comment, choose a category (Copy, Design, Layout, Strategy), and save.
4. When finished, open the comments drawer and click **Copy for Agent / Chat (Markdown)**.
5. Send the copied text to Kanishka (`@TheKanishkaMohan`), and the changes will be implemented directly on the live version.

---

### Step 2: Make the Changes Yourself (Using an AI Agent)

If you prefer to make direct changes using an AI assistant (such as Antigravity, Cursor, Claude Code, Copilot, or ChatGPT):

1. **Get the Code**:
   - Download this repository as a ZIP using the green **Code** button on GitHub, or clone it:
     ```bash
     git clone https://github.com/TheKanishkaMohan/viopatch-brand-book.git
     cd viopatch-brand-book
     ```
2. **Point Your AI Agent to the Folder**:
   - Open the folder in your editor or AI coding tool.
   - Point your agent to [`AGENTS.md`](./AGENTS.md) for strict design system tokens, color palettes, and slide geometry rules.
   - Feed your copied review comments or prompts directly to the agent.
3. **Preview Instantly in Your Browser**:
   - The brand book is pure HTML, CSS, and JavaScript. Simply double-click `index.html` to preview your changes immediately in any browser—no build tools, Node.js, or local servers required.

---

### Step 3: Merge Your Changes into the Live Version

To merge your updates into the official live site:

1. **Request Write Access**:
   - Reach out to Kanishka (`@TheKanishkaMohan`) with your GitHub username to receive direct write collaborator permissions on the repository.
2. **Or Submit a Pull Request**:
   - Push your branch or fork, open a Pull Request against `main`, and tag `@TheKanishkaMohan` for review. Once merged, GitHub Pages deploys the update automatically within 60 seconds.

---

## 📁 Repository Contents

| Directory / File | Description |
| :--- | :--- |
| [`index.html`](./index.html) | Live interactive 16-page brand book web application |
| [`style.css`](./style.css) | Presentation slide styling, bleed guidelines, and print die-cuts |
| [`app.js`](./app.js) | Viewport auto-scaler, scroll navigation, and comment pin engine |
| [`assets/`](./assets/) | Product photography, market landscape charts, and brand logos |
| [`BRAND_STYLE_GUIDE.md`](./BRAND_STYLE_GUIDE.md) | Official 2026 Brand Design System specification (v2.0) |
| [`templates/`](./templates/) | Master PowerPoint Slide Master (`.potx`) and Word Document (`.dotx`) templates |
| [`docs/`](./docs/) | Compiled brand guide PDF/PPTX presentations and brand audit reports |
| [`scripts/`](./scripts/) | Python helper scripts (`generate_deck.py`) to programmatically compile slides |
| [`AGENTS.md`](./AGENTS.md) | Technical instructions, color codes, and design rules for AI agents |

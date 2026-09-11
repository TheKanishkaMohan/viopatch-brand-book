# Viopatch Project File & Content Index

> **Directory Root**: `C:\etc\viopatch`  
> **Last Refreshed**: September 11, 2026 (23:51 IST)  
> **Total Tracked Files**: 946 files across 5 primary directories  
> **Total Directory Size**: 1934.41 MB (1.89 GB)  

---

## Table of Contents
1. [Executive Summary & Directory Architecture](#1-executive-summary--directory-architecture)
2. [Deliverables & Production Repository (`deliverables/brand-book/`)](#2-deliverables--production-repository-deliverablesbrand-book)
3. [Enterprise Asset Library (`brand-assets/`)](#3-enterprise-asset-library-brand-assets)
4. [Archived Artifacts & Backups (`archive/`)](#4-archived-artifacts--backups-archive)
5. [Scratch Workspace Analysis (`scratch/`)](#5-scratch-workspace-analysis-scratch)
6. [File Type & Storage Distribution](#6-file-type--storage-distribution)

---

## 1. Executive Summary & Directory Architecture

The `C:\etc\viopatch` directory is the master workspace for **Viopatch** (manufactured by **Unexo Life Sciences Private Limited**). It organizes production deliverables, brand design specifications, raw media shoots, and the print-ready monograph web app.

| Directory / Location | Subdirectories | Total Files | Size (MB) | Role & Description |
| :--- | :--- | :--- | :--- | :--- |
| **`(Root Directory)`** | 0 | 2 | 0.01 MB | Root metadata: `.gitignore` and master `FILE_INDEX.md` |
| **`deliverables/`** | — | 25 | 9.46 MB | Version-controlled Git repository (brand-book): web app, Slide Master templates, docs, and single canonical Brand Style Guide |
| **`brand-assets/`** | — | 423 | 1892.24 MB | High-resolution packaging photography, AI anatomy concepts, listing graphics, model shoots, videos (1.89 GB) |
| **`archive/`** | — | 17 | 23.59 MB | Historical PowerPoint backups, retired pitch decks (July 2026), and superseded concept prototypes |
| **`scratch/`** | — | 478 | 9.10 MB | Temporary unpacked XML fragments and build intermediates from python-docx/pptx (safe to delete) |
| **`.agents/`** | — | 1 | 0.01 MB | Antigravity custom skill definitions (`print-ready-book`) |
| **TOTAL** | **—** | **946** | **1934.41 MB** | Full project footprint |

---

## 2. Deliverables & Production Repository (`deliverables/brand-book/`)

The `deliverables/brand-book/` folder is the official Git repository published live to **GitHub Pages** ([`TheKanishkaMohan/viopatch-brand-book`](https://github.com/TheKanishkaMohan/viopatch-brand-book)):

- **Live URL**: [https://thekanishkamohan.github.io/viopatch-brand-book/](https://thekanishkamohan.github.io/viopatch-brand-book/)
- **Single Source of Truth**: Houses the ONE authoritative `BRAND_STYLE_GUIDE.md` (no duplicates).
- **Version Control for Office Templates**: Master PPTX Slide Master and DOTX corporate templates are checked into `templates/`.
- **Compiled Collateral**: Master PDFs and Audit Reports are organized in `docs/`.
- **Developer Compiler**: `scripts/generate_deck.py` is checked in for programmatic slide builds.
- **Contributor Guides**: Simple human 3-step walkthrough in `README.md`, strict AI rules in `AGENTS.md`.

| Category / Subfolder | Relative Path | Size | Description |
| :--- | :--- | :--- | :--- |
| Configuration | `deliverables\brand-book\.gitignore` | 0.2 KB | Deliverable component |
| Documentation | `deliverables\brand-book\AGENTS.md` | 6.0 KB | Deliverable component |
| Design System Authority | `deliverables\brand-book\BRAND_STYLE_GUIDE.md` | 33.5 KB | Deliverable component |
| Documentation | `deliverables\brand-book\FILE_INDEX.md` | 9.3 KB | Deliverable component |
| Documentation | `deliverables\brand-book\README.md` | 3.5 KB | Deliverable component |
| Web Application | `deliverables\brand-book\app.js` | 19.1 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\brand-logo.png` | 454.3 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\icon-master.png` | 117.9 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\market_channel_breakdown.png` | 112.4 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\market_landscape.png` | 375.1 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\product-back-xl.jpg` | 342.6 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\product-knee-alt.jpg` | 430.1 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\product-knee.jpg` | 232.2 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\product-large.jpg` | 242.8 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\product-period.jpg` | 231.5 KB | Deliverable component |
| Web Asset | `deliverables\brand-book\assets\product-regular.jpg` | 320.0 KB | Deliverable component |
| Compiled Collateral | `deliverables\brand-book\docs\VIOPATCH_BRAND_AUDIT_REPORT.docx` | 301.9 KB | Deliverable component |
| Compiled Collateral | `deliverables\brand-book\docs\VIOPATCH_BRAND_AUDIT_REPORT.pdf` | 4209.9 KB | Deliverable component |
| Compiled Collateral | `deliverables\brand-book\docs\VIOPATCH_BRAND_STYLE_GUIDE.pdf` | 692.1 KB | Deliverable component |
| Compiled Collateral | `deliverables\brand-book\docs\VIOPATCH_BRAND_STYLE_GUIDE.pptx` | 1321.3 KB | Deliverable component |
| Web Application | `deliverables\brand-book\index.html` | 58.7 KB | Deliverable component |
| Build Script | `deliverables\brand-book\scripts\generate_deck.py` | 34.6 KB | Deliverable component |
| Web Application | `deliverables\brand-book\style.css` | 28.7 KB | Deliverable component |
| Office Template | `deliverables\brand-book\templates\VIOPATCH-DOCUMENT-TEMPLATE.dotx` | 34.8 KB | Deliverable component |
| Office Template | `deliverables\brand-book\templates\VIOPATCH-PRESENTATION-TEMPLATE.potx` | 74.5 KB | Deliverable component |

---

## 3. Enterprise Asset Library (`brand-assets/`)

The `brand-assets/` directory houses 423 media assets (~1.89 GB):

1. **`Logos and Icons/`**: High-resolution vector logos and benefit emblems (AYUSH, Waterproof, Transdermal matrix).
2. **`confirm-assets/`**: 4 packaging verification mockup images received via WhatsApp on Sept 8, 2026.
3. **`New Creatives/AI Images/`**: 271 AI-generated lifestyle, joint anatomy, transdermal flux, and packaging concepts.
4. **`Old Creatives/`**: 143 heritage assets including studio human shoots (Back XL, Knee, Regular) and video campaigns.

---

## 4. Archived Artifacts & Backups (`archive/`)

Historical and superseding documents protected strictly by `.gitignore`:

- `archive\VIOPATCH_BRAND_STYLE_GUIDE.backup_before_slide2.pptx` (968.8 KB)
- `archive\VIOPATCH_BRAND_STYLE_GUIDE.backup_task1.pptx` (968.1 KB)
- `archive\VIOPATCH_BRAND_STYLE_GUIDE_backup_20260911_1557.pptx` (978.5 KB)
- `archive\VIOPATCH_BRAND_STYLE_GUIDE_backup_before_step1.pptx` (977.1 KB)
- `archive\brand-book-retired\VIOPATCH-BRAND-BOOK-TEMPLATE.potx` (1322.3 KB)
- `archive\brand-book-retired\claude-concept-mid.html` (82.1 KB)
- `archive\brand-book-retired\convert_potx.py` (1.2 KB)
- `archive\brand-book-retired\generate_html.py` (73.5 KB)
- `archive\brand-book-retired\outline-refined.md` (4.8 KB)
- `archive\brand-book-retired\outline.md` (3.3 KB)
- `archive\brand-book-retired\st-page-flip.min.js` (43.0 KB)
- `archive\claude_output\Unexo Life Sciences  Template.potx` (361.4 KB)
- `archive\claude_output\Unexo Template - Layout Preview.png` (277.8 KB)
- `archive\claude_output\viopatch-knee-spread-palette-a.html` (82.1 KB)
- `archive\claude_output\viopatch-knee-spread.html` (82.1 KB)
- `archive\pitch-deck-dated\2026-07-26 - Deck - Unexo Life Sciences (1).pptx` (17826.2 KB)
- `archive\style-templates.zip` (105.0 KB)

---

## 5. Scratch Workspace Analysis (`scratch/`)

> [!NOTE]
> **Status & Recommendation**: The `scratch/` directory contains **476 temporary files (~8.95 MB)** generated during earlier XML-level docx/pptx assembly scripts (`dotx_theme1.xml`, `pptx_extracted/`, `potx_slideMaster1.xml`, etc.). All master templates, compiled PPTX/PDF deliverables, and web apps are self-contained in `deliverables/brand-book/`. **This folder is completely safe to delete.**

---

## 6. File Type & Storage Distribution

| File Extension | File Count | Total Size (MB) | Category |
| :--- | :--- | :--- | :--- |
| `.mp4` | 56 | 810.36 MB | Media |
| `.png` | 249 | 483.18 MB | Media |
| `.jpg` | 171 | 400.71 MB | Media |
| `.mov` | 4 | 118.97 MB | Media |
| `.psd` | 1 | 45.58 MB | Code / Data |
| `.pdf` | 14 | 30.85 MB | Document / Template |
| `.pptx` | 7 | 23.42 MB | Document / Template |
| `.tif` | 1 | 13.35 MB | Code / Data |
| `.potx` | 5 | 1.86 MB | Document / Template |
| `.xml` | 231 | 1.84 MB | Code / Data |
| `.jpeg` | 5 | 1.43 MB | Media |
| `.ttf` | 5 | 0.73 MB | Code / Data |
| `.docx` | 2 | 0.59 MB | Document / Template |
| `.dotx` | 2 | 0.44 MB | Document / Template |
| `.bak` | 2 | 0.33 MB | Code / Data |

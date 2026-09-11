# Viopatch Project File & Content Index

> **Directory Root**: `C:\etc\viopatch`  
> **Last Refreshed**: September 11, 2026 (23:26 IST)  
> **Total Tracked Files**: 941 files across 5 primary directories  
> **Total Directory Size**: 1931.73 MB (1.89 GB)  

---

## Table of Contents
1. [Executive Summary & Directory Architecture](#1-executive-summary--directory-architecture)
2. [Root Master Files & Design System Assets](#2-root-master-files--design-system-assets)
3. [Brand Book Production App (`brand-book/`)](#3-brand-book-production-app-brand-book)
4. [Enterprise Asset Library (`brand-assets/`)](#4-enterprise-asset-library-brand-assets)
5. [Archived Artifacts & Backups (`archive/`)](#5-archived-artifacts--backups-archive)
6. [Scratch Workspace Analysis (`scratch/`)](#6-scratch-workspace-analysis-scratch)
7. [File Type & Storage Distribution](#7-file-type--storage-distribution)

---

## 1. Executive Summary & Directory Architecture

The `C:\etc\viopatch` directory is the central asset repository for **Viopatch** (manufactured by **Unexo Life Sciences Private Limited**), housing brand guidelines, commercial templates, raw media assets, and the print-ready monograph web application.

| Directory / Location | Subdirectories | Total Files | Size (MB) | Role & Description |
| :--- | :--- | :--- | :--- | :--- |
| **`(Root Directory)`** | 0 | 8 | 4.07 MB | Canonical master documents: PPTX/DOTX templates, PDF/MD brand style guides, audit report |
| **`brand-book/`** | — | 24 | 4.47 MB | Interactive 2-page spread web application, print monograph generator, GitHub Pages repo |
| **`brand-assets/`** | — | 423 | 1892.24 MB | High-resolution packaging photography, AI anatomy concepts, listing graphics, model shoots, videos |
| **`archive/`** | — | 9 | 21.99 MB | Retired PowerPoint backups, previous pitch deck (July 2026), and early concept prototypes |
| **`scratch/`** | — | 476 | 8.95 MB | Temporary unpacked XML fragments and build intermediates from python-docx/pptx (safe to delete) |
| **`.agents/`** | — | 1 | 0.01 MB | Antigravity custom skill definitions (`print-ready-book`) |
| **TOTAL** | **—** | **941** | **1931.73 MB** | Full project footprint |

---

## 2. Root Master Files & Design System Assets

These are the authoritative production deliverables for corporate identity and presentations:

| Filename | Size | Format / Version | Purpose |
| :--- | :--- | :--- | :--- |
| [`.gitignore`](file:///C:/etc/viopatch/.gitignore) | 0.2 KB | GITIGNORE | Root Git ignore rules protecting archive, scratch, and large raw video media |
| [`BRAND_STYLE_GUIDE.md`](file:///C:/etc/viopatch/BRAND_STYLE_GUIDE.md) | 33.5 KB | MD | Authoritative 2026 Brand Design System specification (Version 2.0, 8 approved colors, strict solid #0054A6) |
| [`FILE_INDEX.md`](file:///C:/etc/viopatch/FILE_INDEX.md) | 77.6 KB | MD | This master project index documenting all assets and directory architecture |
| [`VIOPATCH-DOCUMENT-TEMPLATE.dotx`](file:///C:/etc/viopatch/VIOPATCH-DOCUMENT-TEMPLATE.dotx) | 414.8 KB | DOTX | Official corporate Word template with custom headers, typography hierarchy, and branded callouts |
| [`VIOPATCH-PRESENTATION-TEMPLATE.potx`](file:///C:/etc/viopatch/VIOPATCH-PRESENTATION-TEMPLATE.potx) | 1322.3 KB | POTX | Official 16:9 widescreen Slide Master presentation template (960pt x 540pt) |
| [`VIOPATCH_BRAND_AUDIT_REPORT.docx`](file:///C:/etc/viopatch/VIOPATCH_BRAND_AUDIT_REPORT.docx) | 302.2 KB | DOCX | Comprehensive Brand Audit & Migration Report detailing pre/post design compliance across all collateral |
| [`VIOPATCH_BRAND_STYLE_GUIDE.pdf`](file:///C:/etc/viopatch/VIOPATCH_BRAND_STYLE_GUIDE.pdf) | 692.1 KB | PDF | High-resolution compiled PDF export of the Brand Style Guide |
| [`VIOPATCH_BRAND_STYLE_GUIDE.pptx`](file:///C:/etc/viopatch/VIOPATCH_BRAND_STYLE_GUIDE.pptx) | 1321.3 KB | PPTX | Master 16:9 Widescreen PowerPoint Brand Style Guide presentation with validated color tokens |

---

## 3. Brand Book Production App (`brand-book/`)

The `brand-book/` folder is a standalone, self-contained Git repository published live to **GitHub Pages** ([`TheKanishkaMohan/viopatch-brand-book`](https://github.com/TheKanishkaMohan/viopatch-brand-book)):

- **Live URL**: [https://thekanishkamohan.github.io/viopatch-brand-book/](https://thekanishkamohan.github.io/viopatch-brand-book/)
- **Slide Master Dimensions**: 16:9 Widescreen standard ($960\text{ pt} \times 540\text{ pt}$ / $1920 \times 540\text{ px}$ spread)
- **Architecture**: 16 Pages / 9 Spreads with Page 1 blank inside cover, Left = SKU Story, Right = Physical Sample Mount
- **Features**: Viewport auto-scaler, mouse wheel scroll navigation, working 3mm Bleed Guides overlay, Markdown comment exporter

| File | Size | Role |
| :--- | :--- | :--- |
| `brand-book\.gitignore` | 0.2 KB | Production web/print deliverable |
| `brand-book\BRAND_STYLE_GUIDE.md` | 33.5 KB | Production web/print deliverable |
| `brand-book\README.md` | 8.8 KB | Production web/print deliverable |
| `brand-book\VIOPATCH-BRAND-BOOK-TEMPLATE.potx` | 1322.3 KB | Production web/print deliverable |
| `brand-book\app.js` | 19.1 KB | Production web/print deliverable |
| `brand-book\assets\brand-logo.png` | 454.3 KB | Production web/print deliverable |
| `brand-book\assets\icon-master.png` | 117.9 KB | Production web/print deliverable |
| `brand-book\assets\market_channel_breakdown.png` | 112.4 KB | Production web/print deliverable |
| `brand-book\assets\market_landscape.png` | 375.1 KB | Production web/print deliverable |
| `brand-book\assets\product-back-xl.jpg` | 342.6 KB | Production web/print deliverable |
| `brand-book\assets\product-knee-alt.jpg` | 430.1 KB | Production web/print deliverable |
| `brand-book\assets\product-knee.jpg` | 232.2 KB | Production web/print deliverable |
| `brand-book\assets\product-large.jpg` | 242.8 KB | Production web/print deliverable |
| `brand-book\assets\product-period.jpg` | 231.5 KB | Production web/print deliverable |
| `brand-book\assets\product-regular.jpg` | 320.0 KB | Production web/print deliverable |
| `brand-book\claude-concept-mid.html` | 82.1 KB | Production web/print deliverable |
| `brand-book\convert_potx.py` | 1.2 KB | Production web/print deliverable |
| `brand-book\generate_deck.py` | 34.6 KB | Production web/print deliverable |
| `brand-book\generate_html.py` | 73.5 KB | Production web/print deliverable |
| `brand-book\index.html` | 58.7 KB | Production web/print deliverable |
| `brand-book\outline-refined.md` | 4.8 KB | Production web/print deliverable |
| `brand-book\outline.md` | 3.3 KB | Production web/print deliverable |
| `brand-book\st-page-flip.min.js` | 43.0 KB | Production web/print deliverable |
| `brand-book\style.css` | 28.7 KB | Production web/print deliverable |

---

## 4. Enterprise Asset Library (`brand-assets/`)

The `brand-assets/` directory houses 423 media assets (~1.89 GB):

1. **`Logos and Icons/`**: High-resolution vector logos and benefit emblems (AYUSH, Waterproof, Transdermal matrix).
2. **`confirm-assets/`**: 4 packaging verification mockup images received via WhatsApp on Sept 8, 2026 (moved into `brand-assets/` during reorganization).
3. **`New Creatives/AI Images/`**: 271 AI-generated lifestyle, joint anatomy, transdermal flux, and packaging concepts.
4. **`Old Creatives/`**: 143 heritage assets including studio human shoots (Back XL, Knee, Regular) and video review campaigns.

---

## 5. Archived Artifacts & Backups (`archive/`)

Created during folder reorganization to isolate historical and superseding documents from the active root:

- `archive\VIOPATCH_BRAND_STYLE_GUIDE.backup_before_slide2.pptx` (968.8 KB)
- `archive\VIOPATCH_BRAND_STYLE_GUIDE.backup_task1.pptx` (968.1 KB)
- `archive\VIOPATCH_BRAND_STYLE_GUIDE_backup_20260911_1557.pptx` (978.5 KB)
- `archive\VIOPATCH_BRAND_STYLE_GUIDE_backup_before_step1.pptx` (977.1 KB)
- `archive\claude_output\Unexo Life Sciences  Template.potx` (361.4 KB)
- `archive\claude_output\Unexo Template - Layout Preview.png` (277.8 KB)
- `archive\claude_output\viopatch-knee-spread-palette-a.html` (82.1 KB)
- `archive\claude_output\viopatch-knee-spread.html` (82.1 KB)
- `archive\pitch-deck-dated\2026-07-26 - Deck - Unexo Life Sciences (1).pptx` (17826.2 KB)

---

## 6. Scratch Workspace Analysis (`scratch/`)

> [!NOTE]
> **Status & Recommendation**: The `scratch/` directory contains **476 temporary files (~8.95 MB)** generated during earlier XML-level docx/pptx assembly scripts (`dotx_theme1.xml`, `pptx_extracted/`, `potx_slideMaster1.xml`, etc.). All master templates and compiled PPTX/PDF deliverables have already been finalized in the root directory. **This folder is completely safe to delete.**

---

## 7. File Type & Storage Distribution

| File Extension | File Count | Total Size (MB) | Category |
| :--- | :--- | :--- | :--- |
| `.mp4` | 56 | 810.36 MB | Media |
| `.png` | 249 | 483.18 MB | Media |
| `.jpg` | 171 | 400.71 MB | Media |
| `.mov` | 4 | 118.97 MB | Media |
| `.psd` | 1 | 45.58 MB | Code / Data |
| `.pdf` | 13 | 26.74 MB | Document / Template |
| `.pptx` | 7 | 23.42 MB | Document / Template |
| `.tif` | 1 | 13.35 MB | Code / Data |
| `.potx` | 3 | 2.94 MB | Document / Template |
| `.xml` | 231 | 1.84 MB | Code / Data |
| `.jpeg` | 5 | 1.43 MB | Media |
| `.dotx` | 2 | 0.81 MB | Document / Template |
| `.ttf` | 5 | 0.73 MB | Code / Data |
| `.docx` | 2 | 0.59 MB | Document / Template |
| `.bak` | 2 | 0.33 MB | Code / Data |

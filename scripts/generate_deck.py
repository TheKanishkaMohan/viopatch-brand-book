import os

output_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "index.html"))

# Common SVGs
svg_clock = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>'
svg_leaf = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 9.5 15 13c-1.5 2.5-3.5 3.5-4 7Z"/><path d="M9.8 6.1C10.5 3.5 12.5 2 15.5 2c-1 3-1 5.5 0 8"/></svg>'
svg_check = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#379131" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
svg_pin = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>'
svg_doc = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>'
svg_external = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.6;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'

# Bleed and safety overlays helper
bleed_overlays = """
  <div class="bleed-overlay"></div>
  <div class="safe-margin-overlay"></div>
"""

# Header Logo Markup
def logo_markup(is_dark=False):
    bg_class = "dark-bg" if is_dark else "light-bg"
    return f"""<div class="slide-master-logo {bg_class}">VIO<span>PATCH</span><sup>&reg;</sup></div>"""

# Footer Markup (Consistent (c) Unexo across brand book)
def footer_markup(page_num, is_dark=False):
    footer_text = "&copy; Unexo Life Sciences Private Limited"
    return f"""
      <div class="slide-footer">
        <span class="footer-text">{footer_text}</span>
        <span class="slide-number">{page_num:02d}</span>
      </div>
    """

# ==============================================================================
# SPREAD BUILDERS (16 Pages / 9 Spreads: Pages 0 to 15)
# ==============================================================================

# SPREAD 0: COVER (Page 0) - Single Slide Centered
spread_0 = f"""
  <div class="spread-pair single-cover active" data-spread-index="0" data-spread-name="Cover" data-right-page="0">
    <div class="slide-page theme-dark" data-page-number="0">
      {bleed_overlays}
      <div class="slide-header" style="position:absolute; top:28px; right:32px; justify-content:flex-end;">
        {logo_markup(True)}
      </div>
      <div class="cover-layout">
        <div>
          <div class="cover-eyebrow">BRAND BOOK</div>
          <div class="cover-title-group">
            <div class="cover-h1">India's First Herbal Pain-Relief Patch Brand</div>
            <div style="font-family:'Roboto Mono', monospace; font-size:12px; color:var(--vio-dermal-yellow); margin-top:8px;">11 September 2026</div>
          </div>
        </div>

        <div class="cover-footer-meta">
          <div>
            <div class="meta-col-val" style="font-size:16px;">Prepared for Giga Capital</div>
          </div>
        </div>
      </div>
      <div class="slide-footer">
        <span class="footer-text">&copy; Unexo Life Sciences Private Limited</span>
        <span class="slide-number">00</span>
      </div>
    </div>
  </div>
"""

# SPREAD 1: BLANK INSIDE COVER (Page 1) + MACRO MARKET THESIS (Page 2)
spread_1 = f"""
  <div class="spread-pair" data-spread-index="1" data-spread-name="Market Thesis" data-left-page="1" data-right-page="2">
    <!-- Page 1: Blank Inside Front Cover -->
    <div class="slide-page page-left" data-page-number="1" style="background:var(--vio-hospital-grey);">
      {bleed_overlays}
      <div class="blank-inside-cover" style="display:flex; justify-content:center; align-items:center; height:100%;">
        <div class="blank-inside-caption" style="font-family:'Montserrat', sans-serif; font-size:13px; color:var(--vio-clinical-slate); letter-spacing:0.04em;">Page intentionally left blank</div>
      </div>
      {footer_markup(1)}
    </div>

    <!-- Page 2: Macro Market Thesis & Competitive Landscape -->
    <div class="slide-page page-right" data-page-number="2">
      {bleed_overlays}
      <div class="slide-header">
        <div class="slide-header-left">
          <span class="slide-category-pill">MACRO MARKET THESIS</span>
        </div>
        {logo_markup(False)}
      </div>
      <div class="slide-body">
        <h2 class="slide-title" style="font-size:18px; margin-bottom:4px;">Pain relief patches are the most under-built brand category in Indian consumer health.</h2>
        <div class="slide-subtitle" style="font-size:12px; margin-bottom:8px;">Indians are wary of long-term pill use, while traditional balms are greasy, stain clothing, and cause burning sensations. Patches provide clean, targeted, sustained transdermal relief without grease or gastric distress.</div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-top:4px;">
          <!-- Chart 1: Market Channel Breakdown -->
          <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:10px; display:flex; flex-direction:column;">
            <div style="font-family:'Montserrat', sans-serif; font-size:12px; font-weight:700; color:var(--vio-cool-blue); margin-bottom:4px;">
              $3.5 Bn India Pain Market by Channel
            </div>
            <div style="flex:1; display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius:4px; background:#F8FAFC; min-height:220px;">
              <img src="assets/market_channel_breakdown.png" alt="Market Channel Breakdown" style="max-width:100%; max-height:210px; object-fit:contain;">
            </div>
            <div style="font-size:10px; color:#64748B; margin-top:6px; font-style:italic; line-height:1.35;">
              ~60% of the market is still oral pills. Pain patches represent an emerging $50M+ whitespace with high margins and low organized competition. Source: author's estimates.
            </div>
          </div>

          <!-- Chart 2: Competitive Landscape -->
          <div style="background:#FFFFFF; border:1px solid #CBD5E1; border-radius:6px; padding:10px; display:flex; flex-direction:column;">
            <div style="font-family:'Montserrat', sans-serif; font-size:12px; font-weight:700; color:var(--vio-cool-blue); margin-bottom:4px;">
              Competitive Landscape &amp; Brand Innovation
            </div>
            <div style="flex:1; display:flex; align-items:center; justify-content:center; overflow:hidden; border-radius:4px; background:#F8FAFC; min-height:220px;">
              <img src="assets/market_landscape.png" alt="Market Landscape" style="max-width:100%; max-height:210px; object-fit:contain;">
            </div>
            <div style="font-size:10px; color:#64748B; margin-top:6px; font-style:italic; line-height:1.35;">
              Mature markets (US, Japan) exhibit rich brand innovation across specialized niches; Indian market remains nascent with immense whitespace for a category-defining brand. Source: author's analysis.
            </div>
          </div>
        </div>
      </div>
      {footer_markup(2)}
    </div>
  </div>
"""

# SKU SPREAD BUILDER (Uniform Die-Frame with explicit mm dimensions)
def build_sku_spread(spread_idx, spread_name, left_page_num, right_page_num, sku_title, sku_subtitle, sku_code, img_src, target_anatomy, narrative, bullets, actives, die_width_mm, die_height_mm, die_hint):
    bullets_html = "".join([f'<div class="sku-bullet-item">{svg_check} <span>{b}</span></div>' for b in bullets])
    actives_html = "".join([f'<span class="active-pill">{a}</span>' for a in actives])

    # Die box dimensions in px (proportional to 16:9 slide layout)
    px_w = int(die_width_mm * 2.3)
    px_h = int(die_height_mm * 2.3)

    return f"""
    <div class="spread-pair" data-spread-index="{spread_idx}" data-spread-name="{spread_name}" data-left-page="{left_page_num}" data-right-page="{right_page_num}">
      <!-- LEFT PAGE: SKU DESCRIPTION PAGE -->
      <div class="slide-page page-left" data-page-number="{left_page_num}">
        {bleed_overlays}
        <div class="slide-header">
          <div class="slide-header-left">
            <span class="slide-category-pill">{sku_code}</span>
          </div>
          {logo_markup(False)}
        </div>
        <div class="slide-body">
          <h2 class="slide-title">{sku_title}</h2>
          <div class="slide-subtitle" style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <span style="color:var(--vio-herbal-green); display:inline-flex;">{svg_leaf}</span>
            <span style="font-weight:600; color:var(--vio-herbal-green); font-family:'Roboto Mono', monospace; font-size:11px; text-transform:uppercase;">{sku_subtitle}</span>
          </div>

          <div class="sku-layout-left">
            <div class="sku-image-column">
              <div class="sku-image-frame">
                <img src="{img_src}" alt="{sku_title}">
              </div>
              <div class="sku-spec-badge">
                <div>
                  <div class="badge-sub">Target Anatomy</div>
                  <div class="badge-main">{target_anatomy}</div>
                </div>
                <div style="font-family:'Roboto Mono', monospace; font-size:11px; font-weight:700; color:var(--vio-dermal-yellow); display:flex; align-items:center; gap:4px;">
                  {svg_clock} 12-HR FLUX
                </div>
              </div>
            </div>

            <div class="sku-details-column">
              <p class="sku-narrative">{narrative}</p>
              <div class="sku-bullets">
                {bullets_html}
              </div>
              <div class="sku-actives-box">
                <div class="sku-actives-label">Standardized Active Botanical Matrix</div>
                <div class="actives-pill-row">
                  {actives_html}
                </div>
              </div>
            </div>
          </div>
        </div>
        {footer_markup(left_page_num)}
      </div>

      <!-- RIGHT PAGE: SAMPLE ATTACHMENT PAGE -->
      <div class="slide-page page-right" data-page-number="{right_page_num}">
        {bleed_overlays}
        <div class="slide-header">
          <div class="slide-header-left">
            <span class="slide-category-pill">PHYSICAL SAMPLE ATTACHMENT SPECIFICATION</span>
          </div>
          {logo_markup(False)}
        </div>
        <div class="slide-body" style="align-items:center;">
          <div style="text-align:center; margin-bottom:6px;">
            <h3 style="font-family:'Montserrat', sans-serif; font-size:16px; font-weight:700; color:var(--vio-cool-blue); margin:0;">
              Sample Attachment Surface &mdash; {sku_title}
            </h3>
            <p style="font-size:11px; color:var(--vio-clinical-slate); margin-top:2px;">
              Affix 1 unit of physical product sachet using peelable fugitive glue dots on target indicators.
            </p>
          </div>

          <div class="sample-mount-canvas" style="width:100%; height:340px;">
            <div class="sample-die-frame" style="width:{px_w}px; height:{px_h}px;">
              <div class="bracket-corner tl"></div>
              <div class="bracket-corner tr"></div>
              <div class="bracket-corner bl"></div>
              <div class="bracket-corner br"></div>
              <div class="die-crosshair"></div>
              <div class="glue-target top" style="left:50%; transform:translateX(-50%);">GLUE</div>
              <div class="glue-target bottom" style="left:50%; transform:translateX(-50%);">GLUE</div>

              <div class="die-content-label">
                <div class="die-title">PHYSICAL SAMPLE MOUNT</div>
                <div class="die-dim-pill">{die_width_mm} mm &times; {die_height_mm} mm</div>
                <div class="die-instructions">{die_hint}</div>
              </div>
            </div>
          </div>
        </div>
        {footer_markup(right_page_num)}
      </div>
    </div>
    """

# SPREAD 2: KNEE PATCH (Pages 3 & 4)
spread_2 = build_sku_spread(
    spread_idx=2,
    spread_name="Knee Patch",
    left_page_num=3,
    right_page_num=4,
    sku_title="Knee Pain Relief Patch",
    sku_subtitle="360° Anatomical Articulation & Sustained 12-Hour Relief",
    sku_code="PRODUCT 1 / 5",
    img_src="assets/product-knee.jpg",
    target_anatomy="Articulating Knee Joint",
    narrative="Ergonomic butterfly contour engineered specifically for moving joints without peeling or bunching. Delivers sustained cryo-relief transitioning into deep anti-inflammatory herbal warmth.",
    bullets=[
        "<strong>Zero Peel Articulation:</strong> Tropical polymer adhesive stays locked through walking and stair climbing.",
        "<strong>Non-Messy Weave:</strong> Breathable micro-porous fabric that never stains garments or bedsheets.",
        "<strong>Rapid Pain Onset:</strong> Clinically proven therapeutic pain relief beginning in ~13 minutes.",
        "<strong>100% First-Pass Bypass:</strong> Delivers actives straight to inflamed joint with zero GI erosion."
    ],
    actives=["Gandhpura Taila 10%", "Menthol 5%", "Camphor 3%", "Eucalyptus Oil 1%", "Clove Oil 0.5%"],
    die_width_mm=120,
    die_height_mm=120,
    die_hint="Touch the breathable micro-weave fabric. Feel the absence of greasy residue and test the butterfly joint contour."
)

# SPREAD 3: BACK XL PATCH (Pages 5 & 6)
spread_3 = build_sku_spread(
    spread_idx=3,
    spread_name="Back XL Patch",
    left_page_num=5,
    right_page_num=6,
    sku_title="Back XL Pain Relief Patch",
    sku_subtitle="High-Coverage Hydrogel Matrix for Lumbar & Sciatic Spasms",
    sku_code="PRODUCT 2 / 5",
    img_src="assets/product-back-xl.jpg",
    target_anatomy="Lumbar, Sacral & Latissimus Spine",
    narrative="Maximum surface coverage engineered for chronic lumbar stiffness and acute muscular spasms. High water-content hydrogel matrix ensures gentle, painless release even on hairy skin.",
    bullets=[
        "<strong>Maximum Surface Reach:</strong> Covers entire lower lumbar zone to suppress multi-point radiant pain.",
        "<strong>Painless Removal:</strong> Advanced hydrogel technology peels clean without pulling skin or body hair.",
        "<strong>Targeted Counter-Irritation:</strong> Therapeutic balance of camphor and menthol overrides nociceptive signals.",
        "<strong>Deep Tissue Penetration:</strong> Gandhpura methyl salicylate penetrates deep paraspinal musculature."
    ],
    actives=["Gandhpura Taila 10%", "Menthol 5%", "Camphor 3%", "Eucalyptus Oil 1%"],
    die_width_mm=140,
    die_height_mm=100,
    die_hint="Examine the high surface area coverage. Notice the medical-grade release film engineered for painless removal."
)

# SPREAD 4: REGULAR MULTIPURPOSE PATCH (Pages 7 & 8)
spread_4 = build_sku_spread(
    spread_idx=4,
    spread_name="Regular Patch",
    left_page_num=7,
    right_page_num=8,
    sku_title="Regular Multipurpose Pain Patch",
    sku_subtitle="Universal Anatomical Contour for Neck, Shoulder & Trapezius",
    sku_code="PRODUCT 3 / 5",
    img_src="assets/product-regular.jpg",
    target_anatomy="Cervical Spine, Deltoids & Trapezius",
    narrative="The cornerstone hero SKU for desk-bound posture fatigue, cervical tension, and minor sports strains. Ultra-thin profile disappears seamlessly under formal office clothing.",
    bullets=[
        "<strong>Ultra-Discreet Profile:</strong> Zero bulk under fitted shirts, collared t-shirts, or daily office wear.",
        "<strong>Odorless Camphor Tech:</strong> Low-vapor herbal matrix allows confident use in boardrooms and public spaces.",
        "<strong>Consistent Transdermal Flux:</strong> Controlled 12-hour zero-order release avoids concentration spikes.",
        "<strong>High Reorder Velocity:</strong> Daily staple purchase driving over 65% repeat order rates across marketplaces."
    ],
    actives=["Gandhpura Taila 10%", "Menthol 5%", "Camphor 3%", "Clove Oil 0.5%"],
    die_width_mm=100,
    die_height_mm=70,
    die_hint="Compact universal sachet. Notice the slim packaging engineered for high-velocity FMCG and pharmacy dispensing."
)

# SPREAD 5: LARGE MULTIPURPOSE PATCH (Pages 9 & 10)
spread_5 = build_sku_spread(
    spread_idx=5,
    spread_name="Large Patch",
    left_page_num=9,
    right_page_num=10,
    sku_title="Large Multipurpose Pain Patch",
    sku_subtitle="Extended Muscle Group Therapy for Hamstrings, Quads & Calves",
    sku_code="PRODUCT 4 / 5",
    img_src="assets/product-large.jpg",
    target_anatomy="Quadriceps, Calves, Hamstrings & Scapula",
    narrative="Designed for active sports recovery and larger muscular planes. Features reinforced multidirectional elasticity that flexes naturally with heavy tendon contraction.",
    bullets=[
        "<strong>Bi-Directional Stretch:</strong> Woven substrate flexes with high-intensity athletic tendon movements.",
        "<strong>Sweat-Resistant Matrix:</strong> Adhesive retains clinical peel-strength through light perspiration and workouts.",
        "<strong>Post-Workout Recovery:</strong> Accelerates lactic acid dispersion and counteracts DOMS muscular aches.",
        "<strong>Therapeutic Botanical Blend:</strong> Eucalyptol synergy promotes microvascular blood flow across broad tissues."
    ],
    actives=["Gandhpura Taila 10%", "Menthol 5%", "Camphor 3%", "Eucalyptus Oil 1%"],
    die_width_mm=140,
    die_height_mm=100,
    die_hint="Engineered for large muscular planes. Observe the durable border seals preventing edge roll during movement."
)

# SPREAD 6: PERIOD PAIN PATCH (Pages 11 & 12)
spread_6 = build_sku_spread(
    spread_idx=6,
    spread_name="Period Pain Patch",
    left_page_num=11,
    right_page_num=12,
    sku_title="Period Pain Herbal Relief Patch",
    sku_subtitle="Gentle Abdominal Warmth & Menstrual Cramp Relief Matrix",
    sku_code="PRODUCT 5 / 5",
    img_src="assets/product-period.jpg",
    target_anatomy="Lower Abdomen & Sacral Pelvic Basin",
    narrative="Formulated specifically for dysmenorrhea and pelvic spasms. Replaces cumbersome hot water bottles with discreet, skin-safe continuous 12-hour thermal relaxation.",
    bullets=[
        "<strong>Gentle Non-Irritant Matrix:</strong> Dermatologically tested adhesive formulated for ultra-sensitive abdominal skin.",
        "<strong>Discreet Comfort:</strong> Zero bulk and completely invisible under pants, dresses, leggings, or sarees.",
        "<strong>Sustained Calming Warmth:</strong> Gentle herbal vasodilation eases deep smooth-muscle pelvic contractions.",
        "<strong>Natural Cramp Relief:</strong> Clean herbal alternative to oral antispasmodic medications and hot water bags."
    ],
    actives=["Menthol 4%", "Eucalyptus Oil 2%", "Clove Oil 1%", "Camphor 1.5%"],
    die_width_mm=100,
    die_height_mm=100,
    die_hint="Square abdominal die-cut. Feel the gentle texture designed specifically for sensitive pelvic application."
)

# SPREAD 7: INVESTMENT THESIS (Page 13) + THE ASK (Page 14)
spread_7 = f"""
  <div class="spread-pair" data-spread-index="7" data-spread-name="Investment & Ask" data-left-page="13" data-right-page="14">
    <!-- Page 13: Investment Thesis -->
    <div class="slide-page page-left" data-page-number="13">
      {bleed_overlays}
      <div class="slide-header">
        <div class="slide-header-left">
          <span class="slide-category-pill">INVESTMENT THESIS</span>
        </div>
        {logo_markup(False)}
      </div>
      <div class="slide-body">
        <h2 class="slide-title">Viopatch fits an early-stage brand incubation thesis</h2>
        <div class="slide-subtitle">A high-margin consumer health asset with the hard pharmaceutical validation already solved.</div>

        <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
          <div style="background:var(--vio-hospital-grey); border-left:4px solid var(--vio-cool-blue); border-radius:4px; padding:10px 14px;">
            <h4 style="font-family:'Montserrat', sans-serif; font-size:13px; font-weight:700; color:var(--vio-cool-blue); margin-bottom:2px;">
              1. The "Roorkee to Roorkee" Connection
            </h4>
            <p style="font-size:11.5px; line-height:1.4; color:#334155;">
              A rare, natural entrepreneurial synergy: <strong>Arti Gill</strong> graduated from <strong>IIT Roorkee</strong>, while <strong>Unexo Life Sciences</strong> operates its state-of-the-art transdermal pharmaceutical plant in <strong>Roorkee, Uttarakhand</strong> (manufacturing excellence since 1972). A shared geographic DNA connecting deep scientific rigor with modern consumer brand incubation.
            </p>
          </div>

          <div style="background:var(--vio-hospital-grey); border-left:4px solid var(--vio-herbal-green); border-radius:4px; padding:10px 14px;">
            <h4 style="font-family:'Montserrat', sans-serif; font-size:13px; font-weight:700; color:var(--vio-herbal-green); margin-bottom:2px;">
              2. Brand with the Hard Parts Already Solved
            </h4>
            <p style="font-size:11.5px; line-height:1.4; color:#334155;">
              Formulation, double-blind clinical trials, stability data, cleanroom infrastructure, and export clearances (CE, ANVISA Brazil) exist today &mdash; acquisition buys years of derisked R&amp;D, not a speculative concept.
            </p>
          </div>

          <div style="background:var(--vio-hospital-grey); border-left:4px solid var(--vio-thermal-orange); border-radius:4px; padding:10px 14px;">
            <h4 style="font-family:'Montserrat', sans-serif; font-size:13px; font-weight:700; color:var(--vio-thermal-orange); margin-bottom:2px;">
              3. Recurring-Demand Category, Not a Fad
            </h4>
            <p style="font-size:11.5px; line-height:1.4; color:#334155;">
              Pain management is chronic, recurrent, and inescapable across age brackets (geriatric osteoarthritis, white-collar cervical fatigue, menstrual cramps) &mdash; non-discretionary recurring daily usage with immense repeat stickiness.
            </p>
          </div>

          <div style="background:var(--vio-hospital-grey); border-left:4px solid var(--vio-clinical-slate); border-radius:4px; padding:10px 14px;">
            <h4 style="font-family:'Montserrat', sans-serif; font-size:13px; font-weight:700; color:var(--vio-clinical-slate); margin-bottom:2px;">
              4. Clear Value-Creation Levers Post-Acquisition
            </h4>
            <p style="font-size:11.5px; line-height:1.4; color:#334155;">
              Sharper quick-commerce placement (Blinkit, Zepto, Instamart 10-min urgent relief), persona-based line extensions, modern packaging redesign, and subscription mechanics &mdash; all ready for accelerated scale.
            </p>
          </div>
        </div>
      </div>
      {footer_markup(13)}
    </div>

    <!-- Page 14: The Ask -->
    <div class="slide-page page-right" data-page-number="14">
      {bleed_overlays}
      <div class="slide-header">
        <div class="slide-header-left">
          <span class="slide-category-pill">THE ASK</span>
        </div>
        {logo_markup(False)}
      </div>
      <div class="slide-body">
        <h2 class="slide-title">The Ask</h2>
        <div class="slide-subtitle">Clean brand carve-out with asset-light manufacturing continuity.</div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:16px;">
          <div style="background:#FFFFFF; border:1.5px solid var(--vio-cool-blue); border-radius:6px; padding:20px;">
            <div style="font-family:'Roboto Mono', monospace; font-size:10.5px; font-weight:700; color:var(--vio-cool-blue); text-transform:uppercase; margin-bottom:6px;">ACQUISITION SCOPE</div>
            <h4 style="font-family:'Montserrat', sans-serif; font-size:15px; font-weight:700; color:var(--vio-statutory-charcoal); margin-bottom:12px;">100% Brand &amp; IP Ownership</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:12px; color:#475569;">
              <li style="display:flex; gap:8px;">{svg_check} <span>Viopatch brand, registered trademarks &amp; global wordmarks</span></li>
              <li style="display:flex; gap:8px;">{svg_check} <span>Proprietary hydrogel herbal formulation IP</span></li>
              <li style="display:flex; gap:8px;">{svg_check} <span>Existing commercial accounts, distribution rights &amp; customer base</span></li>
              <li style="display:flex; gap:8px;">{svg_check} <span>Marketplace storefront equity (Amazon, Flipkart, 1mg, Pharmeasy)</span></li>
            </ul>
          </div>

          <div style="background:#FFFFFF; border:1.5px solid var(--vio-herbal-green); border-radius:6px; padding:20px;">
            <div style="font-family:'Roboto Mono', monospace; font-size:10.5px; font-weight:700; color:var(--vio-herbal-green); text-transform:uppercase; margin-bottom:6px;">ASSET-LIGHT CONTINUITY</div>
            <h4 style="font-family:'Montserrat', sans-serif; font-size:15px; font-weight:700; color:var(--vio-statutory-charcoal); margin-bottom:12px;">Exclusive Master Supply Agreement</h4>
            <ul style="list-style:none; display:flex; flex-direction:column; gap:8px; font-size:12px; color:#475569;">
              <li style="display:flex; gap:8px;">{svg_check} <span>Guaranteed manufacturing continuity at Unexo cleanrooms in Roorkee</span></li>
              <li style="display:flex; gap:8px;">{svg_check} <span>Zero CapEx, zero pharmaceutical factory liability or compliance overhead</span></li>
              <li style="display:flex; gap:8px;">{svg_check} <span>50-year sterile production rigor with WHO-GMP &amp; ISO certifications</span></li>
              <li style="display:flex; gap:8px;">{svg_check} <span>Pre-agreed volume pricing tiers ensuring high gross margins for Giga Capital</span></li>
            </ul>
          </div>
        </div>
      </div>
      {footer_markup(14)}
    </div>
  </div>
"""

# SPREAD 8: BACK COVER (Page 15) - Single Slide Centered (Symmetrical to Cover)
spread_8 = f"""
  <div class="spread-pair single-cover" data-spread-index="8" data-spread-name="Back Cover" data-right-page="15">
    <div class="slide-page theme-dark" data-page-number="15">
      {bleed_overlays}
      <div class="slide-header" style="position:absolute; top:28px; right:32px; justify-content:flex-end;">
        {logo_markup(True)}
      </div>
      <div class="cover-layout">
        <div>
          <div class="cover-eyebrow">BRAND BOOK</div>
          <div class="cover-title-group">
            <div class="cover-h1" style="font-size:32px;">India's First Herbal Pain-Relief Patch Brand</div>
            <div style="font-family:'Roboto Mono', monospace; font-size:12px; color:var(--vio-dermal-yellow); margin-top:8px;">11 September 2026</div>
          </div>
        </div>

        <div class="cover-footer-meta">
          <div>
            <div class="meta-col-val" style="font-size:15px; color:#FFFFFF;">Unexo Life Sciences Private Limited &middot; Est. 1972</div>
            <div style="font-family:'Roboto Mono', monospace; font-size:11px; color:#93C5FD; margin-top:4px;">
              B-16, Sector 4, Roorkee, Uttarakhand &middot; www.unexolifesciences.com
            </div>
          </div>
        </div>
      </div>
      <div class="slide-footer">
        <span class="footer-text">&copy; Unexo Life Sciences Private Limited</span>
        <span class="slide-number">15</span>
      </div>
    </div>
  </div>
"""

# Assemble index.html
html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VIOPATCH® — Brand Book &amp; Review Monograph</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- MOBILE / SMALL SCREEN INSTRUCTION BANNER -->
  <div id="mobile-banner">
    🖥️ <strong>Desktop View Recommended:</strong> For the authentic 2-page facing spread layout, view this on a desktop browser or enable <strong>"Desktop Site"</strong> in your mobile settings.
    <button id="btn-dismiss-banner" title="Dismiss">&times;</button>
  </div>

  <!-- TOP APP TOOLBAR -->
  <header id="app-header">
    <div class="brand-badge">
      <div class="brand-wordmark-header">VIO<span>PATCH</span><sup>&reg;</sup></div>
      <div class="badge-tag">Brand Book</div>
    </div>

    <!-- Navigation Controls -->
    <div class="nav-controls">
      <button class="btn-tool" id="btn-prev" title="Previous Spread (Left Arrow)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Prev
      </button>

      <span class="spread-indicator" id="spread-indicator"><strong>Cover</strong></span>

      <button class="btn-tool" id="btn-next" title="Next Spread (Right Arrow)">
        Next <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <!-- Action Buttons: README, Comments, Bleed Guides, Print -->
    <div style="display:flex; align-items:center; gap:8px;">
      <a href="https://github.com/TheKanishkaMohan/viopatch-brand-book#readme" target="_blank" rel="noopener noreferrer" class="btn-tool" id="btn-readme" title="Open README.md Documentation">
        {svg_doc} README.md
      </a>
      <button class="btn-tool" id="btn-review" title="Open review &amp; commenting drawer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Comments (<span id="comment-count-badge">0</span>)
      </button>
      <button class="btn-tool" id="btn-drop-pin" style="display:none;" title="Click anywhere on the open pages to place a comment pin">
        {svg_pin} Drop Pin
      </button>
      <button class="btn-tool" id="btn-bleeds" title="Toggle 3mm Bleed Perimeter &amp; Safety Margins">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Bleed Guides
      </button>
      <button class="btn-tool" id="btn-print" title="Print to 16:9 / A4 Landscape PDF">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg> Print
      </button>
    </div>
  </header>

  <!-- MAIN SPREAD VIEWPORT -->
  <main id="app-viewport">
    <div id="spread-stage">
      {spread_0}
      {spread_1}
      {spread_2}
      {spread_3}
      {spread_4}
      {spread_5}
      {spread_6}
      {spread_7}
      {spread_8}
    </div>
  </main>

  <!-- REVIEW COMMENTS DRAWER -->
  <aside id="comments-drawer">
    <div class="drawer-header">
      <div class="drawer-title">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Review Comments
      </div>
      <div>
        <button class="btn-tool" id="btn-close-drawer" style="padding:4px 8px;">&times;</button>
      </div>
    </div>

    <div class="drawer-body" id="comments-list">
      <!-- Dynamically populated via app.js -->
    </div>

    <div class="drawer-footer">
      <button class="btn-tool btn-accent" id="btn-copy-chat" style="width:100%; justify-content:center;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        Copy for Agent / Chat (Markdown)
      </button>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
        <button class="btn-tool" id="btn-export-md" style="justify-content:center;">Download .MD</button>
        <button class="btn-tool" id="btn-export-json" style="justify-content:center;">Export JSON</button>
      </div>
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; padding-top:6px; border-top:1px solid #21262D;">
        <button class="btn-text-action" id="btn-import-json" style="background:none; border:none; color:#58A6FF; font-size:11px; cursor:pointer;">&uarr; Import File</button>
        <button class="btn-text-action" id="btn-clear-all" style="background:none; border:none; color:#F85149; font-size:11px; cursor:pointer;">Clear All Comments</button>
        <input type="file" id="file-import-input" accept=".json" style="display:none;">
      </div>
    </div>
  </aside>

  <!-- PIN DROP MODAL -->
  <div id="pin-modal">
    <div class="modal-box">
      <div class="modal-header">Add Review Annotation Pin</div>
      <form id="form-pin">
        <div class="modal-body">
          <div class="form-group">
            <label id="modal-page-info">Location</label>
          </div>
          <div class="form-group">
            <label for="input-author">Reviewer / Author</label>
            <input type="text" id="input-author" class="form-control" required>
          </div>
          <div class="form-group">
            <label for="select-category">Feedback Category</label>
            <select id="select-category" class="form-control">
              <option value="copy">Editorial Copy / Thesis</option>
              <option value="sample">Physical Sample &amp; Die-Cut</option>
              <option value="visual">Visual / Layout / Typography</option>
              <option value="thesis">Giga Capital Incubation Rationale</option>
              <option value="deal">Transaction &amp; CDMO Structure</option>
            </select>
          </div>
          <div class="form-group">
            <label for="input-comment">Your Comment / Observation</label>
            <textarea id="input-comment" class="form-control" rows="4" placeholder="Enter requested revision, question, or note..." required></textarea>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-tool" id="btn-cancel-pin">Cancel</button>
          <button type="submit" class="btn-tool btn-accent">Save Comment Pin</button>
        </div>
      </form>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
"""

with open(output_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Successfully generated {output_path} ({len(html_content):,} bytes)")

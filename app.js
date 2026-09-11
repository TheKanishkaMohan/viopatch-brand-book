/**
 * VIOPATCH BRAND BOOK — 2-PAGE SPREAD VIEWER & COMMENTING ENGINE
 * Authoritative Reference: C:\etc\viopatch\BRAND_STYLE_GUIDE.md
 * Dimensions: 960pt x 540pt per slide (16:9 POTX standard)
 */

(function () {
  'use strict';

  // --- STATE ---
  let currentSpreadIndex = 0;
  let totalSpreads = 0;
  let isReviewMode = false;
  let isPinDropActive = false;
  let currentPendingPin = null;
  let comments = [];

  // --- DOM ELEMENTS ---
  const spreadStage = document.getElementById('spread-stage');
  const spreadPairs = document.querySelectorAll('.spread-pair');
  const spreadIndicator = document.getElementById('spread-indicator');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnBleeds = document.getElementById('btn-bleeds');
  const btnReview = document.getElementById('btn-review');
  const btnDropPin = document.getElementById('btn-drop-pin');
  const btnPrint = document.getElementById('btn-print');
  const commentsDrawer = document.getElementById('comments-drawer');
  const btnCloseDrawer = document.getElementById('btn-close-drawer');
  const commentsList = document.getElementById('comments-list');
  const commentCountBadge = document.getElementById('comment-count-badge');
  const pinModal = document.getElementById('pin-modal');
  const btnCancelPin = document.getElementById('btn-cancel-pin');
  const formPin = document.getElementById('form-pin');
  const btnCopyChat = document.getElementById('btn-copy-chat');
  const btnExportMd = document.getElementById('btn-export-md');
  const btnExportJson = document.getElementById('btn-export-json');
  const btnImportJson = document.getElementById('btn-import-json');
  const btnClearAll = document.getElementById('btn-clear-all');
  const fileInput = document.getElementById('file-import-input');
  const btnDismissBanner = document.getElementById('btn-dismiss-banner');
  const mobileBanner = document.getElementById('mobile-banner');

  // --- INITIALIZATION ---
  window.addEventListener('DOMContentLoaded', () => {
    totalSpreads = spreadPairs.length;
    loadComments();
    setupEventListeners();
    updateSpreadView();
    autoScaleSpread();
    renderComments();
    renderPins();
    window.addEventListener('resize', autoScaleSpread);
  });

  // --- AUTO SCALE FOR 100% 2-PAGE SPREAD VISIBILITY ---
  function autoScaleSpread() {
    if (!spreadStage) return;
    const viewport = document.getElementById('app-viewport');
    if (!viewport) return;

    const vWidth = viewport.clientWidth - 40; // padding buffer
    const vHeight = viewport.clientHeight - 40;

    const activeSpread = document.querySelector('.spread-pair.active');
    const isSingle = activeSpread?.classList.contains('single-cover');
    const targetWidth = isSingle ? 960 : 1920; // 2 slides side-by-side
    const targetHeight = 540;

    const scaleX = vWidth / targetWidth;
    const scaleY = vHeight / targetHeight;
    const scale = Math.min(scaleX, scaleY, 1.0); // max 1.0 to avoid blurring

    spreadStage.style.transform = `scale(${scale})`;
  }

  // --- SPREAD NAVIGATION ---
  function showSpread(index) {
    if (index < 0) index = 0;
    if (index >= totalSpreads) index = totalSpreads - 1;

    currentSpreadIndex = index;
    updateSpreadView();
    autoScaleSpread();
    renderPins();
  }

  function updateSpreadView() {
    spreadPairs.forEach((pair, idx) => {
      pair.classList.toggle('active', idx === currentSpreadIndex);
    });

    const activePair = spreadPairs[currentSpreadIndex];
    const spreadName = activePair?.dataset.spreadName || `Spread ${currentSpreadIndex + 1}`;
    const leftPage = activePair?.dataset.leftPage;
    const rightPage = activePair?.dataset.rightPage;

    let pageLabel = '';
    if (leftPage && rightPage) {
      pageLabel = `Pages ${leftPage}–${rightPage}`;
    } else if (leftPage) {
      pageLabel = `Page ${leftPage}`;
    } else if (rightPage) {
      pageLabel = `Page ${rightPage}`;
    }

    spreadIndicator.innerHTML = `<strong>${spreadName}</strong><br><span style="font-size:10px; color:#8B949E;">${pageLabel}</span>`;

    btnPrev.disabled = currentSpreadIndex === 0;
    btnNext.disabled = currentSpreadIndex === totalSpreads - 1;
    btnPrev.style.opacity = currentSpreadIndex === 0 ? '0.4' : '1';
    btnNext.style.opacity = currentSpreadIndex === totalSpreads - 1 ? '0.4' : '1';
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    btnPrev?.addEventListener('click', () => showSpread(currentSpreadIndex - 1));
    btnNext?.addEventListener('click', () => showSpread(currentSpreadIndex + 1));

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (['input', 'textarea', 'select'].includes(document.activeElement?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        showSpread(currentSpreadIndex + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        showSpread(currentSpreadIndex - 1);
      } else if (e.key === 'c' || e.key === 'C') {
        toggleReviewMode();
      } else if (e.key === 'b' || e.key === 'B') {
        toggleBleeds();
      }
    });

    // Mouse Wheel Scroll to Navigate Spreads
    let isWheelNavigating = false;
    window.addEventListener('wheel', (e) => {
      if (e.target.closest('#comments-drawer') || e.target.closest('#pin-modal')) {
        return;
      }
      if (Math.abs(e.deltaY) < 25) return;

      if (!isWheelNavigating) {
        isWheelNavigating = true;
        if (e.deltaY > 0) {
          showSpread(currentSpreadIndex + 1);
        } else {
          showSpread(currentSpreadIndex - 1);
        }
        setTimeout(() => {
          isWheelNavigating = false;
        }, 450);
      }
    }, { passive: true });

    // Bleed / Print Marks Toggle
    btnBleeds?.addEventListener('click', toggleBleeds);

    // Print
    btnPrint?.addEventListener('click', () => {
      window.print();
    });

    // Mobile banner dismiss
    btnDismissBanner?.addEventListener('click', () => {
      if (mobileBanner) mobileBanner.style.display = 'none';
    });

    // Review Mode
    btnReview?.addEventListener('click', toggleReviewMode);
    btnCloseDrawer?.addEventListener('click', () => commentsDrawer.classList.remove('open'));
    btnDropPin?.addEventListener('click', togglePinDrop);

    // Page click for pins
    document.addEventListener('click', handlePageClickForPin);

    // Modal
    btnCancelPin?.addEventListener('click', closePinModal);
    formPin?.addEventListener('submit', handleSavePin);

    // Event Delegation on Comments List (handles both delete and jump)
    commentsList?.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      const commentId = btn.dataset.id;
      const pageNum = parseInt(btn.dataset.page, 10);

      if (action === 'delete') {
        e.stopPropagation();
        deleteComment(commentId);
      } else if (action === 'jump') {
        e.stopPropagation();
        jumpToPage(pageNum);
      }
    });

    // Clear All Comments
    btnClearAll?.addEventListener('click', clearAllComments);

    // Export & Chat
    btnCopyChat?.addEventListener('click', copyCommentsForChat);
    btnExportMd?.addEventListener('click', exportCommentsMarkdown);
    btnExportJson?.addEventListener('click', exportCommentsJson);
    btnImportJson?.addEventListener('click', () => fileInput?.click());
    fileInput?.addEventListener('change', importCommentsJson);

    // Support offline/local README.md link
    const btnReadme = document.getElementById('btn-readme');
    if (btnReadme && window.location.protocol === 'file:') {
      btnReadme.href = 'README.md';
    }
  }

  function toggleBleeds() {
    const isShowing = document.body.classList.toggle('show-bleeds');
    btnBleeds.classList.toggle('active', isShowing);
  }

  // --- REVIEW & COMMENT SYSTEM ---
  function toggleReviewMode() {
    isReviewMode = !isReviewMode;
    btnReview.classList.toggle('active', isReviewMode);
    if (isReviewMode) {
      commentsDrawer.classList.add('open');
      btnDropPin.style.display = 'inline-flex';
    } else {
      commentsDrawer.classList.remove('open');
      btnDropPin.style.display = 'none';
      disablePinDrop();
    }
    renderPins();
  }

  function togglePinDrop() {
    isPinDropActive = !isPinDropActive;
    btnDropPin.classList.toggle('btn-accent', isPinDropActive);
    document.body.classList.toggle('pin-cursor-active', isPinDropActive);
    if (isPinDropActive) {
      btnDropPin.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Click Page to Pin`;
    } else {
      btnDropPin.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg> Drop Pin`;
    }
  }

  function disablePinDrop() {
    isPinDropActive = false;
    btnDropPin.classList.remove('btn-accent');
    document.body.classList.remove('pin-cursor-active');
    btnDropPin.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg> Drop Pin`;
  }

  function handlePageClickForPin(e) {
    if (!isPinDropActive) return;

    const pageEl = e.target.closest('.slide-page');
    if (!pageEl) return;

    const rect = pageEl.getBoundingClientRect();
    const xPct = Math.round(((e.clientX - rect.left) / rect.width) * 1000) / 10;
    const yPct = Math.round(((e.clientY - rect.top) / rect.height) * 1000) / 10;
    const pageNum = parseInt(pageEl.dataset.pageNumber || '1', 10);

    currentPendingPin = {
      page: pageNum,
      x: xPct,
      y: yPct
    };

    disablePinDrop();
    openPinModal(pageNum, xPct, yPct);
  }

  function openPinModal(pageNum, x, y) {
    document.getElementById('modal-page-info').textContent = `Page ${pageNum} (Location: X ${x}%, Y ${y}%)`;
    document.getElementById('input-author').value = localStorage.getItem('viopatch_reviewer_name') || 'Kanishka';
    document.getElementById('input-comment').value = '';
    pinModal.classList.add('active');
    setTimeout(() => document.getElementById('input-comment').focus(), 50);
  }

  function closePinModal() {
    pinModal.classList.remove('active');
    currentPendingPin = null;
  }

  function handleSavePin(e) {
    e.preventDefault();
    if (!currentPendingPin) return;

    const author = document.getElementById('input-author').value.trim() || 'Kanishka';
    const category = document.getElementById('select-category').value;
    const text = document.getElementById('input-comment').value.trim();

    if (!text) return;

    localStorage.setItem('viopatch_reviewer_name', author);

    const newComment = {
      id: 'cmt_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
      pinNumber: comments.length + 1,
      page: currentPendingPin.page,
      x: currentPendingPin.x,
      y: currentPendingPin.y,
      author: author,
      category: category,
      text: text,
      timestamp: new Date().toISOString(),
      resolved: false
    };

    comments.push(newComment);
    saveComments();
    closePinModal();
    renderComments();
    renderPins();
    commentsDrawer.classList.add('open');
  }

  function renderPins() {
    document.querySelectorAll('.slide-comment-pin').forEach(el => el.remove());

    if (!isReviewMode) return;

    comments.forEach((c) => {
      const targetPages = document.querySelectorAll(`.slide-page[data-page-number="${c.page}"]`);
      targetPages.forEach(page => {
        const pin = document.createElement('div');
        pin.className = `slide-comment-pin ${c.resolved ? 'resolved' : ''}`;
        pin.style.left = `${c.x}%`;
        pin.style.top = `${c.y}%`;
        pin.title = `[Pin #${c.pinNumber}] ${c.author}: ${c.text.substring(0, 50)}...`;
        pin.innerHTML = `<span>${c.pinNumber}</span>`;

        pin.addEventListener('click', (e) => {
          e.stopPropagation();
          commentsDrawer.classList.add('open');
          const card = document.getElementById(`comment-card-${c.id}`);
          if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.style.borderColor = '#58A6FF';
            setTimeout(() => card.style.borderColor = '', 1500);
          }
        });

        // Optional right-click to quick delete pin
        pin.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteComment(c.id);
        });

        page.appendChild(pin);
      });
    });
  }

  function renderComments() {
    if (!commentsList) return;
    if (commentCountBadge) {
      commentCountBadge.textContent = comments.length;
    }

    if (comments.length === 0) {
      commentsList.innerHTML = `
        <div style="text-align:center; padding:32px 16px; color:#8B949E; font-size:12.5px;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:8px; opacity:0.6;">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <p>No comments placed yet.</p>
          <p style="margin-top:4px; font-size:11.5px;">Click <strong>Drop Pin</strong> and tap anywhere on the slides to annotate.</p>
        </div>
      `;
      return;
    }

    const sorted = [...comments].sort((a, b) => a.page - b.page || a.pinNumber - b.pinNumber);

    commentsList.innerHTML = sorted.map(c => `
      <div class="comment-card" id="comment-card-${c.id}">
        <div class="comment-card-header">
          <span class="comment-page-badge">Page ${c.page} &middot; Pin #${c.pinNumber}</span>
          <span class="comment-category-pill cat-${c.category}">${c.category}</span>
        </div>
        <div class="comment-text">${escapeHtml(c.text)}</div>
        <div class="comment-footer-meta">
          <span>${escapeHtml(c.author)}</span>
          <div style="display:flex; gap:8px;">
            <button data-action="jump" data-page="${c.page}" style="background:none; border:none; color:#58A6FF; font-size:11px; font-weight:600; cursor:pointer; padding:2px 4px;">View Page</button>
            <button data-action="delete" data-id="${c.id}" style="background:none; border:none; color:#F85149; font-size:11px; font-weight:600; cursor:pointer; padding:2px 4px;">Delete</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function jumpToPage(pageNum) {
    spreadPairs.forEach((pair, idx) => {
      const left = parseInt(pair.dataset.leftPage || '0', 10);
      const right = parseInt(pair.dataset.rightPage || '0', 10);
      if (left === pageNum || right === pageNum) {
        showSpread(idx);
      }
    });
  }

  function deleteComment(id) {
    if (!id) return;
    comments = comments.filter(c => String(c.id) !== String(id));
    // Re-index remaining pin numbers sequentially
    comments.forEach((c, i) => {
      c.pinNumber = i + 1;
    });
    saveComments();
    renderComments();
    renderPins();
  }

  function clearAllComments() {
    if (comments.length === 0) return;
    if (confirm('Are you sure you want to clear all comments?')) {
      comments = [];
      saveComments();
      renderComments();
      renderPins();
    }
  }

  function saveComments() {
    const jsonStr = JSON.stringify(comments);
    localStorage.setItem('viopatch_brand_book_comments_v2', jsonStr);
    localStorage.setItem('viopatch_brand_book_comments_v1', jsonStr);
  }

  function loadComments() {
    try {
      let data = localStorage.getItem('viopatch_brand_book_comments_v2');
      if (!data) {
        data = localStorage.getItem('viopatch_brand_book_comments_v1');
      }
      comments = data ? JSON.parse(data) : [];
      if (!Array.isArray(comments)) comments = [];
      let needsSave = false;
      comments.forEach((c, i) => {
        if (!c.id) {
          c.id = 'cmt_' + Date.now() + '_' + i;
          needsSave = true;
        }
        if (!c.pinNumber) {
          c.pinNumber = i + 1;
          needsSave = true;
        }
      });
      if (needsSave) {
        saveComments();
      }
    } catch (e) {
      comments = [];
    }
  }

  // --- EXPORT & CHAT INTEGRATION ---
  function copyCommentsForChat() {
    if (comments.length === 0) {
      alert('No comments to copy. Click Drop Pin to place a comment first!');
      return;
    }

    const md = generateMarkdownSummary();
    navigator.clipboard.writeText(md).then(() => {
      const orig = btnCopyChat.innerHTML;
      btnCopyChat.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied to Clipboard!`;
      setTimeout(() => btnCopyChat.innerHTML = orig, 2000);
    }).catch(err => {
      alert('Failed to copy. Use Download .MD instead.');
    });
  }

  function generateMarkdownSummary() {
    const sorted = [...comments].sort((a, b) => a.page - b.page);
    let md = `### Viopatch Brand Book Review Comments (${sorted.length})\n\n`;
    md += `*Exported on ${new Date().toLocaleDateString()} for Antigravity & Giga Capital Review*\n\n`;

    sorted.forEach(c => {
      md += `#### Page ${c.page} [Pin #${c.pinNumber}] — Category: \`${c.category.toUpperCase()}\`\n`;
      md += `> **Author:** ${c.author} (Coordinates: X ${c.x}%, Y ${c.y}%)\n\n`;
      md += `${c.text}\n\n`;
      md += `---\n\n`;
    });

    return md;
  }

  function exportCommentsMarkdown() {
    downloadFile(generateMarkdownSummary(), 'viopatch-brand-book-comments.md', 'text/markdown');
  }

  function exportCommentsJson() {
    downloadFile(JSON.stringify(comments, null, 2), 'viopatch-brand-book-comments.json', 'application/json');
  }

  function importCommentsJson(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (Array.isArray(imported)) {
          comments = imported;
          saveComments();
          renderComments();
          renderPins();
          alert(`Successfully imported ${comments.length} comments!`);
        }
      } catch (err) {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  }

  function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Global helpers (both namespace formats for backwards compatibility)
  window.VioSpread = {
    jumpToPage,
    deleteComment,
    clearAllComments
  };
  window.VioBook = window.VioSpread;

})();

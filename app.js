/**
 * VIOPATCH BRAND BOOK — INTERACTIVE FLIPBOOK & COMMENTING ENGINE
 * Format: A4 Landscape (1123 x 794 px)
 * Dependencies: StPageFlip (Local standalone)
 */

(function () {
  'use strict';

  // --- STATE ---
  let pageFlip = null;
  let isReviewMode = false;
  let isPinDropActive = false;
  let currentPendingPin = null;
  let comments = [];
  const STORAGE_KEY = 'viopatch_brand_book_comments_v1';

  // --- DOM ELEMENTS ---
  const flipbookEl = document.getElementById('flipbook');
  const scrollContainer = document.getElementById('scroll-container');
  const pageIndicator = document.getElementById('page-indicator');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnReview = document.getElementById('btn-review');
  const btnDropPin = document.getElementById('btn-drop-pin');
  const btnViewMode = document.getElementById('btn-view-mode');
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
  const fileInput = document.getElementById('file-import-input');
  const selectToc = document.getElementById('select-toc');

  // --- INITIALIZATION ---
  window.addEventListener('DOMContentLoaded', () => {
    loadComments();
    initFlipbook();
    setupEventListeners();
    updatePageIndicator(0);
    renderComments();
  });

  function initFlipbook() {
    if (typeof St === 'undefined' || !St.PageFlip) {
      console.warn('StPageFlip not found, falling back to scroll view.');
      toggleViewMode('scroll');
      return;
    }

    try {
      pageFlip = new St.PageFlip(flipbookEl, {
        width: 1123,
        height: 794,
        size: 'stretch',
        minWidth: 560,
        maxWidth: 1600,
        minHeight: 400,
        maxHeight: 1130,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
        usePortrait: true,
        startPage: 0
      });

      const pages = flipbookEl.querySelectorAll('.book-page');
      pageFlip.loadFromHTML(pages);

      pageFlip.on('flip', (e) => {
        updatePageIndicator(e.data);
        renderPins();
      });

      pageFlip.on('init', () => {
        renderPins();
      });
    } catch (err) {
      console.error('Error initializing StPageFlip:', err);
    }
  }

  function updatePageIndicator(pageIndex) {
    const totalPages = document.querySelectorAll('.book-page').length;
    let label = '';
    if (pageIndex === 0) {
      label = 'Page 1 (Cover)';
    } else if (pageIndex >= totalPages - 1) {
      label = `Page ${totalPages} (Back Cover)`;
    } else {
      const leftPage = pageIndex % 2 === 1 ? pageIndex + 1 : pageIndex;
      const rightPage = leftPage + 1 <= totalPages ? leftPage + 1 : leftPage;
      label = `Pages ${leftPage}–${rightPage} of ${totalPages}`;
    }

    pageIndicator.innerHTML = `<strong>${label}</strong>`;
    if (selectToc) {
      selectToc.value = pageIndex;
    }
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Nav
    btnPrev?.addEventListener('click', () => pageFlip?.flipPrev());
    btnNext?.addEventListener('click', () => pageFlip?.flipNext());

    // Keyboard Navigation
    window.addEventListener('keydown', (e) => {
      if (['input', 'textarea', 'select'].includes(document.activeElement?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        pageFlip?.flipNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        pageFlip?.flipPrev();
      } else if (e.key === 'c' || e.key === 'C') {
        toggleReviewMode();
      }
    });

    // TOC Jump
    selectToc?.addEventListener('change', (e) => {
      const targetPage = parseInt(e.target.value, 10);
      if (!isNaN(targetPage)) {
        jumpToPage(targetPage);
      }
    });

    // View Mode Toggle
    btnViewMode?.addEventListener('click', () => {
      const isScroll = scrollContainer.classList.contains('active');
      toggleViewMode(isScroll ? 'flip' : 'scroll');
    });

    // Print
    btnPrint?.addEventListener('click', () => {
      toggleViewMode('scroll');
      setTimeout(() => {
        window.print();
      }, 300);
    });

    // Review Mode & Drawer
    btnReview?.addEventListener('click', toggleReviewMode);
    btnCloseDrawer?.addEventListener('click', () => commentsDrawer.classList.remove('open'));

    // Pin Drop Mode
    btnDropPin?.addEventListener('click', togglePinDrop);

    // Page Click for Pin Placement
    document.addEventListener('click', handlePageClickForPin);

    // Modal
    btnCancelPin?.addEventListener('click', closePinModal);
    formPin?.addEventListener('submit', handleSavePin);

    // Export & Import
    btnCopyChat?.addEventListener('click', copyCommentsForChat);
    btnExportMd?.addEventListener('click', exportCommentsMarkdown);
    btnExportJson?.addEventListener('click', exportCommentsJson);
    btnImportJson?.addEventListener('click', () => fileInput?.click());
    fileInput?.addEventListener('change', importCommentsJson);
  }

  function toggleViewMode(mode) {
    if (mode === 'scroll') {
      scrollContainer.classList.add('active');
      flipbookEl.parentElement.style.display = 'none';
      btnViewMode.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path></svg> Flipbook View`;
    } else {
      scrollContainer.classList.remove('active');
      flipbookEl.parentElement.style.display = 'block';
      btnViewMode.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Scroll View`;
    }
  }

  function jumpToPage(index) {
    if (pageFlip) {
      pageFlip.flip(index);
    }
    const scrollTarget = document.getElementById(`scroll-page-${index + 1}`);
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' });
    }
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
    document.body.classList.toggle('pin-drop-active', isPinDropActive);
    if (isPinDropActive) {
      btnDropPin.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Click Page to Pin`;
    } else {
      btnDropPin.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg> Drop Pin`;
    }
  }

  function disablePinDrop() {
    isPinDropActive = false;
    btnDropPin.classList.remove('btn-accent');
    document.body.classList.remove('pin-drop-active');
    btnDropPin.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg> Drop Pin`;
  }

  function handlePageClickForPin(e) {
    if (!isPinDropActive) return;

    const pageEl = e.target.closest('.book-page');
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
    document.getElementById('modal-page-info').textContent = `Page ${pageNum} (X: ${x}%, Y: ${y}%)`;
    document.getElementById('input-author').value = localStorage.getItem('viopatch_reviewer_name') || 'Arti Gill / Reviewer';
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

    const author = document.getElementById('input-author').value.trim() || 'Reviewer';
    const category = document.getElementById('select-category').value;
    const text = document.getElementById('input-comment').value.trim();

    if (!text) return;

    localStorage.setItem('viopatch_reviewer_name', author);

    const newComment = {
      id: 'cmt_' + Date.now(),
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
    // Remove existing pins from DOM
    document.querySelectorAll('.comment-pin').forEach(el => el.remove());

    if (!isReviewMode) return;

    comments.forEach((c) => {
      const targetPages = document.querySelectorAll(`.book-page[data-page-number="${c.page}"]`);
      targetPages.forEach(page => {
        const pin = document.createElement('div');
        pin.className = `comment-pin ${c.resolved ? 'resolved' : ''}`;
        pin.style.left = `${c.x}%`;
        pin.style.top = `${c.y}%`;
        pin.title = `[Pin #${c.pinNumber}] ${c.author}: ${c.text.substring(0, 60)}...`;
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

        page.appendChild(pin);
      });
    });
  }

  function renderComments() {
    if (!commentsList) return;
    commentCountBadge.textContent = comments.length;

    if (comments.length === 0) {
      commentsList.innerHTML = `
        <div style="text-align:center; padding:40px 20px; color:#768390; font-size:13px;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:10px; opacity:0.5;">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <p>No review comments yet.</p>
          <p style="margin-top:6px; font-size:12px;">Click <strong>Drop Pin</strong> and tap anywhere on the book to annotate.</p>
        </div>
      `;
      return;
    }

    // Sort by page asc
    const sorted = [...comments].sort((a, b) => a.page - b.page || a.pinNumber - b.pinNumber);

    commentsList.innerHTML = sorted.map(c => `
      <div class="comment-card" id="comment-card-${c.id}">
        <div class="comment-card-header">
          <span class="comment-page-badge">Page ${c.page} · Pin #${c.pinNumber}</span>
          <span class="comment-category-pill cat-${c.category}">${c.category}</span>
        </div>
        <div class="comment-text">${escapeHtml(c.text)}</div>
        <div class="comment-meta">
          <span>${escapeHtml(c.author)}</span>
          <div style="display:flex; gap:8px;">
            <button class="btn-text-action" onclick="window.VioBook.jumpToPage(${c.page - 1})" style="background:none; border:none; color:#58A6FF; font-size:11px; cursor:pointer;">Go to Page</button>
            <button class="btn-text-action" onclick="window.VioBook.deleteComment('${c.id}')" style="background:none; border:none; color:#F85149; font-size:11px; cursor:pointer;">Delete</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  function deleteComment(id) {
    if (confirm('Delete this comment?')) {
      comments = comments.filter(c => c.id !== id);
      saveComments();
      renderComments();
      renderPins();
    }
  }

  function saveComments() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  }

  function loadComments() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      comments = data ? JSON.parse(data) : [];
    } catch (e) {
      comments = [];
    }
  }

  // --- EXPORT & CHAT INTEGRATION ---
  function copyCommentsForChat() {
    if (comments.length === 0) {
      alert('No comments to copy. Drop some pins first!');
      return;
    }

    const md = generateMarkdownSummary();
    navigator.clipboard.writeText(md).then(() => {
      const originalText = btnCopyChat.innerHTML;
      btnCopyChat.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied to Clipboard!`;
      setTimeout(() => {
        btnCopyChat.innerHTML = originalText;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      alert('Failed to copy to clipboard. Use Download Markdown instead.');
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
    const md = generateMarkdownSummary();
    downloadFile(md, 'viopatch-brand-book-comments.md', 'text/markdown');
  }

  function exportCommentsJson() {
    const jsonStr = JSON.stringify(comments, null, 2);
    downloadFile(jsonStr, 'viopatch-brand-book-comments.json', 'application/json');
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

  // Expose global helpers
  window.VioBook = {
    jumpToPage,
    deleteComment
  };

})();

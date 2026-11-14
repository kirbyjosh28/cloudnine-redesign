(function() {
  var cards = Array.from(document.querySelectorAll('.bc[data-idx]'));
  var data = cards.map(function(c) {
    return {
      name: c.dataset.name || 'Cloud Nine Bride',
      quote: c.dataset.quote || '',
      sil: c.dataset.sil || 'A-Line',
      vibe: c.dataset.vibe || 'classic',
      src:  c.querySelector('.bc-img').src
    };
  });

  var lbEl   = document.getElementById('lb');
  var lbImg  = document.getElementById('lbImg');
  var lbName = document.getElementById('lbName');
  var lbQuote = document.getElementById('lbQuote');
  var lbShopBtn = document.getElementById('lbShopSilBtn');
  var lbCtr  = document.getElementById('lbCounter');
  var curIdx = 0;

  function showImage(src, alt) {
    lbImg.classList.remove('lb-ready');
    lbImg.onload = function() { lbImg.classList.add('lb-ready'); };
    lbImg.onerror = function() { lbImg.classList.add('lb-ready'); };
    lbImg.src = src;
    lbImg.alt = alt;
    if (lbImg.complete && lbImg.naturalWidth > 0) lbImg.classList.add('lb-ready');
  }

  function openLb(i) {
    curIdx = ((i % data.length) + data.length) % data.length;
    var d = data[curIdx];
    lbEl.style.display = 'flex';
    lbEl.style.opacity = '0';
    lbEl.style.transition = 'opacity .28s ease';
    void lbEl.offsetWidth;
    lbEl.style.opacity = '1';
    document.body.style.overflow = 'hidden';

    showImage(d.src, d.name);
    lbName.textContent = d.name;
    lbQuote.textContent = d.quote ? `"${d.quote}"` : '';
    lbCtr.textContent  = (curIdx + 1) + ' / ' + data.length;
  }

  function closeLb() {
    lbEl.style.transition = 'opacity .22s ease';
    lbEl.style.opacity = '0';
    document.body.style.overflow = '';
    setTimeout(function() {
      lbEl.style.display = 'none';
      lbEl.style.opacity = '';
      lbImg.classList.remove('lb-ready');
      lbImg.src = '';
    }, 240);
  }

  function shift(dir) { openLb(curIdx + dir); }

  // Card click & accessible focus
  cards.forEach(function(c) {
    var idx = parseInt(c.dataset.idx, 10);
    c.addEventListener('click', function() { openLb(idx); });
    c.setAttribute('tabindex', '0');
    c.setAttribute('role', 'button');
    c.setAttribute('aria-label', 'View wedding photo of ' + (c.dataset.name || 'bride'));
    c.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(idx); }
    });
  });

  document.getElementById('lbClose').addEventListener('click', closeLb);
  document.getElementById('lbBackdrop').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', function(e) { e.stopPropagation(); shift(-1); });
  document.getElementById('lbNext').addEventListener('click', function(e) { e.stopPropagation(); shift(1); });

  document.addEventListener('keydown', function(e) {
    if (!lbEl || lbEl.style.display !== 'flex') return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowRight') shift(1);
    if (e.key === 'ArrowLeft')  shift(-1);
  });

  // Touch gestures for lightbox
  var t0 = 0;
  lbEl.addEventListener('touchstart', function(e) { t0 = e.touches[0].clientX; }, { passive: true });
  lbEl.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - t0;
    if (Math.abs(dx) > 50) shift(dx < 0 ? 1 : -1);
  }, { passive: true });

  // ── FILTERING FUNCTION ──
  window.filterBrides = function(vibe, btn) {
    document.querySelectorAll('.bfilter-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    cards.forEach(function(c) {
      if (vibe === 'all' || c.dataset.vibe === vibe) {
        c.classList.remove('is-hidden');
      } else {
        c.classList.add('is-hidden');
      }
    });
  };

  // ── STORY SUBMISSION FORM ──
  var form = document.getElementById('bfForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var endpoint = (window.SITE_CONFIG && window.SITE_CONFIG.contactFormEndpoint) || '';
      window.submitSiteForm(form, endpoint).then(function(ok) {
        if (!ok) return;
        form.style.display = 'none';
        document.getElementById('bfSuccess').style.display = 'block';
      });
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href="#be-featured"]').forEach(function(a) {
    a.addEventListener('click', function(ev) {
      ev.preventDefault();
      var t = document.getElementById('be-featured');
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

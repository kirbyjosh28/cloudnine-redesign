  (async function() {

    const catFiles = {
      'bridal': 'data/bridal-products.json?v=20261026m',
      'prom': 'data/prom-products.json?v=20261026m',
      'hoco': 'data/hoco-products.json?v=20261026m',
      'mothers': 'data/mothers-products.json?v=20261026m'
    };

    /* ── Load dress from sessionStorage or URL query params ── */
    let dress = null;
    try { dress = JSON.parse(sessionStorage.getItem('cloudnine_dress') || 'null'); } catch(e) {}
    
    const urlParams = new URLSearchParams(window.location.search);
    const skuParam = urlParams.get('sku') || urlParams.get('s');
    let catParam = (urlParams.get('cat') || urlParams.get('type') || '').toLowerCase();
    let dressSrc = sessionStorage.getItem('cloudnine_dress_src') || '';

    // If URL specifies a different SKU than what is cached in sessionStorage, clear stale sessionStorage dress
    if (dress && skuParam && String(dress.s || '').toLowerCase() !== skuParam.toLowerCase() && String(dress.gn || '').toLowerCase() !== skuParam.toLowerCase()) {
      dress = null;
    }

    if (!dress && skuParam) {
      const filesToTry = catParam && catFiles[catParam] ? [catFiles[catParam]] : Object.values(catFiles);
      const qLower = skuParam.trim().toLowerCase().replace(/^#/, '');

      for (const filePath of filesToTry) {
        try {
          const res = await fetch(filePath);
          if (res.ok) {
            const list = await res.json();
            const found = list.find(p =>
              String(p.s || '').toLowerCase() === qLower ||
              String(p.gn || '').toLowerCase() === qLower
            );
            if (found) {
              dress = found;
              if (!catParam) {
                catParam = filePath.includes('prom') ? 'prom' : filePath.includes('hoco') ? 'hoco' : filePath.includes('mothers') ? 'mothers' : 'bridal';
              }
              if (!dressSrc) {
                dressSrc = catParam === 'prom' ? 'prom-catalog.html' : catParam === 'hoco' ? 'hoco-catalog.html' : catParam === 'mothers' ? 'mothers.html' : 'bridal-catalog.html';
              }
              try {
                sessionStorage.setItem('cloudnine_dress', JSON.stringify(dress));
                sessionStorage.setItem('cloudnine_dress_src', dressSrc);
              } catch(e) {}
              break;
            }
          }
        } catch(err) {}
      }
    }

    if (!dress) {
      window.location.href = dressSrc || 'bridal-catalog.html';
      return;
    }

    if (!dressSrc) {
      dressSrc = catParam === 'prom' ? 'prom-catalog.html' : catParam === 'hoco' ? 'hoco-catalog.html' : catParam === 'mothers' ? 'mothers.html' : 'bridal-catalog.html';
    }

    /* ── Theme based on source catalog ── */
    const isProm = /prom/.test(dressSrc) || catParam === 'prom';
    const isHoco = /hoco/.test(dressSrc) || catParam === 'hoco';
    const isMothers = /mothers/.test(dressSrc) || catParam === 'mothers';
    const activeCat = isProm ? 'prom' : isHoco ? 'hoco' : isMothers ? 'mothers' : 'bridal';

    const dpMobileBookBtn = document.getElementById('dpMobileBookBtn');
    const dpInquireBtn = document.getElementById('dpInquireBtn');
    const dpStockContactLink = document.getElementById('dpStockContactLink');
    const skuQuery = `cat=${activeCat}&sku=${encodeURIComponent(dress.s || '')}&des=${encodeURIComponent(dress.d || '')}`;

    if (dpInquireBtn) {
      dpInquireBtn.href = `contact.html?${skuQuery}#request-form`;
    }
    if (dpStockContactLink) {
      dpStockContactLink.href = `contact.html?${skuQuery}#request-form`;
    }
    if (dpMobileBookBtn) {
      dpMobileBookBtn.href = `contact.html?${skuQuery}#request-form`;
    }

    if (isProm || isHoco) {
      const r = document.documentElement.style;
      r.setProperty('--teal-deep',    '#9b2c4e');
      r.setProperty('--teal-darker',  '#7d1f3d');
      r.setProperty('--teal-mid',     '#f4b8c8');
      r.setProperty('--teal-light',   '#f4cbd9');
      r.setProperty('--teal-xlight',  '#fdf2f6');
      r.setProperty('--teal-dim',     'rgba(155,44,78,0.07)');
      r.setProperty('--teal-dim2',    'rgba(155,44,78,0.13)');
      r.setProperty('--teal-dark',    '#882342');
      r.setProperty('--teal-logo',    '#d4728f');
      const gal = document.querySelector('.dp-gallery');
      if (gal) gal.style.background = '#f9f0f3';
    }

    /* ── Helpers ── */
    function esc(s) {
      return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    }

    /* ── Derive display values ── */
    const imgs = (dress.x && dress.x.length) ? dress.x : (dress.i ? [dress.i] : []);
    const rawDesc = (dress.c || '').trim();
    const hasDistinctGownName = Boolean(dress.gn && dress.gn !== dress.s);
    const displayTitle = dress.gn
      ? `${dress.d ? dress.d + ' · ' : ''}${dress.gn}`
      : (dress.d && dress.s ? `${dress.d} #${dress.s}` : (dress.n || 'Style #' + dress.s));
    const sectionLabel = isProm ? 'Prom' : isHoco ? 'Homecoming' : isMothers ? 'Mothers' : 'Bridal';
    const sectionHref  = isProm ? 'prom-catalog.html' : isHoco ? 'hoco-catalog.html' : isMothers ? 'mothers.html' : 'bridal-catalog.html';
    const isCatalogSrc = /catalog\.html|mothers\.html/.test(dressSrc);
    const backHref = isCatalogSrc ? dressSrc : sectionHref;

    /* ── Mobile Back Link & Desktop Breadcrumb ── */
    const mobBackLink = document.getElementById('dpMobileBackLink');
    const mobBackLabel = document.getElementById('dpMobileBackLabel');
    if (mobBackLink) mobBackLink.href = backHref;
    if (mobBackLabel) mobBackLabel.textContent = `Back to ${sectionLabel}`;

    const bc = document.getElementById('dpBreadcrumb');
    if (bc) {
      bc.innerHTML =
        '<a href="' + esc(backHref) + '">&larr; Back to ' + esc(sectionLabel) + '</a>' +
        '<span class="dp-breadcrumb-sep">/</span>' +
        '<span>' + esc(displayTitle) + '</span>';
    }

    /* ── Page title & Meta ── */
    document.title = displayTitle + (hasDistinctGownName ? ` (#${dress.s})` : '') + ' | Cloud Nine Bridal Boutique';
    const canonicalEl = document.getElementById('canonicalLink');
    const shareCanonicalUrl = `https://cloudninepeoria.com/dress.html?cat=${activeCat}&sku=${encodeURIComponent(dress.s || '')}`;
    if (canonicalEl) canonicalEl.href = shareCanonicalUrl;

    const ogT = document.getElementById('ogTitle');
    const ogD = document.getElementById('ogDesc');
    const ogI = document.getElementById('ogImage');
    if (ogT) ogT.content = `${displayTitle} | Cloud Nine Bridal Boutique`;
    if (ogD) ogD.content = rawDesc || `View ${displayTitle} by ${dress.d || 'Cloud Nine'} at Cloud Nine Bridal Boutique in Peoria, IL.`;
    if (ogI && imgs.length) ogI.content = imgs[0];

    // Inject JSON-LD Schema
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": displayTitle,
      "image": imgs,
      "description": rawDesc || `${displayTitle} available at Cloud Nine Bridal Boutique`,
      "sku": dress.s || undefined,
      "brand": {
        "@type": "Brand",
        "name": dress.d || "Cloud Nine"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStoreOnly",
        "priceCurrency": "USD",
        "url": shareCanonicalUrl,
        "seller": {
          "@type": "BridalShop",
          "name": "Cloud Nine Bridal Boutique",
          "telephone": "+13096933830"
        }
      }
    });
    document.head.appendChild(schemaScript);

    /* ── Right / Info panel ── */
    document.getElementById('dpDesigner').textContent = dress.d || `${sectionLabel} Collection`;
    document.getElementById('dpTitle').textContent = dress.gn ? dress.gn : ('Style #' + (dress.s || ''));
    document.getElementById('dpStyleNum').textContent = hasDistinctGownName ? `Style #${dress.s}` : '';
    const descEl = document.getElementById('dpDesc');
    if (descEl) descEl.textContent = rawDesc;

    /* ── Meta rows (Category-aware) ── */
    const silLabels = {
      'a-line': 'A-Line',
      'ball-gown': 'Ball Gown',
      'fitted': 'Fit & Flare / Fitted',
      'mermaid': 'Mermaid',
      'sheath': 'Sheath'
    };
    const silNice = dress.sil ? (silLabels[String(dress.sil).toLowerCase()] || dress.sil) : '';

    const metaRows = [
      dress.d ? ['Designer', dress.d] : null,
      dress.gn ? ['Gown Name', dress.gn] : null,
      (dress.s && dress.s !== dress.gn) ? ['Style Number', '#' + dress.s] : null,
      silNice ? ['Silhouette', silNice] : null,
      isProm ? ['Prom Pricing', '$150 – $1,000'] : (isHoco ? ['HOCO Pricing', '$90 – $580'] : null),
      (isProm || isHoco) ? ['Boutique Policy', 'Walk-Ins Welcome · School Registry'] : ['Availability', 'In-Store Sample & Special Order'],
    ].filter(Boolean);
    document.getElementById('dpMeta').innerHTML = metaRows.map(([k,v]) =>
      '<div class="dp-meta-row"><span class="dp-meta-key">' + esc(k) + '</span><span class="dp-meta-val">' + esc(v||'—') + '</span></div>'
    ).join('');

    /* ── Accordion ── */
    const accs = [
      ['Sizing & Fit',  'We carry sample sizes in store for you to try. Most gowns can be special-ordered in your size. Our stylists will guide you through sizing and any needed alterations.'],
      ['Alterations',   'Cloud Nine partners with trusted local seamstresses. Allow 2–3 months for alterations prior to your event. Ask a stylist for a referral.'],
    ];
    document.getElementById('dpAccordion').innerHTML = accs.map(([title, body]) =>
      '<div class="dp-acc-item">' +
        '<button class="dp-acc-trigger" data-cn-click="toggleAcc(this)">' +
          '<span>' + esc(title) + '</span>' +
          '<span class="dp-acc-icon">+</span>' +
        '</button>' +
        '<div class="dp-acc-body"><div class="dp-acc-inner">' + esc(body) + '</div></div>' +
      '</div>'
    ).join('');

    /* ── Build photo gallery & mobile swipe controls ── */
    let html = '';
    imgs.forEach(function(url, i) {
      const vtAttr = (i === 0) ? 'style="view-transition-name: dress-hero;"' : '';
      const loadAttrs = (i === 0)
        ? 'width="600" height="900" loading="eager" fetchpriority="high" decoding="async"'
        : 'width="600" height="900" loading="lazy" decoding="async"';
      html += '<div class="dp-photo-full" style="cursor:zoom-in;position:relative;" data-lb="' + i + '">' +
        '<img src="' + esc(url) + '" alt="' + esc(dress.d||'') + ' ' + (i===0 ? 'style ' + esc(dress.s||'') : 'angle ' + (i+1)) + '" ' + loadAttrs + ' ' + vtAttr + '/>' +
        (imgs.length > 1 ? '<span class="dp-img-counter">' + (i+1) + ' / ' + imgs.length + '</span>' : '') +
      '</div>';
    });
    const gal = document.getElementById('dpGallery');
    gal.innerHTML = html || '<div style="padding:120px 48px;text-align:center;color:#999;font-size:13px;">No photos available</div>';

    let currentGalIdx = 0;
    const galBadge = document.getElementById('dpGalBadge');
    const galPrev = document.getElementById('dpGalPrev');
    const galNext = document.getElementById('dpGalNext');
    const galZoomBtn = document.getElementById('dpGalZoomBtn');
    const thumbsEl = document.getElementById('dpThumbs');

    function updateMobileGalleryState(idx) {
      currentGalIdx = Math.max(0, Math.min(imgs.length - 1, idx));
      if (galBadge && imgs.length > 1) {
        galBadge.textContent = (currentGalIdx + 1) + ' / ' + imgs.length;
      }
      if (thumbsEl) {
        thumbsEl.querySelectorAll('.dp-thumb-btn').forEach(function(btn, bi) {
          btn.classList.toggle('active', bi === currentGalIdx);
        });
      }
    }

    function scrollGalleryTo(idx) {
      if (!gal || !imgs.length) return;
      const targetIdx = ((idx % imgs.length) + imgs.length) % imgs.length;
      const slideWidth = gal.clientWidth || window.innerWidth;
      gal.scrollTo({ left: targetIdx * slideWidth, behavior: 'smooth' });
      updateMobileGalleryState(targetIdx);
    }

    if (imgs.length > 1) {
      if (galBadge) {
        galBadge.style.display = '';
        galBadge.textContent = '1 / ' + imgs.length;
      }
      if (galPrev) {
        galPrev.style.display = '';
        galPrev.addEventListener('click', function(e) {
          e.stopPropagation();
          scrollGalleryTo(currentGalIdx - 1);
        });
      }
      if (galNext) {
        galNext.style.display = '';
        galNext.addEventListener('click', function(e) {
          e.stopPropagation();
          scrollGalleryTo(currentGalIdx + 1);
        });
      }
      if (thumbsEl) {
        thumbsEl.classList.add('has-multiple');
        thumbsEl.innerHTML = imgs.map(function(url, i) {
          return '<button type="button" class="dp-thumb-btn ' + (i === 0 ? 'active' : '') + '" data-thumb="' + i + '" aria-label="View angle ' + (i + 1) + ' of ' + imgs.length + '">' +
            '<img src="' + esc(url) + '" alt="" width="54" height="72" loading="lazy" decoding="async"/>' +
          '</button>';
        }).join('');
        thumbsEl.querySelectorAll('[data-thumb]').forEach(function(btn) {
          btn.addEventListener('click', function() {
            const idx = parseInt(btn.dataset.thumb, 10);
            scrollGalleryTo(idx);
          });
        });
      }

      gal.addEventListener('scroll', function() {
        const w = gal.clientWidth;
        if (w > 0) {
          const idx = Math.round(gal.scrollLeft / w);
          if (idx !== currentGalIdx) {
            updateMobileGalleryState(idx);
          }
        }
      }, { passive: true });
    }

    // Gallery click -> lightbox
    gal.querySelectorAll('[data-lb]').forEach(function(el) {
      el.addEventListener('click', function() { openLb(parseInt(el.dataset.lb, 10)); });
    });
    if (galZoomBtn) {
      galZoomBtn.addEventListener('click', function() { openLb(currentGalIdx); });
    }

    /* ── Previous / Next Dress Navigation (Catalog Context + JSON Fallback) ── */
    async function initNeighborNavigation() {
      let fullList = null;
      try {
        const res = await fetch(catFiles[activeCat] || catFiles.bridal);
        if (res.ok) fullList = await res.json();
      } catch (e) {}

      let ctx = null;
      try { ctx = JSON.parse(sessionStorage.getItem('cloudnine_dress_context') || 'null'); } catch (e) {}

      let orderedList = null;
      let curIdx = -1;

      if (ctx && ctx.cat === activeCat && Array.isArray(ctx.skus) && ctx.skus.length > 1 && Array.isArray(fullList)) {
        const bySku = new Map();
        fullList.forEach(p => { bySku.set(String(p.s || '').toLowerCase() + '|' + String(p.d || '').toLowerCase(), p); });
        orderedList = ctx.skus
          .map(item => bySku.get(String(item.s || '').toLowerCase() + '|' + String(item.d || '').toLowerCase()) || fullList.find(p => String(p.s || '') === String(item.s || '')))
          .filter(Boolean);
        curIdx = orderedList.findIndex(p => String(p.s || '') === String(dress.s || ''));
      }

      if ((!orderedList || curIdx === -1) && Array.isArray(fullList) && fullList.length > 1) {
        orderedList = fullList;
        curIdx = orderedList.findIndex(p => String(p.s || '').toLowerCase() === String(dress.s || '').toLowerCase());
      }

      if (!orderedList || curIdx === -1 || orderedList.length <= 1) return;

      const prevDress = curIdx > 0 ? orderedList[curIdx - 1] : null;
      const nextDress = curIdx + 1 < orderedList.length ? orderedList[curIdx + 1] : null;

      function navigateToDress(target, targetIdx) {
        if (!target) return;
        try {
          sessionStorage.setItem('cloudnine_dress', JSON.stringify(target));
          sessionStorage.setItem('cloudnine_dress_context', JSON.stringify({
            cat: activeCat,
            idx: targetIdx,
            total: orderedList.length,
            skus: orderedList.map(p => ({ s: p.s || '', d: p.d || '', gn: p.gn || '' }))
          }));
          // Also update saved catalog state SKU so Back to Catalog highlights the latest viewed dress
          const stateKey = 'cloudnine_catalog_state_' + activeCat;
          const rawState = sessionStorage.getItem(stateKey);
          if (rawState) {
            const parsedState = JSON.parse(rawState);
            parsedState.sku = target.s || '';
            parsedState.ts = Date.now();
            sessionStorage.setItem(stateKey, JSON.stringify(parsedState));
          }
        } catch (e) {}
        const sku = encodeURIComponent(target.s || '');
        const des = encodeURIComponent(target.d || '');
        window.location.href = `dress.html?cat=${activeCat}&sku=${sku}${des ? `&d=${des}` : ''}`;
      }

      // 1. Populate Mobile Topbar Quick Stepper
      const quickNav = document.getElementById('dpMobileQuickNav');
      const posEl = document.getElementById('dpMobilePos');
      const mPrev = document.getElementById('dpMobilePrevDress');
      const mNext = document.getElementById('dpMobileNextDress');
      if (quickNav && posEl && mPrev && mNext) {
        quickNav.style.display = 'inline-flex';
        posEl.textContent = `${curIdx + 1} / ${orderedList.length}`;
        mPrev.disabled = !prevDress;
        mNext.disabled = !nextDress;
        if (prevDress) mPrev.onclick = () => navigateToDress(prevDress, curIdx - 1);
        if (nextDress) mNext.onclick = () => navigateToDress(nextDress, curIdx + 1);
      }

      // 2. Populate Bottom Editorial Neighbor Cards
      const navEl = document.getElementById('dpNeighborNav');
      if (navEl) {
        const formatLabel = (p) => p.gn ? p.gn : ('#' + (p.s || ''));
        const prevHtml = prevDress
          ? `<a href="dress.html?cat=${activeCat}&sku=${encodeURIComponent(prevDress.s || '')}" class="dp-neighbor-btn is-prev" data-dir="prev">
               <span class="dp-neighbor-dir">&larr; Previous Style</span>
               <span class="dp-neighbor-name">${esc(formatLabel(prevDress))}</span>
             </a>`
          : `<div></div>`;
        const nextHtml = nextDress
          ? `<a href="dress.html?cat=${activeCat}&sku=${encodeURIComponent(nextDress.s || '')}" class="dp-neighbor-btn is-next" data-dir="next">
               <span class="dp-neighbor-dir">Next Style &rarr;</span>
               <span class="dp-neighbor-name">${esc(formatLabel(nextDress))}</span>
             </a>`
          : `<div></div>`;
        navEl.innerHTML = prevHtml + nextHtml;

        const prevBtn = navEl.querySelector('[data-dir="prev"]');
        const nextBtn = navEl.querySelector('[data-dir="next"]');
        if (prevBtn && prevDress) {
          prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToDress(prevDress, curIdx - 1);
          });
        }
        if (nextBtn && nextDress) {
          nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navigateToDress(nextDress, curIdx + 1);
          });
        }
      }
    }
    initNeighborNavigation();

    /* ── Lightbox (Lace & Fabric Detail Inspector) ── */
    let lbIdx = 0;
    const lbEl   = document.getElementById('lb');
    const lbImg  = document.getElementById('lbImg');
    const lbCtr  = document.getElementById('lbCounter');
    const lbTtl  = document.getElementById('lbTitle');
    const lbZoomPill = document.getElementById('lbZoomPill');
    const lbImgWrap  = document.getElementById('lbImgWrap');

    let currentScale = 1;
    let panX = 0;
    let panY = 0;
    let lastTap = 0;
    let pinchStartDist = 0;
    let pinchStartScale = 1;
    let touchStartX = 0;
    let touchStartY = 0;
    let panStartX = 0;
    let panStartY = 0;
    let isPanning = false;
    let isPinching = false;

    function applyTransform(animate) {
      if (!lbImg) return;
      lbImg.style.transition = animate ? 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
      lbImg.style.transform = 'translate3d(' + panX + 'px, ' + panY + 'px, 0) scale(' + currentScale + ')';
      if (lbZoomPill) {
        if (currentScale > 1.1) {
          lbZoomPill.textContent = 'Double-tap or pinch to reset view';
          lbImg.style.cursor = 'zoom-out';
        } else {
          lbZoomPill.textContent = 'Double-tap or pinch to inspect lace details';
          lbImg.style.cursor = 'zoom-in';
        }
      }
    }

    function resetZoom(animate) {
      currentScale = 1;
      panX = 0;
      panY = 0;
      applyTransform(animate);
    }

    function lbSet(i) {
      resetZoom(false);
      lbIdx = ((i % imgs.length) + imgs.length) % imgs.length;
      lbImg.src = imgs[lbIdx];
      if (lbCtr) lbCtr.textContent = (lbIdx+1) + ' / ' + imgs.length;
      if (lbTtl) lbTtl.textContent = (dress.d||'') + ' #' + (dress.s||'');
    }

    function openLb(i) {
      lbSet(i);
      lbEl.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLbFn() {
      resetZoom(false);
      lbEl.classList.remove('open');
      document.body.style.overflow = '';
    }

    document.getElementById('lbCloseBtn').addEventListener('click', closeLbFn);
    document.getElementById('lbPrevBtn').addEventListener('click', function(e) { e.stopPropagation(); lbSet(lbIdx - 1); });
    document.getElementById('lbNextBtn').addEventListener('click', function(e) { e.stopPropagation(); lbSet(lbIdx + 1); });
    lbEl.addEventListener('click', function(e) {
      if (e.target === lbEl || e.target === lbImgWrap) closeLbFn();
    });

    // Desktop click-to-zoom inspector
    if (lbImg) {
      lbImg.addEventListener('click', function(e) {
        e.stopPropagation();
        if (currentScale > 1.1) {
          resetZoom(true);
        } else {
          currentScale = 2.4;
          const rect = lbImg.getBoundingClientRect();
          panX = (rect.left + rect.width / 2 - e.clientX) * 1.1;
          panY = (rect.top + rect.height / 2 - e.clientY) * 1.1;
          applyTransform(true);
        }
      });
    }

    // Touch physics: Double-tap, Pinch-to-zoom (up to 3.8x), and Pan
    if (lbImgWrap) {
      lbImgWrap.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
          const now = Date.now();
          if (now - lastTap < 300) {
            // Double-tap detected
            if (currentScale > 1.1) {
              resetZoom(true);
            } else {
              currentScale = 2.4;
              const rect = lbImg.getBoundingClientRect();
              const touchX = e.touches[0].clientX;
              const touchY = e.touches[0].clientY;
              panX = (rect.left + rect.width / 2 - touchX) * 1.2;
              panY = (rect.top + rect.height / 2 - touchY) * 1.2;
              applyTransform(true);
            }
            lastTap = 0;
            return;
          }
          lastTap = now;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          panStartX = panX;
          panStartY = panY;
          isPanning = currentScale > 1.05;
        } else if (e.touches.length === 2) {
          isPinching = true;
          isPanning = false;
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          pinchStartDist = Math.hypot(dx, dy);
          pinchStartScale = currentScale;
        }
      }, { passive: true });

      lbImgWrap.addEventListener('touchmove', function(e) {
        if (isPinching && e.touches.length === 2) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          const dist = Math.hypot(dx, dy);
          if (pinchStartDist > 0) {
            currentScale = Math.min(Math.max(pinchStartScale * (dist / pinchStartDist), 1), 3.8);
            applyTransform(false);
          }
        } else if (isPanning && e.touches.length === 1) {
          const deltaX = e.touches[0].clientX - touchStartX;
          const deltaY = e.touches[0].clientY - touchStartY;
          const maxPanX = (window.innerWidth * (currentScale - 1)) / 1.4;
          const maxPanY = (window.innerHeight * (currentScale - 1)) / 1.4;
          panX = Math.max(-maxPanX, Math.min(maxPanX, panStartX + deltaX));
          panY = Math.max(-maxPanY, Math.min(maxPanY, panStartY + deltaY));
          applyTransform(false);
        }
      }, { passive: true });

      lbImgWrap.addEventListener('touchend', function(e) {
        if (isPinching) {
          isPinching = false;
          if (currentScale < 1.08) resetZoom(true);
        } else if (currentScale <= 1.05) {
          const deltaX = (e.changedTouches[0] ? e.changedTouches[0].clientX : 0) - touchStartX;
          if (Math.abs(deltaX) > 48) {
            lbSet(lbIdx + (deltaX < 0 ? 1 : -1));
          }
        }
      }, { passive: true });
    }

    document.addEventListener('keydown', function(e) {
      if (!lbEl.classList.contains('open')) return;
      if (e.key === 'Escape')     closeLbFn();
      if (e.key === 'ArrowRight') lbSet(lbIdx + 1);
      if (e.key === 'ArrowLeft')  lbSet(lbIdx - 1);
    });

    /* ── Recently Viewed — store in localStorage (max 8) ── */
    (function() {
      var RV_KEY = 'cloudnine_recentlyViewed';
      try {
        var stored = JSON.parse(localStorage.getItem(RV_KEY) || '[]');
        var id = (dress.s||'') + '|' + (dress.d||'');
        stored = stored.filter(function(x) { return ((x.s||'')+'|'+(x.d||'')) !== id; });
        var catBase = (dressSrc || '').split('?')[0] || 'bridal-catalog.html';
        stored.unshift({ s: dress.s, d: dress.d, i: dress.i, x: dress.x || [], _cat: catBase, _type: activeCat });
        if (stored.length > 8) stored = stored.slice(0, 8);
        localStorage.setItem(RV_KEY, JSON.stringify(stored));
      } catch(e) {}
    })();

    /* ── Share Functionality (Mobile Sticky & Desktop) ── */
    function handleGownShare() {
      const url   = shareCanonicalUrl;
      const title = (dress.d||'') + ' Style #' + (dress.s||'') + ' — Cloud Nine Bridal Boutique';
      const text  = 'Check out this style from ' + (dress.d||'Cloud Nine') + ' at Cloud Nine Bridal Boutique in Peoria, IL!';
      if (navigator.share) {
        navigator.share({ title: title, text: text, url: url }).catch(function(){});
      } else if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function() {
          if (shareBtn) {
            const orig = shareBtn.innerHTML;
            shareBtn.innerHTML = 'Link Copied!';
            shareBtn.style.color = 'var(--teal-deep)';
            shareBtn.style.borderColor = 'var(--teal-mid)';
            setTimeout(function() {
              shareBtn.innerHTML = orig;
              shareBtn.style.color = '';
              shareBtn.style.borderColor = '';
            }, 2500);
          }
          if (typeof WL !== 'undefined' && WL.showToast) {
            WL.showToast(true, { d: 'Gown Link Copied' });
          }
        }).catch(function(){});
      }
    }

    const shareBtn = document.getElementById('dpShareBtn');
    if (shareBtn) shareBtn.addEventListener('click', handleGownShare);

    const mShareBtn = document.getElementById('dpMobileShareBtn');
    if (mShareBtn) mShareBtn.addEventListener('click', handleGownShare);

    /* ── Accordion toggle ── */
    window.toggleAcc = function(btn) {
      const item = btn.closest('.dp-acc-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.dp-acc-item.open').forEach(function(el) { el.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    };

  })();

/**
 * Cloud Nine Bridal — Unified Catalog Engine
 * Version: 2026.2.0
 * 
 * Reusable, high-performance catalog management system for Bridal, Prom,
 * Homecoming, and Mother of the Bride collections.
 * 
 * Features:
 * - Dynamic Multi-Facet Filtering (Silhouette, Designer, Trend, etc.)
 * - Tokenized Search with Semantic Synonyms
 * - Desktop Dropdown Popovers & Mobile Filter Sheet
 * - Angle Scrubbing with Image Preload on Hover
 * - Full Pagination & Filter State in URL Query Params
 * - Accessible Modal Quick-View with Keyboard & Focus Trapping
 * - Wishlist / Lookbook Deep-Linking Integration
 * - High School 1-of-1 Registry Integration with Session Storage
 * - Grid Column Density (3 vs 4 columns) with LocalStorage
 * - Sticky Filter Bar with IntersectionObserver Detection
 */

class CloudNineCatalog {
  constructor(config = {}) {
    this.category = config.category || 'bridal';
    this.dataPath = config.dataPath || 'data/bridal-products.json';
    this.pageSize = config.pageSize || 24;
    this.facets = config.facets || ['sil', 'des'];
    this.facetLabels = config.facetLabels || { sil: 'Silhouette', des: 'Designer' };
    this.synonyms = config.synonyms || {};
    this.schoolRegistry = config.schoolRegistry || (this.category === 'prom' || this.category === 'hoco');
    this.gridId = config.gridId || 'pg';
    this.countId = config.countId || 'cc';
    this.paginationId = config.paginationId || 'pag';
    this.modalBackdropId = config.modalBackdropId || 'mb';
    
    // State
    this.P = [];
    this.fil = [];
    this.dataLoaded = false;
    this.page = 0;
    this.searchQuery = '';
    this.selectedSchool = '';
    this.activeFilters = {};
    this.facets.forEach(f => { this.activeFilters[f] = 'all'; });
    
    // Modal Gallery State
    this.curImgs = [];
    this.curIdx = 0;
    this.currentModalDress = null;
    this.lastFocused = null;

    // Bind instance methods
    this.init();
  }

  async init() {
    this.exposeGlobalAPIs();
    this.initStickyObserver();
    this.initDensityToggle();
    this.initSchoolRegistry();
    this.initGlobalListeners();
    await this.loadData();
  }

  exposeGlobalAPIs() {
    window.catalogInstance = this;
    window.setFilter = (type, val, closePop, e) => this.setFilter(type, val, closePop, e);
    window.toggleFacetDropdown = (facet, e) => this.toggleFacetDropdown(facet, e);
    window.closeAllFacetDropdowns = () => this.closeAllFacetDropdowns();
    window.openMobileFilters = () => this.openMobileFilters();
    window.closeMobileFilters = (e) => this.closeMobileFilters(e);
    window.clearAllFilters = () => this.clearAllFilters();
    window.removeFilter = (type) => this.removeFilter(type);
    window.resetFacet = (type, e) => this.resetFacet(type, e);
    window.goToDress = (idx, el) => this.goToDress(idx, el);
    window.openModal = (idx) => this.openModal(idx);
    window.closeModal = () => this.closeModal();
    window.shiftImg = (dir) => this.shiftImg(dir);
    window.showImg = (i) => this.showImg(i);
    window.onSchoolSelect = (school) => this.onSelectSchool(school);
    window.onSelectSchool = (school) => this.onSelectSchool(school);
    window.toggleModalWishlist = () => this.toggleModalWishlist();
    window.setDensity = (n) => this.setDensity(n);
  }

  initGlobalListeners() {
    // Dismiss popovers on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.filter-facet-dropdown')) {
        this.closeAllFacetDropdowns();
      }
    });

    // Escape and Arrow key listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllFacetDropdowns();
        this.closeMobileFilters();
        if (document.getElementById(this.modalBackdropId)?.classList.contains('open')) {
          this.closeModal();
        }
      }
      const mb = document.getElementById(this.modalBackdropId);
      if (mb && mb.classList.contains('open')) {
        if (e.key === 'ArrowLeft') this.shiftImg(-1);
        if (e.key === 'ArrowRight') this.shiftImg(1);
        if (e.key === 'Tab') this.trapModalFocus(e);
      }
    });

    // Modal backdrop click
    const mb = document.getElementById(this.modalBackdropId);
    if (mb) {
      mb.addEventListener('click', (e) => {
        if (e.target === mb) this.closeModal();
      });
    }

    const closeBtn = (typeof document !== 'undefined' && typeof document.querySelector === 'function')
      ? document.querySelector('.modal-x[aria-label="Close"]')
      : null;
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }
  }

  initStickyObserver() {
    const sentinel = document.getElementById('filterStickySentinel');
    const stickyWrap = document.getElementById('filterStickyWrap') || document.getElementById('fp');
    if (!stickyWrap) return;

    if (sentinel && typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          stickyWrap.classList.toggle('is-stuck', !entry.isIntersecting);
        });
      }, { rootMargin: '-76px 0px 0px 0px', threshold: [0, 1] });
      observer.observe(sentinel);
    } else if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('scroll', () => {
        if (typeof stickyWrap.getBoundingClientRect === 'function') {
          const top = stickyWrap.getBoundingClientRect().top;
          stickyWrap.classList.toggle('is-stuck', top <= 80);
        }
      }, { passive: true });
    }
  }

  initDensityToggle() {
    const grid = document.getElementById(this.gridId);
    const btn3 = document.getElementById('density3');
    const btn4 = document.getElementById('density4');
    if (!grid) return;

    const stored = localStorage.getItem(`cn_${this.category}_density`) || localStorage.getItem('cn_catalog_density') || (this.category === 'bridal' ? '3' : '4');
    this.setDensity(stored);

    if (btn3) btn3.addEventListener('click', () => this.setDensity('3'));
    if (btn4) btn4.addEventListener('click', () => this.setDensity('4'));
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      window.addEventListener('resize', () => {
        const cur = localStorage.getItem(`cn_${this.category}_density`) || localStorage.getItem('cn_catalog_density') || (this.category === 'bridal' ? '3' : '4');
        this.setDensity(cur);
      });
    }
  }

  setDensity(n) {
    const cols = parseInt(n, 10);
    const grid = document.getElementById(this.gridId);
    const btn3 = document.getElementById('density3');
    const btn4 = document.getElementById('density4');
    if (grid) {
      grid.classList.toggle('grid-3', cols === 3);
      grid.classList.toggle('grid-4', cols === 4);
      if (window.innerWidth > 900) {
        grid.style.gridTemplateColumns = cols === 4 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)';
      } else {
        grid.style.gridTemplateColumns = '';
      }
    }
    if (btn3) btn3.setAttribute('aria-pressed', cols === 3 ? 'true' : 'false');
    if (btn4) btn4.setAttribute('aria-pressed', cols === 4 ? 'true' : 'false');
    localStorage.setItem(`cn_${this.category}_density`, cols.toString());
    localStorage.setItem('cn_catalog_density', cols.toString());
  }

  initSchoolRegistry() {
    if (!this.schoolRegistry) return;
    const saved = sessionStorage.getItem('cloudnine_prom_school') || '';
    if (saved) {
      this.selectedSchool = saved;
      const select = document.getElementById('registrySchoolSelect') || document.getElementById('schoolSelect');
      if (select) select.value = saved;
      this.updateSchoolUI(saved);
    }
  }

  onSelectSchool(school) {
    this.selectedSchool = school || '';
    if (school) {
      sessionStorage.setItem('cloudnine_prom_school', school);
    } else {
      sessionStorage.removeItem('cloudnine_prom_school');
    }
    this.updateSchoolUI(this.selectedSchool);
    this.renderPage();
  }

  updateSchoolUI(school) {
    const nameEl = document.getElementById('activeSchoolName');
    const descEl = document.getElementById('registryDescText');
    const bookBtn = document.getElementById('registryBookBtn');
    if (!nameEl || !descEl) return;

    if (school) {
      nameEl.textContent = `Registry Protected: ${school}`;
      if (this.category === 'prom') {
        descEl.textContent = `When you purchase your prom gown at Cloud Nine, we register it for ${school} so no one else from your school can purchase the same style.`;
        if (bookBtn) bookBtn.href = 'prom.html#visit';
      } else {
        descEl.textContent = `When you reserve or try on a homecoming dress at Cloud Nine, we register it for ${school} so no one else from your school can wear the same style.`;
        if (bookBtn) bookBtn.href = `appointments.html?school=${encodeURIComponent(school)}&cat=hoco`;
      }
    } else {
      nameEl.textContent = this.category === 'hoco' ? 'HOCO School Registry Protection' : 'School Registry Protection';
      descEl.textContent = this.category === 'hoco'
        ? 'Select your high school to activate style protection. When you claim a gown, we lock it against anyone else from your school.'
        : 'Select your high school to activate style protection. When you purchase a gown, we lock it against anyone else from your school.';
      if (bookBtn) bookBtn.href = this.category === 'hoco' ? 'appointments.html?cat=hoco' : 'prom.html#visit';
    }
  }

  showSkeletons(n = 12) {
    const grid = document.getElementById(this.gridId);
    if (!grid) return;
    grid.innerHTML = Array(n).fill(0).map(() => `
      <div class="dress-card-skeleton" aria-hidden="true">
        <div class="dress-card-skeleton-img"></div>
        <div class="dress-card-skeleton-footer">
          <div class="dress-card-skeleton-line dress-card-skeleton-line--short"></div>
          <div class="dress-card-skeleton-line"></div>
        </div>
      </div>`).join('');
    const cc = document.getElementById(this.countId);
    if (cc) cc.textContent = 'Loading collection…';
  }

  async loadData() {
    this.showSkeletons(12);
    try {
      const res = await fetch(this.dataPath);
      if (!res.ok) throw new Error('Failed to load catalog data');
      this.P = await res.json();
      this.dataLoaded = true;
      this.fil = this.P.slice();

      this.initMobileSheet();
      this.hydrateFromUrl();
      this.handleLookbookParam();
      this.applyFilters();
    } catch (err) {
      console.error('Catalog data failed to load:', err);
      const grid = document.getElementById(this.gridId);
      if (grid) {
        grid.innerHTML = `
          <div class="catalog-error-state">
            <p>We couldn't load the collection right now.<br/>
            Please <button onclick="location.reload()" style="background:none;border:none;color:var(--teal-deep);cursor:pointer;font-size:15px;text-decoration:underline;">try again</button> or <a href="contact.html">contact us directly</a>.</p>
          </div>`;
      }
      const cc = document.getElementById(this.countId);
      if (cc) cc.textContent = '';
    }
  }

  initMobileSheet() {
    this.facets.forEach(facet => {
      const cap = facet.charAt(0).toUpperCase() + facet.slice(1);
      const container = document.getElementById(`mobile${cap}Chips`);
      const row = document.getElementById(`${facet}-row`);
      if (!container || !row || typeof row.querySelectorAll !== 'function') return;

      container.innerHTML = Array.from(row.querySelectorAll('.filter-popover-chip')).map(btn => {
        const val = btn.dataset.value;
        const nameEl = btn.querySelector('.popover-chip-name');
        const name = nameEl ? nameEl.textContent : val;
        const safeVal = val.replace(/'/g, "\\'");
        const isActive = (val.toLowerCase() === (this.activeFilters[facet] || '').toLowerCase());
        return `<button type="button" class="filter-sheet-chip ${isActive ? 'active' : ''}" data-filter="${facet}" data-value="${val}" onclick="setFilter('${facet}', '${safeVal}', false)">
          <span>${name}</span>
          <span class="chip-count"></span>
        </button>`;
      }).join('');
    });
  }

  hydrateFromUrl() {
    if (typeof window === 'undefined' || !window.location) return;
    const urlParams = new URLSearchParams(window.location.search || '');
    
    // Facet params
    const facetAliases = {
      des: ['designer', 'des', 'd'],
      sil: ['sil', 'silhouette'],
      trend: ['trend', 'style']
    };

    this.facets.forEach(facet => {
      const aliases = facetAliases[facet] || [facet];
      let val = null;
      for (const alias of aliases) {
        val = urlParams.get(alias);
        if (val) break;
      }
      if (val) {
        const matchChip = this.getChip(facet, val);
        this.activeFilters[facet] = matchChip ? matchChip.dataset.value : val;
      }
    });

    // Search query
    const qParam = urlParams.get('q') || urlParams.get('search');
    if (qParam) {
      this.searchQuery = qParam.trim().toLowerCase();
      const searchInput = document.getElementById('catalogSearchInput');
      if (searchInput) searchInput.value = qParam.trim();
    }
  }

  handleLookbookParam() {
    if (typeof window === 'undefined' || !window.location) return;
    const urlParams = new URLSearchParams(window.location.search || '');
    const lookbookParam = urlParams.get('lookbook');
    if (!lookbookParam || typeof WL === 'undefined') return;

    const skus = lookbookParam.split(',').map(s => decodeURIComponent(s.trim().toLowerCase()));
    const matches = this.P.filter(p => skus.includes((p.s || '').toLowerCase()));
    if (matches.length > 0) {
      const existing = WL.load();
      const existingIds = new Set(existing.map(x => (x.s || '') + '|' + (x.d || '')));
      let added = 0;
      matches.forEach(m => {
        const id = (m.s || '') + '|' + (m.d || '');
        if (!existingIds.has(id)) {
          existing.push(m);
          added++;
        }
      });
      if (added > 0) {
        try { localStorage.setItem('cloudnine_wishlist', JSON.stringify(existing)); } catch(e) {}
        WL.updateBadge();
      }
      setTimeout(() => {
        if (WL && WL.openLookbook) WL.openLookbook();
      }, 500);
    }
  }

  getChip(facet, val) {
    if (!val || val === 'all') return null;
    const v = val.toLowerCase();
    return Array.from(document.querySelectorAll(`.filter-popover-chip[data-filter="${facet}"]`))
      .find(b => (b.dataset.value || '').toLowerCase() === v) || null;
  }

  toggleFacetDropdown(facet, e) {
    if (e) {
      e.stopPropagation();
      if (e.preventDefault) e.preventDefault();
    }
    const cap = facet.charAt(0).toUpperCase() + facet.slice(1);
    const dropdown = document.getElementById(`dropdown${cap}`);
    if (!dropdown) return;
    const wasOpen = dropdown.classList.contains('is-open');
    this.closeAllFacetDropdowns();
    if (!wasOpen) {
      dropdown.classList.add('is-open');
      const trigger = dropdown.querySelector('.filter-trigger-btn');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    }
  }

  closeAllFacetDropdowns() {
    document.querySelectorAll('.filter-facet-dropdown').forEach(dd => {
      dd.classList.remove('is-open');
      const trigger = dd.querySelector('.filter-trigger-btn');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  openMobileFilters() {
    this.closeAllFacetDropdowns();
    const backdrop = document.getElementById('filterSheetBackdrop');
    if (backdrop) backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeMobileFilters(e) {
    if (e && e.target && e.target !== document.getElementById('filterSheetBackdrop') &&
        !e.target.classList.contains('filter-sheet-close') &&
        !e.target.classList.contains('filter-sheet-btn-apply') &&
        !e.target.classList.contains('filter-sheet-btn-clear')) {
      return;
    }
    const backdrop = document.getElementById('filterSheetBackdrop');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  setFilter(type, value, closePopover = true, e) {
    if (e && e.stopPropagation) e.stopPropagation();

    if (this.activeFilters.hasOwnProperty(type)) {
      const current = this.activeFilters[type];
      this.activeFilters[type] = (current.toLowerCase() === value.toLowerCase() && value !== 'all') ? 'all' : value;
    }

    this.syncChipStates();

    if (closePopover && window.innerWidth > 860) {
      this.closeAllFacetDropdowns();
    }

    this.applyFilters();
  }

  resetFacet(type, e) {
    this.setFilter(type, 'all', true, e);
  }

  syncChipStates() {
    this.facets.forEach(type => {
      const activeVal = (this.activeFilters[type] || 'all').toLowerCase();
      document.querySelectorAll(`[data-filter="${type}"]`).forEach(btn => {
        btn.classList.toggle('active', (btn.dataset.value || '').toLowerCase() === activeVal);
      });
    });
  }

  matchesSearch(p, q) {
    if (!q || !q.trim()) return true;
    const tokens = q.trim().toLowerCase().split(/\s+/).filter(Boolean);
    
    const doc = [
      p.s || '',
      p.d || '',
      p.n || '',
      p.sil || '',
      p.tr || '',
      p.trend || '',
      (p.f || []).join(' '),
      (p.nk || []).join(' '),
      (p.v || []).join(' '),
      p.c || ''
    ].join(' ').toLowerCase();

    return tokens.every(tok => {
      if (doc.includes(tok)) return true;
      const syns = this.synonyms[tok];
      if (syns && syns.some(syn => doc.includes(syn))) return true;
      return false;
    });
  }

  matchesFilter(p, candidateFilters, q) {
    for (const facet of this.facets) {
      const val = candidateFilters[facet] || 'all';
      if (val === 'all') continue;

      if (facet === 'sil') {
        if ((p.sil || '').toLowerCase() !== val.toLowerCase()) return false;
      } else if (facet === 'des') {
        if ((p.d || '').toLowerCase() !== val.toLowerCase()) return false;
      } else if (facet === 'trend') {
        const valLower = val.toLowerCase();
        const text = ((p.c || '') + ' ' + (p.sil || '') + ' ' + (p.n || '') + ' ' + (p.tr || '') + ' ' + (p.trend || '')).toLowerCase();
        let trendMatch = false;
        if (p.trend && p.trend.toLowerCase() === valLower) {
          trendMatch = true;
        } else if (p.tr && p.tr.toLowerCase() === valLower) {
          trendMatch = true;
        } else if (valLower === 'satin') {
          trendMatch = text.includes('satin') || text.includes('charmeuse') || text.includes('liquid') || text.includes('silk');
        } else if (valLower === 'corset') {
          trendMatch = text.includes('corset') || text.includes('boned') || text.includes('lace-up') || text.includes('lace up') || text.includes('basque');
        } else if (valLower === 'sparkle') {
          trendMatch = text.includes('bead') || text.includes('sequin') || text.includes('sparkle') || text.includes('glitter') || text.includes('stone') || text.includes('shimmer');
        } else if (valLower === 'ballgown') {
          trendMatch = text.includes('ball') || text.includes('tulle') || text.includes('flared') || text.includes('volume');
        } else if (valLower === 'slit') {
          trendMatch = text.includes('slit') || text.includes('halter') || text.includes('cutout') || text.includes('open back');
        } else if (valLower === 'fitted') {
          trendMatch = text.includes('fitted') || text.includes('bodycon') || text.includes('sheath') || text.includes('tight');
        } else if (valLower === 'flare') {
          trendMatch = text.includes('flare') || text.includes('a-line') || text.includes('skater') || text.includes('pleat');
        } else {
          trendMatch = text.includes(valLower);
        }
        if (!trendMatch) return false;
      }
    }
    if (q && !this.matchesSearch(p, q)) return false;
    return true;
  }

  updateChipCounts() {
    this.facets.forEach(facet => {
      document.querySelectorAll(`[data-filter="${facet}"]`).forEach(btn => {
        const val = btn.dataset.value;
        const candidate = { ...this.activeFilters, [facet]: val };
        const count = this.P.filter(p => this.matchesFilter(p, candidate, this.searchQuery)).length;
        
        btn.classList.toggle('disabled', count === 0 && val !== 'all' && val.toLowerCase() !== (this.activeFilters[facet] || '').toLowerCase());
        const countEl = btn.querySelector('.chip-count');
        if (countEl) countEl.textContent = `(${count})`;
      });
    });
  }

  updateTriggerLabels() {
    this.facets.forEach(facet => {
      const cap = facet.charAt(0).toUpperCase() + facet.slice(1);
      const btn = document.getElementById(`trigger${cap}`);
      const label = document.getElementById(`label${cap}`);
      if (!btn || !label) return;

      const activeVal = this.activeFilters[facet];
      const defaultLabel = this.facetLabels[facet] || cap;

      if (activeVal === 'all') {
        label.textContent = defaultLabel;
        btn.classList.remove('has-value');
      } else {
        const chip = this.getChip(facet, activeVal);
        const name = chip ? (chip.querySelector('.popover-chip-name') ? chip.querySelector('.popover-chip-name').textContent.trim() : chip.dataset.value) : activeVal;
        label.textContent = name;
        btn.classList.add('has-value');
      }
    });
  }

  renderActiveTray() {
    const activeTray = document.getElementById('activeFilterTray');
    const pillsList = document.getElementById('activePillsList');
    const mobileBadge = document.getElementById('mobileFilterBadge');

    const activeList = [];
    this.facets.forEach(facet => {
      const activeVal = this.activeFilters[facet];
      if (activeVal !== 'all') {
        const chip = this.getChip(facet, activeVal);
        const label = chip ? (chip.querySelector('.popover-chip-name') ? chip.querySelector('.popover-chip-name').textContent.trim() : chip.dataset.value) : activeVal;
        activeList.push({ type: facet, label: label });
      }
    });

    if (this.searchQuery.length > 0) {
      activeList.push({ type: 'search', label: `"${this.searchQuery}"` });
    }

    if (mobileBadge) {
      const count = activeList.length;
      mobileBadge.textContent = count;
      mobileBadge.classList.toggle('has-count', count > 0);
    }

    if (!activeTray || !pillsList) return;

    if (activeList.length === 0) {
      activeTray.style.display = 'none';
      pillsList.innerHTML = '';
    } else {
      activeTray.style.display = 'flex';
      pillsList.innerHTML = activeList.map(f => `
        <button type="button" class="filter-active-pill" onclick="removeFilter('${f.type}')" title="Remove ${f.label}">
          <span>${f.label}</span>
          <span class="filter-active-pill-x">x</span>
        </button>
      `).join('');
    }
  }

  removeFilter(type) {
    if (type === 'search') {
      this.searchQuery = '';
      const searchInput = document.getElementById('catalogSearchInput');
      if (searchInput) searchInput.value = '';
      this.applyFilters();
    } else {
      this.setFilter(type, 'all', false);
    }
  }

  updateClearBtn() {
    const clr = document.getElementById('clearFilters');
    const isFiltered = this.facets.some(f => this.activeFilters[f] !== 'all') || this.searchQuery.length > 0;
    if (clr) clr.classList.toggle('visible', isFiltered);
  }

  updateUrlParams() {
    if (typeof window === 'undefined' || !window.history || !window.history.replaceState || !window.location) return;
    const params = new URLSearchParams(window.location.search || '');

    this.facets.forEach(facet => {
      const val = this.activeFilters[facet];
      if (val !== 'all') {
        params.set(facet === 'des' ? 'designer' : facet, val);
      } else {
        params.delete(facet);
        if (facet === 'des') params.delete('designer');
      }
    });

    if (this.searchQuery) params.set('q', this.searchQuery);
    else { params.delete('q'); params.delete('search'); }

    params.delete('detail');

    const newSearch = params.toString();
    const newUrl = window.location.pathname + (newSearch ? '?' + newSearch : '');
    window.history.replaceState(null, '', newUrl);
  }

  clearAllFilters() {
    this.facets.forEach(f => { this.activeFilters[f] = 'all'; });
    this.searchQuery = '';
    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) searchInput.value = '';

    this.syncChipStates();
    this.closeAllFacetDropdowns();
    this.applyFilters();
  }

  applyFilters() {
    this.fil = this.P.filter(p => this.matchesFilter(p, this.activeFilters, this.searchQuery));
    this.updateClearBtn();
    this.updateTriggerLabels();
    this.syncChipStates();
    this.renderActiveTray();
    this.updateChipCounts();
    this.updateUrlParams();
    this.render();
  }

  goToDress(idx, el) {
    const dress = this.fil[idx];
    if (!dress) return;
    sessionStorage.setItem('cloudnine_dress', JSON.stringify(dress));
    sessionStorage.setItem('cloudnine_dress_src', location.pathname.split('/').pop() + location.search);
    const sku = encodeURIComponent(dress.s || '');
    const des = encodeURIComponent(dress.d || '');
    if (el) {
      const img = el.querySelector('img');
      if (img) img.style.viewTransitionName = 'dress-hero';
    }
    window.location.href = `dress.html?cat=${this.category}&sku=${sku}${des ? `&d=${des}` : ''}`;
  }

  render() {
    this.page = 0;
    const cc = document.getElementById(this.countId);
    if (cc) {
      const total = this.fil.length;
      const label = total === this.P.length
        ? `${total} styles`
        : `${total} of ${this.P.length} styles`;
      cc.style.opacity = '0';
      cc.style.transform = 'translateY(-4px)';
      cc.style.transition = 'opacity .2s ease, transform .2s ease';
      setTimeout(() => {
        cc.textContent = 'Showing ' + label;
        cc.style.opacity = '1';
        cc.style.transform = 'translateY(0)';
      }, 180);
    }
    this.renderPage();
  }

  renderPage() {
    const start = this.page * this.pageSize;
    const items = this.fil.slice(start, start + this.pageSize);
    const grid = document.getElementById(this.gridId);
    if (!grid) return;

    if (this.fil.length === 0) {
      grid.innerHTML = `
        <div class="catalog-empty-state">
          <h3 class="catalog-empty-title">No matching styles found</h3>
          <p class="catalog-empty-desc">We couldn't find any styles matching your exact search and filter criteria. Try resetting filters or searching with broader keywords.</p>
          <button class="catalog-empty-btn" onclick="clearAllFilters()">
            Reset All Filters
          </button>
        </div>`;
      this.renderPagination();
      return;
    }

    const frag = document.createDocumentFragment();

    items.forEach((p, i) => {
      const idx = start + i;
      const card = document.createElement('div');
      card.className = 'dress-card';
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', (p.d || '') + ' style ' + (p.s || ''));
      card.dataset.idx = idx;
      card.dataset.product = JSON.stringify({ s: p.s, d: p.d, i: p.i, x: p.x || [], _cat: `${this.category}-catalog.html` });

      const hasAngles = p.x && p.x.length > 1;
      const pipsHtml = hasAngles
        ? `<div class="scrub-pips">${p.x.map((_, pi) => `<span class="scrub-pip ${pi===0?'active':''}"></span>`).join('')}</div>`
        : '';
      const badgeHtml = hasAngles
        ? `<span class="photo-count-badge">${p.x.length} Angles</span>`
        : '';

      if (this.category === 'prom' || this.category === 'hoco') {
        const schoolNote = this.selectedSchool 
          ? `<span>1-of-1 Guarantee for ${this.selectedSchool.replace(' High School','').replace(' Community High','')}</span>`
          : '<span>1-of-1 High School Guarantee</span>';
        const defaultDes = this.category === 'prom' ? 'Designer Prom' : 'Designer HOCO';

        card.innerHTML = `
          <div class="dress-card-img">
            <img src="${p.i}" alt="${(p.d||'')} ${(p.s||'')}" loading="lazy"/>
            ${pipsHtml}
            ${badgeHtml}
          </div>
          <div class="dress-card-body">
            <div class="dress-designer-tag">${p.d || defaultDes}</div>
            <div class="dress-card-name">${p.n && p.n !== p.d ? p.n : ('Style #' + (p.s || ''))}</div>
            <div class="dress-card-school-badge">
              ${schoolNote}
            </div>
          </div>`;
      } else {
        const designerTag = (p.d && this.category !== 'bridal')
          ? `<div class="dress-designer-tag">${p.d}</div>`
          : '';
        const cardTitle = p.n || (p.s ? '#' + p.s : 'Designer Gown');

        card.innerHTML = `
          <div class="dress-card-img">
            <img src="${p.i}" alt="${(p.d||'')} ${(p.s||'')}" loading="lazy"/>
            ${pipsHtml}
            ${badgeHtml}
            ${designerTag}
            <div class="dress-card-overlay"></div>
          </div>
          <div class="dress-card-body">
            <div class="dress-card-name">${cardTitle}</div>
            <div class="dress-card-cta">View Details</div>
          </div>`;
      }

      // Angle scrubbing on hover
      if (hasAngles) {
        let preloaded = false;
        const img = card.querySelector('.dress-card-img img');
        const pips = card.querySelectorAll('.scrub-pip');
        const angles = p.x;

        card.addEventListener('mouseenter', () => {
          if (!preloaded) {
            preloaded = true;
            angles.forEach(src => {
              const pre = new Image();
              pre.src = src;
            });
          }
        });

        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const pct = Math.max(0, Math.min(0.9999, x / rect.width));
          const angleIdx = Math.floor(pct * angles.length);
          if (img && img.src !== angles[angleIdx]) {
            img.src = angles[angleIdx];
          }
          pips.forEach((pip, pi) => {
            pip.classList.toggle('active', pi === angleIdx);
          });
        });

        card.addEventListener('mouseleave', () => {
          if (img) img.src = p.i;
          pips.forEach((pip, pi) => {
            pip.classList.toggle('active', pi === 0);
          });
        });
      }

      frag.appendChild(card);
    });

    grid.innerHTML = '';
    grid.appendChild(frag);

    // Event listeners
    grid.querySelectorAll('.dress-card').forEach(card => {
      const idx = parseInt(card.dataset.idx, 10);
      card.addEventListener('click', () => this.goToDress(idx, card));
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.goToDress(idx, card);
        }
      });
    });

    this.renderPagination();
    if (this.page > 0) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  renderPagination() {
    const total = Math.ceil(this.fil.length / this.pageSize);
    const pag = document.getElementById(this.paginationId);
    if (!pag) return;

    if (total <= 1) {
      pag.innerHTML = '';
      return;
    }

    let html = `<button class="pag-btn" ${this.page===0?'disabled':''} data-page="prev">Prev</button>`;

    for (let i = 0; i < total; i++) {
      if (total > 9) {
        const show = i === 0 || i === total - 1 || Math.abs(i - this.page) <= 1;
        const ellipsisBefore = i === 1 && this.page > 3;
        const ellipsisAfter = i === total - 2 && this.page < total - 4;
        if (ellipsisBefore || ellipsisAfter) {
          html += '<span class="pag-ellipsis">…</span>';
          continue;
        }
        if (!show) continue;
      }
      html += `<button class="pag-btn ${i===this.page?'active':''}" data-page="${i}">${i+1}</button>`;
    }

    html += `<button class="pag-btn" ${this.page===total-1?'disabled':''} data-page="next">Next</button>`;
    pag.innerHTML = html;
    pag.onclick = (e) => {
      const b = e.target.closest('[data-page]');
      if (!b || b.disabled) return;
      const p = b.dataset.page;
      if (p === 'prev') this.goPage(this.page - 1);
      else if (p === 'next') this.goPage(this.page + 1);
      else this.goPage(+p);
    };
  }

  goPage(n) {
    const total = Math.ceil(this.fil.length / this.pageSize);
    if (n < 0 || n >= total) return;
    this.page = n;
    this.renderPage();
  }

  openModal(idx) {
    this.lastFocused = document.activeElement;
    const p = this.fil[idx];
    if (!p) return;
    this.currentModalDress = p;

    this.curImgs = (p.x && p.x.length) ? p.x : [p.i];
    this.curIdx = 0;

    const mDes = document.getElementById('mDesigner');
    const mTitle = document.getElementById('mTitle');
    const mBadge = document.getElementById('mBadge');
    const mDesc = document.getElementById('mDesc');
    const mMeta = document.getElementById('mMeta');

    if (mDes) mDes.textContent = p.d || (this.category === 'prom' ? 'Prom Collection' : (this.category === 'hoco' ? 'Homecoming Collection' : ''));
    if (mTitle) mTitle.textContent = p.n && p.n !== p.d ? p.n : ('Style #' + (p.s || ''));
    if (mBadge) mBadge.textContent = p.s ? `Designer Code: ${p.s}` : '';

    if (mDesc) {
      if (p.c && p.c.trim()) {
        mDesc.textContent = p.c;
      } else if (this.category === 'prom') {
        mDesc.textContent = 'Stunning designer evening gown with sculpted fit and runway finish. Available for exclusive school registry and in-store fitting at Cloud Nine Peoria.';
      } else if (this.category === 'hoco') {
        mDesc.textContent = 'Flirty, fashion-forward homecoming mini designed to make a statement under the lights. Eligible for our exclusive 1-of-1 school registry at Cloud Nine Peoria.';
      } else {
        mDesc.innerHTML = '<em>Not all gowns are kept in store. Contact us to confirm availability, special order options, sizing, and colors. Our stylists will find the right fit and timeline for you.</em>';
      }
    }

    if (mMeta) {
      let metaItems = [];
      if (this.category === 'prom') {
        const school = this.selectedSchool || 'Your Central Illinois High School';
        metaItems = [
          ['Designer', p.d || 'Prom Collection'],
          ['School Lock', `1-of-1 Lock for ${school.replace(' High School','')}`],
          ['Experience', 'Walk-Ins Welcome (No Appt Needed)'],
          ['Location', '4701 N. University St, Peoria IL']
        ];
      } else if (this.category === 'hoco') {
        const school = this.selectedSchool || 'Your Central Illinois High School';
        metaItems = [
          ['Designer', p.d || 'HOCO Designer'],
          ['School Lock', `Exclusive to ${school.replace(' High School','')}`],
          ['Try-On', 'Walk-In Fitting Rooms'],
          ['Availability', 'In-Store & Special Order']
        ];
      } else if (this.category === 'mothers') {
        metaItems = [
          p.sil ? ['Silhouette', this.titleCase(p.sil)] : null,
          p.d ? ['Designer', p.d] : null,
          (p.f && p.f.length) ? ['Fabric', p.f.join(', ')] : null,
          ['Availability', 'In-Store & Special Order'],
          ['Stylist Consultation', 'Recommended']
        ].filter(Boolean);
      } else {
        // Bridal
        metaItems = [
          p.sil ? ['Silhouette', this.titleCase(p.sil)] : null,
          (p.f && p.f.length) ? ['Fabric', p.f.join(', ')] : null,
          (p.nk && p.nk.length) ? ['Neckline', p.nk.join(', ')] : null,
          p.tr ? ['Trend', p.tr] : null,
          ['Availability', 'Contact Us'],
          ['Appointment', 'Recommended']
        ].filter(Boolean);
      }

      mMeta.innerHTML = metaItems.map(([k, v]) =>
        `<div class="m-meta-item"><span class="m-meta-key">${k}</span><span class="m-meta-val">${v}</span></div>`
      ).join('');
    }

    const bookLink = document.getElementById('modalBookLink');
    if (bookLink) {
      if (this.category === 'prom') {
        bookLink.href = 'prom.html#visit';
      } else if (this.category === 'hoco') {
        bookLink.href = `appointments.html?cat=hoco&sku=${encodeURIComponent(p.s||'')}&des=${encodeURIComponent(p.d||'')}${this.selectedSchool ? `&school=${encodeURIComponent(this.selectedSchool)}` : ''}`;
      } else {
        bookLink.href = 'appointments.html';
      }
    }

    this.updateModalWishlistBtn();
    this.renderThumbs();
    this.showImg(0);

    const mb = document.getElementById(this.modalBackdropId);
    if (mb) mb.classList.add('open');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      const closeBtn = document.querySelector('#mo .modal-x');
      if (closeBtn) closeBtn.focus();
    }, 30);
  }

  updateModalWishlistBtn() {
    if (!this.currentModalDress) return;
    const saved = (window.isItemInWishlist && window.isItemInWishlist(this.currentModalDress)) || false;
    const label = document.getElementById('modalWishlistLabel');
    if (label) {
      label.textContent = saved ? 'Saved in My Lookbook' : (this.category === 'hoco' ? 'Save to HOCO Lookbook' : 'Save to Prom Lookbook');
    }
  }

  toggleModalWishlist() {
    if (!this.currentModalDress) return;
    if (window.toggleWishlistItem) {
      const added = window.toggleWishlistItem(this.currentModalDress);
      const label = document.getElementById('modalWishlistLabel');
      if (label) {
        label.textContent = added ? 'Saved in My Lookbook' : (this.category === 'hoco' ? 'Save to HOCO Lookbook' : 'Save to Prom Lookbook');
      }
    }
  }

  titleCase(s) {
    return s.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1));
  }

  renderThumbs() {
    const thumbsContainer = document.getElementById('mThumbs');
    if (!thumbsContainer) return;

    thumbsContainer.innerHTML = this.curImgs.map((img, i) =>
      `<img class="modal-thumb ${i===0?'active':''}" src="${img.replace('.2000.','.340.')}" data-idx="${i}" alt="View ${i+1}"/>`
    ).join('');

    const nav = this.curImgs.length > 1;
    const np = document.getElementById('navPrev');
    const nn = document.getElementById('navNext');

    if (np) {
      np.style.display = nav ? 'flex' : 'none';
      np.onclick = () => this.shiftImg(-1);
    }
    if (nn) {
      nn.style.display = nav ? 'flex' : 'none';
      nn.onclick = () => this.shiftImg(1);
    }

    thumbsContainer.onclick = (e) => {
      const t = e.target.closest('[data-idx]');
      if (t) this.showImg(+t.dataset.idx);
    };
  }

  showImg(i) {
    this.curIdx = i;
    const img = document.getElementById('mImg');
    if (img) {
      img.style.opacity = '0';
      img.src = this.curImgs[i];
      img.onload = () => { img.style.opacity = '1'; };
    }
    document.querySelectorAll('.modal-thumb').forEach((t, idx) => {
      t.classList.toggle('active', idx === i);
    });
  }

  shiftImg(dir) {
    this.showImg((this.curIdx + dir + this.curImgs.length) % this.curImgs.length);
  }

  closeModal() {
    const mb = document.getElementById(this.modalBackdropId);
    if (mb) mb.classList.remove('open');
    document.body.style.overflow = '';
    if (this.lastFocused && typeof this.lastFocused.focus === 'function') {
      this.lastFocused.focus();
      this.lastFocused = null;
    }
  }

  trapModalFocus(e) {
    const mo = document.getElementById('mo');
    if (!mo) return;
    const focusable = mo.querySelectorAll('button:not([disabled]),[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
}

// Export for module/global usage
if (typeof window !== 'undefined') {
  window.CloudNineCatalog = CloudNineCatalog;
}

/* Cloud Nine Bridal Shared Nav + Footer */

const LOGO = 'images/logo-transparent.webp';

function getActivePage() {
  const p = (window.location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '');
  return p || 'index';
}

function navHTML() {
  const page = getActivePage();
  const active = (name) => {
    const clean = name.replace(/\.html$/, '');
    return page === clean ? 'active' : '';
  };
  const isBridal = page === 'bridal' || page === 'bridal-catalog' || page === 'our-brides' || page === 'experience';
  const isPromHoco = page === 'prom' || page === 'prom-catalog' || page === 'hoco' || page === 'hoco-catalog';
  const isTux = page === 'tuxedos';

  return `
  <nav class="main-nav">
    <div class="nav-inner">

      <!-- Logo — links to home -->
      <a href="index.html" class="nav-brand" aria-label="Cloud Nine Bridal Boutique — Home">
        <img src="images/logo-transparent.webp" width="156" height="88" decoding="async" alt="Cloud Nine Bridal Boutique" class="nav-logo-img"/>
      </a>

      <!-- Center links with Luxury Mega-Menus -->
      <ul class="nav-menu nav-center">
        <li class="nav-item"><a href="index.html" class="nav-link ${active('index')}">Home</a></li>
        
        <!-- 1. BRIDAL MEGA-MENU -->
        <li class="nav-item nav-item--bridal nav-item--has-dropdown">
          <a href="bridal.html" class="nav-link ${isBridal ? 'active' : ''}">
            Bridal
          </a>
          <div class="nav-dropdown nav-dropdown--mega nav-dropdown--bridal">
            <div class="nav-mega-grid">
              <!-- Featured Editorial Card -->
              <a href="bridal-catalog.html" class="nav-mega-card">
                <div class="nav-mega-card-bg" data-bg="images/bridal/Bridal-hero.webp"></div>
                <div class="nav-mega-card-overlay"></div>
                <div class="nav-mega-card-content">
                  <span class="nav-mega-badge">The 2026 Collection</span>
                  <div class="nav-mega-card-title">Explore 600+ Gowns</div>
                  <div class="nav-mega-card-sub">Essense · Maggie Sottero · Sottero &amp; Midgley · Rebecca Ingram · Stella York · Rose + Grace</div>
                  <span class="nav-mega-card-cta">Browse Catalog</span>
                </div>
              </a>

              <!-- Curated Designers -->
              <div class="nav-mega-col">
                <div class="nav-mega-heading">Curated Designers</div>
                <ul class="nav-mega-list">
                  <li><a href="bridal-catalog.html?designer=Essense+of+Australia" class="nav-mega-link"><span class="nav-mega-link-title">Essense of Australia</span><span class="nav-mega-link-sub">Romantic lace &amp; EveryBody EveryBride</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Maggie+Sottero" class="nav-mega-link"><span class="nav-mega-link-title">Maggie Sottero</span><span class="nav-mega-link-sub">Iconic corset fit &amp; timeless romance</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Sottero+%26+Midgley" class="nav-mega-link"><span class="nav-mega-link-title">Sottero &amp; Midgley</span><span class="nav-mega-link-sub">Couture drama &amp; statement luxury</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Rebecca+Ingram" class="nav-mega-link"><span class="nav-mega-link-title">Rebecca Ingram</span><span class="nav-mega-link-sub">Flirty, timeless &amp; effortless value</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Stella+York" class="nav-mega-link"><span class="nav-mega-link-title">Stella York</span><span class="nav-mega-link-sub">Glamorous runway-inspired silhouettes</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Rose+%2B+Grace" class="nav-mega-link"><span class="nav-mega-link-title">Rose + Grace</span><span class="nav-mega-link-sub">Exclusive bohemian &amp; artistic collection</span></a></li>
                </ul>
              </div>

              <!-- The Boutique Experience -->
              <div class="nav-mega-col">
                <div class="nav-mega-heading">The Experience</div>
                <ul class="nav-mega-list">
                  <li><a href="experience.html" class="nav-mega-link nav-mega-link--highlight"><span class="nav-mega-link-title">The Boutique Experience</span><span class="nav-mega-link-sub">1-on-1 styling, boutique comfort &amp; celebrations</span></a></li>
                  <li><a href="appointments.html" class="nav-mega-link"><span class="nav-mega-link-title">Robes &amp; Rosé / On Cloud Nine</span><span class="nav-mega-link-sub">$100 &amp; $250 celebratory bridal packages</span></a></li>
                  <li><a href="bridal.html#accessories" class="nav-mega-link"><span class="nav-mega-link-title">Bridal Accessories &amp; Bling</span><span class="nav-mega-link-sub">Bel Aire · Toni Federici · Heirloom · Boomba</span></a></li>
                  <li><a href="quiz.html" class="nav-mega-link"><span class="nav-mega-link-title">Find Your Bridal Style</span><span class="nav-mega-link-sub">Discover your dream bridal aesthetic &amp; gowns</span></a></li>
                  <li><a href="our-brides.html" class="nav-mega-link"><span class="nav-mega-link-title">Our Real Brides</span><span class="nav-mega-link-sub">15 years of saying yes</span></a></li>
                  <li><a href="mothers.html" class="nav-mega-link"><span class="nav-mega-link-title">Mothers of the Wedding</span><span class="nav-mega-link-sub">Jasmine · Cameron Blake · Daymor · MLNY · Ivonne D</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item"><a href="mothers.html" class="nav-link ${active('mothers')}">Mothers</a></li>

        <!-- 2. PROM & HOCO MEGA-MENU -->
        <li class="nav-item nav-item--prom nav-item--has-dropdown">
          <a href="prom.html" class="nav-link ${isPromHoco ? 'active' : ''}">
            Prom &amp; HOCO
          </a>
          <div class="nav-dropdown nav-dropdown--ph">
            <div class="nav-dd-ph-home">
              <div class="nav-dd-ph-home-left">
                <div class="nav-dd-ph-home-title">Prom &amp; Homecoming Boutique</div>
                <div class="nav-dd-ph-home-sub">Walk-Ins Only · Peoria, IL</div>
              </div>
              <a href="prom.html" class="nav-dd-ph-home-badge">Walk-Ins Welcome</a>
            </div>
            <div class="nav-dd-ph-cols">
              <a href="prom-catalog.html" class="nav-dd-ph-col">
                <div class="nav-dd-ph-col-bg" data-bg="images/real/prom/instagram/04-ig.webp"></div>
                <div class="nav-dd-ph-col-overlay"></div>
                <div class="nav-dd-ph-col-content">
                  <div class="nav-dd-ph-col-eyebrow">Spring 2026</div>
                  <div class="nav-dd-ph-col-title">Prom Gowns</div>
                  <div class="nav-dd-ph-col-cta">Shop Prom</div>
                </div>
              </a>
              <a href="hoco-catalog.html" class="nav-dd-ph-col">
                <div class="nav-dd-ph-col-bg" data-bg="images/real/hoco/03-88900.webp"></div>
                <div class="nav-dd-ph-col-overlay"></div>
                <div class="nav-dd-ph-col-content">
                  <div class="nav-dd-ph-col-eyebrow">Fall 2026</div>
                  <div class="nav-dd-ph-col-title">HOCO Styles</div>
                  <div class="nav-dd-ph-col-cta">Shop HOCO</div>
                </div>
              </a>
            </div>
            <a href="prom.html#collections" class="nav-ph-registry-ribbon">
              <div class="nav-ph-reg-text">
                <strong>Peoria's Largest Prom &amp; Formalwear Boutique · Top 10 Prom Store</strong>
                <span>Prom ($150–$1,000) · HOCO ($90–$580) · Pageant &amp; Formal · Walk-Ins Only</span>
              </div>
              <span class="nav-ph-reg-arrow">Explore</span>
            </a>
          </div>
        </li>

        <!-- 3. TUXEDOS MEGA-MENU -->
        <li class="nav-item nav-item--tuxedos nav-item--has-dropdown">
          <a href="tuxedos.html" class="nav-link ${isTux ? 'active' : ''}">
            Tuxedos
          </a>
          <div class="nav-dropdown nav-dropdown--tux">
            <div class="nav-tux-grid">
              <a href="tuxedos.html" class="nav-tux-card">
                <div class="nav-tux-badge">Obsidian Edition</div>
                <div class="nav-tux-title">The Trace Collection</div>
                <div class="nav-tux-sub">Exclusive modern suits &amp; tuxedo rentals in Peoria</div>
                <span class="nav-tux-cta">Explore Suits</span>
              </a>
              <div class="nav-tux-links">
                <a href="tuxedos.html#visualizer" class="nav-tux-link">
                  <div>
                    <strong>Groom Style Builder</strong>
                    <p>Configure lapel, color &amp; swatch match</p>
                  </div>
                </a>
                <a href="tuxedos.html#tux-to-door" class="nav-tux-link">
                  <div>
                    <strong>Tux-to-Door Out-of-Town</strong>
                    <p>Doorstep delivery for groomsmen</p>
                  </div>
                </a>
                <a href="appointments.html?cat=tux" class="nav-tux-link">
                  <div>
                    <strong>Book Fitting Consultation</strong>
                    <p>Complimentary party styling session</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li class="nav-item"><a href="about.html" class="nav-link ${active('about')}">About</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link ${active('contact')}">Contact</a></li>
      </ul>

      <!-- Right Actions: Live Peoria Status + Search + Book CTA + Cloud Bridal Style CTA -->
      <div class="nav-right-actions">

        <!-- Live Peoria Boutique Status with Interactive Popover -->
        <div class="nav-status-wrap" id="navStatusWrap">
          <button type="button" class="nav-live-status-pill status--open" id="navLiveStatusPill" aria-label="Peoria Boutique Operating Hours" onclick="toggleNavStatusPopover(event)">
            <span class="live-dot"></span>
            <span id="navLiveStatusText">Peoria Boutique</span>
          </button>
          <div class="nav-status-popover" id="navStatusPopover" role="dialog" aria-label="Boutique Hours & Contact">
            <div class="nav-sp-head">
              <div class="nav-sp-title">Cloud Nine Bridal Boutique</div>
              <div class="nav-sp-sub">Peoria, Illinois</div>
            </div>
            <div class="nav-sp-status-banner" id="navSpStatusBanner">
              <span class="live-dot"></span>
              <span id="navSpStatusText">Open Today · 10:00 AM – 5:00 PM CST</span>
            </div>
            <table class="nav-sp-hours-table" id="navSpHoursTable">
              <tr data-days="1,5"><td>Mon, Fri</td><td>10:00 AM – 5:00 PM</td></tr>
              <tr data-days="2,4"><td>Tue, Thu</td><td>11:00 AM – 7:00 PM</td></tr>
              <tr data-days="3"><td>Wednesday</td><td>Closed</td></tr>
              <tr data-days="6"><td>Saturday</td><td>9:00 AM – 5:00 PM</td></tr>
              <tr data-days="0"><td>Sunday</td><td>Closed (Open Jan–Mar)</td></tr>
            </table>
            <div class="nav-sp-actions">
              <a href="tel:3096933830" class="nav-sp-action-btn nav-sp-action--call">
                (309) 693-3830
              </a>
              <a href="https://goo.gl/maps/HXgYuahuNu8ycSXB8" target="_blank" rel="noopener noreferrer" class="nav-sp-action-btn nav-sp-action--maps">
                Directions
              </a>
            </div>
          </div>
        </div>

        <!-- Search Bar / Pill Button (Cmd+K) -->
        <button type="button" class="nav-search-bar-btn" onclick="openSearch()" aria-label="Search by dress name or style number (Cmd+K)" title="Search by dress name or style number (Cmd+K)">
          <svg class="nav-search-bar-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span class="nav-search-bar-text">Search name or #style…</span>
          <span class="nav-search-bar-short">Search</span>
          <kbd class="nav-search-kbd">⌘K</kbd>
        </button>

        <!-- Luxury Appointment CTA Button -->
        <a href="appointments.html" class="btn-nav-appt btn-luxury-pill">
          <span>Book Appointment</span>
        </a>
      </div>

      <!-- Mobile triggers -->
      <button type="button" class="nav-search-mobile" aria-label="Search dresses by name or style number" onclick="openSearch()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <span class="nav-search-mobile-label">Search</span>
      </button>
      <button class="nav-hamburger" aria-label="Open navigation menu" aria-controls="mobileMenu" aria-expanded="false" onclick="openMobileMenu()">
        <span></span><span></span><span></span>
      </button>

    </div>

    <!-- Sticky Floating Cloud CTA (Anchored to .main-nav: Floats Below at Top, Docks into Right Slot on Scroll) -->
    <a href="quiz.html" class="nav-cloud-cta ${active('quiz')}" id="navCloudCta" aria-label="Find Your Bridal Style">
      <svg class="nav-cloud-bg" viewBox="0 0 280 128" aria-hidden="true">
        <defs>
          <linearGradient id="navCloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="72%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#dcf2f3"/>
          </linearGradient>
          <linearGradient id="navCloudUnder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(152, 213, 214, 0.55)"/>
            <stop offset="100%" stop-color="rgba(28, 78, 80, 0.28)"/>
          </linearGradient>
          <linearGradient id="navCloudStroke" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#296e71"/>
            <stop offset="100%" stop-color="#123537"/>
          </linearGradient>
        </defs>
        <!-- Soft 3D under-billow layer -->
        <path d="M 52,115 A 34,34 0 1,1 55.9,47.2 A 35,35 0 0,1 105.1,23.4 A 40,40 0 0,1 174.9,23.4 A 35,35 0 0,1 224.1,47.2 A 34,34 0 1,1 228,115 Q 184,121 140,116 Q 96,121 52,115 Z" fill="url(#navCloudUnder)" transform="translate(0, 4)"/>
        <!-- Main 5-lobe cumulus cloud silhouette built from true circular arcs -->
        <path d="M 52,112 A 34,34 0 1,1 55.9,44.2 A 35,35 0 0,1 105.1,20.4 A 40,40 0 0,1 174.9,20.4 A 35,35 0 0,1 224.1,44.2 A 34,34 0 1,1 228,112 Q 184,118 140,113 Q 96,118 52,112 Z" fill="url(#navCloudGrad)" stroke="url(#navCloudStroke)" stroke-width="2.2" stroke-linejoin="round"/>
        <!-- Inner 3D cloud puff highlights -->
        <path d="M 56,48 A 30,30 0 0,1 103,26 M 107,24 A 35,35 0 0,1 173,24 M 177,26 A 30,30 0 0,1 222,48" fill="none" stroke="rgba(152, 213, 214, 0.65)" stroke-width="2" stroke-linecap="round"/>
        <!-- Delicate four-point star sparkles on outer puffs -->
        <path d="M 40,66 L 42,71 L 47,73 L 42,75 L 40,80 L 38,75 L 33,73 L 38,71 Z" fill="#296e71" opacity="0.55"/>
        <path d="M 240,62 L 241.5,66 L 245.5,67.5 L 241.5,69 L 240,73 L 238.5,69 L 234.5,67.5 L 238.5,66 Z" fill="#296e71" opacity="0.55"/>
      </svg>
      <span class="nav-cloud-content">
        <span class="nav-cloud-kicker">✦ Style Quiz</span>
        <span class="nav-cloud-label">Find Your<br/>Bridal Style <span class="nav-cloud-arrow" aria-hidden="true">→</span></span>
      </span>
    </a>
  </nav>

  <!-- MOBILE MENU DRAWER -->
  <div class="mobile-menu" id="mobileMenu" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="mobile-menu-backdrop" onclick="closeMobileMenu()"></div>
    <div class="mobile-menu-drawer">

      <div class="mobile-menu-head">
        <img src="${LOGO}" alt="Cloud Nine Bridal Boutique" class="mobile-menu-logo-img" width="120" height="68" loading="lazy" decoding="async"/>
        <button class="mobile-menu-close" onclick="closeMobileMenu()" aria-label="Close navigation menu">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <!-- Mobile Live Status Card -->
      <div class="mobile-menu-status" id="mobileMenuStatus">
        <span class="live-dot"></span>
        <span id="mobileMenuStatusText">Peoria Boutique · Open Today</span>
      </div>

      <!-- Prominent Search Bar inside Mobile Menu Drawer -->
      <div class="mobile-menu-search-wrap">
        <button type="button" class="mobile-menu-search-bar" onclick="closeMobileMenu();setTimeout(openSearch,180);" aria-label="Search by dress name or style number">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span>Search dress name or #style…</span>
        </button>
      </div>

      <nav class="mobile-menu-nav" aria-label="Site navigation">

        <div class="mobile-nav-section">
          <a href="index.html" class="mobile-nav-item">
            Home
          </a>
        </div>

        <div class="mobile-nav-divider"></div>

        <div class="mobile-nav-section">
          <span class="mobile-nav-section-label">Bridal</span>
          <a href="quiz.html" class="mobile-nav-item" style="color:var(--teal-mid);font-weight:700;">
            ✦ Find Your Bridal Style
          </a>
          <a href="experience.html" class="mobile-nav-item">
            The Boutique Experience
          </a>
          <a href="bridal.html" class="mobile-nav-item">
            Bridal Collection
          </a>
          <a href="bridal-catalog.html" class="mobile-nav-sub">Shop All 600+ Gowns</a>
          <a href="mothers.html" class="mobile-nav-item">
            Mothers of the Bride
          </a>
          <a href="our-brides.html" class="mobile-nav-item">
            Real Brides Gallery
          </a>
        </div>

        <div class="mobile-nav-divider"></div>

        <div class="mobile-nav-section">
          <span class="mobile-nav-section-label">Prom, HOCO &amp; Formal</span>
          <a href="prom.html" class="mobile-nav-item">
            Prom Gowns
          </a>
          <a href="prom-catalog.html" class="mobile-nav-sub">Shop Prom Dresses</a>
          <a href="hoco.html" class="mobile-nav-item">
            Homecoming
          </a>
          <a href="hoco-catalog.html" class="mobile-nav-sub">Shop HOCO Styles</a>
          <a href="tuxedos.html" class="mobile-nav-item">
            Tuxedos &amp; Suits
          </a>
        </div>

        <div class="mobile-nav-divider"></div>

        <div class="mobile-nav-section">
          <span class="mobile-nav-section-label">Information &amp; Contact</span>
          <a href="about.html" class="mobile-nav-item">
            About Cloud Nine
          </a>
          <a href="contact.html" class="mobile-nav-item">
            Contact &amp; Hours
          </a>
          <button type="button" class="mobile-nav-item" onclick="closeMobileMenu();setTimeout(openSearch,200);" style="background:none;border:none;width:100%;text-align:left;font-family:inherit;cursor:pointer;">
            Search Catalog
          </button>
        </div>

      </nav>

      <div class="mobile-menu-footer">
        <a href="appointments.html" class="mobile-menu-book-btn">Book an Appointment</a>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
          <a href="tel:3096933830" class="mobile-menu-phone-link">
            Call Boutique
          </a>
          <a href="https://goo.gl/maps/HXgYuahuNu8ycSXB8" target="_blank" rel="noopener noreferrer" class="mobile-menu-phone-link">
            Directions
          </a>
        </div>
      </div>

    </div>
  </div>`;
}

function footerHTML() {
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-col-brand">
          <div class="footer-logo"><img src="${LOGO}" width="140" height="79" loading="lazy" decoding="async" alt="Cloud Nine Bridal Boutique"/></div>
          <p class="footer-tagline">Peoria's premier bridal boutique — helping brides find their dream gown. Come say yes with us.</p>
          <div class="footer-contact">
            <div>
              <a href="tel:3096933830">(309) 693‑3830</a>
            </div>
            <div>
              <a href="mailto:sayyes@cloudninepeoria.com">sayyes@cloudninepeoria.com</a>
            </div>
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/cloudninebridalboutique/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Cloud Nine on Facebook (opens in new tab)" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/cloudninebridalpeoria/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Cloud Nine on Instagram (opens in new tab)" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://goo.gl/maps/HXgYuahuNu8ycSXB8" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Google Reviews — 5.0 Stars, 1.7k Reviews (opens in new tab)" title="Google Reviews (5.0 Stars · 1.7k Reviews)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/></svg>
            </a>
          </div>
        </div>
        <div class="footer-col-explore">
          <div class="footer-col-title">Explore</div>
          <ul class="footer-links">
            <li><a href="experience.html">The Experience</a></li>
            <li><a href="bridal-catalog.html">Bridal Collection</a></li>
            <li><a href="mothers.html">Mothers</a></li>
            <li><a href="prom.html">Prom</a></li>
            <li><a href="hoco.html">HOCO</a></li>
            <li><a href="tuxedos.html">Tuxedos &amp; Suits</a></li>
            <li><a href="our-brides.html">Our Brides</a></li>
          </ul>
        </div>
        <div class="footer-col-company">
          <div class="footer-col-title">Company</div>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="about.html#team">Our Team</a></li>
            <li><a href="about.html#events">Upcoming Events</a></li>
            <li><a href="about.html#testimonials">Testimonials</a></li>
            <li><a href="about.html#awards">Awards</a></li>
            <li><a href="about.html#faq">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col-hours">
          <div class="footer-hours-grid">
            <div class="footer-hours-block">
              <div class="footer-col-title" style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                Bridal Hours
                <span id="footerTodayBadge" style="font-family:var(--font-kicker,'Josefin Sans',sans-serif);font-size:10px;font-weight:700;letter-spacing:.1em;padding:2px 6px;border-radius:20px;background:var(--teal-dim2);color:var(--teal-deep);"></span>
              </div>
              <table class="hours-table" style="margin-top:6px;">
                <tr><td>Mon, Fri</td><td>10am – 5pm</td></tr>
                <tr><td>Tues, Thur</td><td>11am – 7pm</td></tr>
                <tr><td>Wed</td><td>Closed</td></tr>
                <tr><td>Sat</td><td>9am – 5pm</td></tr>
                <tr><td>Sun</td><td>Closed</td></tr>
              </table>
              <div class="footer-hours-note" style="font-size:11px;color:var(--text-light);margin-top:3px;font-style:italic;">*Open Sundays Jan–Mar.</div>
            </div>
            <div class="footer-hours-block">
              <div class="hours-sub">Prom Hours</div>
              <table class="hours-table">
                <tr><td>Mon, Fri</td><td>12pm – 6pm</td></tr>
                <tr><td>Tues, Thur</td><td>12pm – 7pm</td></tr>
                <tr><td>Wed</td><td>Closed</td></tr>
                <tr><td>Sat</td><td>10am – 5pm</td></tr>
                <tr><td>Sun</td><td>Closed</td></tr>
              </table>
            </div>
          </div>
          <div class="footer-newsletter-wrap" style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);">
            <div class="footer-col-title" style="margin-bottom:6px;">Get Inspired</div>
            <p class="footer-newsletter-desc" style="font-size:12px;color:rgba(28,78,80,.45);margin-bottom:14px;line-height:1.65;">New arrivals, seasonal events &amp; bridal inspo — delivered to your inbox.</p>
            <form class="footer-subscribe-form" onsubmit="submitSubscribe(event, this)">
              <input type="email" name="email" placeholder="your@email.com" required aria-label="Email address"/>
              <button type="submit">Subscribe</button>
            </form>
            <p class="footer-newsletter-fine" style="font-size:11px;color:var(--text-light);margin-top:8px;line-height:1.5;">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© Cloud Nine Bridal Boutique 2026 &nbsp;·&nbsp; Peoria, IL</span>
      <div class="footer-legal">
        <a href="#">Accessibility</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>`;
}

function searchOverlayHTML() {
  return `<div class="search-overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-label="Search" onclick="closeSearchBg(event)">
  <div class="search-panel" role="search">
    <div class="search-top-row">
      <span class="search-eyebrow">Search by Dress Name or Style #</span>
      <button class="search-close-btn" onclick="closeSearch()" aria-label="Close">Close</button>
    </div>
    <div class="search-input-wrap">
      <input type="search" id="searchInput" class="search-input" placeholder="Enter dress name (Meredith, Addie) or style # (D4257, 57042)…" autocomplete="off" spellcheck="false" aria-label="Search by dress name or style number" oninput="onSearchInput(this.value)" onkeydown="onSearchKeyDown(event)"/>
      <button class="search-clear-btn" id="searchClearBtn" onclick="clearSearch()" style="display:none" aria-label="Clear">Clear</button>
    </div>
    <div class="search-scope-bar" id="searchScopeBar" role="tablist" aria-label="Filter search by collection">
      <button type="button" class="search-scope-pill active" data-scope="all" role="tab" aria-selected="true" onclick="setSearchScope('all')">All Collections <span class="scope-count" id="scopeCount-all"></span></button>
      <button type="button" class="search-scope-pill" data-scope="bridal" role="tab" aria-selected="false" onclick="setSearchScope('bridal')">Bridal <span class="scope-count" id="scopeCount-bridal"></span></button>
      <button type="button" class="search-scope-pill" data-scope="prom" role="tab" aria-selected="false" onclick="setSearchScope('prom')">Prom <span class="scope-count" id="scopeCount-prom"></span></button>
      <button type="button" class="search-scope-pill" data-scope="hoco" role="tab" aria-selected="false" onclick="setSearchScope('hoco')">HOCO <span class="scope-count" id="scopeCount-hoco"></span></button>
      <button type="button" class="search-scope-pill" data-scope="mothers" role="tab" aria-selected="false" onclick="setSearchScope('mothers')">Mothers <span class="scope-count" id="scopeCount-mothers"></span></button>
    </div>
    <div class="search-quick-tags" id="searchQuickTags">
      <span class="search-quick-label">Try Dress Names &amp; Style Numbers</span>
      <div class="search-quick-pills">
        <button type="button" class="search-quick-pill" onclick="quickSearch('Dakota Leigh')">Dakota Leigh</button>
        <button type="button" class="search-quick-pill" onclick="quickSearch('Meredith')">Meredith</button>
        <button type="button" class="search-quick-pill" onclick="quickSearch('Addie')">Addie</button>
        <button type="button" class="search-quick-pill" onclick="quickSearch('#25MB849C01')">#25MB849C01</button>
        <button type="button" class="search-quick-pill" onclick="quickSearch('#D4257')">#D4257</button>
        <button type="button" class="search-quick-pill" onclick="quickSearch('#SY8166')">#SY8166</button>
        <button type="button" class="search-quick-pill" onclick="quickSearch('#57042')">#57042</button>
        <button type="button" class="search-quick-pill" onclick="quickSearch('#88904')">#88904</button>
      </div>
    </div>
    <div id="searchResults" class="search-results" aria-live="polite" aria-atomic="false" role="region" aria-label="Search results"></div>
  </div>
</div>`;
}

/* ── MOBILE MENU — open / close ── */
window.openMobileMenu = function() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.nav-hamburger');
  const nav = document.querySelector('.main-nav');
  if (!menu) return;
  window._lastFocusedNav = document.activeElement;
  menu.classList.add('open');
  if (hamburger) {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }
  /* Slide nav out so it doesn't overlap the drawer */
  if (nav) nav.classList.add('nav-hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('mobile-menu-open');
  /* Move focus to the close button for accessibility */
  setTimeout(function() {
    const closeBtn = menu.querySelector('.mobile-menu-close');
    if (closeBtn && typeof closeBtn.focus === 'function') closeBtn.focus();
  }, 420);
};

window.closeMobileMenu = function() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.nav-hamburger');
  const nav = document.querySelector('.main-nav');
  if (!menu) return;
  menu.classList.remove('open');
  if (hamburger) {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
  /* Restore nav */
  if (nav) nav.classList.remove('nav-hidden');
  document.body.style.overflow = '';
  document.body.classList.remove('mobile-menu-open');
  if (window._lastFocusedNav && typeof window._lastFocusedNav.focus === 'function') {
    window._lastFocusedNav.focus();
    window._lastFocusedNav = null;
  }
};

/* Close on Escape & Tab Focus Trap */
document.addEventListener('keydown', function(e) {
  const menu = document.getElementById('mobileMenu');
  if (menu && menu.classList.contains('open')) {
    if (e.key === 'Escape') closeMobileMenu();
    if (e.key === 'Tab') {
      const focusable = menu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }
});

/* ── MOBILE TAB BAR REMOVED ── */
function injectMobileCTABar() {
  // Navigation pill bar removed per user request
}

/* ── TACTILE HAPTIC FEEDBACK HELPER ── */
window.cnHaptic = function(pattern) {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
      navigator.vibrate(pattern || 10);
    }
  } catch (e) {}
};

/* ════════════════════════════════════════════════════════
   WISHLIST / FAVORITES ENGINE (REMOVED — NO-OP STUB)
   ════════════════════════════════════════════════════════ */
var WL = (function() {
  function load() { return []; }
  function has() { return false; }
  function toggle() { return false; }
  function remove() {}
  function clearAll() {}
  function updateBadge() {}
  function renderDrawer() {}
  function startObserver() {}
  function openLookbook() {}
  function closeLookbook() {}
  function renderLookbook() {}
  function copyShareLink() {}
  function getConciergeSummary() { return { items: [], styleList: [], textSummary: '' }; }
  function copyToClipboard(shareUrl, customMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).catch(function() {
        prompt('Copy details below:', shareUrl);
      });
    } else {
      prompt('Copy details below:', shareUrl);
    }
  }
  return { load, has, toggle, remove, clearAll, updateBadge, renderDrawer, startObserver, openLookbook, closeLookbook, renderLookbook, copyShareLink, getConciergeSummary, copyToClipboard };
})();

window.openWishlist = function() {};
window.closeWishlist = function() {};

function injectComponents() {
  // ── Skip-to-content link (WCAG 2.4.1 Level A) ──
  const skip = document.createElement('a');
  skip.href = '#main-content';
  skip.className = 'skip-link';
  skip.textContent = 'Skip to main content';
  document.body.insertBefore(skip, document.body.firstChild);

  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = navHTML();
  if (footer) footer.innerHTML = footerHTML();

  // Inject search overlay
  const searchDiv = document.createElement('div');
  searchDiv.innerHTML = searchOverlayHTML();
  document.body.appendChild(searchDiv.firstElementChild);
  initSearch();

  // Inject back-to-top
  injectBackToTop();
}

function injectBackToTop() {
  // Don't show on snap-scroll pages (home/prom)
  if (document.body.classList.contains('page-home') ||
      document.body.classList.contains('page-prom')) return;

  var btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.textContent = 'Top';
  document.body.appendChild(btn);

  var visible = false;
  window.addEventListener('scroll', function() {
    var should = window.scrollY > 500;
    if (should !== visible) {
      visible = should;
      btn.classList.toggle('visible', visible);
    }
  }, { passive: true });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── HTML escape — prevents XSS when rendering user input into innerHTML ── */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* Module-scoped — never on window, prevents third-party access */
let _searchMatches = [];
let _globalCatalog = null;
let _globalCatalogPromise = null;
let _searchScope = 'all';
let _lastSearchTargetUrl = 'bridal-catalog.html';

function _normSearchCode(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function _isOneEditAway(a, b) {
  if (!a || !b || a.length < 4 || b.length < 4 || a[0] !== b[0]) return false;
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; }
    else {
      if (++edits > 1) return false;
      if (a.length > b.length) i++;
      else if (b.length > a.length) j++;
      else { i++; j++; }
    }
  }
  if (i < a.length || j < b.length) edits++;
  return edits <= 1;
}

function _getGlobalProductIndex(p) {
  if (p._globalSearchIdx) return p._globalSearchIdx;
  const rawSku = String(p.s || '').trim().toLowerCase();
  const full = _normSearchCode(rawSku);
  const firstTok = _normSearchCode(rawSku.split(/\s+/)[0] || '');
  const noPrefix = firstTok.replace(/^[a-z]+/, '');
  const msMatch = firstTok.match(/^(\d{2}|[fs]\d)([a-z]{2})(\d{3,4})([a-z0-9]*)$/);
  let msBase = '', msNoYear = '', msNoYearBase = '', coreDigits = '';
  if (msMatch) {
    msBase = msMatch[1] + msMatch[2] + msMatch[3];
    msNoYear = msMatch[2] + msMatch[3] + msMatch[4];
    msNoYearBase = msMatch[2] + msMatch[3];
    coreDigits = msMatch[3];
  } else {
    const genMatch = firstTok.match(/^[a-z]*(\d{3,7})[a-z]*$/);
    if (genMatch) coreDigits = genMatch[1];
  }
  const strippedSuffix = msBase || firstTok.replace(/^([a-z]*\d{3,6})[a-z]+$/, '$1');
  const sku = { full, firstTok, noPrefix, strippedSuffix, msNoYear, msNoYearBase, coreDigits };

  const gnRaw = String(p.gn || '').toLowerCase().trim();
  const gnNorm = _normSearchCode(gnRaw);
  const gnWords = gnRaw ? gnRaw.split(/\s+/).filter(Boolean) : [];

  p._globalSearchIdx = { sku, gnRaw, gnNorm, gnWords };
  return p._globalSearchIdx;
}

function _getGlobalSearchCutoff(maxScore) {
  if (maxScore >= 900) return 850;
  if (maxScore >= 750) return 750;
  return 1;
}

function scoreGlobalDress(p, rawQ) {
  if (!rawQ || !rawQ.trim()) return 0;
  const cleanedQ = rawQ.trim().toLowerCase()
    .replace(/^(?:style\s*(?:number|num|no\.?|#)?\s*|sku\s*:?\s*|#\s*)/i, '')
    .trim();
  if (!cleanedQ) return 0;

  const idx = _getGlobalProductIndex(p);
  const { sku, gnRaw, gnNorm, gnWords } = idx;
  const qNorm = _normSearchCode(cleanedQ);
  if (!qNorm) return 0;

  // 1. Style Number (p.s) Match ONLY
  if (sku.full === qNorm) return 1000;
  if (qNorm.length >= 3 && (sku.firstTok === qNorm || sku.noPrefix === qNorm || sku.strippedSuffix === qNorm)) return 960;
  if (qNorm.length >= 4 && (sku.msNoYear === qNorm || sku.msNoYearBase === qNorm)) return 940;
  if (sku.coreDigits && sku.coreDigits.length >= 3 && sku.coreDigits === qNorm) return 910;
  if (/\d/.test(qNorm) && qNorm.length >= 3 && (sku.full.startsWith(qNorm) || sku.noPrefix.startsWith(qNorm))) return 860;

  // 2. Dress Name (p.gn) Match ONLY
  if (gnRaw) {
    if (gnRaw === cleanedQ || gnNorm === qNorm) return 980;
    if (gnWords.length > 0 && gnWords[0] === cleanedQ) return 930;
    if (gnWords.length >= 2 && gnWords.slice(1).includes(cleanedQ)) return 880;
    if (cleanedQ.includes(' ') && gnRaw.startsWith(cleanedQ) && cleanedQ.length >= 4) return 870;
    if (!cleanedQ.includes(' ') && cleanedQ.length >= 3 && (gnWords[0].startsWith(cleanedQ) || gnWords.some(function(w) { return w.startsWith(cleanedQ); }))) return 840;
    if (!cleanedQ.includes(' ') && cleanedQ.length >= 5 && !/\d/.test(cleanedQ) && gnWords.some(function(w) { return w.length >= 5 && _isOneEditAway(cleanedQ, w); })) return 760;
  }

  return 0;
}

async function ensureGlobalCatalog() {
  if (_globalCatalog && _globalCatalog.length) return _globalCatalog;
  if (_globalCatalogPromise) return _globalCatalogPromise;
  _globalCatalogPromise = (async function() {
    try {
      const [bRes, pRes, mRes, hRes] = await Promise.allSettled([
        fetch('data/bridal-products.json?v=20261025f').then(r => r.json()),
        fetch('data/prom-products.json?v=20261025f').then(r => r.json()),
        fetch('data/mothers-products.json?v=20261025f').then(r => r.json()),
        fetch('data/hoco-products.json?v=20261025f').then(r => r.json())
      ]);
      const b = bRes.status === 'fulfilled' && Array.isArray(bRes.value) ? bRes.value.map(x => Object.assign({}, x, { _cat: 'bridal-catalog.html', _type: 'bridal' })) : [];
      const p = pRes.status === 'fulfilled' && Array.isArray(pRes.value) ? pRes.value.map(x => Object.assign({}, x, { _cat: 'prom-catalog.html', _type: 'prom' })) : [];
      const m = mRes.status === 'fulfilled' && Array.isArray(mRes.value) ? mRes.value.map(x => Object.assign({}, x, { _cat: 'mothers.html', _type: 'mothers' })) : [];
      const h = hRes.status === 'fulfilled' && Array.isArray(hRes.value) ? hRes.value.map(x => Object.assign({}, x, { _cat: 'hoco-catalog.html', _type: 'hoco' })) : [];
      _globalCatalog = b.concat(p, m, h);
    } catch(e) {
      _globalCatalog = [];
    }
    _globalCatalogPromise = null;
    return _globalCatalog;
  })();
  return _globalCatalogPromise;
}

function initSearch() {
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
}

window.openSearch = function() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  window._lastFocusedSearch = document.activeElement;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('search-open');
  ensureGlobalCatalog();
  setTimeout(function() {
    const input = document.getElementById('searchInput');
    if (input) input.focus();
  }, 220);
};

window.closeSearch = function() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.classList.remove('search-open');
  document.body.style.overflow = '';
  if (window._lastFocusedSearch && typeof window._lastFocusedSearch.focus === 'function') {
    window._lastFocusedSearch.focus();
    window._lastFocusedSearch = null;
  }
};

window.closeSearchBg = function(e) {
  if (e.target === document.getElementById('searchOverlay')) closeSearch();
};

/* Search Overlay Focus Trap */
document.addEventListener('keydown', function(e) {
  const overlay = document.getElementById('searchOverlay');
  if (overlay && overlay.classList.contains('open')) {
    if (e.key === 'Escape') closeSearch();
    if (e.key === 'Tab') {
      const focusable = overlay.querySelectorAll('input, button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }
});

window.setSearchScope = function(scope) {
  _searchScope = scope || 'all';
  document.querySelectorAll('.search-scope-pill').forEach(function(btn) {
    const isAct = btn.getAttribute('data-scope') === _searchScope;
    btn.classList.toggle('active', isAct);
    btn.setAttribute('aria-selected', isAct ? 'true' : 'false');
  });
  const input = document.getElementById('searchInput');
  if (input && input.value.trim()) {
    window.onSearchInput(input.value);
  }
};

window.quickSearch = function(query) {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.value = query;
  window.onSearchInput(query);
};

window.clearSearch = function() {
  const input = document.getElementById('searchInput');
  if (input) { input.value = ''; input.focus(); }
  const clr = document.getElementById('searchClearBtn');
  if (clr) clr.style.display = 'none';
  const res = document.getElementById('searchResults');
  if (res) res.innerHTML = '';
  const cats = document.getElementById('searchCategories');
  if (cats) cats.style.display = '';
  const tags = document.getElementById('searchQuickTags');
  if (tags) tags.style.display = '';
  ['all', 'bridal', 'prom', 'hoco', 'mothers'].forEach(function(k) {
    const el = document.getElementById('scopeCount-' + k);
    if (el) el.textContent = '';
  });
};

window.onSearchKeyDown = function(e) {
  if (e.key === 'Escape') {
    closeSearch();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (_searchMatches && _searchMatches.length === 1) {
      window.goToSearchDress(0);
    } else if (_searchMatches && _searchMatches.length > 1) {
      window.viewAllSearchMatches();
    }
  }
};

window.viewAllSearchMatches = function() {
  const input = document.getElementById('searchInput');
  const q = input ? input.value.trim() : '';
  if (!q) return;
  const currentFile = (window.location.pathname.split('/').pop() || 'index.html');
  if (window.catalogInstance && currentFile === _lastSearchTargetUrl) {
    closeSearch();
    window.catalogInstance.onCatalogSearch(q);
    const grid = document.getElementById(window.catalogInstance.gridId || 'pg');
    if (grid) {
      const y = grid.getBoundingClientRect().top + (window.pageYOffset || 0) - 130;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  } else {
    closeSearch();
    window.location.href = _lastSearchTargetUrl + '?q=' + encodeURIComponent(q);
  }
};

window.onSearchInput = async function(val) {
  const clearBtn = document.getElementById('searchClearBtn');
  const results = document.getElementById('searchResults');
  const cats = document.getElementById('searchCategories');
  const tags = document.getElementById('searchQuickTags');
  if (clearBtn) clearBtn.style.display = val ? 'flex' : 'none';
  if (!val || !val.trim()) {
    results.innerHTML = '';
    if (cats) cats.style.display = '';
    if (tags) tags.style.display = '';
    ['all', 'bridal', 'prom', 'hoco', 'mothers'].forEach(function(k) {
      const el = document.getElementById('scopeCount-' + k);
      if (el) el.textContent = '';
    });
    return;
  }
  if (cats) cats.style.display = 'none';
  if (tags) tags.style.display = 'none';

  const catalog = await ensureGlobalCatalog();
  const q = val.trim();

  if (catalog && catalog.length) {
    const rawScored = [];
    let maxGlobalScore = 0;

    for (let i = 0; i < catalog.length; i++) {
      const p = catalog[i];
      const sc = scoreGlobalDress(p, q);
      if (sc > 0) {
        rawScored.push({ p: p, sc: sc });
        if (sc > maxGlobalScore) maxGlobalScore = sc;
      }
    }

    const minGlobalScore = _getGlobalSearchCutoff(maxGlobalScore);
    const allScored = [];
    const countsByType = { all: 0, bridal: 0, prom: 0, hoco: 0, mothers: 0 };

    for (let j = 0; j < rawScored.length; j++) {
      const item = rawScored[j];
      if (item.sc >= minGlobalScore) {
        allScored.push(item);
        countsByType.all++;
        if (item.p._type && countsByType.hasOwnProperty(item.p._type)) {
          countsByType[item.p._type]++;
        }
      }
    }

    ['all', 'bridal', 'prom', 'hoco', 'mothers'].forEach(function(k) {
      const el = document.getElementById('scopeCount-' + k);
      if (el) el.textContent = countsByType[k] > 0 ? '(' + countsByType[k] + ')' : '(0)';
    });

    let filteredScored = _searchScope === 'all'
      ? allScored
      : allScored.filter(function(x) { return x.p._type === _searchScope; });

    // If current scope has 0 matches but 'all' has matches, fall back to allScored so user isn't stuck on empty tab
    let scopeFallbackNote = '';
    if (filteredScored.length === 0 && allScored.length > 0 && _searchScope !== 'all') {
      filteredScored = allScored;
      scopeFallbackNote = ' (showing matches across all collections)';
    }

    filteredScored.sort(function(a, b) { return b.sc - a.sc; });
    const totalMatches = filteredScored.length;
    const topMatches = filteredScored.slice(0, 12).map(function(x) { return x.p; });

    if (topMatches.length) {
      _searchMatches = topMatches;
      const topType = (_searchScope !== 'all' && countsByType[_searchScope] > 0)
        ? _searchScope
        : (topMatches[0]._type || 'bridal');
      _lastSearchTargetUrl = topType === 'prom' ? 'prom-catalog.html'
        : topType === 'hoco' ? 'hoco-catalog.html'
        : topType === 'mothers' ? 'mothers.html'
        : 'bridal-catalog.html';

      const catLabels = { bridal: 'Bridal', prom: 'Prom', hoco: 'HOCO', mothers: 'Mothers' };

      const headerHtml = '<div class="search-results-header">' +
        '<div class="search-results-label">' + escapeHTML(totalMatches) + ' matching style' + (totalMatches > 1 ? 's' : '') + escapeHTML(scopeFallbackNote) + '</div>' +
        (totalMatches > 1 ? '<button type="button" class="search-view-all-link" onclick="viewAllSearchMatches()">Filter in Catalog &rarr;</button>' : '') +
        '</div>';

      const gridHtml = '<div class="search-results-grid">' + topMatches.map(function(p, i) {
        const badgeLabel = catLabels[p._type] || 'Gown';
        let styleLabel = '';
        if (p.gn && p.gn !== p.s) {
          styleLabel = '<span class="search-result-gn">' + escapeHTML(p.gn) + '</span> <span class="search-result-sku">#' + escapeHTML(p.s || '') + '</span>';
        } else if (p.gn && p.gn === p.s) {
          styleLabel = '<span class="search-result-gn">' + escapeHTML(p.gn) + '</span>';
        } else {
          styleLabel = '<span class="search-result-sku">Style #' + escapeHTML(p.s || '') + '</span>';
        }

        const ariaTitle = (p.d || '') + (p.gn ? ' ' + p.gn : '') + (p.s && p.s !== p.gn ? ' style ' + p.s : '');
        return '<div class="search-result-card" data-match-idx="' + i + '" role="button" tabindex="0" aria-label="View ' + escapeHTML(ariaTitle) + '">' +
          '<div class="search-result-img">' +
            '<span class="search-result-cat-badge">' + escapeHTML(badgeLabel) + '</span>' +
            '<img src="' + escapeHTML(p.i || '') + '" alt="' + escapeHTML(ariaTitle) + '" loading="lazy"/>' +
          '</div>' +
          '<div class="search-result-info">' +
            '<div class="search-result-designer">' + escapeHTML(p.d || '') + '</div>' +
            '<div class="search-result-style">' + styleLabel + '</div>' +
          '</div>' +
        '</div>';
      }).join('') + '</div>';

      const footerCtaHtml = totalMatches > 1
        ? '<div class="search-results-footer"><button type="button" class="search-view-all-btn" onclick="viewAllSearchMatches()">View All ' + escapeHTML(totalMatches) + ' Matching Styles in Catalog &rarr;</button></div>'
        : '';

      results.innerHTML = headerHtml + gridHtml + footerCtaHtml;

      results.querySelectorAll('[data-match-idx]').forEach(function(card) {
        function activate() { goToSearchDress(parseInt(card.dataset.matchIdx, 10)); }
        card.addEventListener('click', activate);
        card.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
      });
      return;
    }
  }

  _searchMatches = [];
  results.innerHTML = '<p class="search-no-results">No dresses matched “<em>' + escapeHTML(val) + '</em>”. Search by dress name (e.g. Dakota Leigh, Meredith, Addie) or style number (e.g. #25MB849C01, #D4257, #57042).</p>';
};

window.goToSearchDress = function(idx) {
  if (!_searchMatches || !_searchMatches[idx]) return;
  const p = _searchMatches[idx];
  sessionStorage.setItem('cloudnine_dress', JSON.stringify(p));
  const src = p._cat || (getActivePage() + '.html');
  sessionStorage.setItem('cloudnine_dress_src', src);
  closeSearch();
  const cat = p._type || (/prom/.test(src) ? 'prom' : /hoco/.test(src) ? 'hoco' : /mothers/.test(src) ? 'mothers' : 'bridal');
  const sku = encodeURIComponent(p.s || '');
  setTimeout(function(){ window.location.href = `dress.html?cat=${cat}&sku=${sku}`; }, 180);
};

/* ── NAV SCROLL STATE ── */
/* ── ROBUST DROPDOWN & MEGA-MENU INTERACTION ENGINE ── */
function initDropdownHover() {
  const items = document.querySelectorAll('.nav-item--has-dropdown');
  if (!items.length) return;

  items.forEach(item => {
    let timer = null;
    const dropdown = item.querySelector('.nav-dropdown');

    const openMenu = () => {
      clearTimeout(timer);
      items.forEach(other => {
        if (other !== item) other.classList.remove('is-active');
      });
      if (dropdown) {
        dropdown.querySelectorAll('[data-bg]').forEach(el => {
          el.style.backgroundImage = "url('" + el.getAttribute('data-bg') + "')";
          el.removeAttribute('data-bg');
        });
      }
      item.classList.add('is-active');
    };

    const scheduleClose = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        item.classList.remove('is-active');
      }, 280); // 280ms grace delay ensures cursor never drops menu during transit
    };

    item.addEventListener('mouseenter', openMenu);
    item.addEventListener('mouseleave', scheduleClose);
    item.addEventListener('focusin', openMenu);
    item.addEventListener('focusout', scheduleClose);

    if (dropdown) {
      dropdown.addEventListener('mouseenter', openMenu);
      dropdown.addEventListener('mouseleave', scheduleClose);
    }
  });

  // Dismiss on outside click or Escape
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item--has-dropdown')) {
      items.forEach(item => item.classList.remove('is-active'));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      items.forEach(item => item.classList.remove('is-active'));
    }
  });
}

function initNavScroll() {
  const nav = document.querySelector('.main-nav');
  const cloud = document.getElementById('navCloudCta');
  if (!nav) return;

  // Continuous scroll-linked interpolation + class docking state (Desktop, Tablet & Mobile)
  const update = () => {
    const y = window.scrollY || 0;
    const isDockedPage = document.body.classList.contains('page-quiz') || document.body.classList.contains('page-dress');
    const isScrolled = y > 20 || isDockedPage;
    const rawP = isDockedPage ? 1 : Math.min(1, Math.max(0, y / 72));
    // Smooth cubic ease-out progress (0 = floating below nav, 1 = docked inside right nav slot)
    const easedP = 1 - Math.pow(1 - rawP, 3);
    nav.style.setProperty('--nav-cloud-p', easedP.toFixed(4));
    nav.classList.toggle('scrolled', isScrolled);
    nav.classList.toggle('nav-scrolled', isScrolled);
    nav.classList.remove('nav-hidden');
    if (cloud) {
      cloud.classList.toggle('is-attached', isScrolled);
    }
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  // 1. Reveal-on-scroll system with custom spring bezier
  const scrollEls = document.querySelectorAll('.reveal-on-scroll');
  if (scrollEls.length) {
    const scrollIo = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          scrollIo.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    scrollEls.forEach(el => scrollIo.observe(el));
  }

  // 2. Legacy reveal selector compatibility
  const els = document.querySelectorAll(
    '.section > *, .section-sm > *, .page-hero, .dress-card, .bride-card, .team-card, .testimonial-card'
  );
  els.forEach((el, i) => {
    el.classList.add('reveal');
    if (i % 3 === 1) el.classList.add('reveal-delay-1');
    if (i % 3 === 2) el.classList.add('reveal-delay-2');
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ── CINEMATIC LINK & VIEW TRANSITIONS ── */
function initPageTransitions() {
  // If @view-transition is supported natively by the browser, let standard navigation run
  // so cross-document shared element view transitions work seamlessly without blank opacity flash.
  if (CSS.supports && (CSS.supports('view-transition-name: test') || 'startViewTransition' in document)) {
    return;
  }

  // Fallback graceful navigation for legacy browsers
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:') || a.target === '_blank') return;
    e.preventDefault();
    document.body.style.transition = 'opacity .2s ease, transform .2s cubic-bezier(0.4,0,1,1)';
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(4px)';
    setTimeout(() => { window.location.href = href; }, 200);
  });
}

/* ── CUSTOM LUXURY CURSOR — disabled, system cursor in use ── */
function initCursor() {
  return;

  // Two separate elements: dot snaps, ring lerps
  const dot  = document.createElement('div');
  dot.id = 'cn-cursor-dot';
  const ring = document.createElement('div');
  ring.id = 'cn-cursor-ring';
  // Add "View" text label inside ring (shows on dress cards)
  const label = document.createElement('span');
  label.id = 'cn-cursor-label';
  label.textContent = 'View';
  ring.appendChild(label);

  document.body.appendChild(ring);
  document.body.appendChild(dot);

  // Raw mouse position (updated every mousemove)
  let mx = -200, my = -200;
  // Previous position for velocity calculation
  let px = -200, py = -200;
  // Ring's current interpolated position
  let rx = -200, ry = -200;

  // Base lerp speed — increased from 0.14 for snappier feel
  const LERP_BASE = 0.22;
  // How much velocity boosts the lerp (higher = more responsive during fast moves)
  const LERP_VEL  = 0.018;

  // ── Contrast detection: check luminance of element under cursor ──
  let contrastFrame = 0;
  function detectContrast() {
    // Only check every 4 frames for performance
    if (++contrastFrame % 4 !== 0) return;
    const el = document.elementFromPoint(mx, my);
    if (!el) return;

    // Walk up to find a block-level element with a background
    let node = el;
    let isDark = false;
    for (let i = 0; i < 6; i++) {
      if (!node || node === document.body) break;
      const bg = getComputedStyle(node).backgroundColor;
      const m  = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (m) {
        const r = +m[1], g = +m[2], b = +m[3];
        // Skip fully transparent
        const a = bg.includes('rgba') ? parseFloat(bg.split(',')[3]) : 1;
        if (a < 0.15) { node = node.parentElement; continue; }
        // Relative luminance (WCAG formula)
        const lum = 0.2126*(r/255) + 0.7152*(g/255) + 0.0722*(b/255);
        if (lum < 0.35) { isDark = true; break; }
        if (lum > 0.5)  { isDark = false; break; }
      }
      node = node.parentElement;
    }

    // Also treat known dark sections as dark regardless of computed bg
    if (el.closest('.hero-cinematic,.bridal-hero,.about-hero,.mothers-hero,.cta-section,.brides-marquee,.testimonials-section,.trace-hero,.prom-video-hero,.hoco-video-hero,.mobile-menu,.search-overlay')) {
      isDark = true;
    }

    document.body.classList.toggle('cur-on-dark', isDark);
  }

  function tick() {
    // Dot: snaps exactly to mouse — no lag
    dot.style.transform = `translate3d(calc(${mx}px - 50%), calc(${my}px - 50%), 0)`;

    // Velocity-adaptive lerp: faster when moving fast
    const vx   = mx - px;
    const vy   = my - py;
    const vel  = Math.sqrt(vx*vx + vy*vy);
    const lerp = Math.min(LERP_BASE + vel * LERP_VEL, 0.55);

    // Ring: lerp toward mouse with adaptive speed
    rx += (mx - rx) * lerp;
    ry += (my - ry) * lerp;
    ring.style.transform = `translate3d(calc(${rx}px - 50%), calc(${ry}px - 50%), 0)`;

    // Store previous position for next frame
    px = mx; py = my;

    detectContrast();
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    document.body.classList.remove('cur-out');
  });

  document.addEventListener('mouseleave', () => { document.body.classList.add('cur-out'); });
  document.addEventListener('mouseenter', () => { document.body.classList.remove('cur-out'); });

  document.addEventListener('mousedown', () => { document.body.classList.add('cur-click'); });
  document.addEventListener('mouseup',   () => { document.body.classList.remove('cur-click'); });

  // Grow on interactive elements
  const hoverables = 'a, button, [role="button"], label, input, select, textarea, .testi-prev, .testi-next, .testi-dot, .dress-card, .filter-chip';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.dress-card')) {
      document.body.classList.add('cur-hover', 'cur-view');
    } else if (e.target.closest(hoverables)) {
      document.body.classList.add('cur-hover');
      document.body.classList.remove('cur-view');
    }
  });
  document.addEventListener('mouseout', (e) => {
    const leavingCard = e.target.closest('.dress-card');
    const enteringCard = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.dress-card');
    // Only remove cur-view when truly leaving the card (not just moving between its children)
    if (leavingCard && !enteringCard) {
      document.body.classList.remove('cur-hover', 'cur-view');
    } else if (!leavingCard && e.target.closest(hoverables)) {
      const enteringHoverable = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(hoverables);
      if (!enteringHoverable) document.body.classList.remove('cur-hover');
    }
  });
}

// ── SUBSCRIBE FORM (footer) ──
// Replace YOUR_SUBSCRIBE_FORM_ID with your Formspree ID
const FORMSPREE_SUB_ID = 'YOUR_SUBSCRIBE_FORM_ID';

window.submitSubscribe = async function(e, form) {
  e.preventDefault();
  if (FORMSPREE_SUB_ID === 'YOUR_SUBSCRIBE_FORM_ID') {
    form.innerHTML = '<p style="color:rgba(255,255,255,.7);font-size:13px;">You\'re on the list!</p>';
    return;
  }
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_SUB_ID}`, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    });
    if (res.ok) {
      form.innerHTML = '<p style="color:rgba(255,255,255,.7);font-size:13px;">You\'re on the list!</p>';
    }
  } catch { /* silent */ }
};

/* ════════════════════════════════════════════════════════════
   SNAP SCROLL ENGINE — YSL cover-transition panel system
   Call with a CSS selector string to activate on any page.

   initSnapScroll(selectors, options)
     selectors  — CSS selector matching sections in order
     options    — { onEnter(idx, section) } optional callback

   Handles: wheel, keyboard, touch, in-view classes, aria-hidden.
   ════════════════════════════════════════════════════════════ */
function initSnapScroll(selectors, options) {
  if (!selectors) return;

  const sections = Array.from(document.querySelectorAll(selectors));
  if (!sections.length) return;

  const opts = options || {};

  /* ── MOBILE / REDUCED MOTION: disable engine entirely upfront ── */
  const isMobileViewport = window.innerWidth <= 768;
  if (isMobileViewport || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach(function(s) {
      s.removeAttribute('aria-hidden');
      s.classList.add('in-view');
    });
    if (opts.onEnter) opts.onEnter(0, sections[0]);
    return { goTo: function() {} };
  }

  const EASE = 'cubic-bezier(0.60, 0, 0.15, 1)';
  const DUR  = 1100;

  let current = 0;
  let busy    = false;

  /* ── INIT — position every section as a fixed full-screen panel ── */
  sections.forEach(function(s, i) {
    s.style.cssText += ';position:fixed;top:0;left:0;margin:0;width:100%;height:100vh' +
                       ';overflow:hidden;will-change:transform;transition:none';
    s.setAttribute('aria-hidden', i === 0 ? 'false' : 'true');
    if (i === 0) {
      s.style.transform = 'translateY(0)';
      s.style.zIndex    = '100';
      s.classList.add('in-view');
    } else {
      s.style.transform = 'translateY(100%)';
      s.style.zIndex    = String(i + 5);
    }
  });

  /* ── SETTLE — lock all panels to canonical positions ── */
  function settle(to) {
    sections.forEach(function(s, i) {
      s.style.transition = 'none';
      if (i < to) {
        s.style.zIndex    = String(40 + i);
        s.style.transform = 'translateY(0)';
      } else if (i === to) {
        s.style.zIndex    = '100';
        s.style.transform = 'translateY(0)';
      } else {
        s.style.zIndex    = String(i + 5);
        s.style.transform = 'translateY(100%)';
      }
      s.setAttribute('aria-hidden', i === to ? 'false' : 'true');
    });
  }

  /* ── goTo — the only transition trigger ── */
  function goTo(idx) {
    if (busy || idx === current || idx < 0 || idx >= sections.length) return;
    busy = true;

    const from = current;
    const to   = idx;
    current    = to;

    if (to > from) {
      const inc = sections[to];
      inc.style.transition = 'none';
      inc.style.transform  = 'translateY(100%)';
      inc.style.zIndex     = '200';
      sections[from].style.transition = 'none';
      sections[from].style.zIndex     = '80';
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          inc.style.transition = 'transform ' + DUR + 'ms ' + EASE;
          inc.style.transform  = 'translateY(0)';
          inc.classList.add('in-view');
        });
      });
    } else {
      const out = sections[from];
      const rev = sections[to];
      out.style.transition = 'none';
      out.style.zIndex     = '200';
      out.style.transform  = 'translateY(0)';
      rev.style.transition = 'none';
      rev.style.zIndex     = '80';
      rev.style.transform  = 'translateY(0)';
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          out.style.transition = 'transform ' + DUR + 'ms ' + EASE;
          out.style.transform  = 'translateY(100%)';
        });
      });
    }

    setTimeout(function() {
      settle(to);
      // Move focus to first focusable element in the new section (accessibility)
      const firstFocusable = sections[to].querySelector('a[href], button:not([disabled]), input, [tabindex="0"]');
      if (firstFocusable) firstFocusable.focus({ preventScroll: true });
      if (opts.onEnter) opts.onEnter(to, sections[to]);
      busy = false;
    }, DUR + 80);
  }

  /* ── WHEEL ── */
  let wheelAcc = 0, wheelClear = null;
  window.addEventListener('wheel', function(e) {
    e.preventDefault();
    if (busy) return;
    wheelAcc += e.deltaY;
    clearTimeout(wheelClear);
    wheelClear = setTimeout(function() { wheelAcc = 0; }, 200);
    if (Math.abs(wheelAcc) >= 80) {
      const dir = wheelAcc > 0 ? 1 : -1;
      wheelAcc = 0;
      goTo(current + dir);
    }
  }, { passive: false });

  /* ── KEYBOARD ── */
  window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowUp'   || e.key === 'PageUp')   { e.preventDefault(); goTo(current - 1); }
    if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    if (e.key === 'End')  { e.preventDefault(); goTo(sections.length - 1); }
  });

  /* ── TOUCH (Desktop touch screens only) ── */
  let touchY0 = 0;
  window.addEventListener('touchstart', function(e) { touchY0 = e.touches[0].clientY; }, { passive: true });
  window.addEventListener('touchend',   function(e) {
    const dy = touchY0 - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 50) goTo(current + (dy > 0 ? 1 : -1));
  }, { passive: true });

  // Fire onEnter for initial section
  if (opts.onEnter) opts.onEnter(0, sections[0]);

  return { goTo };
}

/* ── IMAGE BLUR-UP FADE OBSERVER ── */
function initImageFade() {
  var selector = '.dress-card-img img, .team-portrait-inner img, .bc-img';
  function markLoaded(img) {
    if (img.complete && img.naturalWidth > 0) {
      img.classList.add('img-loaded');
    } else {
      img.addEventListener('load', function() { img.classList.add('img-loaded'); }, { once: true });
      img.addEventListener('error', function() { img.classList.add('img-loaded'); }, { once: true });
    }
  }

  // Observe existing images
  document.querySelectorAll(selector).forEach(markLoaded);

  // Observe dynamically added images (catalog renders)
  var obs = new MutationObserver(function(muts) {
    muts.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.nodeType !== 1) return;
        if (node.tagName === 'IMG' && node.matches(selector)) markLoaded(node);
        else node.querySelectorAll && node.querySelectorAll(selector).forEach(markLoaded);
      });
    });
  });
  obs.observe(document.body, { childList: true, subtree: true });
}

/* ── PROM / HOCO EXCLUSIVE BADGE INJECTION ── */
function injectExclusiveBadges() {
  // Card metadata is cleanly displayed in .dress-card-body below each image
  return;
}

/* ── ABOUT PAGE STAT COUNT-UP ── */
function initStatCountUp() {
  var statEls = document.querySelectorAll('[data-countup]');
  if (!statEls.length) return;
  var io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      io.unobserve(entry.target);
      var el = entry.target;
      var target = parseFloat(el.dataset.countup);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      var dur    = 1600;
      var start  = performance.now();
      function tick(now) {
        var p = Math.min((now - start) / dur, 1);
        var ease = 1 - Math.pow(1 - p, 3);
        var val  = target * ease;
        var disp = Number.isInteger(target) ? Math.round(val) : val.toFixed(1);
        el.textContent = prefix + disp + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  statEls.forEach(function(el) { io.observe(el); });
}

/* ── HERO IMAGE PARALLAX (desktop only) ── */
function initHeroParallax() {
  const hero = document.querySelector('.hero-cinematic');
  if (!hero || window.innerWidth <= 768) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const bg = hero.querySelector('.hero-c-bg img');
  if (!bg) return;

  let raf;
  let initialized = false;
  document.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      if (!initialized) {
        initialized = true;
        bg.style.transformOrigin = '58% 0%';
        bg.style.willChange = 'transform';
      }
      const x = (e.clientX / window.innerWidth  - 0.5) * -14;
      const y = Math.max(0, (0.5 - e.clientY / window.innerHeight) * 8);
      bg.style.transform = `scale(1.03) translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    });
  }, { passive: true });
}

/* ── EDITORIAL PHOTO 3D TILT ── */
function initPhotoTilt() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.editorial-photos').forEach(el => {
    el.style.willChange = 'transform';
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 9;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 6;
      el.style.transform = `perspective(900px) rotateY(${x.toFixed(1)}deg) rotateX(${(-y).toFixed(1)}deg)`;
      el.style.transition = 'transform 0.1s ease';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.65s cubic-bezier(0.34,1.56,0.64,1)';
      el.style.transform = '';
      setTimeout(() => { el.style.transition = ''; }, 660);
    });
  });
}

/* ── MAGNETIC BUTTON EFFECT ── */
function initMagneticButtons() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  const btns = document.querySelectorAll('.btn-primary, .btn-hero-c, .btn-white, .wl-foot-cta');
  btns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'box-shadow .3s ease';
    });
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width  - 0.5) * 10;
      const y = ((e.clientY - r.top)  / r.height - 0.5) * 5;
      btn.style.transform = `translate(${x.toFixed(1)}px,${(y - 2).toFixed(1)}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform .55s cubic-bezier(0.34,1.56,0.64,1), box-shadow .3s ease';
      btn.style.transform = '';
      setTimeout(() => { btn.style.transition = ''; }, 560);
    });
  });
}

/* ── SPECULATION RULES — 0ms Page Prefetching ── */
function initSpeculationRules() {
  try {
    if (typeof HTMLScriptElement === 'undefined' || !HTMLScriptElement.supports || !HTMLScriptElement.supports('speculationrules')) return;
    if (document.querySelector('script[type="speculationrules"]')) return;
    var specScript = document.createElement('script');
    specScript.type = 'speculationrules';
    specScript.textContent = JSON.stringify({
      prefetch: [
        {
          source: 'list',
          urls: [
            'bridal-catalog.html',
            'prom-catalog.html',
            'hoco-catalog.html',
            'mothers.html',
            'appointments.html',
            'contact.html',
            'dress.html'
          ],
          eagerness: 'moderate'
        }
      ]
    });
    document.head.appendChild(specScript);
  } catch (e) {}
}

/* ── CONCIERGE LOOKBOOK & FITTING ROOM PRE-LOAD (WITH STYLE QUIZ SYNC) ── */
function initLookbookConcierge() {
  if (typeof WL === 'undefined') return;
  var urlParams = new URLSearchParams(window.location.search || '');
  var urlSku = (urlParams.get('sku') || urlParams.get('s') || '').trim();
  var urlDes = (urlParams.get('des') || urlParams.get('d') || '').trim();
  var urlPersona = (urlParams.get('persona') || '').trim();
  var urlSil = (urlParams.get('sil') || '').trim();

  var quizData = null;
  try {
    var rawQuiz = sessionStorage.getItem('cloudnine_quiz_persona') || localStorage.getItem('cloudnine_quiz_persona');
    if (rawQuiz) quizData = JSON.parse(rawQuiz);
  } catch (e) {}

  if (!quizData && urlPersona) {
    quizData = {
      key: urlPersona,
      title: 'The ' + urlPersona.charAt(0).toUpperCase() + urlPersona.slice(1) + ' Bride',
      sil: urlSil || 'A-Line'
    };
  }

  var savedItems = WL.load().slice();
  if (urlSku && !savedItems.some(function(x) { return String(x.s || '').toLowerCase() === urlSku.toLowerCase(); })) {
    savedItems.unshift({
      s: urlSku,
      d: urlDes || 'Selected Gown',
      i: 'images/bridal/Bridal-hero.webp'
    });
  }

  // If user arrived from Style Quiz without saving to Lookbook yet, use quiz top recommended gowns
  if (!savedItems.length && quizData && Array.isArray(quizData.dresses) && quizData.dresses.length) {
    savedItems = quizData.dresses.slice(0, 6).map(function(d) {
      return {
        s: d.s || d.style || '',
        d: d.d || d.designer || 'Bridal Collection',
        n: d.n || d.name || '',
        i: d.i || d.img || 'images/bridal/Bridal-hero.webp',
        x: d.x || []
      };
    });
  }

  if (!savedItems.length && !quizData) return;

  var styleLabels = savedItems.map(function(x) {
    var des = x.d ? (x.d + ' ') : '';
    var code = x.s ? ('#' + x.s) : (x.n || 'Gown');
    return des + code;
  });

  var personaSummaryParts = [];
  if (quizData && quizData.title) {
    personaSummaryParts.push('Bridal Persona: ' + quizData.title);
    if (Array.isArray(quizData.dna) && quizData.dna[0]) {
      var topDna = quizData.dna[0];
      var secDna = quizData.dna[1];
      personaSummaryParts.push('Style DNA: ' + topDna.pct + '% ' + topDna.label + (secDna ? ' / ' + secDna.pct + '% ' + secDna.label : ''));
    }
    if (quizData.sil) personaSummaryParts.push('Silhouette: ' + quizData.sil);
    if (quizData.nk) personaSummaryParts.push('Neckline: ' + quizData.nk);
    if (quizData.fab) personaSummaryParts.push('Fabric: ' + quizData.fab);
    if (quizData.timelineLabel) personaSummaryParts.push('Timeline: ' + quizData.timelineLabel);
  }
  var personaPrefix = personaSummaryParts.length ? (personaSummaryParts.join(' · ') + ' | ') : '';
  var copyNote = personaPrefix + (styleLabels.length ? ('Saved Cloud Nine Styles (' + styleLabels.length + '): ' + styleLabels.join(', ')) : '');

  var pillsHtml = savedItems.slice(0, 6).map(function(item) {
    var img = (item.x && item.x.length) ? item.x[0] : (item.i || 'images/bridal/Bridal-hero.webp');
    var label = escapeHTML((item.d ? item.d + ' ' : '') + (item.s ? '#' + item.s : (item.n || 'Style')));
    return '<div class="lc-gown-pill">' +
      '<img src="' + escapeHTML(img) + '" alt="' + label + '" class="lc-gown-thumb" loading="lazy"/>' +
      '<span class="lc-gown-label">' + label + '</span>' +
    '</div>';
  }).join('');
  if (savedItems.length > 6) {
    pillsHtml += '<div class="lc-gown-pill lc-gown-more">+' + (savedItems.length - 6) + ' more</div>';
  }

  var quizMetaHtml = '';
  if (quizData && quizData.title) {
    var dnaPillHtml = (Array.isArray(quizData.dna) && quizData.dna[0])
      ? '<span style="display:inline-flex;align-items:center;padding:4px 10px;border-radius:9999px;background:#fff;border:1px solid rgba(28,78,80,0.14);color:var(--teal-deep);font-family:var(--font-kicker);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">DNA: ' + escapeHTML(quizData.dna[0].pct + '% ' + quizData.dna[0].label) + '</span>'
      : '';
    quizMetaHtml =
      '<div class="lc-quiz-meta-pills" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">' +
        '<span style="display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:9999px;background:rgba(28,78,80,0.09);color:var(--teal-deep);font-family:var(--font-kicker);font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">✦ ' + escapeHTML(quizData.title) + '</span>' +
        dnaPillHtml +
        (quizData.sil ? '<span style="display:inline-flex;align-items:center;padding:4px 10px;border-radius:9999px;background:#fff;border:1px solid rgba(28,78,80,0.14);color:var(--text);font-family:var(--font-kicker);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Silhouette: ' + escapeHTML(quizData.sil) + '</span>' : '') +
        (quizData.nk ? '<span style="display:inline-flex;align-items:center;padding:4px 10px;border-radius:9999px;background:#fff;border:1px solid rgba(28,78,80,0.14);color:var(--text);font-family:var(--font-kicker);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Neckline: ' + escapeHTML(quizData.nk) + '</span>' : '') +
        (quizData.timelineLabel ? '<span style="display:inline-flex;align-items:center;padding:4px 10px;border-radius:9999px;background:#fff;border:1px solid rgba(28,78,80,0.14);color:var(--text-muted);font-family:var(--font-kicker);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">' + escapeHTML(quizData.timelineLabel) + '</span>' : '') +
      '</div>';
  }

  function clearSharedQuizFromPage() {
    if (window.cnHaptic) window.cnHaptic(10);
    try {
      sessionStorage.removeItem('cloudnine_quiz_persona');
      localStorage.removeItem('cloudnine_quiz_persona');
    } catch (e) {}

    try {
      var cleanParams = new URLSearchParams(window.location.search || '');
      cleanParams.delete('from');
      cleanParams.delete('persona');
      cleanParams.delete('sil');
      cleanParams.delete('tl');
      var qs = cleanParams.toString();
      var nextUrl = window.location.pathname + (qs ? '?' + qs : '') + (window.location.hash || '');
      window.history.replaceState({}, '', nextUrl);
    } catch (e) {}

    var contactBanner = document.getElementById('contactQuizConciergeBanner');
    if (contactBanner) contactBanner.remove();

    var apptBanner = document.getElementById('lookbookConciergeBanner');
    if (apptBanner) {
      var remainingLookbook = WL.load();
      if (!remainingLookbook.length) {
        apptBanner.remove();
      } else {
        var metaRow = apptBanner.querySelector('.lc-quiz-meta-pills');
        if (metaRow) metaRow.remove();
        var clearApptBtn = document.getElementById('lcClearQuizApptBtn');
        if (clearApptBtn) clearApptBtn.remove();
      }
    }

    document.querySelectorAll('.lc-contact-badge').forEach(function(b) { b.remove(); });

    ['message', 'gc_message'].forEach(function(fieldId) {
      var f = document.getElementById(fieldId);
      if (f && f.dataset.quizAutofilled === 'true') {
        f.value = '';
        delete f.dataset.quizAutofilled;
      }
    });

    var toast = document.getElementById('wlToast');
    if (toast) {
      var msg = toast.querySelector('.wl-toast-msg');
      if (msg) msg.textContent = 'Quiz Results Cleared';
      toast.classList.add('visible');
      setTimeout(function() { toast.classList.remove('visible'); }, 3000);
    }
  }
  window.clearSharedQuizResults = clearSharedQuizFromPage;

  // 1. Appointments Page: Inject Curated Fitting Lookbook Concierge Bar above #bridaliveWrap
  var bridaliveWrap = document.getElementById('bridaliveWrap');
  if (bridaliveWrap && !document.getElementById('lookbookConciergeBanner')) {
    var banner = document.createElement('div');
    banner.id = 'lookbookConciergeBanner';
    banner.className = 'lookbook-concierge-banner double-bezel';

    var headingText = savedItems.length
      ? ('Your Curated Fitting Lookbook (' + savedItems.length + ' ' + (savedItems.length === 1 ? 'Style' : 'Styles') + ')')
      : ('Your Bridal Style Quiz Profile: ' + escapeHTML(quizData.title || 'Custom Match'));

    banner.innerHTML =
      '<div class="double-bezel-inner lc-banner-inner">' +
        '<div class="lc-banner-top">' +
          '<div class="lc-banner-copy">' +
            '<span class="lc-eyebrow">Fitting Room Pre-Load · Concierge Ready</span>' +
            quizMetaHtml +
            '<h3 class="lc-title">' + headingText + '</h3>' +
            '<p class="lc-desc">Tap below to copy your style profile &amp; gown numbers, then paste them into the BridalLive scheduler notes so your stylist can prepare your private suite before you arrive.</p>' +
          '</div>' +
          '<div class="lc-actions">' +
            '<button type="button" class="btn-primary lc-copy-btn" id="lcCopyStylesBtn">' +
              '<span>Copy Profile &amp; Style Numbers</span>' +
            '</button>' +
            (quizData ? '<button type="button" class="btn-outline lc-clear-quiz-btn" id="lcClearQuizApptBtn" onclick="window.clearSharedQuizResults()"><span>✕ Clear Quiz Results</span></button>' : '') +
          '</div>' +
        '</div>' +
        (pillsHtml ? '<div class="lc-pills-row">' + pillsHtml + '</div>' : '') +
      '</div>';

    bridaliveWrap.parentNode.insertBefore(banner, bridaliveWrap);

    var copyBtn = document.getElementById('lcCopyStylesBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function() {
        if (window.cnHaptic) window.cnHaptic(12);
        WL.copyToClipboard(copyNote, 'Profile & Style Numbers Copied for Scheduler');
        copyBtn.classList.add('is-copied');
        copyBtn.innerHTML = '<span>✓ Copied! Paste in Scheduler Notes</span>';
        setTimeout(function() {
          copyBtn.classList.remove('is-copied');
          copyBtn.innerHTML = '<span>Copy Profile &amp; Style Numbers</span>';
        }, 4000);
      });
    }
  }

  // 2. Contact Page: Inject Rich Quiz Results & Lookbook Banner + Auto-Populate Inquiry Textareas
  var msgField = document.getElementById('message');
  var gcMsgField = document.getElementById('gc_message');
  if (msgField || gcMsgField) {
    var dnaDetail = '';
    if (quizData && Array.isArray(quizData.dna) && quizData.dna[0]) {
      var d0 = quizData.dna[0];
      var d1 = quizData.dna[1];
      dnaDetail = ' (' + d0.pct + '% ' + d0.label + (d1 ? ', ' + d1.pct + '% ' + d1.label : '') + (quizData.sil ? ' · Silhouette: ' + quizData.sil : '') + ')';
    } else if (quizData && quizData.sil) {
      dnaDetail = ' (' + quizData.sil + ' silhouette)';
    }

    var traitExtras = [];
    if (quizData && quizData.nk) traitExtras.push('Neckline: ' + quizData.nk);
    if (quizData && quizData.fab) traitExtras.push('Fabric: ' + quizData.fab);
    if (quizData && quizData.timelineLabel) traitExtras.push('Timeline: ' + quizData.timelineLabel);

    var quizIntro = (quizData && quizData.title)
      ? ('My Bridal Style Quiz matched me with "' + quizData.title + '"' + dnaDetail + (traitExtras.length ? ' [' + traitExtras.join(' · ') + ']' : '') + '. ')
      : '';
    var stylesPart = styleLabels.length
      ? ('I would love to inquire about availability and fitting options for these matched styles: ' + styleLabels.join(', ') + '.')
      : 'I would love to schedule a consultation with a stylist for my upcoming wedding.';
    var fullMessageText = 'Hi Cloud Nine! ' + quizIntro + stylesPart;

    var reqSection = document.getElementById('request-form');
    var reqInner = reqSection ? reqSection.querySelector('.appt-req-inner') : null;
    if (reqInner && !document.getElementById('contactQuizConciergeBanner')) {
      var cBanner = document.createElement('div');
      cBanner.id = 'contactQuizConciergeBanner';
      cBanner.className = 'lookbook-concierge-banner double-bezel';
      cBanner.style.marginBottom = '36px';

      var contactTitle = (quizData && quizData.title)
        ? ('Shared from Style Quiz: ' + escapeHTML(quizData.title))
        : ('Your Curated Fitting Lookbook (' + savedItems.length + ' ' + (savedItems.length === 1 ? 'Style' : 'Styles') + ')');

      cBanner.innerHTML =
        '<div class="double-bezel-inner lc-banner-inner">' +
          '<div class="lc-banner-top">' +
            '<div class="lc-banner-copy">' +
              '<span class="lc-eyebrow">✦ Style Quiz &amp; Lookbook Attached · Pre-Loaded into Your Inquiry</span>' +
              quizMetaHtml +
              '<h3 class="lc-title">' + contactTitle + '</h3>' +
              '<p class="lc-desc">Your Bridal Style DNA and matched showroom gowns have been pre-loaded into the inquiry form below so our Peoria stylist team can review your profile right away.</p>' +
            '</div>' +
            '<div class="lc-actions">' +
              '<button type="button" class="btn-outline lc-dossier-btn" id="lcJumpGeneralFormBtn">' +
                '<span>Use General Contact Form ↓</span>' +
              '</button>' +
              '<a href="quiz.html" class="btn-outline lc-dossier-btn" style="text-decoration:none;display:inline-flex;align-items:center;justify-content:center;">' +
                '<span>Retake / View Quiz</span>' +
              '</a>' +
              '<button type="button" class="btn-outline lc-clear-quiz-btn" id="lcClearQuizContactBtn" onclick="window.clearSharedQuizResults()">' +
                '<span>✕ Clear Quiz Results</span>' +
              '</button>' +
            '</div>' +
          '</div>' +
          (pillsHtml ? '<div class="lc-pills-row">' + pillsHtml + '</div>' : '') +
        '</div>';

      reqInner.insertBefore(cBanner, reqInner.firstElementChild);

      var jumpGenBtn = document.getElementById('lcJumpGeneralFormBtn');
      if (jumpGenBtn) {
        jumpGenBtn.addEventListener('click', function() {
          var genForm = document.getElementById('generalContactForm');
          if (genForm) {
            genForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            var subj = document.getElementById('gc_subject');
            if (subj && !subj.value) subj.value = 'Bridal Gown Inquiry';
            setTimeout(function() {
              var nameInput = document.getElementById('gc_name');
              if (nameInput) nameInput.focus();
            }, 450);
          }
        });
      }
    }

    function populateContactTextarea(field) {
      if (!field || field.value.trim()) return;
      field.value = fullMessageText;
      field.dataset.quizAutofilled = 'true';
      var group = field.closest('.input-group');
      if (group && !group.querySelector('.lc-contact-badge')) {
        var badge = document.createElement('div');
        badge.className = 'lc-contact-badge';
        badge.innerHTML =
          '<span>✓ Pre-loaded ' + escapeHTML(quizData && quizData.title ? quizData.title + (styleLabels.length ? ' + ' + styleLabels.length + ' matched styles' : '') : styleLabels.length + ' saved styles') + '</span>' +
          '<button type="button" class="lc-badge-clear-btn" onclick="window.clearSharedQuizResults()" aria-label="Clear pre-loaded quiz results">✕ Clear</button>';
        group.insertBefore(badge, field);
      }
    }

    populateContactTextarea(msgField);
    populateContactTextarea(gcMsgField);

    var gcSubj = document.getElementById('gc_subject');
    if (gcSubj && !gcSubj.value && quizData) {
      gcSubj.value = 'Bridal Gown Inquiry';
    }

    if (urlParams.get('from') === 'quiz' && reqSection) {
      setTimeout(function() {
        reqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', function() {
    setTimeout(function() {
      var s = document.createElement('script');
      s.defer = true;
      s.dataset.domain = 'cloudninepeoria.com';
      s.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(s);
    }, 3500);
  }, { once: true });
  injectComponents();
  initReveal();
  initPageTransitions();
  initNavScroll();
  initDropdownHover();
  initCursor();
  initImageFade();
  injectExclusiveBadges();
  initStatCountUp();
  initBoutiqueStatus();
  initMagneticButtons();
  initHeroParallax();
  initPhotoTilt();
  initSpeculationRules();
  initLookbookConcierge();
});

/* ════════════════════════════════════════════════════════
   PEORIA, IL CST LIVE BOUTIQUE STATUS ENGINE
   Calculates live Central Time operating status with
   accurate store schedules & next reopening predictions.
   ════════════════════════════════════════════════════════ */
function getPeoriaDateTime() {
  try {
    var now = new Date();
    var peoriaStr = now.toLocaleString('en-US', { timeZone: 'America/Chicago' });
    return new Date(peoriaStr);
  } catch(e) {
    return new Date();
  }
}

function getPeoriaBoutiqueStatus() {
  var pNow = getPeoriaDateTime();
  var day = pNow.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  var hour = pNow.getHours();
  var min = pNow.getMinutes();
  var curMin = hour * 60 + min;

  // Bridal Schedule:
  // Mon, Fri: 10:00 AM – 5:00 PM (600 - 1020)
  // Tue, Thu: 11:00 AM – 7:00 PM (660 - 1140)
  // Wed: Closed
  // Sat: 9:00 AM – 5:00 PM (540 - 1020)
  // Sun: Closed (Open Sundays seasonally Jan-Mar)
  var schedule = {
    0: { open: null, close: null, name: 'Sunday', label: 'Closed (Open Jan–Mar)', sub: 'Open Sundays seasonally Jan–Mar' },
    1: { open: 600, close: 1020, name: 'Monday', label: '10am–5pm', closeLabel: '5:00 PM' },
    2: { open: 660, close: 1140, name: 'Tuesday', label: '11am–7pm', closeLabel: '7:00 PM' },
    3: { open: null, close: null, name: 'Wednesday', label: 'Closed', sub: 'Stylists resting & restocking' },
    4: { open: 660, close: 1140, name: 'Thursday', label: '11am–7pm', closeLabel: '7:00 PM' },
    5: { open: 600, close: 1020, name: 'Friday', label: '10am–5pm', closeLabel: '5:00 PM' },
    6: { open: 540, close: 1020, name: 'Saturday', label: '9am–5pm', closeLabel: '5:00 PM' }
  };

  var today = schedule[day];
  var isOpen = false;
  var isClosingSoon = false;
  var statusClass = 'status--closed';
  var statusText = 'Closed Now';
  var subText = '';

  if (today.open !== null && today.close !== null) {
    if (curMin >= today.open && curMin < today.close) {
      isOpen = true;
      if (today.close - curMin <= 45) {
        isClosingSoon = true;
        statusClass = 'status--closing-soon';
        statusText = 'Closing Soon · Until ' + today.closeLabel;
        subText = 'Open today until ' + today.closeLabel + ' CST';
      } else {
        statusClass = 'status--open';
        statusText = 'Open Now · Until ' + today.closeLabel;
        subText = 'Open today until ' + today.closeLabel + ' CST';
      }
    } else if (curMin < today.open) {
      statusClass = 'status--closed';
      var openTimeStr = (today.open === 540 ? '9:00 AM' : today.open === 600 ? '10:00 AM' : '11:00 AM');
      statusText = 'Closed · Opens ' + openTimeStr;
      subText = 'Opens today at ' + openTimeStr + ' CST';
    } else {
      statusClass = 'status--closed';
      statusText = 'Closed for Today';
      subText = 'Reopens ' + getNextOpenDayText(day);
    }
  } else if (day === 0) {
    statusClass = 'status--closed';
    statusText = 'Closed Sundays (Open Jan–Mar)';
    subText = 'Reopens Mon at 10:00 AM CST';
  } else {
    statusClass = 'status--closed';
    statusText = 'Closed Wednesdays';
    subText = 'Reopens Thu at 11:00 AM CST';
  }

  return { isOpen: isOpen, isClosingSoon: isClosingSoon, statusClass: statusClass, statusText: statusText, subText: subText, day: day };
}

function getNextOpenDayText(curDay) {
  if (curDay === 2) return 'Thu at 11:00 AM CST';
  if (curDay === 5) return 'Sat at 9:00 AM CST';
  if (curDay === 6) return 'Mon at 10:00 AM CST';
  return 'Tomorrow at 10:00 AM CST';
}

function initBoutiqueStatus() {
  var status = getPeoriaBoutiqueStatus();

  // 1. Header live status pill
  var headerPill = document.getElementById('navLiveStatusPill');
  var headerText = document.getElementById('navLiveStatusText');
  if (headerPill && headerText) {
    headerPill.className = 'nav-live-status-pill ' + status.statusClass;
    headerText.textContent = status.statusText;
  }

  // 2. Status Popover banner & table highlight
  var popBanner = document.getElementById('navSpStatusBanner');
  var popText = document.getElementById('navSpStatusText');
  if (popBanner && popText) {
    popBanner.className = 'nav-sp-status-banner ' + status.statusClass;
    popText.textContent = status.subText;
  }
  var popTable = document.getElementById('navSpHoursTable');
  if (popTable) {
    popTable.querySelectorAll('tr[data-days]').forEach(function(row) {
      var days = row.dataset.days.split(',').map(Number);
      if (days.includes(status.day)) row.classList.add('today');
      else row.classList.remove('today');
    });
  }

  // 3. Footer Today badge
  var badge = document.getElementById('footerTodayBadge');
  if (badge) {
    if (status.isOpen) {
      badge.textContent = status.isClosingSoon ? 'Closing Soon · ' + status.statusText : 'Open Today · ' + status.statusText;
      badge.style.background = 'rgba(16,185,129,0.12)';
      badge.style.color = '#065f46';
    } else {
      badge.textContent = status.statusText;
      badge.style.background = 'rgba(28,78,80,0.06)';
      badge.style.color = 'var(--text-muted)';
    }
  }

  // 4. Contact page live status
  var contactStatus = document.getElementById('contactLiveStatus');
  if (contactStatus) {
    contactStatus.className = 'contact-live-pill ' + status.statusClass;
    contactStatus.innerHTML = '<span class="live-dot"></span><span>' + status.statusText + ' (' + status.subText + ')</span>';
  }

  // 5. Mobile Drawer Live Status
  var mobileStatus = document.getElementById('mobileMenuStatus');
  var mobileText = document.getElementById('mobileMenuStatusText');
  if (mobileStatus && mobileText) {
    mobileStatus.className = 'mobile-menu-status ' + status.statusClass;
    mobileText.textContent = 'Peoria Boutique · ' + status.statusText;
  }
}

/* ── Peoria Boutique Status Popover Toggle ── */
window.toggleNavStatusPopover = function(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  var popover = document.getElementById('navStatusPopover');
  var pill = document.getElementById('navLiveStatusPill');
  if (!popover) return;
  var isOpen = popover.classList.contains('open');
  if (isOpen) {
    popover.classList.remove('open');
    if (pill) pill.setAttribute('aria-expanded', 'false');
  } else {
    popover.classList.add('open');
    if (pill) pill.setAttribute('aria-expanded', 'true');
  }
};

document.addEventListener('click', function(e) {
  var popover = document.getElementById('navStatusPopover');
  var wrap = document.getElementById('navStatusWrap');
  if (popover && popover.classList.contains('open') && wrap && !wrap.contains(e.target)) {
    popover.classList.remove('open');
    var pill = document.getElementById('navLiveStatusPill');
    if (pill) pill.setAttribute('aria-expanded', 'false');
  }
});

/* ════════════════════════════════════════════════════════
   CONFETTI NO-OP STUB
   ════════════════════════════════════════════════════════ */
window.triggerConfetti = function() {};

// Global Wishlist helper bindings
window.isItemInWishlist = function(p) {
  return (typeof WL !== 'undefined' && WL.has) ? WL.has(p) : false;
};
window.toggleWishlistItem = function(p) {
  return (typeof WL !== 'undefined' && WL.toggle) ? WL.toggle(p) : false;
};
window.getWishlistItems = function() {
  return (typeof WL !== 'undefined' && WL.load) ? WL.load() : [];
};

/* ════════════════════════════════════════════════════════
   AGENTATION VISUAL FEEDBACK & MCP SYNC (LOCAL DEV ONLY)
   ════════════════════════════════════════════════════════ */
(function() {
  if (typeof window === 'undefined' || !window.location) return;
  var hostname = window.location.hostname || '';
  var protocol = window.location.protocol || '';

  var isLocalEnv = (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '0.0.0.0' ||
    hostname === '[::1]' ||
    hostname.endsWith('.local') ||
    protocol === 'file:'
  );

  if (isLocalEnv && (window.location.search || '').includes('agentation=1') && !window.__agentationMounted && !document.querySelector('script[src*="agentation.js"]')) {
    import('./src/agentation.js').catch(function(err) {
      console.warn('[Agentation] Local feedback toolbar notice:', err);
    });
  }
})();



/* Cloud Nine Bridal Shared Nav + Footer */

const LOGO = 'images/logo-transparent.png';

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
        <img src="images/logo-transparent.png" alt="Cloud Nine Bridal Boutique" class="nav-logo-img"/>
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
                <div class="nav-mega-card-bg" style="background-image:url('images/bridal/Bridal-hero.webp');"></div>
                <div class="nav-mega-card-overlay"></div>
                <div class="nav-mega-card-content">
                  <span class="nav-mega-badge">The 2026 Collection</span>
                  <div class="nav-mega-card-title">Explore 600+ Gowns</div>
                  <div class="nav-mega-card-sub">Essense · Maggie Sottero · Rebecca Ingram · Stella York</div>
                  <span class="nav-mega-card-cta">Browse Catalog</span>
                </div>
              </a>

              <!-- Curated Designers -->
              <div class="nav-mega-col">
                <div class="nav-mega-heading">Curated Designers</div>
                <ul class="nav-mega-list">
                  <li><a href="bridal-catalog.html?designer=Essense+of+Australia" class="nav-mega-link"><span class="nav-mega-link-title">Essense of Australia</span><span class="nav-mega-link-sub">Romantic lace &amp; boho glam</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Maggie+Sottero" class="nav-mega-link"><span class="nav-mega-link-title">Maggie Sottero</span><span class="nav-mega-link-sub">Iconic corset fit &amp; drama</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Rebecca+Ingram" class="nav-mega-link"><span class="nav-mega-link-title">Rebecca Ingram</span><span class="nav-mega-link-sub">Effortless luxury &amp; value</span></a></li>
                  <li><a href="bridal-catalog.html?designer=Stella+York" class="nav-mega-link"><span class="nav-mega-link-title">Stella York</span><span class="nav-mega-link-sub">Modern runway-inspired gowns</span></a></li>
                  <li><a href="bridal-catalog.html" class="nav-mega-link nav-mega-link--all"><span>View All 2026 Designers</span></a></li>
                </ul>
              </div>

              <!-- The Boutique Experience -->
              <div class="nav-mega-col">
                <div class="nav-mega-heading">The Experience</div>
                <ul class="nav-mega-list">
                  <li><a href="experience.html" class="nav-mega-link nav-mega-link--highlight"><span class="nav-mega-link-title">The Boutique Experience</span><span class="nav-mega-link-sub">Private suites, champagne &amp; styling</span></a></li>
                  <li><a href="quiz.html" class="nav-mega-link"><span class="nav-mega-link-title">Bridal Style Quiz</span><span class="nav-mega-link-sub">Find your silhouette in 2 minutes</span></a></li>
                  <li><a href="our-brides.html" class="nav-mega-link"><span class="nav-mega-link-title">Our Real Brides</span><span class="nav-mega-link-sub">Real Peoria weddings &amp; reviews</span></a></li>
                  <li><a href="appointments.html" class="nav-mega-link"><span class="nav-mega-link-title">VIP Suites &amp; Rosé</span><span class="nav-mega-link-sub">Private 1-on-1 styling sessions</span></a></li>
                  <li><a href="mothers.html" class="nav-mega-link"><span class="nav-mega-link-title">Mothers of the Wedding</span><span class="nav-mega-link-sub">Sophisticated MOB &amp; MOG styles</span></a></li>
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
                <div class="nav-dd-ph-home-title">Prom &amp; Homecoming 2026</div>
                <div class="nav-dd-ph-home-sub">Cloud Nine · Peoria, Illinois</div>
              </div>
              <a href="prom.html" class="nav-dd-ph-home-badge">View Guide</a>
            </div>
            <div class="nav-dd-ph-cols">
              <a href="prom-catalog.html" class="nav-dd-ph-col">
                <div class="nav-dd-ph-col-bg" style="background-image:url('images/real/prom/instagram/04-ig.webp');"></div>
                <div class="nav-dd-ph-col-overlay"></div>
                <div class="nav-dd-ph-col-content">
                  <div class="nav-dd-ph-col-eyebrow">Spring 2026</div>
                  <div class="nav-dd-ph-col-title">Prom Gowns</div>
                  <div class="nav-dd-ph-col-cta">Shop Prom</div>
                </div>
              </a>
              <a href="hoco-catalog.html" class="nav-dd-ph-col">
                <div class="nav-dd-ph-col-bg" style="background-image:url('images/real/hoco/03-88900.webp');"></div>
                <div class="nav-dd-ph-col-overlay"></div>
                <div class="nav-dd-ph-col-content">
                  <div class="nav-dd-ph-col-eyebrow">Fall 2026</div>
                  <div class="nav-dd-ph-col-title">HOCO Styles</div>
                  <div class="nav-dd-ph-col-cta">Shop HOCO</div>
                </div>
              </a>
            </div>
            <a href="prom.html#registry" class="nav-ph-registry-ribbon">
              <div class="nav-ph-reg-text">
                <strong>Central Illinois High School Dress Registry</strong>
                <span>1 Dress Per Style Per School Guaranteed Exclusivity</span>
              </div>
              <span class="nav-ph-reg-arrow">Learn More</span>
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
        <li class="nav-item nav-item--quiz"><a href="quiz.html" class="nav-link ${active('quiz')}">Style Quiz</a></li>
      </ul>

      <!-- Right Actions: Live Peoria Status + Lookbook Preview + Search + Book CTA -->
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
              <div class="nav-sp-sub">4711 N. University St, Peoria, IL 61614</div>
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
              <tr data-days="0"><td>Sunday</td><td>By Appt Only</td></tr>
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

        <!-- Lookbook Wishlist Pill & Mini-Tray -->
        <div class="nav-wl-wrap" id="navWlWrap">
          <button class="nav-wl-btn" onclick="openWishlist()" aria-label="Saved styles lookbook" id="wlNavBtn" title="Saved styles">
            <span class="wl-nav-label">Saved</span>
            <span class="wl-nav-badge" id="wl-nav-badge">0</span>
          </button>
          <div class="nav-wl-popover" id="navWlPopover" role="dialog" aria-label="Saved Lookbook Quick Preview">
            <div class="nav-wlp-head">
              <span class="nav-wlp-title">Fitting Lookbook</span>
              <span class="nav-wlp-count" id="navWlpCount">0 Saved</span>
            </div>
            <div class="nav-wlp-items" id="navWlpItems">
              <!-- Populated dynamically by WL -->
            </div>
            <div class="nav-wlp-footer">
              <button type="button" class="nav-wlp-view-btn" onclick="openWishlist()">View Lookbook Dossier</button>
              <a href="appointments.html" class="nav-wlp-book-btn">Book With Saved Rack</a>
            </div>
          </div>
        </div>

        <!-- Search Button (Cmd+K) -->
        <button class="nav-link nav-search-btn" onclick="openSearch()" aria-label="Search (Cmd+K)" title="Search (Cmd+K)">
          <span class="search-btn-label">Search</span>
          <span class="search-kbd-hint">CMD+K</span>
        </button>

        <!-- Luxury Appointment CTA Button -->
        <a href="appointments.html" class="btn-nav-appt btn-luxury-pill">
          <span>Book Appointment</span>
        </a>
      </div>

      <!-- Mobile triggers -->
      <button class="nav-search-btn nav-search-mobile" aria-label="Search" onclick="openSearch()">Search</button>
      <button class="nav-hamburger" aria-label="Open navigation menu" onclick="openMobileMenu()">
        <span></span><span></span><span></span>
      </button>

    </div>
  </nav>

  <!-- MOBILE MENU DRAWER -->
  <div class="mobile-menu" id="mobileMenu" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="mobile-menu-backdrop" onclick="closeMobileMenu()"></div>
    <div class="mobile-menu-drawer">

      <div class="mobile-menu-head">
        <img src="images/logo-transparent.png" alt="Cloud Nine Bridal Boutique" class="mobile-menu-logo-img"/>
        <button class="mobile-menu-close" onclick="closeMobileMenu()" aria-label="Close navigation menu">Close</button>
      </div>

      <!-- Mobile Live Status Card -->
      <div class="mobile-menu-status" id="mobileMenuStatus">
        <span class="live-dot"></span>
        <span id="mobileMenuStatusText">Peoria Boutique · Open Today</span>
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
          <a href="experience.html" class="mobile-nav-item" style="color:var(--teal-mid);font-weight:700;">
            The Boutique Experience
          </a>
          <a href="bridal.html" class="mobile-nav-item">
            Bridal Collection
          </a>
          <a href="bridal-catalog.html" class="mobile-nav-sub">Shop All 600+ Gowns</a>
          <a href="quiz.html" class="mobile-nav-sub">Take Bridal Style Quiz</a>
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
        <button type="button" onclick="closeMobileMenu();setTimeout(openWishlist,200);" style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;border:1px solid rgba(255,255,255,.12);background:none;color:rgba(255,255,255,.75);font-family:'Josefin Sans',sans-serif;font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;width:100%;transition:color .15s,border-color .15s;">
          View Saved Styles (<span id="wlMobileMenuBadge">0</span>)
        </button>
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
        <div>
          <div class="footer-logo"><img src="${LOGO}" alt="Cloud Nine Bridal Boutique"/></div>
          <p class="footer-tagline">Peoria's premier bridal boutique — helping brides find their dream gown. Come say yes with us.</p>
          <div class="footer-contact">
            <a href="https://goo.gl/maps/HXgYuahuNu8ycSXB8" target="_blank">
              4711 N. University St, Peoria, IL 61614
            </a>
            <a href="tel:3096933830">
              (309) 693‑3830
            </a>
            <a href="mailto:sayyes@cloudninepeoria.com">
              sayyes@cloudninepeoria.com
            </a>
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/cloudninebridalboutique/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">Facebook</a>
            <a href="https://www.instagram.com/cloudninebridalpeoria/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">Instagram</a>
            <a href="https://goo.gl/maps/HXgYuahuNu8ycSXB8" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Google Reviews — 4.9 rating" title="4.9 on Google">Google Reviews</a>
          </div>
        </div>
        <div>
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
        <div>
          <div class="footer-col-title">Company</div>
          <ul class="footer-links">
            <li><a href="about.html">About Us</a></li>
            <li><a href="about.html#team">Our Team</a></li>
            <li><a href="about.html#testimonials">Testimonials</a></li>
            <li><a href="about.html#awards">Awards</a></li>
            <li><a href="about.html#faq">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title" style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            Bridal Hours
            <span id="footerTodayBadge" style="font-size:9px;font-weight:700;letter-spacing:.12em;padding:2px 7px;border-radius:20px;background:var(--teal-dim2);color:var(--teal-deep);"></span>
          </div>
          <table class="hours-table" style="margin-top:10px;">
            <tr><td>Mon, Fri</td><td>10am – 5pm</td></tr>
            <tr><td>Tues, Thur</td><td>11am – 7pm</td></tr>
            <tr><td>Wed</td><td>Closed</td></tr>
            <tr><td>Sat</td><td>9am – 5pm</td></tr>
            <tr><td>Sun</td><td>By Appt. Only</td></tr>
          </table>
          <div style="font-size:10px;color:var(--text-light);margin-top:3px;font-style:italic;">*Open Sundays Jan–Mar seasonally</div>
          <div class="hours-sub">Prom Hours</div>
          <table class="hours-table">
            <tr><td>Mon</td><td>10am – 5pm</td></tr>
            <tr><td>Tues, Thur</td><td>12pm – 7pm</td></tr>
            <tr><td>Wed</td><td>Closed</td></tr>
            <tr><td>Fri</td><td>10am – 5pm</td></tr>
            <tr><td>Sat</td><td>11am – 5pm</td></tr>
            <tr><td>Sun</td><td>Closed</td></tr>
          </table>
          <div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);">
            <div class="footer-col-title" style="margin-bottom:6px;">Get Inspired</div>
            <p style="font-size:12px;color:rgba(28,78,80,.45);margin-bottom:14px;line-height:1.65;">New arrivals, seasonal events &amp; bridal inspo — delivered to your inbox.</p>
            <form class="footer-subscribe-form" onsubmit="submitSubscribe(event, this)">
              <input type="email" name="email" placeholder="your@email.com" required aria-label="Email address"/>
              <button type="submit">Subscribe</button>
            </form>
            <p style="font-size:10px;color:var(--text-light);margin-top:8px;line-height:1.5;">No spam, ever. Unsubscribe anytime.</p>
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
      <span class="search-eyebrow">Search</span>
      <button class="search-close-btn" onclick="closeSearch()" aria-label="Close">Close</button>
    </div>
    <div class="search-input-wrap">
      <input type="text" id="searchInput" class="search-input" placeholder="Style number, designer, silhouette…" autocomplete="off" aria-label="Search styles and collections" oninput="onSearchInput(this.value)" onkeydown="if(event.key==='Escape')closeSearch()"/>
      <button class="search-clear-btn" id="searchClearBtn" onclick="clearSearch()" style="display:none" aria-label="Clear">Clear</button>
    </div>
    <div id="searchResults" class="search-results" aria-live="polite" aria-atomic="false" role="region" aria-label="Search results"></div>
    <div id="searchCategories" class="search-categories">
      <div class="search-cat-label">Browse Collections</div>
      <div class="search-cat-links">
        <a href="bridal-catalog.html" class="search-cat-link">Bridal Gowns</a>
        <a href="mothers.html" class="search-cat-link">Mother of the Bride</a>
        <a href="prom.html" class="search-cat-link">Prom</a>
        <a href="hoco.html" class="search-cat-link">Homecoming</a>
        <a href="tuxedos.html" class="search-cat-link">Tuxedos &amp; Suits</a>
        <a href="quiz.html" class="search-cat-link">Style Quiz</a>
      </div>
    </div>
  </div>
</div>`;
}

/* ── MOBILE MENU — open / close ── */
window.openMobileMenu = function() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.nav-hamburger');
  const nav = document.querySelector('.main-nav');
  if (!menu) return;
  menu.classList.add('open');
  if (hamburger) hamburger.classList.add('open');
  /* Slide nav out so it doesn't overlap the drawer */
  if (nav) nav.classList.add('nav-hidden');
  document.body.style.overflow = 'hidden';
  /* Move focus to the close button for accessibility */
  setTimeout(function() {
    const closeBtn = menu.querySelector('.mobile-menu-close');
    if (closeBtn) closeBtn.focus();
  }, 420);
};

window.closeMobileMenu = function() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.nav-hamburger');
  const nav = document.querySelector('.main-nav');
  if (!menu) return;
  menu.classList.remove('open');
  if (hamburger) hamburger.classList.remove('open');
  /* Restore nav */
  if (nav) nav.classList.remove('nav-hidden');
  document.body.style.overflow = '';
};

/* Close on Escape */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('open')) closeMobileMenu();
  }
});

/* ── MOBILE TAB BAR (4-tab luxury bottom navigation) ── */
function injectMobileCTABar() {
  if (window.innerWidth > 768) return;
  if (document.getElementById('mobileCTABar')) return;
  if (document.body.classList.contains('page-quiz')) return;
  var page = getActivePage();
  if (page === 'dress' || document.querySelector('.dp-mobile-cta')) return;

  var bar = document.createElement('nav');
  bar.className = 'mobile-tab-bar';
  bar.id = 'mobileCTABar';
  bar.setAttribute('aria-label', 'Quick navigation');
  bar.innerHTML =
    '<a href="bridal-catalog.html" class="mobile-tab ' + (page === 'bridal' || page === 'bridal-catalog' ? 'active' : '') + '" aria-label="Browse bridal gowns">' +
      '<span class="mobile-tab-label">Gowns</span>' +
    '</a>' +
    '<a href="appointments.html" class="mobile-tab mobile-tab--book ' + (page === 'appointments' ? 'active' : '') + '" aria-label="Book an appointment">' +
      '<span class="mobile-tab-label">Book</span>' +
    '</a>' +
    '<button type="button" class="mobile-tab mobile-tab--saved" onclick="openWishlist()" aria-label="Saved Styles">' +
      '<span class="mobile-tab-icon-wrap">' +
        '<span class="wl-tab-badge" id="wlMobileTabBadge">0</span>' +
      '</span>' +
      '<span class="mobile-tab-label">Saved</span>' +
    '</button>' +
    '<a href="tel:3096933830" class="mobile-tab" aria-label="Call us at (309) 693-3830">' +
      '<span class="mobile-tab-label">Call</span>' +
    '</a>';
  document.body.appendChild(bar);
  if (typeof WL !== 'undefined' && WL.updateBadge) WL.updateBadge();
}

/* ════════════════════════════════════════════════════════
   WISHLIST / FAVORITES ENGINE
   Stores product objects in localStorage.
   Buttons injected automatically via MutationObserver.
   ════════════════════════════════════════════════════════ */
var WL = (function() {
  var KEY = 'cloudnine_wishlist';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch(e) { return []; }
  }
  function save(items) {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch(e) {}
  }
  function itemId(p) { return (p.s || '') + '|' + (p.d || ''); }

  function has(p) {
    var id = itemId(p);
    return load().some(function(x) { return itemId(x) === id; });
  }

  function toggle(p) {
    var items = load();
    var id = itemId(p);
    var idx = -1;
    items.forEach(function(x, i) { if (itemId(x) === id) idx = i; });
    var added;
    if (idx >= 0) { items.splice(idx, 1); added = false; }
    else { items.push(p); added = true; }
    save(items);
    updateBadge();
    renderDrawer();
    showToast(added, p);
    return added;
  }

  var _toastTimer = null;
  function showToast(added, p) {
    var toast = document.getElementById('wlToast');
    if (!toast) return;
    var msg   = toast.querySelector('.wl-toast-msg');
    if (msg)  msg.textContent  = added ? 'Saved to Lookbook' : 'Removed from Lookbook';
    toast.classList.add('visible');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(function() { toast.classList.remove('visible'); }, 3200);
  }

  function remove(p) {
    var id = itemId(p);
    var items = load().filter(function(x) { return itemId(x) !== id; });
    save(items);
    updateBadge();
    renderDrawer();
    document.querySelectorAll('.wl-btn[data-wid="' + id.replace(/"/g, '') + '"]').forEach(function(btn) {
      btn.classList.remove('wl-btn--active');
      btn.textContent = 'Save';
    });
  }

  function clearAll() {
    save([]);
    updateBadge();
    renderDrawer();
    document.querySelectorAll('.wl-btn--active').forEach(function(btn) {
      btn.classList.remove('wl-btn--active');
      btn.textContent = 'Save';
    });
  }

  function updateBadge() {
    var n = load().length;
    var badge = document.getElementById('wl-nav-badge');
    if (badge) {
      badge.textContent = n;
      badge.classList.toggle('visible', n > 0);
    }
    var mBadge = document.getElementById('wlMobileTabBadge');
    if (mBadge) {
      mBadge.textContent = n;
      mBadge.classList.toggle('visible', n > 0);
    }
    var menuBadge = document.getElementById('wlMobileMenuBadge');
    if (menuBadge) {
      menuBadge.textContent = n;
    }
    renderNavPreview();
  }

  function renderNavPreview() {
    var countEl = document.getElementById('navWlpCount');
    var itemsEl = document.getElementById('navWlpItems');
    if (!itemsEl) return;

    var items = load();
    if (countEl) countEl.textContent = items.length + ' Saved';

    if (!items.length) {
      itemsEl.innerHTML =
        '<div class="nav-wlp-empty">' +
          '<p class="nav-wlp-empty-text">Your Fitting Lookbook is empty.<br/>Save your favorite gowns to review them during your styling session.</p>' +
          '<a href="quiz.html" class="nav-wlp-quiz-btn">Take Style Quiz</a>' +
        '</div>';
      return;
    }

    var preview = items.slice(-3).reverse();
    var html = preview.map(function(p) {
      var img = p.i || 'images/bridal/Bridal-hero.webp';
      var title = escapeHTML(p.n || p.s || 'Gown');
      var designer = escapeHTML(p.d || 'Cloud Nine');
      var link = (p.cat === 'prom' || p.cat === 'hoco') ? (p.cat + '-catalog.html') : ('dress.html?s=' + encodeURIComponent(p.s || '') + '&cat=' + encodeURIComponent(p.cat || 'bridal'));
      return '<a href="' + link + '" class="nav-wlp-item">' +
        '<img src="' + img + '" alt="' + title + '" class="nav-wlp-img"/>' +
        '<div class="nav-wlp-info">' +
          '<div class="nav-wlp-item-title">' + title + '</div>' +
          '<div class="nav-wlp-item-designer">' + designer + '</div>' +
        '</div>' +
      '</a>';
    }).join('');

    if (items.length > 3) {
      html += '<div class="nav-wlp-more">+' + (items.length - 3) + ' more saved gowns in your lookbook</div>';
    }
    itemsEl.innerHTML = html;
  }

  function renderDrawer() {
    var body   = document.getElementById('wlBody');
    var head   = document.getElementById('wlHeadCount');
    var foot   = document.getElementById('wlFoot');
    if (!body) return;
    var items = load();
    if (head) head.textContent = items.length + ' saved style' + (items.length !== 1 ? 's' : '');

    if (!items.length) {
      // Try to show recently viewed
      var recentlyViewed = [];
      try { recentlyViewed = JSON.parse(localStorage.getItem('cloudnine_recentlyViewed') || '[]').slice(0,4); } catch(e) {}

      var rvHtml = '';
      if (recentlyViewed.length) {
        rvHtml = '<div style="margin-top:20px;">' +
          '<div style="font-family:\'Josefin Sans\',sans-serif;font-size:8px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--text-light);margin-bottom:12px;">Recently Viewed</div>' +
          '<div class="wl-grid">' +
          recentlyViewed.map(function(p) {
            var img = (p.x && p.x.length) ? p.x[0] : (p.i || '');
            return '<div class="wl-item" style="cursor:pointer;" onclick="(function(){sessionStorage.setItem(\'cloudnine_dress\',JSON.stringify(' + JSON.stringify(p) + '));sessionStorage.setItem(\'cloudnine_dress_src\',' + JSON.stringify(p._cat || 'bridal-catalog.html') + ');closeWishlist();setTimeout(function(){window.location.href=\'dress.html\';},200);})()">' +
              '<img class="wl-item-img" src="' + escapeHTML(img) + '" alt="' + escapeHTML((p.d||'') + ' ' + (p.s||'')) + '" loading="lazy"/>' +
              '<div class="wl-item-overlay"></div>' +
              '<div class="wl-item-info"><span class="wl-item-designer">' + escapeHTML(p.d||'') + '</span><span class="wl-item-name">#' + escapeHTML(p.s||'') + '</span></div>' +
            '</div>';
          }).join('') +
          '</div></div>';
      }

      body.innerHTML =
        '<div class="wl-empty">' +
          '<p class="wl-empty-title">Your lookbook is empty</p>' +
          '<p class="wl-empty-sub">Save any gown to keep it handy for your upcoming appointment.</p>' +
        '</div>' + rvHtml;
      if (foot) foot.style.display = 'none';
      return;
    }

    if (foot) foot.style.display = 'flex';

    var html = '<div class="wl-grid">';
    items.forEach(function(p) {
      var id = itemId(p);
      var imgSrc = (p.x && p.x.length) ? p.x[0] : (p.i || '');
      html +=
        '<div class="wl-item" data-wid="' + escapeHTML(id) + '">' +
          '<img class="wl-item-img" src="' + escapeHTML(imgSrc) + '" alt="' + escapeHTML((p.d||'') + ' ' + (p.s||'')) + '" loading="lazy"/>' +
          '<div class="wl-item-overlay"></div>' +
          '<div class="wl-item-info">' +
            '<span class="wl-item-designer">' + escapeHTML(p.d||'') + '</span>' +
            '<span class="wl-item-name">#' + escapeHTML(p.s||'') + '</span>' +
          '</div>' +
          '<button class="wl-item-remove" data-wid="' + escapeHTML(id) + '" aria-label="Remove from wishlist">Remove</button>' +
        '</div>';
    });
    html += '</div>';
    body.innerHTML = html;

    // Attach remove handlers
    body.querySelectorAll('.wl-item-remove').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var wid = btn.dataset.wid;
        var p = load().filter(function(x) { return itemId(x) === wid; })[0];
        if (p) remove(p);
      });
    });

    // Click item -> go to dress detail
    body.querySelectorAll('.wl-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        if (e.target.classList.contains('wl-item-remove')) return;
        var wid = item.dataset.wid;
        var p = load().filter(function(x) { return itemId(x) === wid; })[0];
        if (p) {
          sessionStorage.setItem('cloudnine_dress', JSON.stringify(p));
          sessionStorage.setItem('cloudnine_dress_src', p._cat || 'bridal-catalog.html');
          closeWishlist();
          var cat = p._type || (/prom/.test(p._cat||'') ? 'prom' : /hoco/.test(p._cat||'') ? 'hoco' : /mothers/.test(p._cat||'') ? 'mothers' : 'bridal');
          var sku = encodeURIComponent(p.s || '');
          setTimeout(function() { window.location.href = `dress.html?cat=${cat}&sku=${sku}`; }, 200);
        }
      });
    });
  }

  function injectHeart(card) {
    if (card.querySelector('.wl-btn')) return;
    var p = null;
    try { p = JSON.parse(card.dataset.product || 'null'); } catch(e) {}
    if (!p) {
      var idx  = parseInt(card.dataset.idx, 10);
      var cats = window.fil || window.P || [];
      if (!isNaN(idx) && cats[idx]) p = cats[idx];
    }
    if (!p || !p.s) return;

    var active = has(p);
    var btn    = document.createElement('button');
    btn.className = 'wl-btn' + (active ? ' wl-btn--active' : '');
    btn.setAttribute('aria-label', active ? 'Remove from lookbook' : 'Save to lookbook');
    btn.dataset.wid = itemId(p);
    btn.textContent = active ? 'Saved' : 'Save';

    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var added = toggle(p);
      btn.classList.toggle('wl-btn--active', added);
      btn.textContent = added ? 'Saved' : 'Save';
      btn.setAttribute('aria-label', added ? 'Remove from lookbook' : 'Save to lookbook');
      btn.classList.add('wl-btn--pulse');
      setTimeout(function() { btn.classList.remove('wl-btn--pulse'); }, 420);
    });

    var imgWrap = card.querySelector('.dress-card-img, .bc');
    (imgWrap || card).style.position = 'relative';
    (imgWrap || card).appendChild(btn);
  }

  function startObserver() {
    var obs = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        m.addedNodes.forEach(function(node) {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains('dress-card')) {
            injectHeart(node);
          } else if (node.querySelectorAll) {
            node.querySelectorAll('.dress-card[data-idx]').forEach(injectHeart);
          }
        });
      });
    });
    obs.observe(document.body, { childList: true, subtree: true });
    document.querySelectorAll('.dress-card[data-idx]').forEach(injectHeart);
    updateBadge();
  }

  function openLookbook() {
    var modal = document.getElementById('lookbookModal');
    if (!modal) return;
    renderLookbook();
    
    // Restore saved metadata
    try {
      var meta = JSON.parse(localStorage.getItem('cn_lookbook_meta') || '{}');
      var nameEl = document.getElementById('lbBrideName');
      var dateEl = document.getElementById('lbDate');
      var notesEl = document.getElementById('lbNotes');
      if (nameEl && meta.name) nameEl.value = meta.name;
      if (dateEl && meta.date) dateEl.value = meta.date;
      if (notesEl && meta.notes) notesEl.value = meta.notes;
    } catch(e) {}

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLookbook() {
    var modal = document.getElementById('lookbookModal');
    if (!modal) return;
    modal.classList.remove('open');
    var drawer = document.getElementById('wlDrawer');
    if (!drawer || !drawer.classList.contains('open')) {
      document.body.style.overflow = '';
    }
  }

  function saveLookbookMeta() {
    try {
      var nameEl = document.getElementById('lbBrideName');
      var dateEl = document.getElementById('lbDate');
      var notesEl = document.getElementById('lbNotes');
      var meta = {
        name: nameEl ? nameEl.value : '',
        date: dateEl ? dateEl.value : '',
        notes: notesEl ? notesEl.value : ''
      };
      localStorage.setItem('cn_lookbook_meta', JSON.stringify(meta));
    } catch(e) {}
  }

  function renderLookbook() {
    var container = document.getElementById('lookbookGrid');
    var subtitle = document.getElementById('lookbookSub');
    if (!container) return;
    var items = load();
    if (subtitle) {
      subtitle.textContent = items.length + ' Gown' + (items.length !== 1 ? 's' : '') + ' Curated for Fitting Session';
    }

    if (!items.length) {
      container.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:48px 16px;color:var(--text-muted);font-style:italic;">No styles currently saved. Add favorite gowns to your lookbook to generate your custom dossier.</div>';
      return;
    }

    var html = '';
    items.forEach(function(p, i) {
      var img = (p.x && p.x.length) ? p.x[0] : (p.i || '');
      html +=
        '<div class="lookbook-card">' +
          '<img class="lookbook-card-img" src="' + escapeHTML(img) + '" alt="' + escapeHTML((p.d||'') + ' ' + (p.s||'')) + '" loading="lazy"/>' +
          '<div>' +
            '<div class="lookbook-card-sub">' + escapeHTML(p.d || 'Designer Gown') + '</div>' +
            '<h4 class="lookbook-card-title">' + escapeHTML(p.n || p.s || 'Style #' + (i+1)) + '</h4>' +
            (p.sil ? '<div style="font-size:10px;color:var(--teal-deep);margin-top:2px;">Silhouette: ' + escapeHTML(p.sil) + '</div>' : '') +
          '</div>' +
          '<div class="lookbook-card-notes">' +
            '<span>Style #' + escapeHTML(p.s || '') + '</span>' +
            '<span>Fitting: [ ] Love [ ] Maybe</span>' +
          '</div>' +
        '</div>';
    });
    container.innerHTML = html;

    // Attach persistence listeners
    ['lbBrideName', 'lbDate', 'lbNotes'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el && !el._persistBound) {
        el._persistBound = true;
        el.addEventListener('input', saveLookbookMeta);
      }
    });
  }

  function copyShareLink() {
    var items = load();
    var skus = items.map(function(x) { return encodeURIComponent(x.s || ''); }).filter(Boolean).join(',');
    var shareUrl = window.location.origin + '/bridal-catalog.html' + (skus ? '?lookbook=' + skus : '');
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(function() {
        alert('Lookbook link copied to clipboard!\n\nShare this link with your bridesmaids or stylist: ' + shareUrl);
      }).catch(function() {
        prompt('Copy your lookbook link below:', shareUrl);
      });
    } else {
      prompt('Copy your lookbook link below:', shareUrl);
    }
  }

  return { load, has, toggle, remove, clearAll, updateBadge, renderDrawer, startObserver, openLookbook, closeLookbook, renderLookbook, copyShareLink };
})();

/* ── Wishlist drawer HTML ── */
function wishlistDrawerHTML() {
  return '<div class="wl-drawer" id="wlDrawer" role="dialog" aria-modal="true" aria-label="Saved styles">' +
    '<div class="wl-backdrop" id="wlBackdrop"></div>' +
    '<div class="wl-panel">' +
      '<div class="wl-head">' +
        '<div class="wl-head-left">' +
          '<h2 class="wl-head-title">Saved Styles</h2>' +
          '<span class="wl-head-count" id="wlHeadCount">0 saved styles</span>' +
        '</div>' +
        '<button class="wl-close" id="wlClose" aria-label="Close wishlist">Close</button>' +
      '</div>' +
      '<div class="wl-body" id="wlBody"></div>' +
      '<div class="wl-foot" id="wlFoot" style="display:none">' +
        '<button type="button" class="wl-foot-lookbook-btn" onclick="WL.openLookbook()">' +
          '<span>Generate Fitting Lookbook</span>' +
        '</button>' +
        '<a href="appointments.html" class="wl-foot-cta" onclick="closeWishlist()">' +
          'Book a Fitting for These Styles' +
        '</a>' +
        '<button class="wl-foot-clear" onclick="WL.clearAll()">Clear all saved styles</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

/* ── Lookbook Dossier Modal HTML ── */
function lookbookModalHTML() {
  return '<div class="lookbook-modal" id="lookbookModal" role="dialog" aria-modal="true" aria-label="Bridal Lookbook Dossier">' +
    '<div class="lookbook-backdrop" id="lookbookBackdrop" onclick="WL.closeLookbook()"></div>' +
    '<div class="lookbook-sheet">' +
      '<div class="lookbook-header">' +
        '<div class="lookbook-header-left">' +
          '<span class="lookbook-header-eyebrow">Cloud Nine Bridal Boutique · Peoria, IL</span>' +
          '<h3 class="lookbook-header-title">Bridal Fitting Lookbook Dossier</h3>' +
          '<span style="font-size:11px;color:var(--text-muted);" id="lookbookSub">Curated Selection</span>' +
        '</div>' +
        '<div class="lookbook-actions">' +
          '<button type="button" class="lookbook-btn-print" onclick="window.print()" aria-label="Print or save as PDF">Print / PDF</button>' +
          '<button type="button" class="lookbook-btn-share" onclick="WL.copyShareLink()" aria-label="Share Lookbook Link">Share</button>' +
          '<button type="button" class="lookbook-close" onclick="WL.closeLookbook()" aria-label="Close lookbook">Close</button>' +
        '</div>' +
      '</div>' +
      '<div class="lookbook-body">' +
        '<div class="lookbook-meta-bar">' +
          '<div class="lookbook-field">' +
            '<span class="lookbook-field-label">Bride\'s Name</span>' +
            '<input type="text" class="lookbook-field-input" placeholder="e.g. Jessica Sundby" id="lbBrideName"/>' +
          '</div>' +
          '<div class="lookbook-field">' +
            '<span class="lookbook-field-label">Fitting / Wedding Date</span>' +
            '<input type="text" class="lookbook-field-input" placeholder="e.g. October 14, 2026" id="lbDate"/>' +
          '</div>' +
          '<div class="lookbook-field">' +
            '<span class="lookbook-field-label">Stylist Notes &amp; Preferred Vibe</span>' +
            '<input type="text" class="lookbook-field-input" placeholder="e.g. Loved clean crepe &amp; dramatic train details, open to sparkle..." id="lbNotes"/>' +
          '</div>' +
        '</div>' +
        '<div class="lookbook-grid" id="lookbookGrid"></div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

/* ── Open / close wishlist ── */
window.openWishlist = function() {
  var drawer = document.getElementById('wlDrawer');
  if (!drawer) return;
  WL.renderDrawer();
  drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(function() {
    var cl = document.getElementById('wlClose');
    if (cl) cl.focus();
  }, 420);
};

window.closeWishlist = function() {
  var drawer = document.getElementById('wlDrawer');
  if (!drawer) return;
  drawer.classList.remove('open');
  if (!document.getElementById('lookbookModal')?.classList.contains('open')) {
    document.body.style.overflow = '';
  }
};

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

  // Inject wishlist drawer
  const wlDiv = document.createElement('div');
  wlDiv.innerHTML = wishlistDrawerHTML();
  document.body.appendChild(wlDiv.firstElementChild);

  // Inject lookbook modal
  const lbDiv = document.createElement('div');
  lbDiv.innerHTML = lookbookModalHTML();
  document.body.appendChild(lbDiv.firstElementChild);

  // Inject wishlist toast
  const toast = document.createElement('div');
  toast.className = 'wl-toast';
  toast.id = 'wlToast';
  toast.innerHTML =
    '<span class="wl-toast-msg">Saved to Lookbook</span>' +
    '<a class="wl-toast-action" href="#" onclick="event.preventDefault();openWishlist();">View All</a>';
  document.body.appendChild(toast);

  // Wire drawer close events
  const backdrop = document.getElementById('wlBackdrop');
  const closeBtn = document.getElementById('wlClose');
  if (backdrop) backdrop.addEventListener('click', closeWishlist);
  if (closeBtn)  closeBtn.addEventListener('click', closeWishlist);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      if (document.getElementById('lookbookModal')?.classList.contains('open')) WL.closeLookbook();
      else if (document.getElementById('wlDrawer')?.classList.contains('open')) closeWishlist();
    }
  });

  // Start wishlist card observer (only on catalog pages)
  if (document.querySelector('.section-catalog, .grid-4')) {
    WL.startObserver();
  } else {
    WL.updateBadge();
  }

  // Inject mobile sticky CTA bar
  injectMobileCTABar();
  // Inject back-to-top
  injectBackToTop();
  // Sync all badges & preview trays
  WL.updateBadge();
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
let _globalLoading = false;

async function ensureGlobalCatalog() {
  if (_globalCatalog && _globalCatalog.length) return _globalCatalog;
  if (_globalLoading) return [];
  _globalLoading = true;
  try {
    const [bRes, pRes, mRes, hRes] = await Promise.allSettled([
      fetch('data/bridal-products.json?v=20260909f').then(r => r.json()),
      fetch('data/prom-products.json?v=2').then(r => r.json()),
      fetch('data/mothers-products.json?v=1').then(r => r.json()),
      fetch('data/hoco-products.json?v=2').then(r => r.json())
    ]);
    const b = bRes.status === 'fulfilled' && Array.isArray(bRes.value) ? bRes.value.map(x => Object.assign({}, x, { _cat: 'bridal-catalog.html', _type: 'bridal' })) : [];
    const p = pRes.status === 'fulfilled' && Array.isArray(pRes.value) ? pRes.value.map(x => Object.assign({}, x, { _cat: 'prom-catalog.html', _type: 'prom' })) : [];
    const m = mRes.status === 'fulfilled' && Array.isArray(mRes.value) ? mRes.value.map(x => Object.assign({}, x, { _cat: 'mothers.html', _type: 'mothers' })) : [];
    const h = hRes.status === 'fulfilled' && Array.isArray(hRes.value) ? hRes.value.map(x => Object.assign({}, x, { _cat: 'hoco-catalog.html', _type: 'hoco' })) : [];
    _globalCatalog = b.concat(p, m, h);
  } catch(e) {
    _globalCatalog = [];
  }
  _globalLoading = false;
  return _globalCatalog;
}

function initSearch() {
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
}

window.openSearch = function() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  ensureGlobalCatalog();
  setTimeout(function() {
    const input = document.getElementById('searchInput');
    if (input) input.focus();
  }, 250);
};

window.closeSearch = function() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
};

window.closeSearchBg = function(e) {
  if (e.target === document.getElementById('searchOverlay')) closeSearch();
};

window.clearSearch = function() {
  const input = document.getElementById('searchInput');
  if (input) { input.value = ''; input.focus(); }
  document.getElementById('searchClearBtn').style.display = 'none';
  document.getElementById('searchResults').innerHTML = '';
  document.getElementById('searchCategories').style.display = '';
};

window.onSearchInput = async function(val) {
  const clearBtn = document.getElementById('searchClearBtn');
  const results = document.getElementById('searchResults');
  const cats = document.getElementById('searchCategories');
  if (clearBtn) clearBtn.style.display = val ? 'flex' : 'none';
  if (!val.trim()) {
    results.innerHTML = '';
    if (cats) cats.style.display = '';
    return;
  }
  if (cats) cats.style.display = 'none';

  let catalog = window.fil || window.P || (typeof P !== 'undefined' ? P : null);
  if (!catalog || !catalog.length) {
    catalog = await ensureGlobalCatalog();
  }

  const q = val.toLowerCase().trim();
  if (catalog && catalog.length) {
    const matches = catalog.filter(function(p) {
      return (p.s||'').toLowerCase().includes(q) ||
             (p.d||'').toLowerCase().includes(q) ||
             (p.c||'').toLowerCase().includes(q) ||
             (p.n||'').toLowerCase().includes(q);
    }).slice(0, 8);
    if (matches.length) {
      _searchMatches = matches;
      results.innerHTML = '<div class="search-results-label">' + escapeHTML(matches.length) + ' match' + (matches.length > 1 ? 'es' : '') + '</div>' +
        '<div class="search-results-grid">' + matches.map(function(p, i) {
          return '<div class="search-result-card" data-match-idx="' + i + '" role="button" tabindex="0" aria-label="View ' + escapeHTML(p.d||'') + ' style ' + escapeHTML(p.s||'') + '">' +
            '<div class="search-result-img"><img src="' + escapeHTML(p.i||'') + '" alt="' + escapeHTML((p.d||'') + ' ' + (p.s||'')) + '" loading="lazy"/></div>' +
            '<div class="search-result-info"><div class="search-result-designer">' + escapeHTML(p.d||'') + '</div><div class="search-result-style">#' + escapeHTML(p.s||'') + '</div></div>' +
            '</div>';
        }).join('') + '</div>';
      // Attach click handlers via JS, not inline onclick
      results.querySelectorAll('[data-match-idx]').forEach(function(card) {
        function activate() { goToSearchDress(parseInt(card.dataset.matchIdx, 10)); }
        card.addEventListener('click', activate);
        card.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); } });
      });
      return;
    }
  }

  // Navigation suggestions fallback if no dresses found
  const pages = [
    {name:'Bridal Gowns', url:'bridal-catalog.html', keys:['bridal','wedding','gown','dress']},
    {name:'Mother of the Bride', url:'mothers.html', keys:['mother','mom','mob','bride']},
    {name:'Prom', url:'prom-catalog.html', keys:['prom']},
    {name:'Homecoming', url:'hoco-catalog.html', keys:['hoco','homecoming']},
    {name:'Tuxedos & Suits', url:'tuxedos.html', keys:['tux','suit','groom','men']},
    {name:'Style Quiz', url:'quiz.html', keys:['quiz','style','find']},
  ];
  const matchedPages = pages.filter(function(p) {
    return p.name.toLowerCase().includes(q) || p.keys.some(function(k){ return k.includes(q) || q.includes(k); });
  });

  if (matchedPages.length) {
    results.innerHTML = '<div class="search-results-label">Collections</div>' +
      matchedPages.map(function(p){ return '<a href="' + p.url + '" class="search-nav-result">' + p.name + '</a>'; }).join('');
  } else {
    _searchMatches = [];
    const noResult = document.createElement('p');
    noResult.className = 'search-no-results';
    const t1 = document.createTextNode('No styles matched “');
    const em = document.createElement('em');
    em.textContent = val;
    const t2 = document.createTextNode('”. Try a style number, designer name, or silhouette.');
    noResult.appendChild(t1); noResult.appendChild(em); noResult.appendChild(t2);
    results.innerHTML = '';
    results.appendChild(noResult);
  }
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
  if (!nav) return;

  // Scrolled background state & height compression
  const update = () => {
    const isScrolled = window.scrollY > 24;
    nav.classList.toggle('scrolled', isScrolled);
    nav.classList.toggle('nav-scrolled', isScrolled);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });

  // Hide on scroll-down, reveal on scroll-up (mobile only)
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (window.innerWidth <= 768) {
      if (y > lastY && y > 80) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
    } else {
      nav.classList.remove('nav-hidden');
    }
    lastY = y;
  }, { passive: true });
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
    s.style.cssText += ';position:fixed;top:0;left:0;width:100%;height:100vh' +
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
  var page = getActivePage();
  var isProm = /prom-catalog/.test(page);
  var isHoco = /hoco-catalog/.test(page);
  if (!isProm && !isHoco) return;

  var label = isProm ? '1 Per School' : 'Exclusive Style';

  // Inject onto existing cards + watch for new ones
  function addBadge(card) {
    if (card.querySelector('.prom-exclusive-badge')) return;
    var imgWrap = card.querySelector('.dress-card-img');
    if (!imgWrap) return;
    imgWrap.style.position = 'relative';
    var badge = document.createElement('span');
    badge.className = 'prom-exclusive-badge';
    badge.textContent = label;
    imgWrap.appendChild(badge);
  }

  document.querySelectorAll('.dress-card').forEach(addBadge);
  var cardObs = new MutationObserver(function(muts) {
    muts.forEach(function(m) {
      m.addedNodes.forEach(function(node) {
        if (node.nodeType !== 1) return;
        if (node.classList && node.classList.contains('dress-card')) addBadge(node);
        else node.querySelectorAll && node.querySelectorAll('.dress-card').forEach(addBadge);
      });
    });
  });
  cardObs.observe(document.body, { childList: true, subtree: true });
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

  bg.style.transform = 'scale(1.07)';
  bg.style.willChange = 'transform';

  let raf;
  document.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth  - 0.5) * -16;
      const y = (e.clientY / window.innerHeight - 0.5) * -9;
      bg.style.transform = `scale(1.07) translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    });
  });
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

document.addEventListener('DOMContentLoaded', () => {
  (function() {
    var s = document.createElement('script');
    s.defer = true;
    s.dataset.domain = 'cloudninebridal.com';
    s.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(s);
  })();
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
  // Sun: Closed / By Appt (Jan-Mar season)
  var schedule = {
    0: { open: null, close: null, name: 'Sunday', label: 'By Appt Only', sub: 'Reserved bridal parties' },
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
    statusText = 'By Appt Today';
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
   CANVAS CONFETTI PHYSICS ENGINE
   Lightweight zero-dependency particle engine for
   celebration micro-interactions (lookbook saves & quiz).
   ════════════════════════════════════════════════════════ */
window.triggerConfetti = function(options) {
  options = options || {};
  var count = options.count || 45;
  var spread = options.spread || 60;
  var colors = options.colors || ['#c9607f', '#d4789a', '#fce8f0', '#98d5d6', '#e4f4f5', '#e85d7a', '#ffffff'];

  var canvas = document.getElementById('cnConfettiCanvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'cnConfettiCanvas';
    canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:99999;';
    document.body.appendChild(canvas);
  }

  var ctx = canvas.getContext('2d');
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;

  var particles = [];
  var originX = (options.origin && options.origin.x != null) ? options.origin.x * width : width / 2;
  var originY = (options.origin && options.origin.y != null) ? options.origin.y * height : height * 0.45;

  for (var i = 0; i < count; i++) {
    var angle = (-Math.PI / 2) + (Math.random() - 0.5) * (spread * Math.PI / 180);
    var speed = 4 + Math.random() * 8;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: 4 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * Math.PI * 2,
      vRot: (Math.random() - 0.5) * 0.2,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
      gravity: 0.18 + Math.random() * 0.08,
      drag: 0.985
    });
  }

  var startTime = performance.now();
  function loop(now) {
    var elapsed = now - startTime;
    ctx.clearRect(0, 0, width, height);

    var alive = false;
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vRot;
      p.opacity = Math.max(0, 1 - elapsed / 2200);

      if (p.opacity > 0 && p.y < height + 20) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    if (alive && elapsed < 2500) {
      requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  }
  requestAnimationFrame(loop);
};

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


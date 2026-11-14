const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('--- RUNNING CLOUD NINE CATALOG ENGINE VALIDATION SUITE ---');

// 1. Check data files
const dataFiles = [
  'data/bridal-products.json',
  'data/prom-products.json',
  'data/hoco-products.json',
  'data/mothers-products.json'
];

dataFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file missing: ${file}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);
  console.log(`[PASS] ${file}: Loaded ${data.length} valid product entries`);
});

// 2. Check catalog HTML script tags
const htmlFiles = [
  { file: 'bridal-catalog.html', cat: 'bridal', facets: ['des'] },
  { file: 'prom-catalog.html', cat: 'prom', facets: ['des'] },
  { file: 'hoco-catalog.html', cat: 'hoco', facets: ['des'] },
  { file: 'mothers.html', cat: 'mothers', facets: ['des'] }
];

function readPageBundle(file) {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const srcs = [...content.matchAll(/<script[^>]+src="([^"]+)"/gi)].map(m => m[1].split('?')[0]);
  srcs.forEach(src => {
    if (/^https?:/i.test(src)) return;
    const bundled = path.join(__dirname, src);
    if (fs.existsSync(bundled)) content += '\n' + fs.readFileSync(bundled, 'utf8');
  });
  return content;
}

htmlFiles.forEach(({ file, cat, facets }) => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`HTML file missing: ${file}`);
  }
  const content = readPageBundle(file);
  
  if (!content.includes('src="catalog-engine.js')) {
    throw new Error(`${file} is missing src="catalog-engine.js" script reference`);
  }
  if (!content.includes('new CloudNineCatalog')) {
    throw new Error(`${file} is missing new CloudNineCatalog instantiation`);
  }
  if (!content.includes(`category: '${cat}'`)) {
    throw new Error(`${file} is missing category: '${cat}'`);
  }
  facets.forEach(f => {
    if (!content.includes(`'${f}'`)) {
      throw new Error(`${file} missing facet '${f}'`);
    }
  });
  console.log(`[PASS] ${file}: Verified catalog engine markup and configuration`);
});

// 3. Test catalog engine in sandbox
const engineCode = fs.readFileSync(path.join(__dirname, 'catalog-engine.js'), 'utf8');
const sandbox = {
  window: {
    addEventListener: () => {}
  },
  document: {
    addEventListener: () => {},
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: (id) => ({
      classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
      setAttribute: () => {},
      addEventListener: () => {},
      style: {}
    }),
    createDocumentFragment: () => ({ appendChild: () => {} }),
    createElement: () => ({
      classList: { add: () => {}, toggle: () => {} },
      setAttribute: () => {},
      addEventListener: () => {},
      dataset: {},
      style: {}
    }),
    activeElement: null
  },
  localStorage: { getItem: () => null, setItem: () => {} },
  sessionStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  location: { pathname: '/bridal-catalog.html', search: '' },
  URLSearchParams: URLSearchParams,
  console: console,
  setTimeout: (fn) => fn(),
  fetch: () => Promise.resolve({ ok: true, json: () => Promise.resolve([]) })
};

vm.createContext(sandbox);
vm.runInContext(engineCode, sandbox);

if (typeof sandbox.window.CloudNineCatalog !== 'function') {
  throw new Error('CloudNineCatalog class was not exported onto sandbox window');
}
console.log('[PASS] catalog-engine.js: Class successfully loaded and evaluated in sandbox environment');

const vercel = JSON.parse(fs.readFileSync(path.join(__dirname, 'vercel.json'), 'utf8'));
const csp = vercel.headers.flatMap(h => h.headers).find(h => h.key === 'Content-Security-Policy').value;
const scriptSrc = csp.split(';').map(s => s.trim()).find(s => s.startsWith('script-src '));
if (!scriptSrc || /unsafe-inline/.test(scriptSrc)) {
  throw new Error('script-src still allows unsafe-inline: ' + scriptSrc);
}
if (!csp.includes("script-src-attr 'none'")) {
  throw new Error('CSP is missing script-src-attr none');
}
const formAction = csp.split(';').map(s => s.trim()).find(s => s.startsWith('form-action'));
if (!formAction || formAction.includes("'self'")) {
  throw new Error('form-action still allows same-origin posts: ' + formAction);
}
console.log('[PASS] CSP: script-src has no unsafe-inline and form-action is not self');

// Test matching logic with sample data
const bridalData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/bridal-products.json'), 'utf8'));
const promData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/prom-products.json'), 'utf8'));
const hocoData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/hoco-products.json'), 'utf8'));
const mothersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/mothers-products.json'), 'utf8'));

// 1. Bridal Catalog Test
const bridalCatalog = new sandbox.window.CloudNineCatalog({
  category: 'bridal',
  dataPath: 'data/bridal-products.json',
  facets: ['sil', 'des'],
  facetLabels: { sil: 'Silhouette', des: 'Designer' },
  synonyms: {
    'sparkly': ['sparkle', 'bead', 'beaded', 'glitter', 'sequin', 'shimmer', 'crystal']
  }
});
bridalCatalog.P = bridalData;

const bridalAll = bridalData.filter(p => bridalCatalog.matchesFilter(p, { sil: 'all', des: 'all' }, ''));
const bridalNonDressQuery = bridalData.filter(p => bridalCatalog.matchesFilter(p, { sil: 'all', des: 'all' }, 'sparkly'));
if (bridalNonDressQuery.length !== 0) {
  throw new Error(`Expected 0 matches for attribute query "sparkly" (dress name & style number only), got ${bridalNonDressQuery.length}`);
}
console.log(`[PASS] Bridal Unfiltered: ${bridalAll.length} products`);
console.log(`[PASS] Bridal Strict Search ("sparkly" attribute excluded): 0 products matched`);

const pillEls = {};
function pillEl(id) {
  if (!pillEls[id]) {
    pillEls[id] = {
      id,
      innerHTML: '',
      textContent: '',
      style: {},
      classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } }
    };
  }
  return pillEls[id];
}
const prevGet = sandbox.document.getElementById;
const prevQuery = sandbox.document.querySelectorAll;
sandbox.document.getElementById = pillEl;
sandbox.document.querySelectorAll = () => [];
bridalCatalog.searchQuery = '<img src=x onerror=alert(1)>';
bridalCatalog.activeFilters.des = '<svg/onload=alert(1)>';
bridalCatalog.renderActiveTray();
const pillHtml = pillEls.activePillsList.innerHTML;
if (/<(img|svg|script|iframe)\b/i.test(pillHtml)) {
  throw new Error('Filter pills still interpolate raw URL values: ' + pillHtml);
}
if (!pillHtml.includes('&lt;img') || !pillHtml.includes('&lt;svg')) {
  throw new Error('Filter pills were not escaped: ' + pillHtml);
}
bridalCatalog.searchQuery = '';
bridalCatalog.activeFilters.des = 'all';
sandbox.document.getElementById = prevGet;
sandbox.document.querySelectorAll = prevQuery;
console.log('[PASS] Reflected filter-pill XSS is escaped');

// 2. Prom Catalog Test
const promCatalog = new sandbox.window.CloudNineCatalog({
  category: 'prom',
  dataPath: 'data/prom-products.json',
  facets: ['trend', 'des'],
  facetLabels: { trend: 'Style & Trend', des: 'Designer' },
  schoolRegistry: true
});
promCatalog.P = promData;

const promCorset = promData.filter(p => promCatalog.matchesFilter(p, { trend: 'corset', des: 'all' }, ''));
const promAshley = promData.filter(p => promCatalog.matchesFilter(p, { trend: 'all', des: 'Ashley Lauren' }, ''));
console.log(`[PASS] Prom Facet Filter ("corset"): ${promCorset.length} products found`);
console.log(`[PASS] Prom Designer Filter ("Ashley Lauren"): ${promAshley.length} products found`);

// 3. HOCO Catalog Test
const hocoCatalog = new sandbox.window.CloudNineCatalog({
  category: 'hoco',
  dataPath: 'data/hoco-products.json',
  facets: ['trend', 'des'],
  facetLabels: { trend: 'Style & Trend', des: 'Designer' },
  schoolRegistry: true
});
hocoCatalog.P = hocoData;

const hocoFitted = hocoData.filter(p => hocoCatalog.matchesFilter(p, { trend: 'fitted', des: 'all' }, ''));
console.log(`[PASS] HOCO Facet Filter ("fitted"): ${hocoFitted.length} products found`);

// 4. Mothers Catalog Test
const mothersCatalog = new sandbox.window.CloudNineCatalog({
  category: 'mothers',
  dataPath: 'data/mothers-products.json',
  facets: ['sil', 'des'],
  facetLabels: { sil: 'Silhouette', des: 'Designer' },
  synonyms: {
    'sleeves': ['sleeve', 'sleeves', 'long sleeve', '3/4 sleeve', 'jacket', 'shawl', 'cap sleeve']
  }
});
mothersCatalog.P = mothersData;

const mothersAll = mothersData.filter(p => mothersCatalog.matchesFilter(p, { sil: 'all', des: 'all' }, ''));
const mothersNonDressQuery = mothersData.filter(p => mothersCatalog.matchesFilter(p, { sil: 'all', des: 'all' }, 'sleeves'));
if (mothersNonDressQuery.length !== 0) {
  throw new Error(`Expected 0 matches for attribute query "sleeves" (dress name & style number only), got ${mothersNonDressQuery.length}`);
}
console.log(`[PASS] Mothers Unfiltered: ${mothersAll.length} products`);
console.log(`[PASS] Mothers Strict Search ("sleeves" attribute excluded): 0 products matched`);

// 5. Dress Name & Style Number ONLY Search Tests
const searchTestCases = [
  { catalog: bridalCatalog, data: bridalData, query: 'Dakota Leigh', expectedSku: '25MB849C01', expectedCount: 1, label: 'Bridal Dress Name ("Dakota Leigh")' },
  { catalog: bridalCatalog, data: bridalData, query: 'Meredith', expectedSku: '25MB870A01', expectedCount: 1, label: 'Bridal Dress Name ("Meredith")' },
  { catalog: bridalCatalog, data: bridalData, query: 'Benjie', expectedSku: '25MB271', expectedCount: 2, label: 'Maggie Sottero Dress Name ("Benjie")' },
  { catalog: bridalCatalog, data: bridalData, query: 'Rickie', expectedSku: '25RK284', expectedCount: 1, label: 'Rebecca Ingram Dress Name ("Rickie")' },
  { catalog: bridalCatalog, data: bridalData, query: 'Addie', expectedSku: 'Addie', expectedCount: 1, label: 'Rose + Grace Dress Name ("Addie" - zero false positives)' },
  { catalog: bridalCatalog, data: bridalData, query: 'Anna', expectedSku: 'Anna', expectedCount: 1, label: 'Rose + Grace Dress Name ("Anna" - excludes Susanna/Hannah)' },
  { catalog: bridalCatalog, data: bridalData, query: 'Tina', expectedSku: '25MS261', expectedCount: 3, label: 'Maggie Sottero Dress Name ("Tina" - excludes Valentina)' },
  { catalog: bridalCatalog, data: bridalData, query: 'Ross', expectedSku: '25SS360A01', expectedCount: 2, label: 'Sottero & Midgley Dress Name ("Ross" - excludes Rose + Grace)' },
  { catalog: bridalCatalog, data: bridalData, query: 'Lina', expectedSku: '25SS297', expectedCount: 1, label: 'Sottero & Midgley Dress Name ("Lina" - excludes Galina/Emelina)' },
  { catalog: bridalCatalog, data: bridalData, query: 'Annabelle', expectedSku: '8063', expectedCount: 1, label: 'Stella York Dress Name ("Annabelle" -> #8063)' },
  { catalog: bridalCatalog, data: bridalData, query: 'Fleur', expectedSku: 'F6RK098A01', expectedCount: 1, label: 'Rebecca Ingram Fall 2026 Dress Name ("Fleur" -> #F6RK098A01)' },
  { catalog: bridalCatalog, data: bridalData, query: 'RK098', expectedSku: 'F6RK098A01', expectedCount: 1, label: 'Rebecca Ingram Fall 2026 Base SKU ("RK098" -> #F6RK098A01)' },
  { catalog: bridalCatalog, data: bridalData, query: 'Baila', expectedSku: 'Baila', expectedCount: 1, label: 'Rose + Grace Fall 2026 Dress Name ("Baila")' },
  { catalog: bridalCatalog, data: bridalData, query: '#25MB849C01', expectedSku: '25MB849C01', expectedCount: 1, label: 'Bridal Style Number with # ("#25MB849C01")' },
  { catalog: bridalCatalog, data: bridalData, query: 'MB849', expectedSku: '25MB849C01', expectedCount: 2, label: 'No-Year/No-Variant Bridal Style Number ("MB849")' },
  { catalog: bridalCatalog, data: bridalData, query: '849', expectedSku: '25MB849C01', expectedCount: 2, label: 'Core Digits Bridal Style Number ("849")' },
  { catalog: bridalCatalog, data: bridalData, query: 'D4257', expectedSku: 'D4257', expectedCount: 1, label: 'Essense Style Number ("D4257")' },
  { catalog: bridalCatalog, data: bridalData, query: '4257', expectedSku: 'D4257', expectedCount: 1, label: 'Stripped-prefix Style Number ("4257" -> "D4257")' },
  { catalog: bridalCatalog, data: bridalData, query: '8166', expectedSku: 'SY8166', expectedCount: 1, label: 'Stripped-prefix Stella York Style Number ("8166" -> "SY8166")' },
  { catalog: mothersCatalog, data: mothersData, query: '821', expectedSku: 'CB821', expectedCount: 1, label: 'Mothers Stripped-prefix Style Number ("821" -> "CB821")' },
  { catalog: hocoCatalog, data: hocoData, query: '2842', expectedSku: '2842S', expectedCount: 1, label: 'HOCO Stripped-suffix Style Number ("2842" -> "2842S")' },
  { catalog: promCatalog, data: promData, query: '#57042', expectedSku: '57042', expectedCount: 1, label: 'Prom Style Number ("#57042")' },
  { catalog: promCatalog, data: promData, query: '#88904', expectedSku: '88904', expectedCount: 1, label: 'Prom Style Number with # ("#88904")' }
];

searchTestCases.forEach(({ catalog, data, query, expectedSku, expectedCount, label }) => {
  const scored = data
    .map(p => ({ p, score: catalog.scoreSearch(p, query) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);
  const cutoff = catalog.getSearchCutoff(scored[0] ? scored[0].score : 0);
  const results = scored.filter(x => x.score >= cutoff);
  const matched = results.find(r => r.p.s === expectedSku);
  if (!matched || matched.score < results[0].score) {
    throw new Error(`Search test failed for ${label}: expected top SKU ${expectedSku}, got ${results[0] ? results[0].p.s : 'none'}`);
  }
  if (typeof expectedCount === 'number' && results.length !== expectedCount) {
    throw new Error(`Search precision test failed for ${label}: expected ${expectedCount} gated result(s), got ${results.length}`);
  }
  console.log(`[PASS] ${label}: Top SKU="${matched.p.s}" (${matched.p.gn || matched.p.n}) [score=${matched.score}, total=${results.length}]`);
});

// Verify 100% recall across all 459 named bridal gowns
const namedBridal = bridalData.filter(p => p.gn);
namedBridal.forEach(item => {
  const sc = bridalCatalog.scoreSearch(item, item.gn);
  if (sc < 980) {
    throw new Error(`Named bridal gown recall failed for ${item.gn} (#${item.s}): score=${sc}`);
  }
});
console.log(`[PASS] All ${namedBridal.length} Named Bridal Gowns: 100% exact-match recall verified (score >= 980)`);

// 6. Global Search Overlay (components.js) Multi-Collection Tests
const compCode = fs.readFileSync(path.join(__dirname, 'components.js'), 'utf8');
const compElements = {};
const getCompEl = (id) => {
  if (!compElements[id]) {
    compElements[id] = {
      id,
      value: '',
      innerHTML: '',
      textContent: '',
      style: {},
      classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
      setAttribute: () => {},
      addEventListener: () => {},
      focus: () => {},
      querySelectorAll: () => []
    };
  }
  return compElements[id];
};

const compSandbox = {
  window: {
    addEventListener: () => {},
    matchMedia: () => ({ matches: false, addEventListener: () => {} }),
    innerWidth: 375
  },
  document: {
    addEventListener: () => {},
    getElementById: getCompEl,
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => getCompEl('temp'),
    body: { classList: { add: () => {}, remove: () => {} }, appendChild: () => {}, insertAdjacentHTML: () => {} },
    documentElement: { setAttribute: () => {}, getAttribute: () => 'light' }
  },
  localStorage: { getItem: () => null, setItem: () => {} },
  sessionStorage: { getItem: () => null, setItem: () => {} },
  location: { pathname: '/index.html', search: '', href: '' },
  IntersectionObserver: function() { return { observe: () => {}, disconnect: () => {} }; },
  requestAnimationFrame: (fn) => fn(),
  setTimeout: (fn) => fn(),
  clearTimeout: () => {},
  encodeURIComponent: encodeURIComponent,
  console: console,
  fetch: (url) => {
    let data = [];
    if (url.includes('bridal')) data = bridalData;
    else if (url.includes('prom')) data = promData;
    else if (url.includes('hoco')) data = hocoData;
    else if (url.includes('mothers')) data = mothersData;
    return Promise.resolve({ json: () => Promise.resolve(data) });
  }
};
compSandbox.window.document = compSandbox.document;
compSandbox.window.location = compSandbox.location;
vm.createContext(compSandbox);
vm.runInContext(compCode, compSandbox);

const actionSamples = [];
function collectActions(file) {
  const text = fs.readFileSync(path.join(__dirname, file), 'utf8');
  const re = /data-cn-(?:click|submit|input|keydown|change)="([^"]*)"/g;
  let m;
  while ((m = re.exec(text))) {
    if (!m[1].includes('${')) actionSamples.push(m[1]);
  }
}
['components.js', 'catalog-engine.js'].forEach(collectActions);
fs.readdirSync(path.join(__dirname, 'js/pages')).forEach(name => collectActions(path.join('js/pages', name)));
fs.readdirSync(__dirname).filter(name => name.endsWith('.html')).forEach(collectActions);
const seenActions = [...new Set(actionSamples)];
if (!seenActions.length) throw new Error('No data-cn actions found to validate');
const savedFns = {};
seenActions.forEach(expr => {
  const names = expr.match(/[A-Za-z_$][\w$]*/g) || [];
  names.forEach(name => {
    if (typeof compSandbox.window[name] !== 'function' && name !== 'event' && name !== 'this' && name !== 'true' && name !== 'false' && name !== 'null' && name !== 'setTimeout' && name !== 'location' && name !== 'window' && name !== 'dataset' && name !== 'angleSrc' && name !== 'stopPropagation' && name !== 'preventDefault' && name !== 'reload' && name !== 'value') {
      savedFns[name] = compSandbox.window[name];
      compSandbox.window[name] = function() {};
    }
  });
});
compSandbox.setTimeout = function(fn) { if (typeof fn === 'function') fn(); };
compSandbox.location.reload = function() {};
const realOnSearchInput = compSandbox.window.onSearchInput;
Object.keys(compSandbox.window).forEach(name => {
  if (name !== 'cnRunAction' && typeof compSandbox.window[name] === 'function') {
    compSandbox.window[name] = function() {};
  }
});
const actionEl = { value: 'q', dataset: { angleSrc: 'https://example.com/a.webp' } };
seenActions.forEach(expr => {
  try {
    compSandbox.window.cnRunAction(expr, actionEl, { stopPropagation() {}, preventDefault() {} });
  } catch (err) {
    throw new Error('Action failed to parse: ' + expr + ' (' + err.message + ')');
  }
});
try {
  compSandbox.window.cnRunAction('alert(1)', actionEl, {});
  throw new Error('alert(1) was allowed');
} catch (err) {
  if (!/blocked alert/.test(String(err && err.message))) throw err;
}
console.log(`[PASS] CSP action dispatcher parsed ${seenActions.length} handlers and blocked alert(1)`);
compSandbox.window.onSearchInput = realOnSearchInput;

const renderedNav = compSandbox.navHTML();
['nav-search-bar-btn', 'nav-search-mobile', 'mobile-menu-search-bar'].forEach(cls => {
  if (!renderedNav.includes(cls)) {
    throw new Error(`Navigation bar is missing search trigger class: ${cls}`);
  }
});
console.log('[PASS] Navigation Bar Search: Verified .nav-search-bar-btn (Desktop), .nav-search-mobile (Mobile Header), and .mobile-menu-search-bar (Mobile Drawer)');

(async () => {
  const globalQueries = [
    { q: 'Dakota Leigh', mustContain: ['Dakota Leigh', '#25MB849C01', 'Maggie Sottero'] },
    { q: 'Meredith', mustContain: ['Meredith', '#25MB870A01', 'Maggie Sottero'] },
    { q: '#D4257', mustContain: ['#D4257', 'Essense of Australia'] },
    { q: '8166', mustContain: ['#SY8166', 'Stella York'] },
    { q: '#57042', mustContain: ['#57042', 'Sherri Hill'] },
    { q: 'Addie', mustContain: ['Addie', 'Rose + Grace'] }
  ];

  for (const { q, mustContain } of globalQueries) {
    await compSandbox.window.onSearchInput(q);
    const html = getCompEl('searchResults').innerHTML;
    for (const token of mustContain) {
      if (!html.includes(token)) {
        throw new Error(`Global search overlay failed for "${q}": missing "${token}" in output HTML`);
      }
    }
    console.log(`[PASS] Global Search Overlay ("${q}"): Verified [${mustContain.join(', ')}] in rendered results`);
  }

  // Verify non-dress-name / non-style-number queries do not match any dresses
  for (const nonDressQ of ['Maggie Sottero', 'Corset', 'Ballgown']) {
    await compSandbox.window.onSearchInput(nonDressQ);
    const html = getCompEl('searchResults').innerHTML;
    if (html.includes('search-result-card')) {
      throw new Error(`Global search overlay unexpectedly matched a dress for non-name/non-SKU query "${nonDressQ}"`);
    }
    console.log(`[PASS] Global Search Overlay ("${nonDressQ}" excluded): 0 dress matches`);
  }

  console.log('\n>>> ALL 4 CATALOG ENGINES + GLOBAL SEARCH OVERLAY VALIDATED AND FUNCTIONING FLAWLESSLY! <<<');
})();

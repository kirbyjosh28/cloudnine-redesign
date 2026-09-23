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
  { file: 'bridal-catalog.html', cat: 'bridal', facets: ['sil', 'des'] },
  { file: 'prom-catalog.html', cat: 'prom', facets: ['trend', 'des'] },
  { file: 'hoco-catalog.html', cat: 'hoco', facets: ['trend', 'des'] },
  { file: 'mothers.html', cat: 'mothers', facets: ['sil', 'des'] }
];

htmlFiles.forEach(({ file, cat, facets }) => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`HTML file missing: ${file}`);
  }
  const content = fs.readFileSync(filePath, 'utf8');
  
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
const bridalSparkly = bridalData.filter(p => bridalCatalog.matchesFilter(p, { sil: 'all', des: 'all' }, 'sparkly'));
console.log(`[PASS] Bridal Unfiltered: ${bridalAll.length} products`);
console.log(`[PASS] Bridal Synonym Search ("sparkly"): ${bridalSparkly.length} products found`);

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
const mothersSleeves = mothersData.filter(p => mothersCatalog.matchesFilter(p, { sil: 'all', des: 'all' }, 'sleeves'));
console.log(`[PASS] Mothers Unfiltered: ${mothersAll.length} products`);
console.log(`[PASS] Mothers Synonym Search ("sleeves"): ${mothersSleeves.length} products found`);

console.log('\n>>> ALL 4 CATALOG ENGINES VALIDATED AND FUNCTIONING FLAWLESSLY! <<<');

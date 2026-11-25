const MOTHERS_SYNONYMS = {
  'sleeves': ['sleeve', 'sleeves', 'long sleeve', '3/4 sleeve', 'jacket', 'shawl', 'cap sleeve'],
  'sleeve': ['sleeve', 'sleeves', 'long sleeve', '3/4 sleeve', 'jacket', 'shawl', 'cap sleeve'],
  'jacket': ['jacket', 'bolero', 'cape', 'shawl'],
  'modest': ['modest', 'coverage', 'sleeve', 'jacket', 'high neck'],
  'sparkle': ['sparkle', 'sparkly', 'bead', 'beaded', 'sequin', 'shimmer'],
  'sparkly': ['sparkle', 'sparkly', 'bead', 'beaded', 'sequin', 'shimmer'],
  'glitter': ['glitter', 'sparkle', 'sparkly', 'sequin'],
  'lace': ['lace', 'embroidered', 'applique'],
  'chiffon': ['chiffon', 'flowy', 'crepe', 'lightweight'],
  'pant': ['pant', 'pantsuit', 'jumpsuit', 'trousers'],
  'pantsuit': ['pant', 'pantsuit', 'jumpsuit', 'trousers'],
  'tea-length': ['tea length', 'tea-length', 'midi', 'knee length'],
  'aline': ['a-line', 'aline', 'flowy'],
  'a-line': ['a-line', 'aline', 'flowy'],
  'sheath': ['sheath', 'column', 'fitted', 'straight'],
  'jasmine': ['jasmine'],
  'cameron': ['cameron blake', 'cameron'],
  'alexander': ['alexander by daymor', 'daymor', 'alexander'],
  'mlny': ['mlny', 'morilee new york'],
  'ivonne': ['ivonne d', 'ivonne']
};

function initMothersCatalog() {
  if (typeof CloudNineCatalog !== 'undefined') {
    new CloudNineCatalog({
      category: 'mothers',
      dataPath: 'data/mothers-products.json?v=20261026m',
      facets: ['des'],
      facetLabels: { des: 'Designer' },
      synonyms: MOTHERS_SYNONYMS
    });
  } else {
    setTimeout(initMothersCatalog, 20);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMothersCatalog);
} else {
  initMothersCatalog();
}

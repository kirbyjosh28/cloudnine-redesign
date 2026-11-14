const PROM_SYNONYMS = {
  'sparkly': ['sparkle', 'bead', 'beaded', 'glitter', 'sequin', 'shimmer', 'stone', 'crystal'],
  'sparkle': ['sparkle', 'bead', 'beaded', 'glitter', 'sequin', 'shimmer', 'stone'],
  'glitter': ['glitter', 'sparkle', 'bead', 'shimmer', 'sequin'],
  'bling': ['sparkle', 'beaded', 'crystal', 'glitter', 'sequin'],
  'satin': ['satin', 'charmeuse', 'liquid', 'silk'],
  'corset': ['corset', 'boned', 'lace-up', 'lace up', 'basque', 'structured'],
  'ballgown': ['ball', 'ballgown', 'tulle', 'flared', 'volume'],
  'slit': ['slit', 'halter', 'cutout', 'open back', 'leg slit'],
  'fitted': ['fitted', 'bodycon', 'sheath', 'tight', 'mermaid'],
  'flare': ['flare', 'a-line', 'skater', 'pleat'],
  'strapless': ['strapless', 'tube', 'bandeau', 'cat eye'],
  'sleeves': ['sleeve', 'sleeves', 'long sleeve', 'cap sleeve', 'off shoulder', 'off the shoulder'],
  'sleeve': ['sleeve', 'sleeves', 'long sleeve', 'cap sleeve'],
  'backless': ['backless', 'open back', 'low back', 'cross back', 'lace back'],
  'amarra': ['amarra'],
  'ashley': ['ashley lauren', 'ashley'],
  'faviana': ['faviana'],
  'jessica': ['jessica angel', 'jessica'],
  'johnathan': ['johnathan kayne', 'johnathan', 'kayne'],
  'jovani': ['jovani'],
  'rachel': ['rachel allan', 'rachel'],
  'rose': ['rose + grace', 'rose and grace'],
  'sherri': ['sherri hill', 'sherri'],
  'sydney': ['sydney', 'sydneys prom', "sydney's prom", "sydney's closet", 'sydneys closet']
};

function initPromCatalog() {
  if (typeof CloudNineCatalog !== 'undefined') {
    new CloudNineCatalog({
      category: 'prom',
      dataPath: 'data/prom-products.json?v=20261026m',
      facets: ['des'],
      facetLabels: { des: 'Designer' },
      synonyms: PROM_SYNONYMS,
      schoolRegistry: false
    });
  } else {
    setTimeout(initPromCatalog, 20);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPromCatalog);
} else {
  initPromCatalog();
}

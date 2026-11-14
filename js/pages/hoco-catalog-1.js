const HOCO_SYNONYMS = {
  'fitted': ['fitted', 'bodycon', 'sheath', 'tight'],
  'flare': ['flare', 'a-line', 'skater', 'pleat'],
  'corset': ['corset', 'boned', 'lace-up', 'lace up'],
  'sparkle': ['sparkle', 'sparkly', 'bead', 'beaded', 'sequin', 'glitter', 'shimmer'],
  'sparkly': ['sparkle', 'sparkly', 'bead', 'beaded', 'sequin', 'glitter', 'shimmer'],
  'glitter': ['glitter', 'sparkle', 'sparkly', 'sequin'],
  'satin': ['satin', 'liquid', 'silk', 'charmeuse'],
  'strapless': ['strapless', 'tube', 'bandeau'],
  'sleeves': ['sleeve', 'sleeves', 'long sleeve'],
  'sleeve': ['sleeve', 'sleeves', 'long sleeve'],
  'backless': ['backless', 'open back', 'low back', 'cross back'],
  'amarra': ['amarra'],
  'ashley': ['ashley lauren', 'ashley'],
  'faviana': ['faviana'],
  'jessica': ['jessica angel', 'jessica'],
  'johnathan': ['johnathan kayne', 'johnathan', 'kayne'],
  'jovani': ['jovani'],
  'rachel': ['rachel allan', 'rachel'],
  'sherri': ['sherri hill', 'sherri'],
  'sydney': ['sydney', 'sydneys prom', "sydney's prom", "sydney's closet"]
};

function initHocoCatalog() {
  if (typeof CloudNineCatalog !== 'undefined') {
    new CloudNineCatalog({
      category: 'hoco',
      dataPath: 'data/hoco-products.json?v=20261026m',
      facets: ['des'],
      facetLabels: { des: 'Designer' },
      synonyms: HOCO_SYNONYMS,
      schoolRegistry: false
    });
  } else {
    setTimeout(initHocoCatalog, 20);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHocoCatalog);
} else {
  initHocoCatalog();
}

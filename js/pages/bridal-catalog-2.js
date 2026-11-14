const BRIDAL_SYNONYMS = {
  'sparkly': ['sparkle', 'bead', 'beaded', 'glitter', 'sequin', 'shimmer', 'crystal', 'rhinestone'],
  'sparkle': ['sparkle', 'bead', 'beaded', 'glitter', 'sequin', 'shimmer'],
  'glitter': ['glitter', 'sparkle', 'bead', 'shimmer'],
  'bling': ['sparkle', 'beaded', 'crystal', 'glitter'],
  'pearl': ['pearl', 'beaded'],
  'pearls': ['pearl', 'beaded'],
  'sleeves': ['sleeve', 'sleeves', 'long sleeve', 'illusion sleeve', 'cap sleeve'],
  'sleeve': ['sleeve', 'sleeves', 'long sleeve'],
  'strapless': ['strapless', 'cat eye', 'cat-eye', 'tube', 'bandeau'],
  'simple': ['clean', 'minimal', 'minimalist', 'sleek', 'unembellished', 'plain', 'crepe', 'satin'],
  'minimal': ['minimalist', 'clean', 'simple', 'sleek', 'unembellished'],
  'minimalist': ['minimal', 'clean', 'simple', 'sleek'],
  'boho': ['bohemian', 'boho', 'ethereal', 'whimsical', 'rustic'],
  'bohemian': ['boho', 'bohemian', 'whimsical', 'ethereal'],
  'corset': ['basque', 'corset', 'boning', 'structured'],
  'basque': ['basque', 'corset', 'drop waist'],
  'floral': ['flower', 'flowers', 'floral', 'botanical', '3-d floral', '3d flower', 'petal'],
  'flowers': ['floral', 'flower', '3-d floral', 'botanical'],
  'backless': ['open back', 'low back', 'backless', 'v-back'],
  'open-back': ['open back', 'low back', 'backless'],
  'plunge': ['plunging', 'plunge', 'v-neck', 'deep v'],
  'maggie': ['maggie sottero', 'maggie'],
  'rebecca': ['rebecca ingram', 'rebecca'],
  'sottero': ['sottero & midgley', 'maggie sottero', 'sottero'],
  'midgley': ['sottero & midgley', 'midgley'],
  'essense': ['essense of australia', 'essense'],
  'stella': ['stella york', 'stella'],
  'rose': ['rose + grace', 'rose and grace', 'rose'],
  'fit-and-flare': ['fit & flare', 'fit-and-flare', 'fit to flare', 'mermaid', 'trumpet'],
  'trumpet': ['fit & flare', 'mermaid', 'trumpet']
};

function initBridalCatalog() {
  if (typeof CloudNineCatalog !== 'undefined') {
    new CloudNineCatalog({
      category: 'bridal',
      dataPath: 'data/bridal-products.json?v=20261026m',
      facets: ['des'],
      facetLabels: { des: 'Designer' },
      synonyms: BRIDAL_SYNONYMS
    });
  } else {
    setTimeout(initBridalCatalog, 20);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBridalCatalog);
} else {
  initBridalCatalog();
}

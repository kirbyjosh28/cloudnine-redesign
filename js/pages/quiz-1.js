/* ════════════════════════════════════════════════════════════════════
   ATELIER STYLE QUIZ ENGINE — WEIGHTED 671-GOWN MATCHER & DNA SCORER
   ════════════════════════════════════════════════════════════════════ */
function qEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
const TOTAL = 7;
let current = -1; // -1 = intro slide
const answers = Array(TOTAL).fill(null);
const stepSelections = Array(TOTAL).fill(null);

let selectedTimeline = 'standard';
let selectedSil = '';
let selectedNk = [];
let selectedFab = [];
let selectedVibes = [];

let tunerSil = 'auto';
let tunerDes = 'all';

let catalogGowns = [];
let matchedPool = [];
let rackBatchIndex = 0;
const RACK_SIZE = 6;
let currentQuizModalGown = null;
let currentQuizModalImgs = [];
let currentQuizModalImgIdx = 0;

// Store promise so deep-linked URLs await real catalog data before scoring
const catalogReadyPromise = fetch('data/bridal-products.json?v=20261026m')
  .then(r => r.ok ? r.json() : [])
  .then(data => {
    if (Array.isArray(data) && data.length) {
      catalogGowns = data;
    }
    return catalogGowns;
  })
  .catch(() => []);

// Sync sticky step-pill bar with floating main-nav scroll state
(function syncStickyBarWithMainNav() {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    document.body.classList.toggle('quiz-nav-scrolled', y > 24);
    document.body.classList.remove('quiz-nav-hidden');
  }, { passive: true });
})();

/* ── POETIC GOWN NAME EXTRACTOR (ZERO TRIPLE-DUPLICATE TITLES) ── */
const CAPTION_ADJECTIVES = new Set([
  'Sparkle','Romantic','Boho','Clean','Backless','Basque','Modest','Glamorous',
  'Curated','Classic','Modern','Regal','Enchanting','Sophisticated','Sleek',
  'Simple','Whimsical','Dreamy','Sculptural','Minimalist','Artisan','Vintage-inspired',
  'Sculpted','Luxury','Timeless','Chic','Flowing','Delicate','Bold','Refined',
  'Charming','Elegant','Fairytale','Contemporary','Detailed','Dramatic','Form-fitting',
  'Ethereal','Tailored','Poised','Sensual','Graceful','Effortless','Traditional'
]);

function formatGownDisplay(d) {
  const des = (d.d || 'Bridal Collection').trim();
  const sku = (d.s || '').trim();
  const rawName = (d.n || '').trim();
  const cap = (d.c || '').trim();
  const img = (d.i || '').trim();
  const silLabel = d.sil ? `${d.sil} · Atelier Edition` : 'Peoria Showroom Collection';

  // 1. Clean poetic name that doesn't repeat the designer prefix
  if (rawName && !rawName.toLowerCase().startsWith(des.toLowerCase()) && rawName !== sku) {
    return { title: rawName, subtitle: sku ? `Style #${sku}` : silLabel, hasPoeticName: true };
  }
  // 2. Rose + Grace where rawName === sku (e.g. "Addie", "Cayman", "Sabine")
  if (rawName && rawName === sku && !/^\d|[A-Z]{1,2}\d/i.test(sku)) {
    return { title: rawName, subtitle: 'Exclusive Private Collection', hasPoeticName: true };
  }
  // 3. Extract leading poetic name from caption (Maggie Sottero, Rebecca Ingram, Sottero & Midgley)
  if (cap) {
    const words = cap.split(/\s+/);
    if (words[0] && /^[A-Z][a-z]{2,}$/.test(words[0]) && !CAPTION_ADJECTIVES.has(words[0])) {
      let name = words[0];
      if (words[1] && /^(Leigh|Marie|Grace|Rose|Anne|Mae|Rae|Belle|Lou|Dawn|Jean|Kay)$/i.test(words[1])) {
        name += ' ' + words[1];
      }
      return { title: name, subtitle: `Style #${sku}`, hasPoeticName: true };
    }
  }
  // 4. Extract poetic name from image URL slug (e.g. /products/10302/avalon/)
  const slugMatch = img.match(/\/products\/(?:\$uploads\/products\/)?\d+\/([a-z]{3,})\//i);
  if (slugMatch && slugMatch[1] && slugMatch[1].toLowerCase() !== sku.toLowerCase()) {
    const slug = slugMatch[1];
    const pretty = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
    return { title: pretty, subtitle: `Style #${sku}`, hasPoeticName: true };
  }
  // 5. Essense of Australia (D4257) or Stella York (SY8166)
  return { title: `Style #${sku}`, subtitle: silLabel, hasPoeticName: false };
}

const TIMELINE_NOTES = {
  urgent: {
    label: 'Under 6 Months (Priority Window)',
    kicker: 'Priority Timeline Advisory · Under 6 Months',
    text: 'Since your wedding is within 6 months, your Cloud Nine stylist will highlight gowns available for priority designer rush delivery as well as pristine off-the-rack showroom pieces you can take home immediately.'
  },
  standard: {
    label: '6–12 Months Out (Sweet Spot)',
    kicker: 'Ideal Ordering Window · 6–12 Months Out',
    text: 'You are right in the bridal sweet spot! Standard made-to-order designer production takes 3–6 months, leaving comfortable time for custom hem and bodice fittings before your wedding day.'
  },
  relaxed: {
    label: '1–2+ Years Out (Custom Window)',
    kicker: 'Extended Atelier Window · 12+ Months Out',
    text: 'With over a year to plan, every designer customization, special fabric change, and upcoming seasonal trunk show in our Peoria showroom is open to you.'
  },
  exploring: {
    label: 'Exploring & Newly Engaged',
    kicker: 'Style Discovery Consultation · Date Flexible',
    text: 'Trying on silhouettes early is the best way to lock in your vision! Your stylist will pull a curated flight of silhouettes so you can see how each structure feels in motion.'
  }
};

/* ── 24 VERIFIED REAL FALLBACK GOWNS ACROSS ALL 6 SHOWROOM DESIGNERS ── */
const PERSONAS = {
  classic: {
    title: 'The <em>Classic</em> Bride',
    plainTitle: 'The Classic Bride',
    personaKey: 'classic',
    heroImg: 'images/quiz/result-1.jpg',
    sil: 'Ballgown',
    desc: "You love timeless, elegant looks. Simple, clean, and classy is your style—think lace, satin, and soft colors like ivory or blush. You're all about looking polished and graceful without being too flashy.",
    traits: [
      { label: 'Rose + Grace Collection', value: 'Timeless Style, Modern Edge', desc: 'Be sure to check out our Rose + Grace Collection, designed for brides who want timeless style with a modern edge. You won’t find these gowns anywhere else!' },
      { label: 'Quick Style Tip · Flowers', value: 'Roses & Peonies', desc: 'Choose soft, romantic blooms like roses or peonies.' },
      { label: 'Quick Style Tip · Hair & Makeup', value: 'Low Bun & Soft Glam', desc: 'Keep it natural and neat—think a low bun and soft makeup.' },
      { label: 'Quick Style Tip · Accessories', value: 'Pearls & Small Diamonds', desc: 'Stick to pearls or small diamonds—nothing too bold.' }
    ],
    fallbackDresses: [
      {"d":"Maggie Sottero","s":"26MN420A01","n":"Maggie Sottero 26MN420A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mn420a01/26mn420a01__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mn420a01/26mn420a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mn420a01/26mn420a01__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mn420a01/26mn420a01__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mn420a01/26mn420a01__b_2.2000.webp"],"c":"Yuma Elegant Draped Cowl Neckline Basque Waist Ballgown Wedding Dress","sil":"Ballgown","f":["Satin","Mikado"],"nk":["Cowl Neck"],"v":["Basque Waist"]},
      {"d":"Rebecca Ingram","s":"26RK439A01","n":"Rebecca Ingram 26RK439A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk439a01/26rk439a01__f_2.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk439a01/26rk439a01__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk439a01/26rk439a01__f_3.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk439a01/26rk439a01__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk439a01/26rk439a01__d_f.2000.webp"],"c":"Lisa Ethereal Cat Eye Neckline Illusion Lace Bodice Ballgown Wedding Dress","sil":"Ballgown","f":["Lace"],"nk":["Strapless"],"v":["Boho Glam"]},
      {"d":"Sottero & Midgley","s":"26SB432A01","n":"Sottero & Midgley 26SB432A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb432a01/26sb432a01__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb432a01/26sb432a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb432a01/26sb432a01__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb432a01/26sb432a01__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb432a01/26sb432a01__b.2000.webp"],"c":"Jayna Flowing 3-D Floral Beaded Lace Pleated Organza Over Glitter Tulle Ballgown Wedding Dress","sil":"Ballgown","f":["Lace","Tulle","Organza"],"nk":["Square Neck"],"v":["Sparkle & Beaded","Romantic & Floral"]},
      {"d":"Essense of Australia","s":"D4470","n":"Essense of Australia D4470","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4470/d4470__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4470/d4470__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4470/d4470__f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4470/d4470__b.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4470/d4470__f_c_1.2000.webp"],"c":"Boho Glam square neck lace ballgown wedding dress by Essense of Australia","sil":"Ballgown","f":["Lace"],"nk":["Square Neck"],"v":["Boho Glam","Sparkle & Beaded","Romantic & Floral"]},
      {"d":"Stella York","s":"SY8178","n":"Stella York SY8178","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8178/sy8178__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8178/sy8178__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8178/sy8178__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8178/sy8178__b.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8178/sy8178__f_c.2000.webp"],"c":"Glamorous off-the-shoulder tulle & lace ballgown wedding dress by Stella York","sil":"Ballgown","f":["Tulle","Lace"],"nk":["Off-the-Shoulder"],"v":["Sparkle & Beaded","Boho Glam","Basque Waist"]},
      {"d":"Rose + Grace","s":"Cayman","n":"Cayman","i":"https://dy9ihb9itgy3g.cloudfront.net/products/11294/cayman/cayman_f_d.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/11294/cayman/cayman_f_d.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11294/cayman/cayman_4.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11294/cayman/cayman_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11294/cayman/cayman_3.2000.webp"],"c":"Curated long sleeve lace ballgown gown from the exclusive Rose + Grace collection","sil":"Ballgown","f":["Lace"],"nk":["Long Sleeve"],"v":["Romantic & Floral","Sparkle & Beaded","Basque Waist"]}
    ]
  },
  romantic: {
    title: 'The <em>Romantic</em> Bride',
    plainTitle: 'The Romantic Bride',
    personaKey: 'romantic',
    heroImg: 'images/quiz/result-2.jpg',
    sil: 'A-Line',
    desc: "You're all about soft, dreamy details and a love story feel. Think flowing fabrics, delicate lace, and everything light, airy, and full of charm.",
    traits: [
      { label: 'Rose + Grace Collection', value: 'Fairytale Romance & Modern Grace', desc: 'The Rose + Grace Collection is designed for brides who dream of timeless beauty and fairytale romance. Classic elegance meets a touch of modern grace—available only at Cloud Nine Bridal Boutique.' },
      { label: 'Quick Style Tip · Flowers', value: 'Garden-Style Bouquets', desc: 'Go for loose, garden-style bouquets with roses, peonies, and soft pastels.' },
      { label: 'Quick Style Tip · Hair & Makeup', value: 'Soft Curls & Rosy Glow', desc: 'Soft curls, loose updos, and rosy, glowing makeup are perfect for you.' },
      { label: 'Quick Style Tip · Accessories', value: 'Dainty Gold & Sparkle', desc: 'Choose dainty jewelry—think gold, rose gold, or tiny sparkles.' }
    ],
    fallbackDresses: [
      {"d":"Maggie Sottero","s":"26MB391A01","n":"Maggie Sottero 26MB391A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mb391a01/26mb391a01__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mb391a01/26mb391a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mb391a01/26mb391a01__f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mb391a01/26mb391a01__b.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mb391a01/26mb391a01__f_c.2000.webp"],"c":"Natalie Marie Delicate A-Line Plunging Neckline Floral Lace Wedding Dress","sil":"A-Line","f":["Lace"],"nk":["V-Neck"],"v":["Romantic & Floral"]},
      {"d":"Rebecca Ingram","s":"26RB445A01","n":"Rebecca Ingram 26RB445A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb445a01/26rb445a01__f_2.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb445a01/26rb445a01__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb445a01/26rb445a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb445a01/26rb445a01__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb445a01/26rb445a01__f_3.2000.webp"],"c":"Blossom Enchanting Strapless 3-D Floral Lace A-Line Wedding Dress","sil":"A-Line","f":["Lace"],"nk":["Strapless"],"v":["Romantic & Floral"]},
      {"d":"Sottero & Midgley","s":"26SK433A01","n":"Sottero & Midgley 26SK433A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk433a01/26sk433a01__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk433a01/26sk433a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk433a01/26sk433a01__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk433a01/26sk433a01__f_3.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk433a01/26sk433a01__f_1.2000.webp"],"c":"Marceline Traditional Beaded A-Line Wedding Dress with Pearl Details and Glitter Tulle Skirt","sil":"A-Line","f":["Tulle"],"nk":["Sweetheart"],"v":["Sparkle & Beaded"]},
      {"d":"Essense of Australia","s":"D4257","n":"Essense of Australia D4257","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4257/d4257__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4257/d4257__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4257/d4257__f_3.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4257/d4257__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4257/d4257__b.2000.webp"],"c":"Sparkle & Beaded v-neck lace & tulle a-line wedding dress by Essense of Australia","sil":"A-Line","f":["Lace","Tulle"],"nk":["V-Neck"],"v":["Sparkle & Beaded","Boho Glam"]},
      {"d":"Stella York","s":"SY8166","n":"Stella York SY8166","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8166/sy8166__f_c_1.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8166/sy8166__f_c_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8166/sy8166__f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8166/sy8166__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8166/sy8166__b_2.2000.webp"],"c":"Glamorous sweetheart lace & tulle a-line wedding dress by Stella York","sil":"A-Line","f":["Lace","Tulle"],"nk":["Sweetheart"],"v":["Romantic & Floral","Sparkle & Beaded"]},
      {"d":"Rose + Grace","s":"Astrid","n":"Astrid","i":"https://dy9ihb9itgy3g.cloudfront.net/products/11294/astrid/astrid_f_d.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/11294/astrid/astrid_f_d.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11294/astrid/astrid_5.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11294/astrid/astrid_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11294/astrid/astrid_4.2000.webp"],"c":"Curated square neck lace & tulle a-line gown from the exclusive Rose + Grace collection","sil":"A-Line","f":["Lace","Tulle"],"nk":["Square Neck"],"v":["Boho Glam"]}
    ]
  },
  modern: {
    title: 'The <em>Modern</em> Bride',
    plainTitle: 'The Modern Bride',
    personaKey: 'modern',
    heroImg: 'images/quiz/result-3.jpg',
    sil: 'Sheath',
    desc: "You love clean lines, bold choices, and a fresh, fashion-forward look. You're not afraid to break tradition and make your day feel unique, stylish, and totally you.",
    traits: [
      { label: 'Rose + Grace Collection', value: 'Classic Elegance, Modern Twist', desc: 'Want a look that’s timeless but still feels fresh? Check out our Rose + Grace Collection—exclusively at Cloud Nine Bridal Boutique. It’s perfect for brides who love classic elegance with a modern twist!' },
      { label: 'Quick Style Tip · Flowers', value: 'Sculptural & All-White', desc: 'Choose simple, sculptural arrangements with greenery or all-white blooms.' },
      { label: 'Quick Style Tip · Hair & Makeup', value: 'Sleek Bun & Glowy Glam', desc: 'Try a sleek ponytail or bun with glowy, natural glam makeup.' },
      { label: 'Quick Style Tip · Accessories', value: 'Statement Earrings & Modern Heels', desc: 'Think statement earrings or modern heels—less is more, but make it pop.' }
    ],
    fallbackDresses: [
      {"d":"Maggie Sottero","s":"26MK426A01","n":"Maggie Sottero 26MK426A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mk426a01/26mk426a01__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mk426a01/26mk426a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mk426a01/26mk426a01__f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mk426a01/26mk426a01__b.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/26mk426a01/26mk426a01__f_c_2.2000.webp"],"c":"Spokane Modern Halter Neck Beaded Lace Illusion Back Sheath Wedding Dress","sil":"Sheath","f":["Lace"],"nk":["High Neck"],"v":["Sparkle & Beaded","Clean & Minimalist","Backless & Low Back"]},
      {"d":"Rebecca Ingram","s":"26RB438A01","n":"Rebecca Ingram 26RB438A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb438a01/26rb438a01__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb438a01/26rb438a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb438a01/26rb438a01__b_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb438a01/26rb438a01__b_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rb438a01/26rb438a01__f_c.2000.webp"],"c":"Brenda Sophisticated Crepe Sheath Draped Cowl Neckline Wedding Dress","sil":"Sheath","f":["Crepe"],"nk":["Cowl Neck"],"v":["Clean & Minimalist","Backless & Low Back"]},
      {"d":"Sottero & Midgley","s":"26SK464A01","n":"Sottero & Midgley 26SK464A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk464a01/26sk464a01__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk464a01/26sk464a01__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk464a01/26sk464a01__f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk464a01/26sk464a01__b_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sk464a01/26sk464a01__b_2.2000.webp"],"c":"Lovai Modest High Neck Satin Sheath Wedding Dress with Illusion Lace Sleeves and Extended Lace Train","sil":"Sheath","f":["Lace","Satin"],"nk":["Long Sleeve","High Neck"],"v":["Modest"]},
      {"d":"Essense of Australia","s":"D4403","n":"Essense of Australia D4403","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4403/d4403__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4403/d4403__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4403/d4403__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4403/d4403__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4403/d4403__b_1.2000.webp"],"c":"Clean & Minimalist v-neck crepe sheath wedding dress by Essense of Australia","sil":"Sheath","f":["Crepe"],"nk":["V-Neck"],"v":["Clean & Minimalist","Backless & Low Back"]},
      {"d":"Stella York","s":"8073","n":"Stella York 8073","i":"https://dy9ihb9itgy3g.cloudfront.net/products/12482/sy8073/sy8073__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/12482/sy8073/sy8073__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/12482/sy8073/sy8073__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/12482/sy8073/sy8073__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/12482/sy8073/sy8073__b.2000.webp"],"c":"Glamorous strapless crepe sheath wedding dress by Stella York","sil":"Sheath","f":["Crepe"],"nk":["Strapless"],"v":["Clean & Minimalist","Backless & Low Back"]},
      {"d":"Rose + Grace","s":"Sabine","n":"Sabine","i":"https://dy9ihb9itgy3g.cloudfront.net/products/10809/sabine/sabine_f_d.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/10809/sabine/sabine_f_d.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/10809/sabine/sabine_4.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/10809/sabine/sabine_3.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/10809/sabine/sabine_2.2000.webp"],"c":"Curated v-neck satin sheath gown from the exclusive Rose + Grace collection","sil":"Sheath","f":["Satin"],"nk":["V-Neck"],"v":["Romantic & Floral","Sparkle & Beaded"]}
    ]
  },
  boho: {
    title: 'The <em>Trendsetting</em> Bride',
    plainTitle: 'The Trendsetting Bride',
    personaKey: 'boho',
    heroImg: 'images/quiz/result-4.jpg',
    sil: 'Fit & Flare',
    desc: 'You love making bold choices and setting the style standard. Think edgy cuts, modern fabrics, and unique details that turn heads and break tradition.',
    traits: [
      { label: 'Rose + Grace Collection', value: 'Bold & Contemporary Touches', desc: 'You’re here to stand out with a gown that breaks the mold. Look for unique cuts, modern fabrics, and edgy details that keep your look fresh yet timeless. Our exclusive Rose + Grace Collection blends classic style with bold, contemporary touches—designed just for you.' },
      { label: 'Quick Style Tip · Flowers', value: 'Minimalist & Monochrome', desc: 'Choose minimalist, sculptural bouquets with lots of greenery or monochrome blooms.' },
      { label: 'Quick Style Tip · Hair & Makeup', value: 'Sleek Pony & Bold Accents', desc: 'Opt for sleek styles like a high ponytail or slicked-back hair and bold makeup accents—think graphic eyeliner or a statement lip.' },
      { label: 'Quick Style Tip · Accessories', value: 'Geometric & Metallic Standouts', desc: 'Pick standout pieces like geometric earrings or metallic shoes that add a modern twist.' }
    ],
    fallbackDresses: [
      {"d":"Maggie Sottero","s":"25MB941C01","n":"Maggie Sottero 25MB941C01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13051/25mb941c01/25mb941c01__5.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13051/25mb941c01/25mb941c01__5.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/25mb941c01/25mb941c01__3.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/25mb941c01/25mb941c01__7.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13051/25mb941c01/25mb941c01__2.2000.webp"],"c":"Takera Leigh form-fitting modest allover lace fit-and-flare wedding dress","sil":"Fit & Flare","f":["Lace"],"nk":["Strapless"],"v":["Modest"]},
      {"d":"Rebecca Ingram","s":"26RK429A01","n":"Rebecca Ingram 26RK429A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk429a01/26rk429a01__f_5.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk429a01/26rk429a01__f_5.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk429a01/26rk429a01__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk429a01/26rk429a01__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13015/26rk429a01/26rk429a01__f_3.2000.webp"],"c":"Eden Eye-Catching Scoop Neckline Illusion Lace Bodice Fit-and-Flare Wedding Dress","sil":"Fit & Flare","f":["Lace"],"nk":["Scoop Neck"],"v":["Romantic & Floral","Backless & Low Back"]},
      {"d":"Sottero & Midgley","s":"26SB409A01","n":"Sottero & Midgley 26SB409A01","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb409a01/26sb409a01__f_2.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb409a01/26sb409a01__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb409a01/26sb409a01__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb409a01/26sb409a01__f_3.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13016/26sb409a01/26sb409a01__d_f.2000.webp"],"c":"West Detailed Beaded Lace Fit-and-Flare Wedding Dress with Illusion V-Neck, Basque Waist and Lace Train","sil":"Fit & Flare","f":["Lace"],"nk":["V-Neck"],"v":["Sparkle & Beaded","Basque Waist"]},
      {"d":"Essense of Australia","s":"D4344","n":"Essense of Australia D4344","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4344/d4344__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4344/d4344__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4344/d4344__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4344/d4344__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13003/d4344/d4344__f_3.2000.webp"],"c":"Romantic & Floral square neck lace fit & flare wedding dress by Essense of Australia","sil":"Fit & Flare","f":["Lace"],"nk":["Square Neck"],"v":["Romantic & Floral","Sparkle & Beaded"]},
      {"d":"Stella York","s":"SY8180","n":"Stella York SY8180","i":"https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8180/sy8180__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8180/sy8180__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8180/sy8180__f_1.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8180/sy8180__f_2.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/13021/sy8180/sy8180__b_1.2000.webp"],"c":"Glamorous sweetheart lace fit & flare wedding dress by Stella York","sil":"Fit & Flare","f":["Lace"],"nk":["Sweetheart"],"v":["Sparkle & Beaded","Romantic & Floral"]},
      {"d":"Rose + Grace","s":"Addie","n":"Addie","i":"https://dy9ihb9itgy3g.cloudfront.net/products/11800/addie/addie__d_f.740.webp","x":["https://dy9ihb9itgy3g.cloudfront.net/products/11800/addie/addie__d_f.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11800/addie/addie__b.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11800/addie/addie.2000.webp","https://dy9ihb9itgy3g.cloudfront.net/products/11800/addie/addie__f_c.2000.webp"],"c":"Curated v-neck lace fit & flare gown from the exclusive Rose + Grace collection","sil":"Fit & Flare","f":["Lace"],"nk":["V-Neck"],"v":["Romantic & Floral","Sparkle & Beaded","Backless & Low Back"]}
    ]
  }
};

/* ── DOM REFS ── */
const slides = document.querySelectorAll('.qslide');
const nextBtn = document.getElementById('qNext');
const nextLabel = document.getElementById('qNextLabel');
const backBtn = document.getElementById('qBack');
const fill = document.getElementById('qFill');
const label = document.getElementById('qLabel');
const stepPillsEl = document.getElementById('qStepPills');

const STEP_NAMES = ['Big Day', 'Dream Wedding', 'Setting', 'Dress Detail', 'Accessory', 'Snack', 'Mood Board'];

/* ── DERIVE FACET STATE DETERMINISTICALLY FROM stepSelections[0..6] ── */
function syncFacetStateFromSelections() {
  selectedTimeline = 'standard';
  selectedSil = '';
  const nkSet = new Set();
  const fabSet = new Set();
  const vibeSet = new Set();

  for (let i = 0; i < TOTAL; i++) {
    const sel = stepSelections[i];
    if (!sel) continue;
    if (sel.value) answers[i] = sel.value;
    if (sel.timeline) selectedTimeline = sel.timeline;
    if (sel.sil) selectedSil = sel.sil;
    if (Array.isArray(sel.nk)) sel.nk.forEach(x => nkSet.add(x));
    if (Array.isArray(sel.fab)) sel.fab.forEach(x => fabSet.add(x));
    if (Array.isArray(sel.vibe)) sel.vibe.forEach(x => vibeSet.add(x));
  }
  selectedNk = [...nkSet];
  selectedFab = [...fabSet];
  selectedVibes = [...vibeSet];
}

function renderStepPills() {
  if (!stepPillsEl) return;
  let html = `<button type="button" class="qstep-pill ${current === -1 ? 'active' : 'done'}" data-cn-click="goTo(-1)">Intro</button>`;
  for (let i = 0; i < TOTAL; i++) {
    const isCurrent = current === i;
    const isDone = stepSelections[i] !== null;
    const canJump = isDone || i <= current;
    const num = String(i + 1).padStart(2, '0');
    html += `<button type="button" class="qstep-pill ${isCurrent ? 'active' : (isDone ? 'done' : '')}" ${canJump ? `data-cn-click="goTo(${i})"` : 'disabled'}>
      <span>${isDone && !isCurrent ? '✓' : num}</span>
      <span>${STEP_NAMES[i]}</span>
    </button>`;
  }
  stepPillsEl.innerHTML = html;

  // Auto-center active step pill inside horizontal strip without vertical window scroll
  requestAnimationFrame(() => {
    const activePill = stepPillsEl.querySelector('.qstep-pill.active');
    if (activePill && stepPillsEl.scrollWidth > stepPillsEl.clientWidth) {
      const targetLeft = activePill.offsetLeft - (stepPillsEl.clientWidth / 2) + (activePill.offsetWidth / 2);
      stepPillsEl.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    }
  });
}

function updateProgress() {
  if (fill) {
    fill.style.width = current < 0 ? '0%' : ((current + 1) / TOTAL * 100) + '%';
  }
  if (label) {
    if (current < 0) {
      label.textContent = 'Welcome';
    } else {
      const num = String(current + 1).padStart(2, '0');
      const tot = String(TOTAL).padStart(2, '0');
      label.textContent = `${num} / ${tot}`;
    }
  }
  renderStepPills();
}

function updateNav() {
  const navBar = document.getElementById('qNav');
  if (current < 0) {
    if (navBar) navBar.classList.add('qnav-intro-mode');
    backBtn.classList.add('hidden');
    nextLabel.textContent = 'Find Your Bridal Style';
    nextBtn.disabled = false;
  } else {
    if (navBar) navBar.classList.remove('qnav-intro-mode');
    backBtn.classList.remove('hidden');
    const isLast = current === TOTAL - 1;
    const hasAnswer = stepSelections[current] !== null;
    nextLabel.textContent = isLast ? 'Reveal My Bridal Style' : 'Continue';
    nextBtn.disabled = !hasAnswer;
  }
}

function goTo(next) {
  // If jumping back from Results to edit a step, restore quiz stage
  const results = document.getElementById('qResults');
  if (results && results.classList.contains('visible')) {
    results.classList.remove('visible');
    document.getElementById('quizShell').style.display = '';
    document.getElementById('qNav').style.display = '';
    const progWrap = document.getElementById('qProgressWrap');
    if (progWrap) progWrap.style.display = '';
    document.body.classList.add('quiz-stage-active');
  }

  const nextSlide = [...slides].find(s => parseInt(s.dataset.q, 10) === next);
  if (!nextSlide) return;

  slides.forEach(s => s.classList.remove('active'));
  nextSlide.classList.add('active');

  current = next;
  updateProgress();
  updateNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goNext() {
  if (window.cnHaptic) window.cnHaptic(8);
  if (current === -1) {
    goTo(0);
  } else if (current < TOTAL - 1) {
    goTo(current + 1);
  } else {
    triggerCurationReveal();
  }
}

function goBack() {
  if (window.cnHaptic) window.cnHaptic(6);
  if (current > 0) goTo(current - 1);
  else goTo(-1);
}

function selectOption(el) {
  if (window.cnHaptic) window.cnHaptic(10);
  const container = el.closest('.qoptions-grid');
  container.querySelectorAll('.qoption-card').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');

  stepSelections[current] = {
    value: el.dataset.value || null,
    label: el.dataset.label || el.querySelector('.qoption-title')?.textContent || '',
    timeline: el.dataset.timeline || null,
    sil: el.dataset.sil || null,
    nk: el.dataset.nk ? el.dataset.nk.split(',').map(s => s.trim()) : null,
    fab: el.dataset.fab ? el.dataset.fab.split(',').map(s => s.trim()) : null,
    vibe: el.dataset.vibe ? el.dataset.vibe.split(',').map(s => s.trim()) : null
  };

  syncFacetStateFromSelections();
  updateProgress();
  updateNav();

  // Auto-advance on all steps including Q7 (which triggers Curation Reveal)
  const stepSnapshot = current;
  setTimeout(() => {
    if (current !== stepSnapshot) return;
    if (current >= 0 && current < TOTAL - 1) {
      goNext();
    } else if (current === TOTAL - 1) {
      triggerCurationReveal();
    }
  }, 340);
}

function previewIntroPersona(personaKey) {
  if (!PERSONAS[personaKey]) return;
  if (window.cnHaptic) window.cnHaptic(10);
  const p = PERSONAS[personaKey];
  answers.fill(personaKey);
  selectedSil = p.sil;
  tunerSil = 'auto';
  tunerDes = 'all';
  triggerCurationReveal();
}

function resumeSavedQuizResults() {
  try {
    const raw = localStorage.getItem('cloudnine_quiz_persona') || sessionStorage.getItem('cloudnine_quiz_persona');
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved && saved.key && PERSONAS[saved.key]) {
      if (Array.isArray(saved.answers) && saved.answers.length === TOTAL) {
        saved.answers.forEach((a, i) => { answers[i] = a; });
      } else {
        answers.fill(saved.key);
      }
      if (Array.isArray(saved.stepSelections) && saved.stepSelections.length === TOTAL) {
        saved.stepSelections.forEach((s, i) => { stepSelections[i] = s; });
        syncFacetStateFromSelections();
      }
      if (saved.sil) selectedSil = saved.sil;
      if (saved.timelineKey && TIMELINE_NOTES[saved.timelineKey]) selectedTimeline = saved.timelineKey;
      catalogReadyPromise.then(() => showResults(saved.dna));
    }
  } catch (e) {}
}

function triggerCurationReveal() {
  const overlay = document.getElementById('qCurationOverlay');
  const eyebrowEl = document.getElementById('qCurationEyebrow');
  const titleEl = document.getElementById('qCurationTitle');
  const subEl = document.getElementById('qCurationSub');
  const barEl = document.getElementById('qCurationBar');

  if (!overlay) {
    catalogReadyPromise.then(() => showResults());
    return;
  }

  overlay.classList.add('active');
  if (barEl) barEl.style.width = '28%';
  if (eyebrowEl) eyebrowEl.textContent = 'Peoria Atelier Style Engine · Step 1 of 3';
  if (titleEl) titleEl.innerHTML = 'Analyzing Silhouette &amp; <em>Bodice Architecture</em>…';
  if (subEl) subEl.textContent = 'Mapping your aesthetic balance across Classic, Romantic, Modern & Bohemian profiles.';

  setTimeout(() => {
    if (barEl) barEl.style.width = '68%';
    if (eyebrowEl) eyebrowEl.textContent = 'Peoria Atelier Style Engine · Step 2 of 3';
    if (titleEl) titleEl.innerHTML = 'Scoring <em>671 Showroom Gowns</em>…';
    if (subEl) subEl.textContent = 'Filtering Maggie Sottero, Essense of Australia, Stella York & Rose + Grace inventory.';
  }, 280);

  setTimeout(() => {
    if (barEl) barEl.style.width = '100%';
    if (eyebrowEl) eyebrowEl.textContent = 'Peoria Atelier Style Engine · Step 3 of 3';
    if (titleEl) titleEl.innerHTML = 'Assembling Your <em>Curated Fitting Rack</em>…';
  }, 560);

  setTimeout(() => {
    catalogReadyPromise.then(() => {
      overlay.classList.remove('active');
      showResults();
    });
  }, 820);
}

/* ── KEYBOARD NAVIGATION ── */
document.addEventListener('keydown', (e) => {
  const mb = document.getElementById('mb');
  if (mb && mb.classList.contains('open')) {
    if (e.key === 'Escape') closeQuizModal();
    if (e.key === 'ArrowLeft') shiftQuizModalImg(-1);
    if (e.key === 'ArrowRight') shiftQuizModalImg(1);
    return;
  }
  if (document.getElementById('qResults')?.classList.contains('visible')) return;
  if (current === -1) {
    if (e.key === 'Enter') goNext();
    return;
  }
  if (current >= 0 && current < TOTAL) {
    const currentSlide = [...slides].find(s => parseInt(s.dataset.q, 10) === current);
    if (!currentSlide) return;
    const cards = currentSlide.querySelectorAll('.qoption-card');
    if (e.key >= '1' && e.key <= '4') {
      const idx = parseInt(e.key, 10) - 1;
      if (cards[idx]) selectOption(cards[idx]);
    } else if (e.key === 'Enter' && !nextBtn.disabled) {
      goNext();
    } else if (e.key === 'Backspace' || e.key === 'Escape') {
      goBack();
    }
  }
});

/* ── MULTI-DIMENSIONAL STYLE DNA & 671-GOWN SCORING ENGINE ── */
function computeStyleDNA() {
  const weights = { classic: 2, romantic: 2, modern: 2, boho: 2 };
  const stepWeights = [0, 3.2, 3.8, 2.8, 3.2, 2.5, 2.5];
  answers.forEach((ans, idx) => {
    if (ans && weights[ans] !== undefined) {
      weights[ans] += (stepWeights[idx] || 2.5);
    }
  });

  const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0) || 1;
  const sorted = Object.entries(weights)
    .map(([key, val]) => ({
      key,
      label: PERSONAS[key].plainTitle,
      pct: Math.round((val / totalWeight) * 100)
    }))
    .sort((a, b) => b.pct - a.pct);

  const sumPct = sorted.reduce((acc, item) => acc + item.pct, 0);
  if (sorted.length && sumPct !== 100) {
    sorted[0].pct += (100 - sumPct);
  }
  return sorted;
}

const ALL_DESIGNERS = [
  'Maggie Sottero',
  'Rebecca Ingram',
  'Sottero & Midgley',
  'Essense of Australia',
  'Stella York',
  'Rose + Grace'
];

function scoreCatalogGowns(primaryPersonaKey, silOverride, desFilter) {
  const persona = PERSONAS[primaryPersonaKey] || PERSONAS.romantic;
  const targetSil = (silOverride && silOverride !== 'auto')
    ? silOverride
    : (selectedSil || persona.sil || 'A-Line');

  const sourceList = (catalogGowns && catalogGowns.length)
    ? catalogGowns
    : Object.values(PERSONAS).flatMap(p => p.fallbackDresses);

  const filteredByDes = (desFilter && desFilter !== 'all')
    ? sourceList.filter(p => (p.d || '').toLowerCase() === desFilter.toLowerCase())
    : sourceList;

  const activeList = filteredByDes.length ? filteredByDes : sourceList;

  const scored = activeList.map(p => {
    let rawScore = 50;
    let exactHits = 0;
    const reasons = [];

    // 1. Silhouette match (+30 exact, +15 complementary)
    if (p.sil) {
      if (p.sil.toLowerCase() === targetSil.toLowerCase()) {
        rawScore += 30;
        exactHits += 2;
        reasons.push(p.sil);
      } else if (
        (targetSil === 'Fit & Flare' && p.sil === 'Mermaid') ||
        (targetSil === 'Mermaid' && p.sil === 'Fit & Flare') ||
        (targetSil === 'Ballgown' && p.sil === 'A-Line') ||
        (targetSil === 'A-Line' && p.sil === 'Ballgown')
      ) {
        rawScore += 15;
        reasons.push(p.sil);
      }
    }

    // 2. Neckline match (+16 first match, +4 additional)
    if (Array.isArray(p.nk) && selectedNk.length) {
      const matchedNks = p.nk.filter(k => selectedNk.some(sn => sn.toLowerCase() === k.toLowerCase()));
      if (matchedNks.length) {
        rawScore += 16 + Math.min(4, (matchedNks.length - 1) * 4);
        exactHits += 1;
        reasons.push(matchedNks[0]);
      }
    }

    // 3. Fabric match (+14 first match, +4 additional)
    if (Array.isArray(p.f) && selectedFab.length) {
      const matchedFabs = p.f.filter(f => selectedFab.some(sf => sf.toLowerCase() === f.toLowerCase()));
      if (matchedFabs.length) {
        rawScore += 14 + Math.min(4, (matchedFabs.length - 1) * 4);
        exactHits += 1;
        reasons.push(matchedFabs[0]);
      }
    }

    // 4. Vibe tag match (+10 first match, +4 each additional across Q2/Q5/Q6/Q7)
    if (Array.isArray(p.v) && selectedVibes.length) {
      const matchedVibes = p.v.filter(v => selectedVibes.some(sv => sv.toLowerCase() === v.toLowerCase()));
      if (matchedVibes.length) {
        rawScore += 10 + Math.min(8, (matchedVibes.length - 1) * 4);
        exactHits += matchedVibes.length;
        if (reasons.length < 3) reasons.push(matchedVibes[0]);
      }
    }

    // 5. Multi-angle gallery richness (+3)
    const angleCount = Array.isArray(p.x) ? p.x.length : 0;
    if (angleCount >= 3) {
      rawScore += 3;
    }

    // Ensure at least 3 descriptive chips
    if (reasons.length < 2 && p.sil && !reasons.includes(p.sil)) reasons.push(p.sil);
    if (reasons.length < 2 && Array.isArray(p.f) && p.f[0] && !reasons.includes(p.f[0])) reasons.push(p.f[0]);
    if (reasons.length < 3 && Array.isArray(p.nk) && p.nk[0] && !reasons.includes(p.nk[0])) reasons.push(p.nk[0]);
    if (reasons.length < 3 && Array.isArray(p.v) && p.v[0] && !reasons.includes(p.v[0])) reasons.push(p.v[0]);

    const disp = formatGownDisplay(p);
    return Object.assign({}, p, {
      rawScore,
      exactHits,
      hasPoeticName: disp.hasPoeticName ? 1 : 0,
      angleCount: Math.min(6, angleCount),
      matchReasons: reasons.slice(0, 3)
    });
  });

  // Sort by un-clamped rawScore first, then exactHits, then poetic name, then multi-angle depth
  scored.sort((a, b) => {
    if (b.rawScore !== a.rawScore) return b.rawScore - a.rawScore;
    if (b.exactHits !== a.exactHits) return b.exactHits - a.exactHits;
    if (b.hasPoeticName !== a.hasPoeticName) return b.hasPoeticName - a.hasPoeticName;
    return b.angleCount - a.angleCount;
  });

  // Curate top 24 with round-robin designer interleaving per batch of 6
  const topPool = [];
  const usedSkus = new Set();

  if (desFilter && desFilter !== 'all') {
    for (const c of scored) {
      if (topPool.length >= 24) break;
      if (!usedSkus.has(c.s)) {
        usedSkus.add(c.s);
        topPool.push(c);
      }
    }
  } else {
    const byDesigner = {};
    ALL_DESIGNERS.forEach(d => { byDesigner[d] = []; });
    scored.forEach(item => {
      if (!byDesigner[item.d]) byDesigner[item.d] = [];
      if (byDesigner[item.d].length < 8) byDesigner[item.d].push(item);
    });

    for (let round = 0; round < 4 && topPool.length < 24; round++) {
      const roundBatch = [];
      for (const des of ALL_DESIGNERS) {
        const candidate = byDesigner[des] && byDesigner[des][round];
        if (candidate && !usedSkus.has(candidate.s)) {
          usedSkus.add(candidate.s);
          roundBatch.push(candidate);
        }
      }
      roundBatch.sort((a, b) => b.rawScore - a.rawScore || b.hasPoeticName - a.hasPoeticName);
      topPool.push(...roundBatch);
    }
    // Fill any remaining slots up to 24 from highest rawScore overall
    for (const c of scored) {
      if (topPool.length >= 24) break;
      if (!usedSkus.has(c.s)) {
        usedSkus.add(c.s);
        topPool.push(c);
      }
    }
  }

  const maxRaw = Math.max(...topPool.map(x => x.rawScore), 100);
  const minRaw = Math.min(...topPool.map(x => x.rawScore), 70);
  const span = Math.max(1, maxRaw - minRaw);

  return topPool.slice(0, 24).map((item, idx) => {
    const normalized = (item.rawScore - minRaw) / span; // 0..1
    const smoothScore = Math.round(99 - (idx * 0.45) - ((1 - normalized) * 1.5));
    const clamped = Math.min(99, Math.max(87, smoothScore));
    return Object.assign({}, item, {
      matchScore: idx === 0 ? 99 : Math.min(98, clamped)
    });
  });
}

let activePersona = null;
let currentDna = [];

function renderAnswerSummaryChips() {
  const container = document.getElementById('rAnswerChips');
  if (!container) return;
  const chips = [];
  for (let i = 0; i < TOTAL; i++) {
    const sel = stepSelections[i];
    if (sel && sel.label) {
      chips.push(`<button type="button" class="qanswer-chip" data-cn-click="goTo(${i})" title="Click to change ${qEsc(STEP_NAMES[i])}">
        <span class="chip-k">${qEsc(STEP_NAMES[i])}:</span>
        <span class="chip-v">${qEsc(sel.label)}</span>
        <span aria-hidden="true" style="font-size:9px;opacity:0.65;">✎</span>
      </button>`);
    }
  }
  container.innerHTML = chips.join('');
}

function showResults(precomputedDna) {
  currentDna = Array.isArray(precomputedDna) && precomputedDna.length ? precomputedDna : computeStyleDNA();
  const primaryKey = currentDna[0]?.key || 'romantic';
  const secondary = currentDna[1] || currentDna[0];
  activePersona = PERSONAS[primaryKey] || PERSONAS.romantic;

  const effectiveSil = (tunerSil !== 'auto' ? tunerSil : selectedSil) || activePersona.sil || 'A-Line';
  const tlInfo = TIMELINE_NOTES[selectedTimeline] || TIMELINE_NOTES.standard;

  document.body.classList.remove('quiz-stage-active');
  document.getElementById('quizShell').style.display = 'none';
  document.getElementById('qNav').style.display = 'none';
  const progWrap = document.getElementById('qProgressWrap');
  if (progWrap) progWrap.style.display = 'none';

  // Hero & Narrative
  document.getElementById('rTitle').innerHTML = activePersona.title;
  document.getElementById('rBlendSub').textContent =
    `Primary Match: ${currentDna[0].pct}% ${currentDna[0].label} · Secondary Influence: ${secondary.pct}% ${secondary.label}`;
  document.getElementById('rDesc').textContent = activePersona.desc;
  const heroImgEl = document.getElementById('rHeroImg');
  if (heroImgEl) {
    heroImgEl.src = activePersona.heroImg || 'images/quiz/result-1.jpg';
    heroImgEl.alt = activePersona.plainTitle;
  }

  // Answer Summary Chips
  renderAnswerSummaryChips();

  // Timeline Advisory
  document.getElementById('rTimelineKicker').textContent = tlInfo.kicker;
  document.getElementById('rTimelineText').textContent = tlInfo.text;

  // Render Style DNA 4-Bar Breakdown at 0% width first, then animate via RAF
  document.getElementById('rDnaBars').innerHTML = currentDna.map(item => `
    <div class="qdna-row">
      <div class="qdna-row-top">
        <span class="qdna-label">${qEsc(item.label)}</span>
        <span class="qdna-pct">${qEsc(item.pct)}%</span>
      </div>
      <div class="qdna-track" role="progressbar" aria-valuenow="${qEsc(item.pct)}" aria-valuemin="0" aria-valuemax="100" aria-label="${qEsc(item.label)} match percentage">
        <div class="qdna-fill" data-target-pct="${item.pct}" style="width:0%"></div>
      </div>
    </div>
  `).join('');

  // Quick Style Tips (Rose + Grace Collection, Flowers, Hair & Makeup, Accessories)
  document.getElementById('rTraits').innerHTML = activePersona.traits.map((t) => {
    return `
      <div class="qtrait-card">
        <div class="qtrait-tag">${t.label}</div>
        <div class="qtrait-val">${t.value}</div>
        <div class="qtrait-info">${t.desc}</div>
      </div>`;
  }).join('');

  // Score 671 Gowns & Render First Batch of 6
  matchedPool = scoreCatalogGowns(primaryKey, tunerSil, tunerDes);
  rackBatchIndex = 0;
  renderRackBatch();

  // Update "Explore All Matching Gowns in Catalog" link
  updateExploreCatalogLink(effectiveSil);

  // Book with Persona CTA url
  const bookUrl = `appointments.html?persona=${encodeURIComponent(activePersona.personaKey)}&sil=${encodeURIComponent(effectiveSil)}#book-now`;
  document.getElementById('rBookBtn').href = bookUrl;

  // Persist rich quiz profile in sessionStorage & localStorage for Appointments, Contact & Resume
  syncQuizStorage();

  // Update URL query string so results can be bookmarked, shared, or returned to from dress.html
  try {
    const shareUrl = `${window.location.pathname}?persona=${encodeURIComponent(activePersona.personaKey)}&sil=${encodeURIComponent(effectiveSil)}&tl=${encodeURIComponent(selectedTimeline)}`;
    window.history.replaceState({ persona: activePersona.personaKey }, '', shareUrl);
  } catch (e) {}

  // Animate results container and Style DNA bars
  const results = document.getElementById('qResults');
  results.style.opacity = '0';
  results.classList.add('visible');
  requestAnimationFrame(() => {
    results.style.transition = 'opacity .55s cubic-bezier(0.2, 0, 0, 1)';
    results.style.opacity = '1';
    requestAnimationFrame(() => {
      document.querySelectorAll('#rDnaBars .qdna-fill').forEach(bar => {
        bar.style.width = (bar.dataset.targetPct || '0') + '%';
      });
    });
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function syncQuizStorage() {
  if (!activePersona) return null;
  const effectiveSil = (tunerSil !== 'auto' ? tunerSil : selectedSil) || activePersona.sil || 'A-Line';
  const tlInfo = TIMELINE_NOTES[selectedTimeline] || TIMELINE_NOTES.standard;
  const totalBatches = Math.max(1, Math.ceil(matchedPool.length / RACK_SIZE));
  const start = (rackBatchIndex % totalBatches) * RACK_SIZE;
  const currentRack = matchedPool.slice(start, start + RACK_SIZE);

  const quizPayload = {
    key: activePersona.personaKey,
    title: activePersona.plainTitle,
    sil: effectiveSil,
    nk: selectedNk.join(', '),
    fab: selectedFab.join(', '),
    vibes: selectedVibes.join(', '),
    timelineKey: selectedTimeline,
    timelineLabel: tlInfo.label,
    dna: currentDna,
    answers: answers.slice(),
    stepSelections: stepSelections.slice(),
    dresses: (currentRack.length ? currentRack : matchedPool.slice(0, 6)).map(d => {
      const disp = formatGownDisplay(d);
      return {
        s: d.s,
        d: d.d,
        n: disp.title,
        sil: d.sil || effectiveSil,
        i: d.i,
        x: d.x || []
      };
    })
  };
  try {
    sessionStorage.setItem('cloudnine_quiz_persona', JSON.stringify(quizPayload));
    localStorage.setItem('cloudnine_quiz_persona', JSON.stringify(quizPayload));
  } catch (e) {}
  return quizPayload;
}

function updateExploreCatalogLink(effectiveSil) {
  const exploreBtn = document.getElementById('btnExploreCatalog');
  if (!exploreBtn) return;
  const params = new URLSearchParams();
  if (effectiveSil) params.set('sil', effectiveSil);
  if (tunerDes && tunerDes !== 'all') params.set('designer', tunerDes);
  exploreBtn.href = `bridal-catalog.html?${params.toString()}`;
  const labelDes = (tunerDes && tunerDes !== 'all') ? `${tunerDes} ` : '';
  exploreBtn.innerHTML = `<span>Explore All ${qEsc(labelDes)}${qEsc(effectiveSil)} Gowns in Catalog →</span>`;
}

/* ── LIVE STYLE TUNER (SILHOUETTE & DESIGNER PIVOT) ── */
function setTunerSilhouette(sil) {
  if (window.cnHaptic) window.cnHaptic(8);
  tunerSil = sil;
  document.querySelectorAll('#qTunerSilhouetteRow .qtuner-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tunerSil === sil);
  });
  const primaryKey = activePersona?.personaKey || 'romantic';
  const effectiveSil = (sil !== 'auto' ? sil : selectedSil) || activePersona?.sil || 'A-Line';
  matchedPool = scoreCatalogGowns(primaryKey, tunerSil, tunerDes);
  rackBatchIndex = 0;
  renderRackBatch();
  updateExploreCatalogLink(effectiveSil);
  syncQuizStorage();
}

function setTunerDesigner(des) {
  if (window.cnHaptic) window.cnHaptic(8);
  tunerDes = des;
  document.querySelectorAll('#qTunerDesignerRow .qtuner-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tunerDes === des);
  });
  const primaryKey = activePersona?.personaKey || 'romantic';
  const effectiveSil = (tunerSil !== 'auto' ? tunerSil : selectedSil) || activePersona?.sil || 'A-Line';
  matchedPool = scoreCatalogGowns(primaryKey, tunerSil, tunerDes);
  rackBatchIndex = 0;
  renderRackBatch();
  updateExploreCatalogLink(effectiveSil);
  syncQuizStorage();
}

function getHeartSvg() {
  return '<svg class="wl-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
}

function renderRackBatch() {
  const totalBatches = Math.max(1, Math.ceil(matchedPool.length / RACK_SIZE));
  const start = (rackBatchIndex % totalBatches) * RACK_SIZE;
  const batch = matchedPool.slice(start, start + RACK_SIZE);
  const grid = document.getElementById('rDresses');
  if (!grid) return;

  grid.innerHTML = batch.map((d, idx) => {
    const poolIdx = start + idx;
    const disp = formatGownDisplay(d);
    const isSaved = (typeof WL !== 'undefined' && WL.has) ? WL.has(d.s, d.d) : false;
    const reasonsHtml = (d.matchReasons || []).map(r => `<span class="qrack-reason-chip">${qEsc(r)}</span>`).join('');
    const angles = (Array.isArray(d.x) && d.x.length > 1) ? d.x.slice(0, 4) : [];
    const anglesHtml = angles.length > 1
      ? `<div class="qrack-angles" data-cn-click="event.stopPropagation()">
          ${angles.map((url, aIdx) => `<button type="button" class="qrack-angle-dot ${aIdx === 0 ? 'active' : ''}" aria-label="View angle ${aIdx + 1}" data-angle-src="${qEsc(url)}" data-cn-click="switchRackCardAngle(this, this.dataset.angleSrc, event)"></button>`).join('')}
        </div>`
      : '';

    return `
      <div class="qrack-card" data-pool-idx="${poolIdx}" data-cn-click="handleRackCardClick(${poolIdx}, event)">
        <div class="qrack-img-wrap">
          <span class="qrack-match-badge">${qEsc(d.matchScore || 96)}% Match</span>
          <img class="qrack-img" src="${qEsc(d.i)}" alt="${qEsc((d.d || '') + ' ' + (disp.title || ''))}" loading="lazy"/>
          ${anglesHtml}
        </div>
        <div class="qrack-body">
          <span class="qrack-designer">${qEsc(d.d || 'Bridal Collection')}</span>
          <h3 class="qrack-name">${qEsc(disp.title)}</h3>
          <span class="qrack-style-num">${qEsc(disp.subtitle)}</span>
          <div class="qrack-reasons">${reasonsHtml}</div>
          <p class="qrack-desc">${qEsc(d.c || 'Tailored designer bridal gown available for private fitting at Cloud Nine Peoria.')}</p>
          <span class="qrack-cta">Quick-Look &amp; Angles →</span>
        </div>
      </div>`;
  }).join('');

  const statusEl = document.getElementById('rRackBatchStatus');
  if (statusEl) {
    const endNum = Math.min(start + RACK_SIZE, matchedPool.length);
    statusEl.innerHTML = `Showing top matches <strong>${start + 1}–${endNum}</strong> of <strong>${matchedPool.length}</strong> high-compatibility gowns`;
  }
}

function switchRackCardAngle(dotBtn, imgUrl, ev) {
  if (ev) ev.stopPropagation();
  const wrap = dotBtn.closest('.qrack-img-wrap');
  if (!wrap) return;
  const img = wrap.querySelector('.qrack-img');
  if (img && imgUrl) img.src = imgUrl;
  wrap.querySelectorAll('.qrack-angle-dot').forEach(b => b.classList.remove('active'));
  dotBtn.classList.add('active');
}

function shuffleRack() {
  if (!matchedPool.length) return;
  if (window.cnHaptic) window.cnHaptic(10);
  const totalBatches = Math.max(1, Math.ceil(matchedPool.length / RACK_SIZE));
  rackBatchIndex = (rackBatchIndex + 1) % totalBatches;
  renderRackBatch();
  const saveLbl = document.getElementById('btnSaveAllLabel');
  if (saveLbl) saveLbl.textContent = 'Save All 6 to Lookbook';
  const section = document.querySelector('.qresults-rack-section');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleRackWishlist(poolIdx, btnEl, ev) {
  if (ev) ev.stopPropagation();
  const d = matchedPool[poolIdx];
  if (!d || typeof WL === 'undefined') return;
  const disp = formatGownDisplay(d);
  const prod = {
    s: d.s,
    d: d.d,
    n: disp.title,
    sil: d.sil || (activePersona ? activePersona.sil : 'A-Line'),
    i: d.i,
    x: d.x || [d.i],
    _cat: 'bridal-catalog.html',
    _type: 'bridal'
  };
  const nowSaved = WL.toggle(prod);
  btnEl.classList.toggle('wl-btn--active', nowSaved);
  btnEl.setAttribute('aria-pressed', nowSaved ? 'true' : 'false');
  const lbl = btnEl.querySelector('.wl-btn-label');
  if (lbl) lbl.textContent = nowSaved ? 'Saved' : 'Save';
}

function handleRackCardClick(poolIdx, ev) {
  if (ev && (ev.target.closest('.wl-btn') || ev.target.closest('.qrack-angles'))) return;
  const d = matchedPool[poolIdx];
  if (!d) return;
  if (window.cnHaptic) window.cnHaptic(8);
  // Open rich multi-angle Quick-Look sheet on both Desktop and Mobile so brides never lose their rack place
  openQuizModal(d);
}

/* ── UNIFIED MULTI-ANGLE QUICK-LOOK MODAL LOGIC (WITH TOUCH SWIPE) ── */
function openQuizModal(d) {
  currentQuizModalGown = d;
  currentQuizModalImgs = (Array.isArray(d.x) && d.x.length) ? d.x : [d.i];
  currentQuizModalImgIdx = 0;

  const disp = formatGownDisplay(d);
  document.getElementById('mDesigner').textContent = d.d || 'Bridal Collection';
  document.getElementById('mTitle').textContent = disp.title;
  document.getElementById('mBadge').textContent = `${d.matchScore || 96}% Match · ${disp.subtitle}`;
  document.getElementById('mDesc').textContent = d.c || 'Available for private fitting and stylist consultation at Cloud Nine Bridal Boutique in Peoria.';

  const metaItems = [
    d.sil ? ['Silhouette', d.sil] : null,
    (d.f && d.f.length) ? ['Fabric', d.f.join(', ')] : null,
    (d.nk && d.nk.length) ? ['Neckline', d.nk.join(', ')] : null,
    ['Peoria Fitting', 'Private Suite Ready']
  ].filter(Boolean);

  document.getElementById('mMeta').innerHTML = metaItems.map(([k, v]) =>
    `<div class="m-meta-item"><span class="m-meta-key">${qEsc(k)}</span><span class="m-meta-val">${qEsc(v)}</span></div>`
  ).join('');

  const skuParam = encodeURIComponent(d.s || '');
  const desParam = encodeURIComponent(d.d || '');
  const qBookLink = document.getElementById('qModalBookLink');
  if (qBookLink) qBookLink.href = `appointments.html?cat=bridal&sku=${skuParam}&des=${desParam}#book-now`;

  const fullBtn = document.getElementById('qModalFullPageBtn');
  fullBtn.onclick = () => {
    closeQuizModal();
    viewGown(d, null);
  };

  showQuizModalImg(0);

  const mb = document.getElementById('mb');
  mb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showQuizModalImg(idx) {
  currentQuizModalImgIdx = idx;
  const img = document.getElementById('mImg');
  if (img && currentQuizModalImgs[idx]) {
    img.src = currentQuizModalImgs[idx];
  }
  const pill = document.getElementById('qModalAnglePill');
  if (pill) {
    if (currentQuizModalImgs.length > 1) {
      pill.style.display = 'inline-flex';
      pill.textContent = `${idx + 1} / ${currentQuizModalImgs.length}`;
    } else {
      pill.style.display = 'none';
    }
  }
  const thumbs = document.getElementById('mThumbs');
  if (thumbs) {
    if (currentQuizModalImgs.length <= 1) {
      thumbs.innerHTML = '';
    } else {
      thumbs.innerHTML = currentQuizModalImgs.map((u, ti) =>
        `<div class="modal-thumb ${ti === idx ? 'active' : ''}" data-cn-click="showQuizModalImg(${ti})"><img src="${qEsc(u)}" alt="Angle ${ti + 1}" loading="lazy"/></div>`
      ).join('');
    }
  }
}

function shiftQuizModalImg(dir) {
  if (currentQuizModalImgs.length <= 1) return;
  const next = (currentQuizModalImgIdx + dir + currentQuizModalImgs.length) % currentQuizModalImgs.length;
  showQuizModalImg(next);
}

// Touch swipe left/right on Quick-Look modal gallery
(function initQuizModalSwipe() {
  const wrap = document.getElementById('qModalMainWrap');
  if (!wrap) return;
  let startX = 0;
  let startY = 0;
  wrap.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches[0]) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }, { passive: true });
  wrap.addEventListener('touchend', (e) => {
    if (!e.changedTouches || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      shiftQuizModalImg(dx < 0 ? 1 : -1);
    }
  }, { passive: true });
})();

function syncQuizModalWishlistUI() {
  const btn = document.getElementById('qModalWishlistBtn');
  const lbl = document.getElementById('qModalWishlistLabel');
  if (!btn || !lbl || !currentQuizModalGown || typeof WL === 'undefined') return;
  const saved = WL.has(currentQuizModalGown.s, currentQuizModalGown.d);
  btn.classList.toggle('is-saved', saved);
  lbl.textContent = saved ? 'Saved in Lookbook' : 'Save to Lookbook';
}

function toggleQuizModalWishlist() {
  if (!currentQuizModalGown || typeof WL === 'undefined') return;
  const d = currentQuizModalGown;
  const disp = formatGownDisplay(d);
  WL.toggle({
    s: d.s,
    d: d.d,
    n: disp.title,
    sil: d.sil || 'A-Line',
    i: d.i,
    x: d.x || [d.i],
    _cat: 'bridal-catalog.html',
    _type: 'bridal'
  });
  syncQuizModalWishlistUI();
  renderRackBatch();
}

function closeQuizModal() {
  const mb = document.getElementById('mb');
  if (mb) mb.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('mb')?.addEventListener('click', (e) => {
  if (e.target.id === 'mb') closeQuizModal();
});

function viewGown(d, cardEl) {
  const disp = formatGownDisplay(d);
  sessionStorage.setItem('cloudnine_dress', JSON.stringify({
    d: d.d || d.designer,
    s: d.s || d.style,
    i: d.i || d.img,
    x: d.x || [],
    n: disp.title,
    c: d.c || '',
    sil: d.sil || activePersona?.sil || 'A-Line',
    f: d.f || [],
    nk: d.nk || []
  }));
  // Preserve full query string so "Back to Style Quiz" returns directly to Results rack
  const returnUrl = 'quiz.html' + (window.location.search || `?persona=${encodeURIComponent(activePersona?.personaKey || 'romantic')}`);
  sessionStorage.setItem('cloudnine_dress_src', returnUrl);

  if (cardEl) {
    const img = cardEl.querySelector('img');
    if (img) img.style.viewTransitionName = 'dress-hero';
  }

  const sku = encodeURIComponent(d.s || d.style || '');
  const des = encodeURIComponent(d.d || d.designer || '');
  window.location.href = `dress.html?cat=bridal&sku=${sku}${des ? `&d=${des}` : ''}`;
}

function saveAllToLookbook() {
  if (!matchedPool.length) return;
  if (window.cnHaptic) window.cnHaptic([10, 40, 15]);
  const totalBatches = Math.max(1, Math.ceil(matchedPool.length / RACK_SIZE));
  const start = (rackBatchIndex % totalBatches) * RACK_SIZE;
  const batch = matchedPool.slice(start, start + RACK_SIZE);

  const WL_KEY = 'cloudnine_wishlist';
  let list = [];
  try { list = JSON.parse(localStorage.getItem(WL_KEY) || '[]'); } catch(e) {}

  batch.forEach(d => {
    const id = d.s + '|' + d.d;
    const disp = formatGownDisplay(d);
    if (!list.some(x => (x.s + '|' + x.d) === id)) {
      list.push({
        s: d.s,
        d: d.d,
        n: disp.title,
        sil: d.sil || (activePersona ? activePersona.sil : 'A-Line'),
        i: d.i,
        x: d.x || [d.i],
        _cat: 'bridal-catalog.html',
        _type: 'bridal'
      });
    }
  });

  localStorage.setItem(WL_KEY, JSON.stringify(list));
  if (window.WL && typeof window.WL.updateBadge === 'function') window.WL.updateBadge();
  renderRackBatch();

  const saveLbl = document.getElementById('btnSaveAllLabel');
  if (saveLbl) saveLbl.textContent = '✓ All 6 Saved to Lookbook';

  const toast = document.getElementById('quizToast');
  toast.textContent = `Saved all 6 ${selectedSil || activePersona?.sil || 'Bridal'} gowns to your Lookbook!`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function sharePersonaResults() {
  if (!activePersona) return;
  if (window.cnHaptic) window.cnHaptic(10);
  const effectiveSil = selectedSil || activePersona.sil || 'A-Line';
  const url = `${window.location.origin}${window.location.pathname}?persona=${encodeURIComponent(activePersona.personaKey)}&sil=${encodeURIComponent(effectiveSil)}&tl=${encodeURIComponent(selectedTimeline)}`;
  const title = `My Bridal Style DNA: ${activePersona.plainTitle}`;
  const text = `I just took the Cloud Nine Bridal Style Quiz and matched with ${activePersona.plainTitle} (${effectiveSil} silhouette)! Explore my curated fitting rack:`;

  if (navigator.share) {
    navigator.share({ title, text, url }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      const toast = document.getElementById('quizToast');
      toast.textContent = 'Style DNA & Rack link copied to clipboard!';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }).catch(() => {});
  }
}

function shareResultsToContact() {
  if (window.cnHaptic) window.cnHaptic(12);
  const payload = syncQuizStorage();
  const personaKey = payload?.key || activePersona?.personaKey || 'romantic';
  const effectiveSil = payload?.sil || selectedSil || activePersona?.sil || 'A-Line';
  const tlKey = payload?.timelineKey || selectedTimeline || 'standard';
  window.location.href = `contact.html?from=quiz&persona=${encodeURIComponent(personaKey)}&sil=${encodeURIComponent(effectiveSil)}&tl=${encodeURIComponent(tlKey)}#request-form`;
}

function clearQuizResults() {
  if (window.cnHaptic) window.cnHaptic(10);
  try {
    sessionStorage.removeItem('cloudnine_quiz_persona');
    localStorage.removeItem('cloudnine_quiz_persona');
  } catch (e) {}

  current = -1;
  answers.fill(null);
  stepSelections.fill(null);
  selectedTimeline = 'standard';
  selectedSil = '';
  selectedNk = [];
  selectedFab = [];
  selectedVibes = [];
  tunerSil = 'auto';
  tunerDes = 'all';
  activePersona = null;
  currentDna = [];

  document.querySelectorAll('.qoption-card').forEach(o => o.classList.remove('selected'));
  document.querySelectorAll('#qTunerSilhouetteRow .qtuner-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tunerSil === 'auto');
  });
  document.querySelectorAll('#qTunerDesignerRow .qtuner-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tunerDes === 'all');
  });

  try {
    window.history.replaceState({}, '', window.location.pathname);
  } catch (e) {}

  checkSavedQuizBanner();

  const results = document.getElementById('qResults');
  if (results && results.classList.contains('visible')) {
    results.style.transition = 'opacity .3s ease';
    results.style.opacity = '0';
    setTimeout(() => {
      results.classList.remove('visible');
      results.style.opacity = '';
      results.style.transition = '';
      document.body.classList.add('quiz-stage-active');
      document.getElementById('quizShell').style.display = '';
      document.getElementById('qNav').style.display = '';
      const progWrap = document.getElementById('qProgressWrap');
      if (progWrap) progWrap.style.display = '';

      slides.forEach(s => s.classList.remove('active'));
      document.querySelector('.qslide[data-q="-1"]').classList.add('active');
      updateProgress();
      updateNav();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 280);
  } else {
    slides.forEach(s => s.classList.remove('active'));
    document.querySelector('.qslide[data-q="-1"]').classList.add('active');
    updateProgress();
    updateNav();
  }

  const toast = document.getElementById('quizToast');
  if (toast) {
    toast.textContent = 'Quiz results cleared. Ready for a fresh start!';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }
}

function retake() {
  current = -1;
  answers.fill(null);
  stepSelections.fill(null);
  selectedTimeline = 'standard';
  selectedSil = '';
  selectedNk = [];
  selectedFab = [];
  selectedVibes = [];
  tunerSil = 'auto';
  tunerDes = 'all';
  document.querySelectorAll('.qoption-card').forEach(o => o.classList.remove('selected'));

  try {
    window.history.replaceState({}, '', window.location.pathname);
  } catch (e) {}

  const results = document.getElementById('qResults');
  results.style.transition = 'opacity .3s ease';
  results.style.opacity = '0';
  setTimeout(() => {
    results.classList.remove('visible');
    results.style.opacity = '';
    results.style.transition = '';
    document.body.classList.add('quiz-stage-active');
    document.getElementById('quizShell').style.display = '';
    document.getElementById('qNav').style.display = '';
    const progWrap = document.getElementById('qProgressWrap');
    if (progWrap) progWrap.style.display = '';

    slides.forEach(s => s.classList.remove('active'));
    document.querySelector('.qslide[data-q="-1"]').classList.add('active');
    updateProgress();
    updateNav();
    checkSavedQuizBanner();
    window.scrollTo({ top: 0 });
  }, 300);
}

function checkSavedQuizBanner() {
  const resumeBtn = document.getElementById('btnResumeSavedDna');
  const clearBtn = document.getElementById('btnClearSavedDna');
  try {
    const raw = localStorage.getItem('cloudnine_quiz_persona') || sessionStorage.getItem('cloudnine_quiz_persona');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.title) {
        if (resumeBtn) {
          resumeBtn.classList.add('visible');
          resumeBtn.innerHTML = `<span>✦ Resume Saved DNA: ${qEsc(parsed.title)}</span>`;
        }
        if (clearBtn) {
          clearBtn.classList.add('visible');
        }
        return;
      }
    }
  } catch (e) {}
  if (resumeBtn) resumeBtn.classList.remove('visible');
  if (clearBtn) clearBtn.classList.remove('visible');
}

// Deep-link check: if URL has ?persona=romantic, await catalogReadyPromise and hydrate preserved DNA
(function checkUrlParams() {
  checkSavedQuizBanner();
  const urlParams = new URLSearchParams(window.location.search);
  const personaParam = urlParams.get('persona');
  const silParam = urlParams.get('sil');
  const tlParam = urlParams.get('tl');
  if (personaParam && PERSONAS[personaParam]) {
    let preservedDna = null;
    try {
      const raw = sessionStorage.getItem('cloudnine_quiz_persona') || localStorage.getItem('cloudnine_quiz_persona');
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved && saved.key === personaParam) {
          if (Array.isArray(saved.dna)) preservedDna = saved.dna;
          if (Array.isArray(saved.stepSelections) && saved.stepSelections.length === TOTAL) {
            saved.stepSelections.forEach((s, i) => { stepSelections[i] = s; });
            syncFacetStateFromSelections();
          }
        }
      }
    } catch (e) {}

    if (!answers.some(Boolean)) {
      answers.fill(personaParam);
    }
    if (silParam) selectedSil = silParam;
    if (tlParam && TIMELINE_NOTES[tlParam]) selectedTimeline = tlParam;

    catalogReadyPromise.then(() => {
      showResults(preservedDna);
    });
  }
})();

/* ── INIT ── */
updateProgress();
updateNav();

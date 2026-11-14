// ════════════════════════════════════════════════════
//  PHASE 3: VIP EXPERIENCE & INTERACTIVE SUITE ENGINE
// ════════════════════════════════════════════════════

// 1. Filter Appointment Categories
function filterApptTypes(cat, btn) {
  var buttons = document.querySelectorAll('.appt-seg-btn');
  buttons.forEach(function(b) {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
  });
  if (btn) {
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
  }

  var cards = document.querySelectorAll('.appt-card');
  cards.forEach(function(card) {
    var cardCat = card.getAttribute('data-category');
    if (cat === 'all' || cardCat === cat) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// 2. Select Experience Tier & Scroll to Scheduler
function selectExperience(tierName, btn) {
  var cards = document.querySelectorAll('.appt-card');
  cards.forEach(function(c) { c.classList.remove('is-selected'); });
  
  var parentCard = btn.closest('.appt-card');
  if (parentCard) parentCard.classList.add('is-selected');

  var alertBox = document.getElementById('activeTierAlert');
  var nameEl = document.getElementById('selectedTierName');
  if (alertBox && nameEl) {
    nameEl.textContent = tierName;
    alertBox.style.display = 'flex';
  }

  var scheduler = document.getElementById('book-now');
  if (scheduler) {
    scheduler.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// 3. Quiz Persona Integration Handoff
(function checkQuizPersona() {
  var params = new URLSearchParams(window.location.search);
  var personaKey = params.get('persona') || sessionStorage.getItem('cloudnine_quiz_persona');
  var silKey = params.get('sil') || sessionStorage.getItem('cloudnine_quiz_silhouette');

  var banner = document.getElementById('quizPersonaBanner');
  var titleEl = document.getElementById('quizBannerTitle');
  var descEl = document.getElementById('quizBannerDesc');

  if (personaKey && banner && titleEl && descEl) {
    var personas = {
      'classic-romantic': { title: 'The Classic Romantic', sil: 'A-Line & Ballgown', vibe: 'Timeless elegance and regal lace' },
      'romantic-dreamer': { title: 'The Romantic Dreamer', sil: 'Floral A-Line & Soft Tulle', vibe: 'Whimsical textures and botanical accents' },
      'boho-spirit': { title: 'The Bohemian Spirit', sil: 'Relaxed Sheath & Flutter Sleeves', vibe: 'Effortless freedom and organic details' },
      'modern-minimalist': { title: 'The Modern Minimalist', sil: 'Clean Crepe & Architectural Mermaid', vibe: 'Sharp lines and striking simplicity' }
    };

    var p = personas[personaKey] || { title: 'Curated Bridal Persona', sil: silKey || 'Favorite Silhouettes', vibe: 'Tailored styling' };
    titleEl.textContent = 'Welcome, ' + p.title + ' Bride!';
    descEl.textContent = 'We noted your aesthetic: ' + p.vibe + ' (Favorite Silhouette: ' + (silKey || p.sil) + '). Your stylist and fitting area are ready!';
    banner.classList.add('is-visible');
  }
})();

function copyQuizNotesToClipboard() {
  var params = new URLSearchParams(window.location.search);
  var personaKey = params.get('persona') || sessionStorage.getItem('cloudnine_quiz_persona') || 'Bridal Persona';
  var silKey = params.get('sil') || sessionStorage.getItem('cloudnine_quiz_silhouette') || 'Custom Silhouette';
  
  var text = 'Cloud Nine Bridal Consultation Notes:\nPersona: ' + personaKey + '\nPreferred Silhouette: ' + silKey + '\nSaved via Style Quiz at cloudninepeoria.com';
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      alert('Quiz notes copied to clipboard! Paste this into the "Special Requests" box in BridalLive below.');
    });
  } else {
    prompt('Copy your appointment notes:', text);
  }
}

// 4. Interactive Checklist Persistence
function toggleChecklist(el, key) {
  el.classList.toggle('is-checked');
  try {
    var stored = JSON.parse(localStorage.getItem('cloudnine_prep_checklist') || '{}');
    stored[key] = el.classList.contains('is-checked');
    localStorage.setItem('cloudnine_prep_checklist', JSON.stringify(stored));
  } catch(e) {}
}

(function restoreChecklist() {
  try {
    var stored = JSON.parse(localStorage.getItem('cloudnine_prep_checklist') || '{}');
    var items = document.querySelectorAll('.checklist-item');
    items.forEach(function(item) {
      var key = item.getAttribute('onclick').match(/'([^']+)'/);
      if (key && key[1] && stored[key[1]]) {
        item.classList.add('is-checked');
      }
    });
  } catch(e) {}
})();

// 5. Entourage Size Advisor
function setEntourage(size, btn) {
  var buttons = document.querySelectorAll('.entourage-btn');
  buttons.forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');

  var feedback = document.getElementById('entourageFeedback');
  if (!feedback) return;

  if (size <= 2) {
    feedback.innerHTML = '<strong>Intimate &amp; Focused (1–2 Guests):</strong> Peaceful, private, and zero distraction. Ideal for the bride who knows her taste and wants an intimate moment with her closest confidante.';
  } else if (size <= 4) {
    feedback.innerHTML = '<strong>The Sweet Spot (3–4 Guests):</strong> Highly recommended! Gives you genuine support, laughs, and diverse perspectives without overwhelming conflicting opinions when saying yes.';
  } else if (size <= 6) {
    feedback.innerHTML = '<strong>Celebration Group (5–6 Guests):</strong> Festive and lively! Our boutique seating comfortably accommodates up to 6 guests. Consider our <em>Robes &amp; Rosé</em> package for celebratory toasts.';
  } else {
    feedback.innerHTML = '<strong>Party Policy (Over 6 Guests):</strong> For the best and most comfortable experience, we ask brides bring no more than 6 guests and leave children at home. Please call us directly at <strong>(309) 693‑3830</strong> if you have special questions.';
  }
}

// 6. Custom Wedding Timeline Calculator
function calculateTimeline() {
  var monthSelect = document.getElementById('weddingMonth');
  var yearSelect = document.getElementById('weddingYear');
  if (!monthSelect || !yearSelect) return;

  var month = parseInt(monthSelect.value, 10);
  var year = parseInt(yearSelect.value, 10);

  var weddingDate = new Date(year, month, 1);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Order: 6-9 months prior
  var orderStart = new Date(weddingDate);
  orderStart.setMonth(orderStart.getMonth() - 8);
  var orderEnd = new Date(weddingDate);
  orderEnd.setMonth(orderEnd.getMonth() - 6);

  // Alterations: 2-3 months prior
  var alterStart = new Date(weddingDate);
  alterStart.setMonth(alterStart.getMonth() - 3);
  var alterEnd = new Date(weddingDate);
  alterEnd.setMonth(alterEnd.getMonth() - 2);

  var orderEl = document.getElementById('timeOrderDate');
  var alterEl = document.getElementById('timeAlterDate');

  if (orderEl) orderEl.textContent = months[orderStart.getMonth()] + ' – ' + months[orderEnd.getMonth()] + ' ' + orderEnd.getFullYear();
  if (alterEl) alterEl.textContent = months[alterStart.getMonth()] + ' – ' + months[alterEnd.getMonth()] + ' ' + alterEnd.getFullYear();
}
calculateTimeline();

// 7. Smooth Scroll on Hash
(function() {
  function scrollToBook() {
    var hash = window.location.hash;
    if (hash === '#book-now' || hash === '#app') {
      var el = document.getElementById('book-now');
      if (el) setTimeout(function() { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 400);
    }
  }
  scrollToBook();
  window.addEventListener('hashchange', scrollToBook);
})();

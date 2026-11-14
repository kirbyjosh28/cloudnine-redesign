document.addEventListener('DOMContentLoaded', function() {
  // Count-up animation helper
  function countUp(el) {
    if (el._counted) return;
    el._counted = true;
    var target = parseInt(el.dataset.count, 10);
    var suffix = el.dataset.suffix || '';
    var t0 = performance.now(), dur = 1800;
    requestAnimationFrame(function tick(now) {
      var p = Math.min((now - t0) / dur, 1);
      var v = Math.round((1 - Math.pow(1 - p, 3)) * target);
      el.textContent = v >= 1000 ? v.toLocaleString() + suffix : v + suffix;
      if (p < 1) requestAnimationFrame(tick);
    });
  }

  // Editorial section entrance animations — desktop snap-scroll only
  var isMobileViewport = window.innerWidth <= 768;

  // Photo elements slide in from their sides
  var editPhotos = [
    { el: document.querySelector('.editorial-photo-main'),   tx: '-32px', ty: '0',   delay: 0 },
    { el: document.querySelector('.editorial-photo-accent'), tx: '32px',  ty: '0',   delay: 140 }
  ];
  // Text children stagger vertically - eyebrow -> h2 -> p1 -> p2 -> actions
  var editTextChildren = [];
  var editTextParent = document.querySelector('.editorial-text');
  if (editTextParent && !isMobileViewport) {
    var sel = '.eyebrow, h2, p, [style*="display:flex"], [style*="display: flex"]';
    editTextParent.querySelectorAll(sel).forEach(function(child, ci) {
      editTextChildren.push({ el: child, delay: 120 + ci * 110 });
    });
  }

  if (!isMobileViewport) {
    editPhotos.forEach(function(item) {
      if (!item.el) return;
      item.el.style.opacity   = '0';
      item.el.style.transform = 'translate(' + item.tx + ',' + item.ty + ')';
      item.el.style.transition = 'opacity 1s cubic-bezier(.16,1,.3,1) ' + item.delay + 'ms,' +
                                 'transform 1s cubic-bezier(.16,1,.3,1) ' + item.delay + 'ms';
    });
    editTextChildren.forEach(function(item) {
      if (!item.el) return;
      item.el.style.opacity   = '0';
      item.el.style.transform = 'translateY(22px)';
      item.el.style.transition = 'opacity .8s cubic-bezier(.16,1,.3,1) ' + item.delay + 'ms,' +
                                 'transform .8s cubic-bezier(.16,1,.3,1) ' + item.delay + 'ms';
    });
  }

  var editEls = editPhotos.map(function(i) { return i.el; });

  // Progress dots — attach click handlers
  var snapDots = document.querySelectorAll('.snap-dot[data-snap]');
  var snapInstance = null;

  function updateDots(idx) {
    snapDots.forEach(function(d) {
      d.classList.toggle('active', +d.dataset.snap === idx);
      d.style.background = '';
    });
    var lightSections = [1, 2, 4]; // editorial (1) + journey (2) + designers (4) are light; all others are dark
    var dotsEl = document.getElementById('snapProgress');
    if (dotsEl) {
      dotsEl.classList.toggle('is-light-section', lightSections.includes(idx));
    }
  }

  snapInstance = initSnapScroll(
    '.hero-cinematic, .editorial-section, .journey-section, .brides-marquee, .designers-section, .cta-section',
    {
      onEnter: function(idx, section) {
        // Count-up numbers
        section.querySelectorAll('[data-count]').forEach(countUp);
        // Editorial reveal on section 1 — photos slide, text children stagger
        if (idx === 1) {
          editEls.forEach(function(el) {
            if (!el) return;
            el.style.opacity   = '1';
            el.style.transform = 'translate(0,0)';
          });
          editTextChildren.forEach(function(item) {
            if (!item.el) return;
            item.el.style.opacity   = '1';
            item.el.style.transform = 'translateY(0)';
          });
        }
        updateDots(idx);
      }
    }
  );

  // Wire dot clicks to navigate snap scroll
  snapDots.forEach(function(dot) {
    dot.addEventListener('click', function() {
      var target = +dot.dataset.snap;
      // Dispatch a custom event the snap engine can listen to, or use keyboard simulation
      // We expose a goTo via the snap engine's returned object if available,
      // otherwise simulate wheel events to advance
      if (snapInstance && typeof snapInstance.goTo === 'function') {
        snapInstance.goTo(target);
      }
    });
  });
});

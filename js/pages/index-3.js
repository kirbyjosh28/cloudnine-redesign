// Horizontal Journey Carousel Progress Tracker (Mobile)
(function() {
  var jGrid = document.querySelector('.journey-grid');
  var jDots = document.querySelectorAll('.j-dot');
  if (!jGrid || !jDots.length) return;
  jGrid.addEventListener('scroll', function() {
    var cardWidth = jGrid.children[0] ? jGrid.children[0].offsetWidth : 300;
    var idx = Math.min(3, Math.max(0, Math.round(jGrid.scrollLeft / (cardWidth + 16))));
    jDots.forEach(function(dot, i) { dot.classList.toggle('active', i === idx); });
  }, { passive: true });
})();

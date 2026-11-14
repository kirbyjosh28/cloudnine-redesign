window.addEventListener('load', function() {
  setTimeout(function() {
    var v = document.getElementById('hocoHeroVideo');
    if (!v || (navigator.connection && navigator.connection.saveData)) return;
    var s = v.querySelector('source[data-src]');
    if (s) {
      s.src = s.getAttribute('data-src');
      v.load();
      v.play().catch(function(){});
    }
  }, 2500);
}, { once: true });

(function () {
  var loader = document.getElementById('site-loader');
  if (!loader) return;

  // Fast path: if visited previously in this session or noloader=1, skip loader completely
  if (sessionStorage.getItem('cloudnine_loader_seen') || location.search.indexOf('noloader=1') !== -1) {
    loader.style.display = 'none';
    return;
  }
  sessionStorage.setItem('cloudnine_loader_seen', '1');

  function dismiss() {
    loader.classList.add('hidden');
    setTimeout(function () { loader.style.display = 'none'; }, 450);
  }

  // Dismiss on DOMContentLoaded or max 200ms, never delay on full window.load
  if (document.readyState !== 'loading') {
    setTimeout(dismiss, 100);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(dismiss, 100);
    });
  }
  setTimeout(dismiss, 500);
})();

// Marquee Performance Optimizer: Pause animation when offscreen to preserve mobile GPU & battery
(function() {
  var mqSection = document.getElementById('our-brides');
  var tracks = document.querySelectorAll('.marquee-track');
  if (!mqSection || !tracks.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      tracks.forEach(function(track) {
        track.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
    });
  }, { threshold: 0.05 });

  observer.observe(mqSection);
})();

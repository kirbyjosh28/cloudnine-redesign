(function() {
  var btn    = document.getElementById('bridalVideoBtn');
  var wrap   = document.getElementById('bridalVideoWrap');
  var iframe = wrap ? wrap.querySelector('iframe') : null;
  var playing = true;
  var unmasked = false;

  function postYT(cmd) {
    if (iframe && iframe.contentWindow)
      iframe.contentWindow.postMessage(JSON.stringify({event:'command', func:cmd}), '*');
  }

  function unmask() {
    if (unmasked) return;
    unmasked = true;
    if (wrap) wrap.classList.add('unmasked');
    if (btn)  btn.classList.add('visible', 'playing');
  }

  window.addEventListener('message', function(e) {
    if (e.origin !== 'https://www.youtube.com') return;
    try {
      var data = JSON.parse(e.data);
      if (data.event === 'onStateChange') {
        if (data.info === 1) {
          playing = true;
          if (btn) btn.classList.add('playing');
          setTimeout(unmask, 1500);
        } else if (data.info === 2) {
          playing = false;
          if (btn) btn.classList.remove('playing');
        }
      }
    } catch(err) {}
  });

  // Defer YouTube iframe load on desktop until after initial page & catalog load
  if (iframe && iframe.dataset.src && window.innerWidth > 768 && !(navigator.connection && navigator.connection.saveData)) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        iframe.src = iframe.dataset.src;
        setTimeout(unmask, 6000);
      }, 4500);
    }, { once: true });
  }

  // Toggle play/pause
  if (btn) {
    btn.addEventListener('click', function() {
      playing ? postYT('pauseVideo') : postYT('playVideo');
      playing = !playing;
      btn.classList.toggle('playing', playing);
    });
  }
})();

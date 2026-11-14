function setSquad(size, btn) {
  var buttons = document.querySelectorAll('.squad-size-btn');
  buttons.forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');

  var feedback = document.getElementById('squadFeedback');
  if (!feedback) return;

  if (size <= 2) {
    feedback.innerHTML = '<strong>Dynamic Duo (2 Girls):</strong> Ideal for two friends shopping together. Fill out your short check-in form when you arrive and compare looks side by side.';
  } else if (size <= 4) {
    feedback.innerHTML = '<strong>Prom Party (3–4 Girls):</strong> Our most popular group size. Sign in together at the front desk for side-by-side fitting rooms and mirrors.';
  } else {
    feedback.innerHTML = '<strong>Full Prom Squad (5–6 Girls):</strong> Walk in together during store hours at 4701 N. University St and our team will coordinate fitting rooms for your group.';
  }
}
window.addEventListener('load', function() {
  setTimeout(function() {
    var v = document.getElementById('promHeroVideo');
    if (!v || (navigator.connection && navigator.connection.saveData)) return;
    var s = v.querySelector('source[data-src]');
    if (s) {
      s.src = s.getAttribute('data-src');
      v.load();
      v.play().catch(function(){});
    }
  }, 2500);
}, { once: true });

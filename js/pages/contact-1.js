// ── TODAY'S HOURS HIGHLIGHT ──
(function() {
  var day = new Date().getDay(); // 0=Sun, 1=Mon … 6=Sat
  var bridalHours = {
    0: 'By Appointment Only', 1: '10am – 5pm', 2: '11am – 7pm',
    3: 'Closed', 4: '11am – 7pm', 5: '10am – 5pm', 6: '9am – 5pm'
  };
  var dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var txt = document.getElementById('todayHoursText');
  if (txt) {
    var h = bridalHours[day];
    txt.textContent = 'Today (' + dayNames[day] + '): ' + h;
    if (h === 'Closed') {
      var dot = document.querySelector('.hours-today-dot');
      if (dot) { dot.style.background = '#c96070'; dot.style.animation = 'none'; }
    }
  }
  var table = document.getElementById('bridalHoursTable');
  if (table) {
    table.querySelectorAll('tr[data-days]').forEach(function(row) {
      var days = row.dataset.days.split(',').map(Number);
      if (days.includes(day)) row.classList.add('today');
    });
  }
})();

// ── SMOOTH SCROLL TO REQUEST FORM ──
document.querySelectorAll('a[href="#request-form"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.getElementById('request-form');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

async function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const endpoint = (window.SITE_CONFIG && window.SITE_CONFIG.contactFormEndpoint) || '';
  const ok = await window.submitSiteForm(form, endpoint);
  if (!ok) return;
  document.getElementById('contactForm').style.display = 'none';
  const fsEl = document.getElementById('formSuccess');
  if (fsEl) {
    fsEl.style.display = 'block';
    const titleEl = document.getElementById('formSuccessTitle');
    if (titleEl && typeof titleEl.focus === 'function') titleEl.focus();
  }
}

async function submitContact(e) {
  e.preventDefault();
  const form = e.target;
  const endpoint = (window.SITE_CONFIG && window.SITE_CONFIG.contactFormEndpoint) || '';
  const ok = await window.submitSiteForm(form, endpoint);
  if (!ok) return;
  form.reset();
  const cs = document.getElementById('contactSuccess');
  if (cs) {
    cs.style.display = 'block';
    if (typeof cs.focus === 'function') cs.focus();
  }
}

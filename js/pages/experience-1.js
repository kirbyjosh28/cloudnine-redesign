function toggleExpFaq(btn) {
  const item = btn.closest('.exp-faq-item');
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !isExpanded);
  item.classList.toggle('active', !isExpanded);
}

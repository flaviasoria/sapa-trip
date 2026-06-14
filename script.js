// Menu mobile: abre/fecha a lista de links no hambúrguer
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // Fecha o menu ao clicar em um link
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') links.classList.remove('open');
  });
})();

// Carrossel da galeria: setas deslizam uma "tela" de fotos
(function () {
  var track = document.getElementById('galleryTrack');
  if (!track) return;
  var prev = document.getElementById('galPrev');
  var next = document.getElementById('galNext');

  function step() {
    var item = track.querySelector('.gallery-item');
    var gap = 16;
    return item ? item.getBoundingClientRect().width + gap : track.clientWidth;
  }

  if (prev) prev.addEventListener('click', function () {
    track.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  if (next) next.addEventListener('click', function () {
    track.scrollBy({ left: step(), behavior: 'smooth' });
  });
})();

// Lightbox: clicar numa foto da grade abre em tela cheia, com navegação
(function () {
  var cells = Array.prototype.slice.call(document.querySelectorAll('.gallery-cell'));
  var box = document.getElementById('lightbox');
  if (!cells.length || !box) return;
  var img = box.querySelector('img');
  var sources = cells.map(function (c) { return c.getAttribute('data-full') || c.querySelector('img').src; });
  var i = 0;

  function show(n) {
    i = (n + sources.length) % sources.length;
    img.src = sources[i];
  }
  function open(n) { show(n); box.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { box.classList.remove('open'); document.body.style.overflow = ''; }

  cells.forEach(function (c, n) {
    c.addEventListener('click', function () { open(n); });
  });

  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function (e) { e.stopPropagation(); show(i - 1); });
  box.querySelector('.lb-next').addEventListener('click', function (e) { e.stopPropagation(); show(i + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(i - 1);
    if (e.key === 'ArrowRight') show(i + 1);
  });
})();

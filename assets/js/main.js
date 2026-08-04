/* ============================================================
   INTERACTIONS
   1) Theme switcher (remembers your last choice)
   2) A tiny confetti puff when the name is tapped
   Both respect reduced-motion preferences.
   ============================================================ */

(function () {
  var root = document.documentElement;
  var btns = document.querySelectorAll('.themes button');

  try {
    var saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  } catch (e) {}

  function setTheme(name) {
    root.setAttribute('data-theme', name);
    btns.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.set === name));
    });
    try { localStorage.setItem('theme', name); } catch (e) {}
  }

  btns.forEach(function (b) {
    b.addEventListener('click', function () { setTheme(b.dataset.set); });
  });

  var colors = ['#A08968', '#86977E', '#8291A0', '#C7B299', '#9FB196'];
  var brand = document.getElementById('brand');
  if (brand) {
    brand.addEventListener('click', function (e) {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      for (var i = 0; i < 14; i++) {
        var d = document.createElement('div');
        d.className = 'confetti';
        d.style.left = e.clientX + 'px';
        d.style.top = e.clientY + 'px';
        d.style.background = colors[i % colors.length];
        document.body.appendChild(d);
        var ang = Math.random() * Math.PI * 2;
        var dist = 40 + Math.random() * 70;
        d.animate([
          { transform: 'translate(0,0) scale(1)', opacity: 1 },
          { transform: 'translate(' + Math.cos(ang) * dist + 'px,' + (Math.sin(ang) * dist + 60) + 'px) scale(0)', opacity: 0 }
        ], { duration: 850 + Math.random() * 350, easing: 'cubic-bezier(.2,.6,.3,1)' });
        (function (el) { setTimeout(function () { el.remove(); }, 1200); })(d);
      }
    });
  }
})();

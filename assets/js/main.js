/* ============================================================
   INTERACTIONS
   A tiny confetti puff when the name is tapped.
   Respects reduced-motion preferences.
   ============================================================ */

(function () {
  var colors = ['#86977E', '#A08968', '#8291A0', '#C7B299', '#9FB196'];
  var brand = document.getElementById('brand');
  if (!brand) return;

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
})();

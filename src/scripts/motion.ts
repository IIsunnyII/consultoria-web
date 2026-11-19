// =========================================================
// Movimiento global (JS vanilla, solo transform/opacity):
//  - [data-reveal]  → aparece subiendo 28px al entrar en pantalla
//  - [data-lines]   → cada .line del titular sube desde su máscara, escalonado
//  - cursor-glow    → círculo que sigue al puntero con retraso y crece sobre enlaces
// Si el usuario pide reducir movimiento, no se aplica nada (la clase .motion no existe).
// =========================================================

const root = document.documentElement;
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveals() {
  if (!root.classList.contains('motion')) return;
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in), [data-lines]:not(.is-in)');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }),
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );
  targets.forEach((el) => io.observe(el));
}

function initCursorGlow() {
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!fine || reduced() || document.querySelector('.cursor-glow')) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.append(glow);

  let tx = -100, ty = -100, x = -100, y = -100, s = 1, ts = 1, o = 0, to = 0;
  let raf = 0, idle = 0;

  const loop = () => {
    x += (tx - x) * 0.18;
    y += (ty - y) * 0.18;
    s += (ts - s) * 0.15;
    o += (to - o) * 0.12;
    glow.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${s.toFixed(3)})`;
    glow.style.opacity = o.toFixed(3);
    const moving = Math.abs(tx - x) + Math.abs(ty - y) > 0.2 || Math.abs(ts - s) > 0.005 || Math.abs(to - o) > 0.005;
    raf = moving ? requestAnimationFrame(loop) : 0;
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (o < 0.01) { x = tx; y = ty; } // aparece donde está el puntero
    const interactive = (e.target as Element).closest('a, button, [data-spotlight]');
    ts = interactive ? 1.6 : 1;
    to = 1;
    clearTimeout(idle);
    idle = window.setTimeout(() => { to = 0.25; kick(); }, 900);
    kick();
  }, { passive: true });
  document.addEventListener('pointerleave', () => { to = 0; kick(); });
}

function init() {
  if (!reduced()) root.classList.add('motion');
  initReveals();
  initCursorGlow();
}

init();
document.addEventListener('astro:page-load', init);

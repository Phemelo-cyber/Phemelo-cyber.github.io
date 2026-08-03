/* ==========================================================================
   Phemelo-cyber — Portfolio script.js
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Terminal typing effect (hero eyebrow) ---------- */
  const typeTarget = document.getElementById('typeTarget');
  if (typeTarget) {
    const phrases = ['systems programmer', 'web designer', 'AI model builder', 'UML architect'];
    let phraseIndex = 0, charIndex = 0, deleting = false;

    function tick() {
      const current = phrases[phraseIndex];
      typeTarget.textContent = deleting
        ? current.slice(0, charIndex--)
        : current.slice(0, charIndex++);

      let delay = deleting ? 40 : 70;

      if (!deleting && charIndex === current.length + 1) {
        delay = 1400;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = 300;
      }
      setTimeout(tick, delay);
    }
    tick();
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Skill meter fill (animates once visible) ---------- */
  const meters = document.querySelectorAll('.meter-fill');
  if ('IntersectionObserver' in window && meters.length) {
    const meterIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.level + '%';
          meterIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    meters.forEach(m => meterIo.observe(m));
  } else {
    meters.forEach(m => m.style.width = m.dataset.level + '%');
  }

  /* ---------- Decorative GitHub-style contribution graph ---------- */
  const contribGrid = document.getElementById('contribGrid');
  if (contribGrid) {
    const weeks = 30;
    let html = '';
    for (let i = 0; i < weeks * 7; i++) {
      // Pseudo-random but deterministic intensity for a consistent look on reload
      const seed = Math.sin(i * 12.9898) * 43758.5453;
      const rand = seed - Math.floor(seed);
      const level = rand > 0.85 ? 4 : rand > 0.7 ? 3 : rand > 0.5 ? 2 : rand > 0.3 ? 1 : 0;
      const colors = ['var(--surface-2)', 'rgba(240,183,47,0.25)', 'rgba(240,183,47,0.5)', 'rgba(240,183,47,0.75)', 'var(--accent)'];
      html += `<span class="contrib-cell" style="background:${colors[level]}"></span>`;
    }
    contribGrid.innerHTML = html;
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Mobile nav (simple show/hide, if hamburger added later) ---------- */
  // Reserved for future expansion — nav currently collapses via CSS media query.
});

(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Footer year */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Scroll progress bar */
  const progress = document.getElementById('scrollProgress');
  const updateProgress = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const height = h.scrollHeight - h.clientHeight;
    const pct = height > 0 ? (scrolled / height) * 100 : 0;
    if (progress) progress.style.width = pct + '%';
  };

  /* Nav scroll state */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
    updateProgress();
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Mobile nav toggle */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* Active nav indicator (scroll spy) */
  const navAnchors = Array.from(document.querySelectorAll('[data-nav]'));
  const sections = navAnchors.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (sections.length) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          navAnchors.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach((s) => spyObserver.observe(s));
  }

  /* Scroll reveal */
  const revealEls = document.querySelectorAll('.reveal');
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 60}ms`;
      revealObserver.observe(el);
    });
  }

  /* Number counters */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    if (prefersReducedMotion) { el.textContent = target + suffix; return; }
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => counterObserver.observe(el));
  }

  /* Custom cursor */
  const cursor = document.getElementById('cursor');
  const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if (cursor && !isCoarsePointer) {
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
    const loop = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      cursor.style.transform = `translate(${curX}px, ${curY}px)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    const cursorLabel = cursor.querySelector('.cursor-label');
    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-active');
        cursorLabel.textContent = el.getAttribute('data-cursor') || '';
      });
      el.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
    });
  }

  /* Hero terminal — typed code fragments */
  const terminalEl = document.getElementById('terminalCode');
  const snippets = [
    `Route::get('/dashboard', [DashboardController::class, 'index']);`,
    `class ClientSite extends Model {\n    protected $fillable = ['name', 'domain'];\n}`,
    `@foreach ($publications as $post)\n    <x-publication-card :post="$post" />\n@endforeach`,
    `php artisan migrate --force\n> Migrating: create_clients_table\n> Migrated:  create_clients_table`,
  ];
  if (terminalEl) {
    if (prefersReducedMotion) {
      terminalEl.textContent = snippets[0];
    } else {
      let snippetIndex = 0, charIndex = 0, deleting = false;
      const type = () => {
        const current = snippets[snippetIndex];
        if (!deleting) {
          charIndex++;
          terminalEl.textContent = current.slice(0, charIndex);
          if (charIndex >= current.length) { setTimeout(() => { deleting = true; type(); }, 1800); return; }
          setTimeout(type, 26);
        } else {
          charIndex--;
          terminalEl.textContent = current.slice(0, charIndex);
          if (charIndex <= 0) { deleting = false; snippetIndex = (snippetIndex + 1) % snippets.length; setTimeout(type, 400); return; }
          setTimeout(type, 10);
        }
      };
      type();
    }
  }

  /* Smooth scroll fallback */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
})();

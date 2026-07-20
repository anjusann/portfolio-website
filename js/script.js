// FOOTER YEAR
try {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
} catch (e) { console.error(e); }

// THEME TOGGLE (dark editor theme is default; light is the alternate)
try {
  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    if (prefersLight) {
      document.body.classList.add("light");
      toggle.textContent = "☀️";
    }
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
    });
  }
} catch (e) { console.error(e); }

// ACTIVE TAB HIGHLIGHT (mirrors the section currently in view)
try {
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const sections = tabs
    .map(tab => document.getElementById(tab.dataset.section))
    .filter(Boolean);

  if (tabs.length && sections.length && "IntersectionObserver" in window) {
    const setActive = id => {
      tabs.forEach(tab => {
        const isActive = tab.dataset.section === id;
        tab.classList.toggle("active", isActive);
        if (isActive) {
          const dotColor = getComputedStyle(tab.querySelector(".tab-dot")).getPropertyValue("--dot");
          tab.style.setProperty("--dot", dotColor);
        }
      });
    };

    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

    sections.forEach(sec => sectionObserver.observe(sec));
  }
} catch (e) { console.error(e); }

// SCROLL REVEAL (progressive enhancement -- content is visible by default in CSS;
// this only adds the fade/slide-in effect on top of that).
try {
  if ("IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".animate");
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.12 });

    targets.forEach(el => {
      el.classList.add("will-animate");
      revealObserver.observe(el);
    });
  }
} catch (e) { console.error(e); }

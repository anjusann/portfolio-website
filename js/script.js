// FOOTER YEAR
try {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
} catch (e) { console.error(e); }

// MOBILE NAV TOGGLE
try {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navList.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
} catch (e) { console.error(e); }

// SCROLL REVEAL (progressive enhancement -- content is visible by default in CSS;
// this only adds the fade/slide-in effect on top of that).
try {
  if ("IntersectionObserver" in window) {
    const targets = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.12 });

    targets.forEach(el => {
      el.classList.add("will-animate");
      observer.observe(el);
    });
  }
} catch (e) { console.error(e); }

// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// DARK MODE
const toggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDark) {
  document.body.classList.add("dark");
  toggle.textContent = "☀️";
}
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// MOBILE NAV TOGGLE
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Close mobile nav after choosing a link
navList.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

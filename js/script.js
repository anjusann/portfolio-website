// DARK MODE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// RESUME MODAL
const modal = document.getElementById("resumeModal");
const navbar = document.querySelector(".navbar");

document.getElementById("openResume").onclick = () => {
  modal.style.display = "block";
  navbar.style.display = "none";
  document.body.style.overflow = "hidden";
};

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
  navbar.style.display = "block";
  document.body.style.overflow = "auto";
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    navbar.style.display = "block";
    document.body.style.overflow = "auto";
  }
};

// ESC KEY CLOSE
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    navbar.style.display = "block";
    document.body.style.overflow = "auto";
  }
});

// SCROLL REVEAL
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

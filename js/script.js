// DARK MODE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// RESUME MODAL
const modal = document.getElementById("resumeModal");
document.getElementById("openResume").onclick = () => modal.style.display = "block";
document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
});
document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// ACTIVE NAV
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        if (pageYOffset >= sec.offsetTop - 120) {
            current = sec.id;
        }
    });
    links.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
});

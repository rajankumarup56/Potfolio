/* =========================
   SMOOTH SCROLL (INTERNAL LINKS)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* =========================
   MOBILE NAV TOGGLE (OPTIONAL)
========================= */
// Only works if you later add a menu button
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav ul");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


/* =========================
   SAFE CONSOLE MESSAGE
========================= */
console.log("Portfolio loaded successfully");

// DARK / LIGHT MODE
function toggleMode() {
  document.body.classList.toggle("light");
}

// SKILL BAR ANIMATION
const bars = document.querySelectorAll(".bar div");

window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (barTop < screenHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});
// DARK / LIGHT TOGGLE
function toggleMode() {
  document.body.classList.toggle("light");
}

// SKILL BAR ANIMATION
window.addEventListener("scroll", () => {
  document.querySelectorAll(".bar div").forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

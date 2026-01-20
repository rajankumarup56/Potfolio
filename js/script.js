function toggleMode() {
  document.body.classList.toggle("light");
}

// Skill bar animation
const bars = document.querySelectorAll(".bar div");
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  // Animate skill bars
  bars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < triggerBottom) bar.style.width = bar.dataset.width;
  });

  // Fade-in project cards
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < triggerBottom) card.classList.add("visible");
  });
});

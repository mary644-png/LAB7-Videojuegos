document.addEventListener("DOMContentLoaded", () => {
const body = document.body;

  // Only run on the contact page.
if (!body.classList.contains("contact-page")) {
    return;
}

const cards = document.querySelectorAll(".card");
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 120}ms`;
});
});

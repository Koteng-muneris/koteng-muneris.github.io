const filterLinks = document.querySelectorAll(".navbar nav a[data-filter]");
const cards = document.querySelectorAll(".card");

filterLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    filterLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;

    cards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".card");

filters.forEach(filter => {
  filter.addEventListener("click", e => {
    e.preventDefault();

    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

    const category = filter.dataset.filter;

    cards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

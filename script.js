const links = document.querySelectorAll("nav a");
const posts = document.querySelectorAll(".post-card");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    const filter = link.dataset.filter;

    posts.forEach(post => {
      if (filter === "all" || post.dataset.category === filter) {
        post.style.display = "flex";
      } else {
        post.style.display = "none";
      }
    });
  });
});

console.log("dark mode");

const toggleBtn = document.querySelector(".btn");
const articles = [...document.querySelectorAll(".post")];
toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

articles.forEach((article) => {
  console.log(article);
});

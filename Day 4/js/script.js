const searchBar = document.querySelector("input");
const searchBtn = document.querySelector("button");
const searchContainer = document.querySelector(".search-bar");

const openBar = () => {
  searchContainer.classList.toggle("active");
  searchBtn.style.right = "0%";
  searchBar.focus();
};
searchBtn.addEventListener("click", openBar);

const imgContainer = document.querySelectorAll(".img-container");

imgContainer.forEach((imgContainer) => {
  imgContainer.addEventListener("click", () => {
    removeActiveClasses();
    imgContainer.classList.add("selected");
  });
});

function removeActiveClasses() {
  imgContainer.forEach((imgContainer) => {
    imgContainer.classList.remove("selected");
  });
}

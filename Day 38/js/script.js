const buttons = document.querySelectorAll(".menu-item");
// const menuItems = document.querySelectorAll(".menu-item");
const images = document.querySelectorAll("img");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // program(e);

    if (button.id === "home" && button.classList.contains("active") == false) {
      images[0].classList.add("show");
      button.classList.add("active");
      // Removes
      buttons[1].classList.remove("active");
      buttons[2].classList.remove("active");
      buttons[3].classList.remove("active");
      images[1].classList.remove("show");
      images[2].classList.remove("show");
      images[3].classList.remove("show");
    }

    //

    if (button.id === "work" && button.classList.contains("active") == false) {
      images[1].classList.add("show");
      button.classList.add("active");
      // Removes
      buttons[0].classList.remove("active");
      buttons[2].classList.remove("active");
      buttons[3].classList.remove("active");
      images[0].classList.remove("show");
      images[2].classList.remove("show");
      images[3].classList.remove("show");
    }

    //
    if (button.id === "blog" && button.classList.contains("active") == false) {
      images[2].classList.add("show");
      button.classList.add("active");
      // Removes
      buttons[0].classList.remove("active");
      buttons[1].classList.remove("active");
      buttons[3].classList.remove("active");
      images[0].classList.remove("show");
      images[1].classList.remove("show");
      images[3].classList.remove("show");
    }

    //
    if (
      button.id === "about-us" &&
      button.classList.contains("active") == false
    ) {
      images[3].classList.add("show");
      button.classList.add("active");
      // Removes
      buttons[0].classList.remove("active");
      buttons[1].classList.remove("active");
      buttons[2].classList.remove("active");
      images[0].classList.remove("show");
      images[1].classList.remove("show");
      images[2].classList.remove("show");
    }
  });
});

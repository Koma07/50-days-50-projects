const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const box = document.getElementById("wrapper");
const navMenu = document.querySelector("nav");

const openBox = () => {
  openBtn.style.rotate = "-90deg";
  box.style.rotate = "-20deg";
  navMenu.style.left = "0px";
  closeBtn.style.rotate = "-90deg";
};

const closeBox = () => {
  openBtn.style.rotate = "0deg";
  closeBtn.style.rotate = "0deg";
  box.style.rotate = "0deg";
  navMenu.style.left = "-150px";
};

openBtn.addEventListener("click", openBox);
closeBtn.addEventListener("click", closeBox);

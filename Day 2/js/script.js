const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const circles = document.querySelectorAll(".circle");
let idx = 1;

active = () => {
  circles.forEach(() => {
    circles[idx].classList.add("active");
  });
  idx++;
};
update = () => {
  if (idx >= 4) {
    nextBtn.style.display = "none";
  }
};

removeActive = () => {
  circles.classList.remove("active");
};

nextBtn.onclick = active;
prevBtn.onclick = removeActive;

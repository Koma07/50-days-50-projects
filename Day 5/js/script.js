const percentage = document.querySelector("span");
const imgContainer = document.querySelector("div");
let load = 1;
let blur = 100;

function time() {
  if (load <= 99) {
    load++;
    blur--;
    percentage.innerHTML = `${load}%`;
    imgContainer.style.filter = `blur(${blur}px)`;
    console.log(time);
    if (load == 100) {
      percentage.style.opacity = "0%";
      clearInterval();
    }
  }
}
setInterval(time, 30);

clearInterval(time);

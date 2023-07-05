const imgContainer = document.querySelector(".img-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const images = document.querySelectorAll("img");

let idx = 0;
// This is the main interval function where the slide is gonna be excuted.
let interval = setInterval(run, 2000);

// this is is a function where the slide animation and the increment of the index are being called.
function run() {
  idx++;
  slide();
}

function slide() {
  // This function works with the index value to make the slide animation.
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }
  imgContainer.style.transform = `translateX(${-idx * 500}px)`; // Here lies all the logic of the slide. Every time the index increments its multiply by 500 wich slides the exact amount of size to each image, until 1500px wich is the last image.
  console.log(idx * 500);
}

function resetTimer() {
  // This function clears the interval (resets the time) of the call to the function.
  clearInterval(interval);
  // But inmediatly calls is again.
  interval = setInterval(run, 2000);
}

// Event listener to substract value to the index and restart the interval. And make the animation.
prevBtn.addEventListener("click", () => {
  idx--;
  slide();
  resetTimer();
});

// Event listener to add value to the index and restart the interval. And make the animation.
nextBtn.addEventListener("click", () => {
  idx++;
  slide();
  resetTimer();
});

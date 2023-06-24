// Selection of the elements to work with.
const imgContainer = document.querySelector(".img-container");
const heart = document.querySelector("i");
const likeTimes = document.querySelector(".like-times");

// Initial value of the time liked the photo.
let heartCount = 1;

// Event listener to check a double click and make appear the heart.
imgContainer.addEventListener("dblclick", () => {
  likeTimes.innerHTML = heartCount++;
  heart.classList.add("fa-heart");
  trackDoubleClick;
  setTimeout(() => {
    heart.classList.remove("fa-heart");
  }, 500);
});

// Function to get the position of a element or event, in this case the double click, in relation to the viewport. To make appear the heart on the position of the click.
function trackDoubleClick(event) {
  // Get the coordinates relative to the div
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  // Applies the coordinates to the style of the heart. Substracting 30px to the coordinates for more precision.
  heart.style.left = `${x - 30}px`;
  heart.style.top = `${y - 30}px`;
}
// Event listener to do the track of the click and make appear the heart on the position of the double click.
imgContainer.addEventListener("dblclick", trackDoubleClick);

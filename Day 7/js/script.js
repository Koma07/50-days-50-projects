const boxLeft = document.querySelector(".left");
const boxRight = document.querySelector(".right");
const wrapper = document.querySelector("#wrapper");

// Event listeners to see if the mouse is over on of the 2 boxes, and depending which one is the mouse over the other is gonna shrink.

// Using again classlist to add or remove classes on the elements.

// If the mouse is over the box on the left this one is going to increase its size.
boxLeft.addEventListener("mouseenter", () => {
  wrapper.classList.add("left-show");
  wrapper.classList.add("right-hide");
});

// If the mouse left the box on the left this one is going to decrease its size.
boxLeft.addEventListener("mouseleave", () => {
  wrapper.classList.remove("left-show");
  wrapper.classList.remove("right-hide");
});

// If the mouse is over the box on the right this one is going to increase its size.
boxRight.addEventListener("mouseenter", () => {
  wrapper.classList.add("right-show");
  wrapper.classList.add("left-hide");
});

// If the mouse left the box on the right this one is going to decrease its size.
boxRight.addEventListener("mouseleave", () => {
  wrapper.classList.remove("right-show");
  wrapper.classList.remove("left-hide");
});

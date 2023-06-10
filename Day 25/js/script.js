// Selection of the elements to work with.
const header = document.querySelector("header");
const content = document.getElementById("content");

// Event listener added to the window object.
window.addEventListener("scroll", () => {
  // Everytime there's a scroll a condition is gonna be checked.
  // Why 591? Is because that is the specific height where the paragraph is located, and where the header needs to be changed to avoid readable problems.
  if (window.scrollY > 591) {
    // If the scrollY that is a number where is saved the scroll made it on the page, is greater than 591, add a class to an html element.
    header.classList.add("header-light");
  } else {
    // If the scrollY is not greater than 591, remove a class to an html element.
    header.classList.remove("header-light");
  }
});

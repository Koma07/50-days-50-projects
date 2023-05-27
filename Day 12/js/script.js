const expandButtons = document.querySelectorAll("#expand");
const closeButtons = document.querySelectorAll("#close");
const boxes = document.querySelectorAll(".box");

// This is the logic behid this code.

// Loop through all the buttons with the ID of expand.

// Adds an event listener for a click to all the buttons.

// Whenever you click a button, a class with the name of active is gonna be added on and off with the method toggle.

// That class is added to the parent container of the parent container (box) in this case.

expandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.parentNode.classList.toggle("active");
  });
});

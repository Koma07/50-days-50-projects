// Created Array with the multiples color to use.
// In this case I wrote the names of the color, but I've used HEX codes or RGB numbers.
const colors = [
  "blue",
  "yellow",
  "red",
  "green",
  "orange",
  "violet",
  "crimson",
  "aqua",
];
// Selected all the HTML elements with the class box.
const boxes = document.querySelectorAll(".box");

// Loop through all the boxes to add an event listener.
boxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    let randomPick = Math.floor(Math.random() * colors.length); // Created a random number every time the mouse is over a box.
    box.style.backgroundColor = `${colors[randomPick]}`; // Change the background-color property using the array of colors, and selecting a random color with the random number created.
    box.style.boxShadow = `1px 1px 41px 10px ${colors[randomPick]}`; // Change the box-shadow property using the array of colors, and selecting a random color for the shadow with the random number created.

    //Set Interval to restore the changes of the boxes to normal after 1s.
    setInterval(() => {
      box.style.backgroundColor = "#141414";
      box.style.boxShadow = "1px 1px 1px 0px #868686";
    }, 1000);
  });
});

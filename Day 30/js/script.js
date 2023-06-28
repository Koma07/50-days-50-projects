const automaticText = document.querySelector(".automatic-text");
const speedInput = document.querySelector("#speed");
const text = "We Love Programming!";
let index = 0;

writeText(); // Calls function for the first time.

function writeText() {
  let speed = parseInt(100 / speedInput.value); // Variable for the speed of appearance on the text.

  automaticText.innerText = text.slice(0, index); // Use of the slice method to make appear a string letter by letter.

  index++; // Increment of the index for the slice method

  // If the index is bigger than the lenght of the string, reset the index to 0.
  if (index > text.length) {
    index = 0;
  }

  setTimeout(writeText, speed); // SetTimeout to repeat over again the writeText function, using the variable speed.
}

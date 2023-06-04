// Selected all the items to work with.
const glassesNode = document.querySelectorAll(".glass");
const waterNotDrank = document.querySelector(".cup-text");
const waterDrank = document.querySelector(".cup-percentage");
const waterPercentage = document.getElementById("water-percentage");
const waterLiters = document.getElementById("water-liters");

// Initial values of the percentages of the cup
let valueDrank = 12.5;
let valueRemained = 87.5;
let litersValue = 1.75;

//Loop through the node of elements with the class of .glass.
glassesNode.forEach((glass) => {
  // Added event listener to all the buttons with the class of .glass
  glass.addEventListener("click", () => {
    // Every time a button is clicked is gonna do this function
    if (glass.classList.contains("active")) {
      // Check if the button has the class of .active. If it is the case, is gonna substract 12.5 of the intial value of fill water (blue square height) and added to the remained value (white square height).

      valueDrank -= 12.5; //Value used to substract 12.5 to the initial value

      valueRemained += 12.5; // Value used to add 12.5 to the initial value

      litersValue += 0.25;

      waterDrank.style.height = `${valueDrank}%`; //Substracts the value to the height of percentage water drank.

      waterNotDrank.style.height = `${valueRemained}%`; // Adds the value to the height of the percentage of water not drank.

      waterLiters.innerHTML = `${litersValue}L`; // Adds the value of liters inside of the element to show how many liters remains to be drank

      waterPercentage.innerHTML = `${valueDrank}%`; // Adds the initial value inside of the element to show the percentage of water drank

      // Checks if the value is zero to not display the element where is show the percentage to be drank
      if (valueDrank == 0) {
        waterPercentage.style.display = "none";
      } else {
        waterPercentage.style.display = "block";
      }

      glass.classList.toggle("active"); // Adds or removes the class active to the button clicked. That changes styles on the button.
    } else {
      // If the button has not the class of .active is gonna add 12.5 to the height of fill water (blue square) and is gonna substract 12.5 to the remained value (87.5) (white square).

      valueDrank += 12.5; // Value used to add 12.5 to the initial value.

      valueRemained -= 12.5; //Value used to substract 12.5 to the initial value,

      litersValue -= 0.25;

      waterDrank.style.height = `${valueDrank}%`; // Adds the value to the height of the percentage of water  drank.

      waterNotDrank.style.height = `${valueRemained}%`; //Substracts the value to the height of percentage water not drank.

      waterLiters.innerHTML = `${litersValue}L`; // Adds the value of liters inside of the element to show how many liters remains to be drank

      waterPercentage.innerHTML = `${valueDrank}%`; // Adds the initial value inside of the element to show the percentage of water drank

      // Checks if the value is zero to not display the element where is show the percentage to be drank
      if (valueDrank == 0) {
        waterPercentage.style.display = "none";
      } else {
        waterPercentage.style.display = "block";
      }

      glass.classList.toggle("active"); // Adds or removes the class active to the button clicked. That changes styles on the button.
    }
    // fillCup();
  });
});

// function fillCup() {
//   cupPercentage.style.height += `${valueDrank}%`;
//   cupText.style.height -= `${valueDrank}%`;
// }

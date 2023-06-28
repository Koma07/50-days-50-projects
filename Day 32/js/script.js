const checkBoxes = document.querySelectorAll("input");
const goodCheckBox = document.getElementById("good");
const cheapCheckBox = document.getElementById("cheap");
const fastCheckBox = document.getElementById("fast");

// Add event listeners to all the inputs, and calls a function.
checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("change", (e) => {
    checkInputs(e.target); //Calls the function with a parameter being the last check box clicked.
  });
});

// This function checks if the 3 buttons are checked and then check wich button was the last pressed to change the value to false depending on the situation of the conditions of the project.
function checkInputs(btn) {
  if (goodCheckBox.checked && cheapCheckBox.checked && fastCheckBox.checked) {
    if (goodCheckBox == btn) {
      fastCheckBox.checked = false;
    }
    if (cheapCheckBox == btn) {
      goodCheckBox.checked = false;
    }
    if (fastCheckBox == btn) {
      cheapCheckBox.checked = false;
    }
  }
}

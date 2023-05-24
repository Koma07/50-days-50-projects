const emailInput = document.getElementById("email-form");
const passwordInput = document.getElementById("password-form");
const emailLabel = document.getElementById("email-label");
const passwordLabel = document.getElementById("password-label");

// Function to see which input is selected, and changing the style of its correspondent label.
const openText = () => {
  // This is the condition to see if the email input is selected
  if (document.activeElement === emailInput) {
    emailLabel.classList.add("label-text-open");
  } else {
    emailLabel.classList.remove("label-text-open");
  }
  // This is the condition to see if the password input is selected
  if (document.activeElement === passwordInput) {
    passwordLabel.classList.add("label-text-open");
  } else {
    passwordLabel.classList.remove("label-text-open");
  }
};

// Event listener to check constanly if the inputs are focused or not, using click and the blur events.

// The blur event it's started when an input has lost its focus.
emailInput.addEventListener("focus", openText);
emailInput.addEventListener("blur", openText);
passwordInput.addEventListener("focus", openText);
passwordInput.addEventListener("blur", openText);

console.log(emailInput.focus());

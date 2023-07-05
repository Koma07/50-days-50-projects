const passwordInput = document.getElementById("password");
const body = document.querySelector("body");

const backgroundImageBefore = window.getComputedStyle(body, "::before"); //This property is used to get access into pseudo classes of the body element.
let lengthPassword = 20;

// Event listener into the password input.
passwordInput.addEventListener("keypress", (e) => {
  lengthPassword--;
  body.style.setProperty("--dynamic-value", `${lengthPassword}px`);
});

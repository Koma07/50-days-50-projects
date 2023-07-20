const passwordLength = document.getElementById("password-length");
const uppercaseLettersCheck = document.getElementById("uppercase-letters");
const lowercaseLettersCheck = document.getElementById("lowercase-letters");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const clipboardEl = document.querySelector(".clipboard");
const passwrodResultBox = document.querySelector(".final");

const uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "`",
  "~",
  "|",
  "[",
  "]",
  "{",
  "}",
];
const passwordResult = [];

generateBtn.addEventListener("click", () => {
  for (let index = 0; index < passwordLength.value; index++) {
    if (passwordResult.includes()) {
      // Checks if the array with the password result, has already values, if it is true, deletes all of them and let the array with 0 elements.
      passwordResult.length = 0;
    }
    if (uppercaseLettersCheck.checked) {
      //if the input is checked push a letter into the password result array.
      passwordResult.push(getRandomUpperLetter());
    }
    if (lowercaseLettersCheck.checked) {
      //if the input is checked push a letter into the password result array.
      passwordResult.push(getRandomLowerLetter());
    }
    if (numbersCheck.checked) {
      //if the input is checked push a number into the password result array.
      passwordResult.push(getRandomNum());
    }
    if (symbolsCheck.checked) {
      //if the input is checked push a symbol into the password result array.
      passwordResult.push(getRandomSymbol());
    }
    passwordResult.sort(() => 0.4 - Math.random()); // Use of the method sort(), to shuffle the elements on the array.

    passwrodResultBox.innerHTML = passwordResult
      .join("")
      .slice(0, passwordLength.value); // Used the method join('') to separte the elements into the array with whitespaces, and the method slice() to cut all the elements after the length selected.;
  }
});

clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwrodResultBox.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});

function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 10);
  let result = numbers[randomNum];
  return result;
}

function getRandomLowerLetter() {
  let randomNum = Math.floor(Math.random() * 10);
  let result = lowercaseLetters[randomNum].toLocaleLowerCase();
  return result;
}

function getRandomUpperLetter() {
  let randomNum = Math.floor(Math.random() * 10);
  let result = uppercaseLetters[randomNum];
  return result;
}
function getRandomSymbol() {
  let randomNum = Math.floor(Math.random() * 10);
  let result = symbols[randomNum];
  return result;
}

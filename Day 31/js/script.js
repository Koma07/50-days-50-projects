const passwordLength = document.getElementById("password-length");
const uppercaseLettersCheck = document.getElementById("uppercase-letters");
const lowercaseLettersCheck = document.getElementById("lowercase-letters");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwrodResultBox = document.querySelector(".password-result");

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

const passwordResult = [];

generateBtn.addEventListener("click", () => {
  for (let index = 0; index < passwordLength.value; index++) {
    passwordResult.push(numbers[getRandomNum()]);
    passwordResult.push(uppercaseLetters[getRandomNum()]);
    passwordResult.push(lowercaseLetters[getRandomNum()].toLowerCase());
    passwrodResultBox.innerHTML = passwordResult.join("");
    if (index == passwordLength.value) {
      passwordResult.join("");
      console.log(passwordResult.join(""));
    }
  }
});

function getRandomNum() {
  let randomNum = Math.floor(Math.random() * 10);
  return randomNum;
}

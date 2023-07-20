const imgSrc = document.querySelectorAll(".img img");

// For each to add a src into the imgs tags.
imgSrc.forEach((img) => {
  img.src = `https://random.imagecdn.app/500/${getInitialNumber()}${getRandomNumber()}`;
});

// Function to get the first number to be applied into the random image api.
function getInitialNumber() {
  let number = Math.floor(Math.random() * 10);
  return number;
}

// Function to get the last numbers to be applied into the random image api.
function getRandomNumber() {
  let number = Math.floor(Math.random() * 100);
  return number;
}

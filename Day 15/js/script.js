// Selected all the containers for the numbers of the Social medias.
const twNumberContainer = document.querySelector(".tw-numbers");
const ytNumberContainer = document.querySelector(".yt-numbers");
const fcNumberContainer = document.querySelector(".fc-numbers");

// Created initial values to show on page. Every time the page is loaded.
// Also this numbers are very close to each other, for a condition used later on the code.
let twNumbers = 11800;
let ytNumbers = 4800;
let fcNumbers = 7300;

// Created a function using the arrow method to increment the initial values of the social medias.
const incrementNumbers = () => {
  // Created a Set Interval to increment the initial values every 0.001 seconds, and put it inside their respectives text containers.
  let incrementRssNumbers = setInterval(() => {
    twNumbers++;
    ytNumbers++;
    fcNumbers++;
    // Created a condition where analyze if the values are the expected at the same time. If it is true is gonna stop the set interval and stop the values at the expected ones.
    // This is why I need it to put the initial values so close to each other.
    if (twNumbers === 12000 && ytNumbers === 5000 && fcNumbers === 7500) {
      clearInterval(incrementRssNumbers);
    }
    // After increment the values, puts them inside their respective containers.
    twNumberContainer.innerText = twNumbers;
    ytNumberContainer.innerText = ytNumbers;
    fcNumberContainer.innerText = fcNumbers;
  }, 1);
};

// Calls the function to start incrementing the initial values.
incrementNumbers();

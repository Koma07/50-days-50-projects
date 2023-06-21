const numbersCount = document.querySelectorAll(".number-count");
const replayBtn = document.querySelector(".replay-btn");
const mainText = document.querySelector("h1");

// Initial call for the function, to do the first count down.
countDown();

// Function to go through all the div on the numbersCount node.
function countDown() {
  // for (let i = 0; i < numbersCount.length; i++) {
  //   setTimeout(() => {
  //     numbersCount[i].classList.add("on");
  //   }, 1000 * i);
  // }

  // forEach to apply the class ON, on every child of the node, every second using a set timeout.
  numbersCount.forEach((number, i) => {
    setTimeout(() => {
      number.classList.add("on");
      // If the index (i), it's equal to three, add a class to the replay button to make apperence, after 1 second.
      // And change the text inside the h1.
      if (i == 3) {
        setTimeout(() => {
          replayBtn.classList.add("active-btn");
          mainText.innerText = "GO";
        }, 1000);
      }
    }, 1000 * i); //This is the way where you can apply the set timeout every second ON EACH INDIVIDUAL CHILD AT A TIME.
  });
}

// Function to remove the class on of every child element of the node. And the class of the replay button.
function replay() {
  mainText.innerText = "Get Ready";
  numbersCount.forEach((number) => {
    number.classList.remove("on");
  });
  replayBtn.classList.remove("active-btn");
}

// Event listener to call the two previous functions, one of them with a little bit of delay to avoid bugs.
replayBtn.addEventListener("click", () => {
  replay();
  setTimeout(() => {
    countDown();
  }, 1000);
});

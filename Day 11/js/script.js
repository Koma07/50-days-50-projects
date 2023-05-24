// Selection of the boxes to work with.
const eventKeyBox = document.getElementById("event-key");
const eventKeyCodeBox = document.getElementById("event-keycode");
const eventCodeBox = document.getElementById("event-code");

// The keydown event listener on the window of the document brings a lot of information that can be accessed, to tell wich key has been pressed.
// And that information is been put  inside various boxes to tell the user wich key is been pressed with their respective codes a numbres.
window.addEventListener("keydown", (e) => {
  console.log(e);
  eventKeyBox.innerHTML = e.key;
  // This event is deprecated, for another one.
  eventKeyCodeBox.innerHTML = e.keyCode;
  eventCodeBox.innerHTML = e.code;

  // Litte condition to avoid blank spaces on the boxes when the spacebar is pressed.
  if (e.keyCode === 32) {
    eventKeyBox.innerHTML = "Space";
    eventCodeBox.innerHTML = "KeySpace";
  }
});

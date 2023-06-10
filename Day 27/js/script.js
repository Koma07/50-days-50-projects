// Selection of the elements to work with.
const showNotificationBtn = document.querySelector(".notification-btn");
const notificationBar = document.querySelector(".notification-bar");

// Creation of an array of colors to put on the notification text.
const colorsRandom = ["red", "green", "blue"];

// Event listener to check a click on the button.
showNotificationBtn.addEventListener("click", () => {
  // Creation and assignation of a div created.
  let notificationDiv = document.createElement("div");
  // Assignation of the text iside of the div created.
  notificationDiv.innerHTML = `Message ${randomNumber()}`;
  // Selection of the color using the random number created at the beggining of the function.
  notificationDiv.style.color = `${colorsRandom[randomNumber()]}`;
  notificationBar.appendChild(notificationDiv);

  // Function to delete the divs created.
  function deleteDiv() {
    notificationBar.removeChild(notificationDiv);
  }
  // Sets a time to call a the fuction to delete the divs created making click on the show notification button
  setInterval(deleteDiv, 3200);

  // Generation of a random number to select a random color on the array previously created.
  function randomNumber() {
    let randomNumber = Math.round(
      Math.random() * Math.random() * colorsRandom.length
    );
    return randomNumber;
  }
});

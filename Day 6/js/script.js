// Selected a group (Node) of objects on the DOM
const boxes = document.querySelectorAll(".box");

// Added a event listener to activate a function on a Scroll
window.addEventListener("scroll", checkBoxes);

// Called the function to make apear the first boxes on the page
checkBoxes();

// This is the function we called when the user scrolls on the page
function checkBoxes() {
  // Create a trigger number to idk really. But it is used as a condition.
  const triggerBottom = (window.innerHeight / 5) * 4;

  // We go through the group (Node) of objects with a forEach loop.
  boxes.forEach((box) => {
    // This constant it gets the number of position of the top of the box using the getboundingclientreact() method
    const boxTop = box.getBoundingClientRect().top;

    // A condition to verify if the position of the top of the box is on the window of the user and if is true add a class to the box that moves the box into the view of the user, and remove it when is out of the window.
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// Selected elements to work with.
const openBtn = document.querySelector(".button");
const boxMenu = document.querySelector(".menu");
const menuItems = document.querySelectorAll("a");
const crossOne = document.querySelector(".cross-1");
const crossTwo = document.querySelector(".cross-2");

// Function created using the arrow method, to add a class with the toggle method on certain elements on the web.
const openBoxMenu = () => {
  crossOne.classList.toggle("btnClose");
  crossTwo.classList.toggle("btnClose");
  boxMenu.classList.toggle("close");
  // Used a for each loop to add a class on all the elements within the Node List (a elements)
  menuItems.forEach((item) => {
    item.classList.toggle("hide");
  });
};

// Added event listener to the button, that executes a function whenever is clicked.
openBtn.addEventListener("click", openBoxMenu);

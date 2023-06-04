// Selected elements to work with.
const body = document.body;
const imagesNode = document.querySelectorAll(".slide-image");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

let activeSlide = 0; // Number to work between the elements on the node of Images.

function slide() {
  // For each to go through all the images on the imagesNode and removes the class active on the element who has the class.
  // And depending of the value of active slides, adds the class active into the image.
  imagesNode.forEach((image) => {
    image.classList.remove("active");
    imagesNode[activeSlide].classList.add("active");
  });
}

function setBackgroundImage() {
  // Function to set the background image to be the same of the div with the class active.
  body.style.backgroundImage = imagesNode[activeSlide].style.backgroundImage;
}

rightBtn.addEventListener("click", () => {
  // Event listener that increments the active slide number firts, then check the condition if the active slides number is greater than the length of the images Node.
  activeSlide++;
  if (activeSlide > imagesNode.length - 1) {
    // If the condition is true reset the value of the active slide to 0, to begin again with the clycle.
    activeSlide = 0;
  }
  // Applies the correspondent functions, that slides the images and set the background
  setBackgroundImage();
  slide();
});

leftBtn.addEventListener("click", () => {
  // Event listener that decrements the active slide number firts, then check the condition if the active slides number is less than zero. If it is true, sets the active slide number to the length minus one.
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = imagesNode.length - 1;
  }
  // Applies the correspondent functions, that slides the images and set the background
  setBackgroundImage();
  slide();
});

// Sets the background every time the page is loaded.
setBackgroundImage();

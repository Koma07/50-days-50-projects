const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");
const textContainer = document.querySelector(".text-container");
const imageContainer = document.querySelector(".image-container");

let idx = 0;
let imgPixels = 0; // Initial value of translateY, for the images.
let textPixels = -2100; //Intial value of translateY, for the text.

upBtn.addEventListener("click", () => {
  idx++;
  if (idx > 3) {
    //If the index is greater than 3
    idx = 0; //The index is set again to 0.
    imgPixels = 0; // The translateY value of imgages is set to 0 again.
    textPixels = -2100; // The translateY value of text is set to 0 again.
    imageContainer.style.transform = `translateY(-${imgPixels}px)`; // Sets the value 0 to the image container.
    textContainer.style.transform = `translateY(${textPixels}px)`; // Sets the value -2100 to the text container.
  } else {
    imgPixels += 700; // If the index is less than 3, adds 700 to the translateY value of the image container.
    textPixels += 700; // If the index is less than 3, adds 700 to the translateY value of the text container.
  }
  imageContainer.style.transform = `translateY(-${imgPixels}px)`; // Sets the value 700 to the image container.

  textContainer.style.transform = `translateY(${textPixels}px)`; // Sets the value 700 to the text container.
});

downBtn.addEventListener("click", () => {
  idx--;
  if (idx < 0) {
    //If the index is less than 0
    idx = 3; //The index is set to 3.
    imgPixels = 2100; // The translateY value of imgages is set to 2100.
    textPixels = -0; // The translateY value of imgages is set to 0 again.
    imageContainer.style.transform = `translateY(-${imgPixels}px)`; // Sets the value 2100 to the image container.
    textContainer.style.transform = `translateY(${textPixels}px)`; // Sets the value 0 to the text container.
  } else {
    imgPixels -= 700; // If the index is greater than 3, substracts 700 to the translateY value of the image container.
    textPixels -= 700; // If the index is greater than 3, substracts 700 to the translateY value of the text container.
  }
  imageContainer.style.transform = `translateY(-${imgPixels}px)`; // Sets the value 700 to the image container.

  textContainer.style.transform = `translateY(${textPixels}px)`; // Sets the value 700 to the text container.
});

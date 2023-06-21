// Selection of the elements to work with.
const imgContainer = document.querySelector(".card__img-container");
const textContainer = document.querySelector(".card__text");
const autorContainer = document.querySelector(".card__autor");
const titleText = document.querySelector("h1");
const paragraphText = document.querySelector("p");
const cardAutorImg = document.querySelector(".card__autor-img");
const cardAutorText = document.querySelector(".card__autor-text");

// Sets a timeout, wich is going to do a function ONLY ONCE.
setTimeout(() => {
  // In this case the function is to remove classes wich make the elements appear to be loading.
  imgContainer.innerHTML = `<img src="/Day 24/imgs/photo1.avif" alt="content" width="100%" height="100%" />
  `;

  imgContainer.classList.remove("animated");
  textContainer.classList.remove("animated");
  autorContainer.classList.remove("animated");

  titleText.classList.remove("not-visible");
  paragraphText.classList.remove("not-visible");
  cardAutorImg.classList.remove("not-visible");
  cardAutorText.classList.remove("not-visible");
}, 2000); // At the end is set the time on how long the function is going to wait before been called.

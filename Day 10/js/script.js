const getJokeBtn = document.getElementById("getJoke");
const jokeParagraph = document.querySelector("p");

async function getJoke() {
  const url = "https://icanhazdadjoke.com";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  let joke = await fetch(url, config);
  let data = await joke.json();
  jokeParagraph.innerHTML = data.joke;
}
getJoke();

getJokeBtn.addEventListener("click", getJoke);

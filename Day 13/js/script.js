// Selected elements to work with.
const textArea = document.getElementById("textarea");
const choicesContainer = document.querySelector(".choices-container");

// Added event listener to see if the comma key is pressed, then creates a span, with the introduced value
textArea.addEventListener("keydown", (e) => {
  if (e.key === ",") {
    let createSpan = document.createElement("span"); //Creates the span element.
    createSpan.innerText = textArea.value; //Inserts the value of the textarea in the the span created.
    createSpan.classList.add("option"); //Adds the class 'option' to the span created
    choicesContainer.appendChild(createSpan); // Add the created span to the container where's goind to be showed.
    textArea.value = " "; // After the creation of the span, clears the textarea.
    e.preventDefault(); // This property avoids the comma (',') to appear on the text area when the key is pressed. To have a clear text area.
  }
});

// Event listener on the key Enter,to select a random option of the introduced values.
textArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    randomSelect();
  }
});

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".option");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("blue");
}

function unHighlightTag(tag) {
  tag.classList.remove("blue");
}

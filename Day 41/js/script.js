const inputs = document.querySelectorAll("input");

// inputs[0].focus();
inputs.forEach((input, idx) => {
  input.addEventListener("input", (event) => {
    const num = Number(event.key);
    let inputValue = event.target.value;
    if ((num >= 0 && num <= 9) || inputValue.length > 1) {
      event.target.value = inputValue.charAt(0);
      idx++;
      inputs[idx].focus();
      if (idx == inputs.length) {
        idx = 0;
      }
    }
    // if (num && num >= 0 && num <= 9) {
    // }
  });
});

console.log(inputs);

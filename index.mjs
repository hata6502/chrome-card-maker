const outputElement = document.querySelector("#output");

const inputElement = document.querySelector("#input");
inputElement.addEventListener("input", () => {
  outputElement.value = inputElement.value;
});

const selectButtonElement = document.querySelector("#select-button");
selectButtonElement.addEventListener("click", () => {
  outputElement.focus();
  outputElement.select();
});

if ("serviceWorker" in navigator) {
  await navigator.serviceWorker.register("./serviceWorker.mjs");
}

const inputElement = document.querySelector("#input");
const outputElement = document.querySelector("#output");
const selectButtonElement = document.querySelector("#select-button");

const handleInput = () => {
  outputElement.value = inputElement.value;
};
inputElement.addEventListener("input", handleInput);

const handleSelectButtonClick = () => {
  outputElement.focus();
  outputElement.select();
};
selectButtonElement.addEventListener("click", handleSelectButtonClick);

const searchParams = new URLSearchParams(location.search);
inputElement.value = [searchParams.get("title"), searchParams.get("text")]
  .filter((searchParam) => searchParam !== null)
  .join("\n");
handleInput();
handleSelectButtonClick();

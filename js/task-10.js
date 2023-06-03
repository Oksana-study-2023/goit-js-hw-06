function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// const inputEl = document.querySelector(`input`);
// const btnCreateEl = document.querySelector(`[data-create]`);
// const btnDestroyEl = document.querySelector(`[data-destroy]`);

// function onInputClick(event) {
//   let amount = event.target.value;
//   console.log(amount);
// }
// inputEl.addEventListener(`input`, onInputClick);
// btnCreateEl.addEventListener(`click`, createBoxes);

// function createBoxes(amount) {
//   console.log(amount);
// };







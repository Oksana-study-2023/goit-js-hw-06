function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector(`body`);
const BtnChangeColorEl = document.querySelector(`.change-color`);
const textBackgrondColorEl = document.querySelector(`.color`);

BtnChangeColorEl.addEventListener(`click`, onBtnChangeColor);

function onBtnChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  textBackgrondColorEl.textContent = getRandomHexColor();
}


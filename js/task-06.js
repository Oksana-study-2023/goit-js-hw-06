const inputEl = document.querySelector(`#validation-input`);
let inputText = inputEl.value;
const maxLength = inputEl.getAttribute(`data-length`);

inputEl.addEventListener("blur", onInput);

function onInput(event) {
if (maxLength.includes(event.currentTarget.value.length)) {
    inputEl.classList.add(`valid`); 
 } else {
 inputEl.classList.add(`invalid`);  
 } 
 }

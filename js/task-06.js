const inputEl = document.querySelector(`#validation-input`);
let inputText = inputEl.value;
const maxLength = inputEl.getAttribute(`data-length`);

inputEl.addEventListener("blur", onInput);

function onInput(event) {
if (maxLength.includes(event.currentTarget.value.length)) {
    inputEl.classList.add(`valid`); 
    inputEl.classList.remove(`invalid`);
 } else {
    inputEl.classList.add(`invalid`);
    inputEl.classList.remove(`valid`);   
 } 
 }    



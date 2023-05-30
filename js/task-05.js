const inputEl = document.querySelector(`#name-input`);
const spanEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInput)
    
function onInput(event) {
if (event.currentTarget.value.length===0) {
    spanEl.textContent = `Anonymous`; 
} else {
    spanEl.textContent = inputEl.value;  
}    
}  



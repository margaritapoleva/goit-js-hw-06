
const counterValue = document.querySelector('#value');
let value = 0;

const decrementBtn = document.querySelector("button[data-action=decrement");
const incrementBtn = document.querySelector("button[data-action=increment");

decrementBtn.addEventListener('click', () => {
    counterValue.textContent =  Number(value -= 1);
});


incrementBtn.addEventListener('click', () => {
   counterValue.textContent =  Number(value += 1);
});
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrBtn.addEventListener("click", (event) => {
    counterValue = counterValue - 1;
    const valueRef = document.querySelector("span");
    valueRef.textContent = counterValue;
});

incrBtn.addEventListener("click", (event) => {
    counterValue += 1;
    const valueRef = document.querySelector("span");
    valueRef.textContent = counterValue;
});
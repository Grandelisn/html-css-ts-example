let count = 0;
const countDisplay = document.getElementById("count") as HTMLElement;
const minusButton = document.getElementById("minus") as HTMLButtonElement;
const plusButton = document.getElementById("plus") as HTMLButtonElement;

function updateDisplay() {
  countDisplay.textContent = count.toString();
}

minusButton.addEventListener("click", () => {
  count--;
  updateDisplay();
});

plusButton.addEventListener("click", () => {
  count++;
  updateDisplay();
});

updateDisplay(); // Initial display
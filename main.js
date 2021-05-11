const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");
const buttons = document.querySelectorAll("button");

function click(button) {
  button.target.classList.add("clicked");
}
function unClick(button) {
  button.target.classList.remove("clicked");
}
function clickPlusButton() {
  ++counter.innerText;
}
function clickMinusButton() {
  --counter.innerText;
}
function clickResetButton() {
  counter.innerText = 4444;
}

buttons.forEach((button) => {
  button.addEventListener("touchstart", click);
  button.addEventListener("touchend", unClick);
  button.addEventListener("mousedown", click);
  button.addEventListener("mouseup", unClick);
});

plusButton.addEventListener("touchstart", clickPlusButton);
plusButton.addEventListener("mousedown", clickPlusButton);

minusButton.addEventListener("touchstart", clickMinusButton);
minusButton.addEventListener("mousedown", clickMinusButton);

resetButton.addEventListener("touchstart", clickResetButton);
resetButton.addEventListener("mousedown", clickResetButton);

const valueBox = document.querySelector("#value");
const increaseBtn = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const decreaseBtn = document.querySelector("#decrease");

let counter = 0;

function printValue() {
  valueBox.innerText = counter;
  if (counter < 0) {
    valueBox.style.color = "red";
  } else {
    valueBox.style.color = "";
  }
}

function resetValue() {
  counter = 0;
  printValue();
}

function increaseValue() {
  counter++;
  printValue();
}

function decreaseValue() {
  counter--;
  printValue();
}

resetValue();
increaseBtn.addEventListener("click", increaseValue);
decreaseBtn.addEventListener("click", decreaseValue);
resetBtn.addEventListener("click", resetValue);

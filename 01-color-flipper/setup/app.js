const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const colorBox = document.querySelector(".color");

function generateColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function printColor(color) {
  colorBox.innerText = color;
}

function setBgColor() {
  const color = generateColor();
  printColor(color);
  document.documentElement.style.setProperty("--bg-color", color);
}

btn.addEventListener("click", setBgColor);
setBgColor();

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const colorBox = document.querySelector(".color");

function generateColor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[Math.floor(Math.random() * hex.length)].toString();
  }
  return hexColor;
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

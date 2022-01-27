//using selectors inside the element
// traversing the dom
const showTextIcon = document.querySelectorAll(".plus-icon");
const hideTextIcon = document.querySelectorAll(".minus-icon");

function toggleDetails(btn, show) {
  const questionText =
    btn.parentElement.parentElement.parentElement.querySelector(
      ".question-text"
    );
  const minusIcon = btn.parentElement.querySelector(".minus-icon");
  const plusIcon = btn.parentElement.querySelector(".plus-icon");

  plusIcon.style.display = show ? "none" : "inline";
  minusIcon.style.display = show ? "inline" : "none";
  questionText.style.display = show ? "block" : "none";
}

showTextIcon.forEach((button) => {
  button.addEventListener("click", () => toggleDetails(button, true));
});

hideTextIcon.forEach((button) => {
  button.addEventListener("click", () => toggleDetails(button, false));
});

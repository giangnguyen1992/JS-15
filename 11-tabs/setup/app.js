const content = document.querySelector(".about-content");
const contentButtons = document.querySelector(".btn-container");

contentButtons.addEventListener("click", (e) => {
  const prevActiveElement = e.target.parentNode.querySelector(".active");
  prevActiveElement.classList.remove("active");
  e.target.classList.add("active");

  const prevActiveContent = content.querySelector(".active");
  prevActiveContent.classList.remove("active");
  const currentActiveContent = content.querySelector(`#${e.target.dataset.id}`);
  currentActiveContent.classList.add("active");
});

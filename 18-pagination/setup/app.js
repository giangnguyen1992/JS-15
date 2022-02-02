import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import displayButtons from "./displayButtons.js";

function changeStatus() {
  const statusField = document.querySelector(".section-title > h1");
  statusField.innerText = "Pagination";
}

async function init(page) {
  const container = document.querySelector(".container");
  const buttonContainer = document.querySelector(".btn-container");

  container.replaceWith(container.cloneNode(false));
  buttonContainer.replaceWith(buttonContainer.cloneNode(false));

  try {
    const followers = await fetchFollowers(page);
    displayFollowers(followers);
    await displayButtons(page);
    paginate(page);
    changeStatus();
  } catch (e) {
    console.log("Something went wrong", e);
  }
}

const paginate = (page) => {
  const prevButton = document.querySelector(".prev-btn");
  const nextButton = document.querySelector(".next-btn");
  const buttonContainer = document.querySelector(".btn-container");

  if (page > 1) {
    prevButton.addEventListener("click", () => init(page - 1));
  } else {
    prevButton.style.display = "none";
  }

  if (page !== 10) {
    nextButton.addEventListener("click", () => init(page + 1));
  } else {
    nextButton.style.display = "none";
  }

  buttonContainer.addEventListener("click", (e) => {
    if (e.target.dataset.index) {
      init(parseInt(e.target.dataset.index));
    }
  });
};

document.addEventListener("DOMContentLoaded", () => init(1));

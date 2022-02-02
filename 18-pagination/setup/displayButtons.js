const displayButtons = async (activePage) => {
  let pageNumber = activePage ? activePage : 1;
  const container = document.querySelector(".btn-container");
  let pageButtons = "";

  for (let i = 1; i < 11; i++) {
    pageButtons += `<button class="page-btn ${
      i == pageNumber ? "active-btn" : ""
    } " data-index="${i}">${i}</button>`;
  }

  const buttonBoxHtml = `
    <button class="prev-btn">prev</button>
    ${pageButtons}
    <button class="next-btn">next</button> 
  `;
  container.insertAdjacentHTML("beforeend", buttonBoxHtml);
};

export default displayButtons;

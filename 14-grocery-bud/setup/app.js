// ****** SELECT ITEMS **********

// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
const input = document.querySelector("#grocery");
const submitButton = document.querySelector(".submit-btn");
const clearButton = document.querySelector(".clear-btn");
const deleteItemButtons = document.querySelectorAll(".delete-btn");
const editItemButton = document.querySelectorAll(".edit-btn");
const container = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");

const mystorage = localStorage;

let grocery =
  mystorage.length > 0 ? JSON.parse(mystorage.getItem("groceryList")) : [];
let editMode = false;
let editId = "";

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxxxxxxxyxyx".replace(/[xy]/g, function (c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

function isGroceryListEmpty() {
  return grocery.length === 0;
}

function saveGroceryItem() {
  if (input.value !== "") {
    const uuid = create_UUID();
    grocery.push({ name: input.value, id: uuid });
    try {
      mystorage.setItem("groceryList", JSON.stringify(grocery));
      printGroceryItems(uuid, input.value);
      input.value = "";
    } catch (e) {
      console.log("Something break", e);
    }
  }
}

function initGroceryApp() {
  if (grocery.length > 0) {
    grocery.forEach((item) => {
      printGroceryItems(item.id, item.name);
    });
  }
}

function printGroceryItems(id, name) {
  const articleHTML = `
        <article data-id="${id}" class="grocery-item">
            <p class="title">${name}</p>
            <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
            </div>
        </article>
        `;
  container.classList.add("show-container");
  groceryList.insertAdjacentHTML("afterbegin", articleHTML);
}

function clearGrocery() {
  container.classList.remove("show-container");
  groceryList.innerHTML = "";
  grocery = [];
  mystorage.clear();
}

function deleteItem(id) {
  try {
    grocery = grocery.filter((item) => item.id !== id);
    mystorage.setItem("groceryList", JSON.stringify(grocery));
    const articleNode = document.querySelector(`article[data-id="${id}"]`);
    groceryList.removeChild(articleNode);

    if (isGroceryListEmpty()) {
      clearGrocery();
    }
  } catch (e) {
    console.log("Something went worng", e);
  }
}

function editModeOn(id) {
  editId = id;
  const groceryItem = grocery.find((item) => item.id == editId);

  if (groceryItem) {
    input.value = groceryItem.name;
    editMode = true;
    submitButton.innerText = "Edit";
  }
}

function editItem() {
  grocery.every((item) => {
    if (item.id == editId && input.value !== "") {
      const editTitle = document.querySelector(
        `article[data-id="${editId}"] > p.title`
      );

      item.name = input.value;
      editTitle.innerText = input.value;
      input.value = "";
      editMode = false;
      submitButton.innerText = "Submit";

      return false;
    } else {
      return true;
    }
  });
  mystorage.setItem("groceryList", JSON.stringify(grocery));
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!editMode) {
    saveGroceryItem();
  } else {
    editItem();
  }
});
clearButton.addEventListener("click", clearGrocery);
groceryList.addEventListener("click", (e) => {
  const articleId = e.target.closest("article[data-id]")?.dataset?.id;
  if (
    articleId !== undefined &&
    (e.target.matches(".fa-trash") || e.target.matches(".delete-btn"))
  ) {
    deleteItem(articleId);
  } else if (
    articleId !== undefined &&
    (e.target.matches(".fa-edit") || e.target.matches(".edit-btn"))
  ) {
    editModeOn(articleId);
  }
});

initGroceryApp();

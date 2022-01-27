const menuButton = document.querySelector(".sidebar-toggle");
const closeButton = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("show-sidebar");
}

menuButton.addEventListener("click", toggleSidebar);
closeButton.addEventListener("click", toggleSidebar);

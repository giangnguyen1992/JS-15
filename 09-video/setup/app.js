// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const preloader = document.querySelector(".preloader");
const videoElement = document.querySelector(".video-container");
const controllButton = document.querySelector(".switch-btn");

window.addEventListener("load", () => {
  preloader.style.display = "none";
});

controllButton.addEventListener("click", () => {
  if (videoElement.paused) {
    controllButton.classList.remove("slide");
    videoElement.play();
  } else {
    controllButton.classList.add("slide");
    videoElement.pause();
  }
});

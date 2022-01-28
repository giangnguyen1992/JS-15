// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const target = document.querySelector("#about .title");
const nav = document.querySelector("#nav");
const scrollButton = document.querySelector(".btn-white");
const toursSection = document.querySelector("#tours");

const options = {
  rootMargin: "0px",
  threshold: [0, 0.25, 0.5, 0.75, 1],
};

let previousY = 0;
let previousRatio = 0;

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    const currentY = entry.boundingClientRect.y;
    const currentRatio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;

    // Scrolling down/up
    if (currentY < previousY) {
      if (currentRatio > previousRatio && isIntersecting) {
        console.log("Scrolling down enter");
        nav.classList.add("fixed-nav");
      } else {
        console.log("Scrolling down leave");
      }
    } else if (currentY > previousY && isIntersecting) {
      if (currentRatio < previousRatio) {
        console.log("Scrolling up leave");
        nav.classList.remove("fixed-nav");
      } else {
        console.log("Scrolling up enter");
      }
    }

    previousY = currentY;
    previousRatio = currentRatio;
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

observer.observe(target);

scrollButton.addEventListener("click", (event) => {
  var headerOffset =
    nav.getBoundingClientRect().height + nav.getBoundingClientRect().bottom;
  var elementPosition = toursSection.getBoundingClientRect().top;
  var offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
  event.preventDefault();
});

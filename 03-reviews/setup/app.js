// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
// Review parts
const personBox = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

let currentReview = reviews[0];

function getCurrentReviewIndex() {
  return reviews.findIndex((review) => currentReview.id == review.id);
}

function initReview(review) {
  personBox.src = review.img;
  author.innerText = review.name;
  job.innerText = review.job;
  info.innerText = review.text;

  currentReview = review;
}

function getRandomReview() {
  const currentReviewIndex = getCurrentReviewIndex();
  const filteredReviews = [
    ...reviews.slice(0, currentReviewIndex),
    ...reviews.slice(currentReviewIndex + 1),
  ];
  const randomReview =
    filteredReviews[Math.floor(Math.random() * filteredReviews.length)];
  initReview(randomReview);
}

function getNextReview() {
  const currentReviewIndex = getCurrentReviewIndex();
  if (currentReviewIndex < reviews.length - 1) {
    initReview(reviews[currentReviewIndex + 1]);
  } else {
    initReview(reviews[0]);
  }
}

function getPrevReview() {
  const currentReviewIndex = getCurrentReviewIndex();
  if (currentReviewIndex > 0) {
    initReview(reviews[currentReviewIndex - 1]);
  } else {
    initReview(reviews[reviews.length - 1]);
  }
}

randomBtn.addEventListener("click", getRandomReview);
nextBtn.addEventListener("click", getNextReview);
prevBtn.addEventListener("click", getPrevReview);

initReview(currentReview);

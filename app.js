// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//Auto colse hamburger menu
document.querySelectorAll(".nav-links li a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("active");
  });
});

// Review Carousel
let currentReview = 0;
const reviews = document.querySelectorAll(".review-item");

function showNextReview() {
  reviews[currentReview].classList.remove("active");
  currentReview = (currentReview + 1) % reviews.length;
  reviews[currentReview].classList.add("active");
}

setInterval(showNextReview, 3500);

// --- GALLERY DYNAMIC FILTERING ENGINE ---
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class style from previous click selections
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    galleryItems.forEach(item => {
      if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  });
});

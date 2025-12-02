const ratingBtns = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submitBtn");

const ratingCard = document.querySelector(".rating-card");
const thankyouCard = document.querySelector(".thankyou-card");

const selectedRating = document.getElementById("selectedRating");

let ratingValue = null;

// Select rating
ratingBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    ratingBtns.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    ratingValue = btn.textContent;
  });
});

// Submit
submitBtn.addEventListener("click", () => {
  if (!ratingValue) {
    alert("Please select a rating");
    return;
  }

  selectedRating.textContent = ratingValue;

  ratingCard.classList.remove("active");
  thankyouCard.classList.add("active");
});

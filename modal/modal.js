// Get DOM values
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

// functionality to open and close modal
modalBtn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

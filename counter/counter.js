// set initial count
let count = 0;

// get DOM values
const countElement = document.getElementById("count");
const allBtns = document.querySelectorAll(".btn");

// performing the iteration to get the count
allBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let classes = e.currentTarget.classList;
    if (classes.contains("increase")) {
      count += 1;
    }
    if (classes.contains("decrease")) {
      count -= 1;
    }
    if (classes.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      countElement.style.color = "green";
    } else if (count < 0) {
      countElement.style.color = "red";
    } else countElement.style.color = "black";
    countElement.textContent = count;
  });
});

const colors = [
  "green",
  "lightgrey",
  "rgb(23, 190, 187)",
  "#ea5321",
  "#005377",
];
// get DOM values
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// add an event listener
btn.addEventListener("click", function () {
  // get random number between 0 and the length of the colors array
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// random number generator
function getRandomNumber(params) {
  return Math.floor(Math.random() * colors.length);
}

const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get a random hex code
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexCode[getRandomDigit()];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandomDigit() {
  return Math.floor(Math.random() * hexCode.length);
}

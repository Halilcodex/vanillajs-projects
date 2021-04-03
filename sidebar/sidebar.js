// get DOM values
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar");
const bars = document.querySelector(".bars");

console.log(closeBtn, toggleBtn, sidebar);

// functionality to open and close sidebar
toggleBtn.addEventListener("click", function () {
  // longer impelementation
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     bars.style.backgroundColor = "white";
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }

  //   shorter implementation
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

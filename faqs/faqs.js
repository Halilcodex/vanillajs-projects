/**----- Traversing the DOM to perform the operations -----*/
// get DOM values
// const btns = document.querySelectorAll(".qtn-btn");
const questions = document.querySelectorAll(".question-con");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     questions.forEach(function (item) {
//       if (item.classList.contains("show-text")) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });

/**----- Second method: carrying out a query selector on an element ------ */
questions.forEach(function (question) {
  const btn = question.querySelector(".qtn-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

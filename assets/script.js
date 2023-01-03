//Displays Current Day
$(".currentDay").text(moment().format('LLLL'));

//Save 8am Note
let input8 = document.querySelector("#input8");
let saveBtn8 = document.getElementById("saveBtn8");
let note8Saved = document.querySelector(".note8Saved");
save8Note();
function save8Note() {
  let input8 = localStorage.getItem("input8");
  note8Saved.textContent = input8;
}
saveBtn8.addEventListener("click", function(event) {
  event.preventDefault();
  let input8 = document.querySelector("#input8").value;
  localStorage.setItem("input8", input8);
  save8Note();
});
//Delete 8am Notes
let deleteBtn8 = document.querySelector('#deleteBtn8');
deleteBtn8.addEventListener("click", function () {
  localStorage.removeItem("input8");
  input8.value = "";
}, false);

// //Save 9am Note
// let input9 = document.querySelector("#input9");
// let saveBtn9 = document.getElementById("saveBtn9");
// let note9Saved = document.querySelector(".note9Saved");
// save9Note();
// function save9Note() {
//     let input9 = localStorage.getItem("input9");
//   note8Saved.textContent = input9;
// }
// saveBtn9.addEventListener("click", function(event) {
//     event.preventDefault();
  
//     let input9 = document.querySelector("#input9").value;
//     localStorage.setItem("input9", input9);
//     save9Note();
//   });

//   //Delete 9am Note
//   let deleteBtn9 = document.querySelector('#deleteBtn9');
//   deleteBtn9.addEventListener("click", function () {
//     localStorage.removeItem("input9");
//     input8.value = "";
//     }, false);
    
    //Clear Calendar
    let clearBtn = document.querySelector('#clearBtn');
    let input = document.querySelectorAll('.input').forEach(input => clearBtn.addEventListener('click', function () {
      input.value = '';
    }, false));
    
    clearBtn.addEventListener("click", function () {
      localStorage.removeItem("input8");
      localStorage.removeItem("input9");
      localStorage.removeItem("input10");
      localStorage.removeItem("input11");
      localStorage.removeItem("input12");
      localStorage.removeItem("input1");
      localStorage.removeItem("input2");
      localStorage.removeItem("input3");
      localStorage.removeItem("input4");
      localStorage.removeItem("input5");
      }, false);
//Color Timeblocks
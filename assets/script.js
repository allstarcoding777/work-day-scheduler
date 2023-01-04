//Displays Current Day
$(".currentDay").text(moment().format('LLLL'));

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

//Color-Coded Timeblocks
const timeblocks = document.getElementsByClassName("col-8");
let currentHour = parseInt(moment().format('H'));

Array.from(timeblocks).forEach(row => {
  let
    time = row.id,
    rowHour;
  if (time) {
    rowHour = parseInt(time);
  }
  if (rowHour) {
//Assigned Colors
    if (currentHour === rowHour) {
      setColor(row, "green");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 7)) {
      setColor(row, "lightgrey");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "red");
    } 
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

//Save 9am Note
let input9 = document.querySelector(".input9");
let saveBtn9 = document.getElementById("saveBtn9");
let note9Saved = document.querySelector(".note9Saved");
save9Note();
function save9Note() {
    let input9 = localStorage.getItem("input9");
    note9Saved.textContent = input9;
}
saveBtn9.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input9 = document.querySelector(".input9").value;
    localStorage.setItem("input9", input9);
    save9Note();
  });

//Delete 9am Note
  let dele10eBtn9 = document.querySelector('#deleteBtn9');
  deleteBtn9.addEventListener("click", function () {
    localStorage.removeItem("input9");
    input9.value = "";
    }, false);

//Save 10am Note
let input10 = document.querySelector(".input10");
let saveBtn10 = document.getElementById("saveBtn10");
let note10Saved = document.querySelector(".note10Saved");
save10Note();
function save10Note() {
    let input10 = localStorage.getItem("input10");
    note10Saved.textContent = input10;
}
saveBtn10.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input10 = document.querySelector(".input10").value;
    localStorage.setItem("input10", input10);
    save10Note();
  });

//Delete 10am Note
  let deleteBtn10 = document.querySelector('#deleteBtn10');
  deleteBtn10.addEventListener("click", function () {
    localStorage.removeItem("input10");
    input10.value = "";
    }, false);

//Save 11am Note
let input11 = document.querySelector(".input11");
let saveBtn11 = document.getElementById("saveBtn11");
let note11Saved = document.querySelector(".note11Saved");
save11Note();
function save11Note() {
    let input11 = localStorage.getItem("input11");
    note11Saved.textContent = input11;
}
saveBtn11.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input11 = document.querySelector(".input11").value;
    localStorage.setItem("input11", input11);
    save11Note();
  });

//Delete 11am Note
  let deleteBtn11 = document.querySelector('#deleteBtn11');
  deleteBtn11.addEventListener("click", function () {
    localStorage.removeItem("input11");
    input11.value = "";
    }, false);

//Save 12pm Note
let input12 = document.querySelector(".input12");
let saveBtn12 = document.getElementById("saveBtn12");
let note12Saved = document.querySelector(".note12Saved");
save12Note();
function save12Note() {
    let input12 = localStorage.getItem("input12");
    note12Saved.textContent = input12;
}
saveBtn12.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input12 = document.querySelector(".input12").value;
    localStorage.setItem("input12", input12);
    save12Note();
  });

//Delete 12pm Note
  let deleteBtn12 = document.querySelector('#deleteBtn12');
  deleteBtn12.addEventListener("click", function () {
    localStorage.removeItem("input12");
    input12.value = "";
    }, false);

//Save 1pm Note
let input1 = document.querySelector(".input1");
let saveBtn1 = document.getElementById("saveBtn1");
let note1Saved = document.querySelector(".note1Saved");
save1Note();
function save1Note() {
    let input1 = localStorage.getItem("input1");
    note1Saved.textContent = input1;
}
saveBtn1.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input1 = document.querySelector(".input1").value;
    localStorage.setItem("input1", input1);
    save1Note();
  });

//Delete 1pm Note
  let deleteBtn1 = document.querySelector('#deleteBtn1');
  deleteBtn1.addEventListener("click", function () {
    localStorage.removeItem("input1");
    input1.value = "";
    }, false);

//Save 2pm Note
let input2 = document.querySelector(".input2");
let saveBtn2 = document.getElementById("saveBtn2");
let note2Saved = document.querySelector(".note2Saved");
save2Note();
function save2Note() {
    let input2 = localStorage.getItem("input2");
    note2Saved.textContent = input2;
}
saveBtn2.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input2 = document.querySelector(".input2").value;
    localStorage.setItem("input2", input2);
    save2Note();
  });

//Delete 2pm Note
  let deleteBtn2 = document.querySelector('#deleteBtn2');
  deleteBtn2.addEventListener("click", function () {
    localStorage.removeItem("input2");
    input2.value = "";
    }, false);

//Save 3pm Note
let input3 = document.querySelector(".input3");
let saveBtn3 = document.getElementById("saveBtn3");
let note3Saved = document.querySelector(".note3Saved");
save3Note();
function save3Note() {
    let input3 = localStorage.getItem("input3");
    note3Saved.textContent = input3;
}
saveBtn3.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input3 = document.querySelector(".input3").value;
    localStorage.setItem("input3", input3);
    save3Note();
  });

//Delete 3pm Note
  let deleteBtn3 = document.querySelector('#deleteBtn3');
  deleteBtn3.addEventListener("click", function () {
    localStorage.removeItem("input3");
    input3.value = "";
    }, false);

//Save 4pm Note
let input4 = document.querySelector(".input4");
let saveBtn4 = document.getElementById("saveBtn4");
let note4Saved = document.querySelector(".note4Saved");
save4Note();
function save4Note() {
    let input4 = localStorage.getItem("input4");
    note4Saved.textContent = input4;
}
saveBtn4.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input4 = document.querySelector(".input4").value;
    localStorage.setItem("input4", input4);
    save4Note();
  });

//Delete 4pm Note
  let deleteBtn4 = document.querySelector('#deleteBtn4');
  deleteBtn4.addEventListener("click", function () {
    localStorage.removeItem("input4");
    input4.value = "";
    }, false);

//Save 5pm Note
let input5 = document.querySelector(".input5");
let saveBtn5 = document.getElementById("saveBtn5");
let note5Saved = document.querySelector(".note5Saved");
save5Note();
function save5Note() {
    let input5 = localStorage.getItem("input5");
    note5Saved.textContent = input5;
}
saveBtn5.addEventListener("click", function(event) {
    event.preventDefault();
  
    let input5 = document.querySelector(".input5").value;
    localStorage.setItem("input5", input5);
    save5Note();
  });

//Delete 5pm Note
  let deleteBtn5 = document.querySelector('#deleteBtn5');
  deleteBtn5.addEventListener("click", function () {
    localStorage.removeItem("input5");
    input5.value = "";
    }, false);
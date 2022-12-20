//Displays Current Day
$(".currentDay").text(moment().format('LLLL'));

//Clear Calendar
let clearBtn = document.querySelector('#clearBtn');
let input = document.querySelectorAll('.input').forEach(input => clearBtn.addEventListener('click', function () {
  input.value = '';
}, false));

//Makes alert pop up when alert button is clicked
//Use the addEventListener() method to attach a "click" event to an element
document.getElementById("saveBtn9").addEventListener("click", alertFunction);
function alertFunction() {
  confirm('Press OK if the 9am save button is working');
}

//Save Notes after refresh with Save button

// //Saving Text entered into Local Storage
// var eventText;
// var eventTime;
// function renderText () {   
//       var save9 = JSON.parse(localStorage.getItem("9:00 am"));
//       $("#9").val("");
//       $("#9").val(save9);
//   };
//   function renderText () {   
//         var save10 = JSON.parse(localStorage.getItem("10:00 am"));
//         $("#10").val("");
//         $("#10").val(save10);
//     };
//     // //Save to Local Storage Function
//     $(".saveBtn").click(function() {
//           eventText = $(this).siblings(".input").val();
//           console.log(eventText);
//           eventTime = $(this).siblings(".time-of-day").text();
//           console.log(eventTime);
//           localStorage.setItem(eventTime, JSON.stringify(eventText));
//           renderText ();
//       });
      
//       //Delete from Local Storage Button Function
//       $(".deleteBtn").click(function() {
//             eventText = $(this).siblings(".input").val();
//             eventText = $(this).siblings(".input").val();
//             eventTime = $(this).siblings(".time-of-day").text();
//             localStorage.setItem(eventTime, JSON.stringify(eventText));
//             renderText ();
//           });
    
      
        
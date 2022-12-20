//Displays Current Day
$(".currentDay").text(moment().format('LLLL'));

//Clear Calendar
var clearBtn = document.querySelector('#clearBtn');
var times = document.querySelectorAll('.input').forEach(times => clearBtn.addEventListener('click', function () {
  times.value = '';
}, false));;
// var nine = document.getElementById('9');
// var ten = document.getElementById('10');
// var eleven = document.getElementById('11');
// var twelve = document.getElementById('12');
// var one = document.getElementById('1');
// var two = document.getElementById('2');
// var three = document.getElementById('3');
// var four = document.getElementById('4');
// var five = document.getElementById('5');

// // Clear Calendar, Click Events
// clearBtn.addEventListener('click', function () {
//   nine.value = '';
// }, false);

// clearBtn.addEventListener('click', function () {
//   ten.value = '';
// }, false);

// clearBtn.addEventListener('click', function () {
//   eleven.value = '';
// }, false);
// clearBtn.addEventListener('click', function () {
//   twelve.value = '';
// }, false);
// clearBtn.addEventListener('click', function () {
//   one.value = '';
// }, false);    
// clearBtn.addEventListener('click', function () {
//   two.value = '';
// }, false);
// clearBtn.addEventListener('click', function () {
//   three.value = '';
// }, false);
// clearBtn.addEventListener('click', function () {
//   four.value = '';
// }, false);    
// clearBtn.addEventListener('click', function () {
//   five.value = '';
// }, false);     

// var eventText;
// var eventTime;

//Save Notes after refresh with Save button

// //Saving Text entered into Local Storage
// function renderText () {   
  //     var save9 = JSON.parse(localStorage.getItem("9:00 am"));
  //     $("#9").val("");
  //     $("#9").val(save9);
  // };
  // function renderText () {   
    //     var save10 = JSON.parse(localStorage.getItem("10:00 am"));
    //     $("#10").val("");
    //     $("#10").val(save10);
    // };
    // //Save to Local Storage Button Function
    // $(".saveBtn").click(function() {
      //     eventText = $(this).siblings(".input").val();
      //     console.log(eventText);
      //     eventTime = $(this).siblings(".time-of-day").text();
      //     console.log(eventTime);
      //     localStorage.setItem(eventTime, JSON.stringify(eventText));
      //     renderText ();
      // });
      
      //Delete from Local Storage Button Function
      // $(".deleteBtn").click(function() {
      //       eventText = $(this).siblings(".input").val();
      //       eventText = $(this).siblings(".input").val();
      //       eventTime = $(this).siblings(".time-of-day").text();
      //       localStorage.setItem(eventTime, JSON.stringify(eventText));
      // })
        // colorChange ();
        // renderText ();
        
        // });
        
        //for loop to get rid of all those click events
        // for (var i= 0; textArea.length; i++) {
        //   clearBtn.addEventListener("click", function() {
        //     console.log(i)
        //   })
        // }
        
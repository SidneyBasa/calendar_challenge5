// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var nine = document.getElementById("hour-9");
var ten = document.getElementById("hour-10");
var eleven = document.getElementById("hour-11");
var twelve = document.getElementById("hour-12");
var thirteen = document.getElementById("hour-13");
var fourteen = document.getElementById("hour-14");
var fifteen = document.getElementById("hour-15");
var sixteen = document.getElementById("hour-16");
var seventeen = document.getElementById("hour-17");

// var timeIs = document.getElementById("currentDay")

// Displaying the time and day on the header

// var timeIs = day().format('dddd');
var timeIs = dayjs().format('dddd, MMMM D');
$('#currentDay').text(timeIs);

$(function () {

  // January 9 2023 10:34pm us pacific
  nine.addEventListener("click", function() {
    console.log("The 9am button has been clicked" )


    if (document.body.children[1].children[0] ) {
      // console.log("Test document.body.children[1].children[0]", document.body.children[1].children[0])
      // console.log("Test document.body.children[1].children[0].children[0]", document.body.children[1].children[0].children[0])
      console.log("Test document.body.children[1].children[0].children[1]", document.body.children[1].children[0].children[1])
      document.body.children[1].children[0].children[1].setAttribute (
        "style",
        "background-color: Blue"
      );

    }

  }) 

  ten.addEventListener("click", function() {
    console.log("The 10am button has been clicked")
  })

  eleven.addEventListener("click", function() {
    console.log("The 11am button has been clicked")
  })

  twelve.addEventListener("click", function() {
    console.log("The 12pm button has been clicked")
  })

  thirteen.addEventListener("click", function() {
    console.log("The 13 hours button has been clicked")
  })

  fourteen.addEventListener("click", function() {
    console.log("The 14 hours button has been clicked")
  })

  fifteen.addEventListener("click", function() {
    console.log("The 15 hours button has been clicked")
  })

  sixteen.addEventListener("click", function() {
    console.log("The 16 hours button has been clicked")
  })

  seventeen.addEventListener("click", function() {
    console.log("The 17 hours button has been clicked")
  })

  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

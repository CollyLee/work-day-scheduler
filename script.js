// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(document).ready(function ()


// -------------------------------------------------------------------------------
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

var currentHour = parseInt(dayjs().format('HH'))
console.log(currentHour);

$('.time-block').each(function () {

  var thisHour = parseInt($(this).attr('id').split('-')[1]);
  console.log(thisHour);

  if (currentHour > thisHour) {
    $(this).attr('class', 'row time-block past');

  } else if (currentHour === thisHour) {
    $(this).attr('class', 'row time-block present');

  } else {
    $(this).attr('class', 'row time-block future');

  }
})

// -------------------------------------------------------------------------------
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// evaluates for a falsy statement, gives a blank array if null
var storageOutput = JSON.parse(localStorage.getItem('hour-tasks')) || []
console.log(storageOutput);

$('description').each(function () {
  ($(this)[0]).value((storageOutput)[0]);
})

// ------------------------------------------------------------------------------
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

var storageArray = []

function saveTasks() {

  storageArray = []

  $('.description').each(function () {
    var thisNote = ($(this)[0].value);
    storageArray.push(thisNote);
  })

  localStorage.setItem('hour-tasks', JSON.stringify(storageArray))
}
$('.saveBtn').on('click', saveTasks)

// ------------------------------------------------------------------------------
// TODO: Add code to display the current date in the header of the page.

var currentTimeHeader = $('#current-time')
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("current-time").innerHTML = "The current time is " + dayjs().format('MMM D, YYYY, HH:MM:ss A')
}
$(document).ready(function () {


// -------------------------------------------------------------------------------
// Function that changes the color of the hour blocks depending on if they are past, present, or future

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
// Function that loads the textarea input saved from the previous session

// evaluates for a falsy statement, gives a blank array if null
var storageOutput = JSON.parse(localStorage.getItem('hour-tasks')) || []
console.log(storageOutput);

$('.description').each(function (indexItem) {
  console.log(this);
  ($(this)).val(storageOutput[indexItem]);
})

// ------------------------------------------------------------------------------
// Button that saves the textarea

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
// Displays current date in the header

var currentTimeHeader = $('#current-time')
setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("current-time").innerHTML = "The current time is " + dayjs().format('MMM D, YYYY, HH:MM:ss A')
}

// ------------------------------------------------------------------------------
// Button that clears the localStorage

var clearButton = document.getElementById('clear-button')

function clearCal() {
  localStorage.removeItem('hour-tasks');
  location.reload();
}

clearButton.addEventListener('click', clearCal);

})


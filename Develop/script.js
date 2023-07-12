// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Add current date to dayjs to display in header
//var currentDate = $('currentDay');
//$('#currentDay').text(today.format('MMM D, YYYY'));

var today = dayjs().format('ddd, MMM D, YYYY');
$('#currentDay').text(today);




// Add additional time blocks to HTML - In the HTML



// Color code time blocks to indicate Past / Present / Future
   // Detect past / present / future

var now = dayjs().format('H');  
   console.log(now);



//var timeBlock = $('.time-block')

//assign each time block a value to compare to now
// select the the divs with their class
// find a code to select the numbers in the id value of each div

function blockColor() {
   $('.time-block').each(function() {
    var hour = parseInt(this.id);
    $(this).toggleClass('past', hour < now);
    $(this).toggleClass('present', hour === now);
    $(this).toggleClass('future', hour > now);

   });

   }
   blockColor()


// Click the time-block, be able to input information
// When I click the save button - text is saved in local storage 
// Event Listener on Save Button to save the info to Local Storage

function saveText() {
$('.saveBtn').on('click', function() {
  var key = $(this).parent().attr('id')
  var value = $(this).siblings('.description').val();
  localStorage.setItem(key, value);
});
}
saveText()



// When we refresh the page, then the saved events persist.
//we need to refresh the block colors each time depending on the current time
function colorRef() {
  $('.time-block').each(function() {
    var hour = parseInt(this.id);
    if (hour == now) {
      $(this).removeClass('past future').addClass('present');
    } else if (hour < now) {
      $(this).removeClass('future present').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future')
    }
  });
}
colorRef()



//we need to get the info from localStorage and have it read to the DOM

$('.time-block').each(function() {
  var key = $(this).attr('id')
  var value = localStorage.getItem(key);
  $(this).children('.description').val(value);

});


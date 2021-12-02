// gets today's date and displays on jumbotron
var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDay);

// determines if the hour is past/present/future
function hourCheck(){
    // gets current hour
    var currentTime = moment().hour();

    $(".time-block").each(function(){
        // gets the current timeblock's hour
        var timeBlockHr = parseInt($(this).attr("id"));
   
        // past
        if(timeBlockHr < currentTime){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        // present
        else if(timeBlockHr === currentTime){
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        // future
        else{
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    });


};

// loads the tasks 
function loadTasks(){
    for(var i = 9; i < 18; i++){
        $("#" + i + " .text").val(localStorage.getItem(i));
    }
};


// when save button is clicked, saves the values within the button's div
$(".saveBtn").on("click", function(){
    // grabs the hour id from the div
    var hour = $(this).parent().attr("id");
    // grabs the value inputted in the textarea within that div
    var inputText = $(this).siblings(".text").val();

    // sets them into local storage
    localStorage.setItem(hour, inputText);
});

// loads the tasks from within local storage
loadTasks();

// checks the hour for past/present/future
hourCheck();

// make hourCheck() happen every minute
setInterval(function() {
    hourCheck();
}, 60000);
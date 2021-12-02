var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDay);

// determines if the hour is present/past/future
function hourCheck(){
    // gets current hour
    var currentTime = moment().hour();


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
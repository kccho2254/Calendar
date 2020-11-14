// key : value pair for local storage
// key is the specific time; value is the activity; 9am : run; 10am : breakfast
// div with buttons that save locally
// save button that saves to local storage on click

//function clickBtn
// -> capture time and activity/value into local storage   
// use let/const instead of var for time/value

//moment.js
//gives real time
let timeDisplayEl = $('#time-display');

function displayTime() {
    let rightNow = moment().format('dddd MMMM Do');
    timeDisplayEl.text(rightNow);
}
// Checking each hour and seeing if each hour in the calendar has past it
function checkHour() {

    // returns the current hour
    let hours = parseInt(moment().format('HH'));

    // return id of each .save-button
    $('.row').each(function () {
        var rowTime = $(this).children('button').attr('id');
        console.log(rowTime);
        if (parseInt(rowTime) < hours) {
            $(this).children('textarea').addClass("past");
        }
        if (parseInt(rowTime) === hours) {
            $(this).children('textarea').addClass("present");
        }
        if (parseInt(rowTime) > hours) {
            $(this).children('textarea').addClass("future");
        }


    })
}

$('.save-button').on('click', function () {
    let time = $(this).attr('id');
    let value = $(this).siblings('textarea').val();

    console.log(time, value)

    localStorage.setItem(time, value);


})

function getValues() {

    // I attempted to make a for loop that does the same thing as the code below it
    // In hindsight I should have created an array that holds one key in local storage and assigns multiple values based on inputs
    // then put it all in a function

    // for (var i = 0; i < localStorage.length; i++) {
    //     var eachVal = localStorage.getItem(localStorage.key(i));

    //     // if (eachVal !== the key corresponding to each eachVal){
    //     //     return "";
    //     // }

    //     for (var j = 0; j < 8; j++) {
    //         var vals = document.getElementById('a').innerHTML;
    //         vals.appendChild(eachVal);
    //         // Returns: Uncaught DOMException: Failed to execute 'appendChild' on 'Node': Only one element on document allowed.

    //     }

    // }
    let x = localStorage.getItem("9");
    let xx = localStorage.getItem("10");
    let xxx = localStorage.getItem("11");
    let xxxx = localStorage.getItem("12");
    let xxxxx = localStorage.getItem("13");
    let xxxxxx = localStorage.getItem("14");
    let xxxxxxx = localStorage.getItem("15");
    let xxxxxxxx = localStorage.getItem("16");
    let xxxxxxxxx = localStorage.getItem("17");
    document.getElementById("a").innerHTML = x;
    document.getElementById("b").innerHTML = xx;
    document.getElementById("c").innerHTML = xxx;
    document.getElementById("d").innerHTML = xxxx;
    document.getElementById("e").innerHTML = xxxxx;
    document.getElementById("f").innerHTML = xxxxxx;
    document.getElementById("g").innerHTML = xxxxxxx;
    document.getElementById("h").innerHTML = xxxxxxxx;
    document.getElementById("i").innerHTML = xxxxxxxxx;
}


getValues();
checkHour();
setInterval(displayTime);
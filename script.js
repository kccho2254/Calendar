let timeDisplayEl = $('#time-display');

function displayTime() {
    let rightNow = moment().format('dddd MMMM Do');
    timeDisplayEl.text(rightNow);
}
function checkHour() {
    let hours = parseInt(moment().format('HH'));

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

    let a = localStorage.getItem("9");
    let b = localStorage.getItem("10");
    let c = localStorage.getItem("11");
    let d = localStorage.getItem("12");
    let e = localStorage.getItem("13");
    let f = localStorage.getItem("14");
    let g = localStorage.getItem("15");
    let h = localStorage.getItem("16");
    let i = localStorage.getItem("17");
    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;
    document.getElementById("d").innerHTML = d;
    document.getElementById("e").innerHTML = e;
    document.getElementById("f").innerHTML = f;
    document.getElementById("g").innerHTML = g;
    document.getElementById("h").innerHTML = h;
    document.getElementById("i").innerHTML = i;
}

getValues();
checkHour();
setInterval(displayTime);

(() => {
    var __webpack_modules__ = ({
        "./script.js":
        (() => {

            eval("let timeDisplayEl = $('#time-display');\r\n\r\nfunction displayTime() {\r\n    let rightNow = moment().format('dddd MMMM Do');\r\n    timeDisplayEl.text(rightNow);\r\n}\r\nfunction checkHour() {\r\n    let hours = parseInt(moment().format('HH'));\r\n\r\n    $('.row').each(function () {\r\n        var rowTime = $(this).children('button').attr('id');\r\n        console.log(rowTime);\r\n        if (parseInt(rowTime) < hours) {\r\n            $(this).children('textarea').addClass(\"past\");\r\n        }\r\n        if (parseInt(rowTime) === hours) {\r\n            $(this).children('textarea').addClass(\"present\");\r\n        }\r\n        if (parseInt(rowTime) > hours) {\r\n            $(this).children('textarea').addClass(\"future\");\r\n        }\r\n    })\r\n}\r\n\r\n$('.save-button').on('click', function () {\r\n    let time = $(this).attr('id');\r\n    let value = $(this).siblings('textarea').val();\r\n\r\n    console.log(time, value)\r\n\r\n    localStorage.setItem(time, value);\r\n})\r\n\r\nfunction getValues() {\r\n\r\n    let a = localStorage.getItem(\"9\");\r\n    let b = localStorage.getItem(\"10\");\r\n    let c = localStorage.getItem(\"11\");\r\n    let d = localStorage.getItem(\"12\");\r\n    let e = localStorage.getItem(\"13\");\r\n    let f = localStorage.getItem(\"14\");\r\n    let g = localStorage.getItem(\"15\");\r\n    let h = localStorage.getItem(\"16\");\r\n    let i = localStorage.getItem(\"17\");\r\n    document.getElementById(\"a\").innerHTML = a;\r\n    document.getElementById(\"b\").innerHTML = b;\r\n    document.getElementById(\"c\").innerHTML = c;\r\n    document.getElementById(\"d\").innerHTML = d;\r\n    document.getElementById(\"e\").innerHTML = e;\r\n    document.getElementById(\"f\").innerHTML = f;\r\n    document.getElementById(\"g\").innerHTML = g;\r\n    document.getElementById(\"h\").innerHTML = h;\r\n    document.getElementById(\"i\").innerHTML = i;\r\n}\r\n\r\ngetValues();\r\ncheckHour();\r\nsetInterval(displayTime);\r\n\n\n//# sourceURL=webpack://calendar/./script.js?");

            /***/
        })

        /******/
    });
    var __webpack_exports__ = {};
    __webpack_modules__["./script.js"]();
})();

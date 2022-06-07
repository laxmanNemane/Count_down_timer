// console.log("lakhan you can do it ")
var newYear = "1 Jan 2023"
const dayE1 = document.getElementById("day");
const HoursE1 = document.getElementById("Hours");
const MinutesE1 = document.getElementById("Minutes");
const SecondsE1 = document.getElementById("Seconds");

function countdown() {
    const newdate = new Date(newYear)
    // console.log(newdate)
    const date = new Date()
    // console.log(date)

    const totaltime = (newdate - date) / 1000;
    // console.log(totaltime)


    var days = Math.floor(totaltime / 3600 / 24);
    // console.log(days)
    var hours = Math.floor(totaltime / 3600) % 24;
    // console.log(hours)
    var minutes = Math.floor(totaltime / 60) % 60;
    // console.log(minutes)
    var seconds = Math.floor(totaltime) % 60;
    // console.log(seconds)
    // console.log(days ,"", hours ,"", minutes ,"", seconds)

    dayE1.innerHTML = days;
    HoursE1.innerHTML = hours;
    MinutesE1.innerHTML = minutes;
    SecondsE1.innerHTML = seconds;


}

countdown()
setInterval(countdown, 1000)
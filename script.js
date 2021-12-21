let daysEl = document.getElementById("days");
let hoursEl = document.getElementById("hours");
let minsEl = document.getElementById("mins");
let secsEl = document.getElementById("secs");
let newYear = "1 Jan 2022";

setInterval(leftTime, 1000);

function leftTime(){
    let curDate = new Date();
    let newYearDate = new Date(newYear);

    let totalSeconds = (newYearDate-curDate)/1000;
    let days = Math.floor(totalSeconds/3600/24);
    let hours = Math.floor(totalSeconds/3600)%24;
    let minutes = Math.floor(totalSeconds/60)%60;
    let seconds = Math.floor(totalSeconds%60);

    daysEl.innerText = days;
    hoursEl.innerText = hours;
    minsEl.innerText = formatTime(minutes);
    secsEl.innerText = formatTime(seconds);
}

function formatTime(time){
    return time<10?`0${time}`:time;
}



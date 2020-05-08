const hourText = document.querySelector(".hour");
const minutesText = document.querySelector(".minutes");
const secondsText = document.querySelector(".seconds");
const separator = document.querySelector(".separator");
const dateDisplayText = document.querySelector(".date");

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let day = date.getDay();
    let year = date.getFullYear();
    let dd = date.getDate();
    let mm = date.getMonth();


    let dayWord = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'];
    let dayMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    day = (dayWord[day]);
    mm = (dayMonth[mm]);


    seconds = (seconds < 10) ? "0" + seconds : seconds
    hour = (hour < 10) ? "0" + hour : hour
    minutes = (minutes < 10) ? "0" + minutes : minutes
    dd = (dd < 10) ? "0" + dd : dd
    mm = (mm < 10) ? "0" + mm : mm


    hourText.innerHTML = hour;
    minutesText.innerHTML = minutes;
    secondsText.innerHTML = seconds;
    dateDisplayText.innerHTML = `${day} ${dd} ${mm} ${year}`;
}



function blink() {
    separator.classList.remove("blink");
    setTimeout(() => {
        separator.classList.add("blink")
    }, 300);
}


setInterval(() => {
    showTime();

    blink();

}, 1000);

showTime()
blink()
const months=["january","february","march","April","May","June","July","August","September","October","November","December"]
const weekdays=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const duration = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear,tempMonth,tempDay + 10,11,30,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent=`giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future time in millisecs
const futureTime = futureDate.getTime();

function getRenmainingTime() {
    const today = new Date().getTime();
    const timedif = futureTime -today;
   

    // 1s = 1000millisecs
    // 1m = 60s
    // 1hr = 60m
    // 1day = 24hr

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour =60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    let days = timedif / oneDay
    days = Math.floor(days);
    let hours = Math.floor((timedif % oneDay)/ oneHour);
    let minutes = Math.floor((timedif % oneHour)/ oneMinute);
    let seconds = Math.floor((timedif % oneMinute)/ 1000);

    const values = [days, hours, minutes, seconds];

    function doubleDigit(digit) {
        if(digit < 10) {
            return digit = `0${digit}`
        }
        return digit
    }
    duration.forEach(function(item, index) {
        item.innerHTML = doubleDigit(values[index]);
    });
    if(timedif < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, this giveawy has expired</h4>`;
    }

} 
let countdown = setInterval(getRenmainingTime, 1000)  
getRenmainingTime();
"use strict";

const minuteHand = document.getElementById("js-minute-hand"),
      secondsHand = document.getElementById("js-seconds-hand"),
      hourHand = document.getElementById("js-hour-hand");

function getCurrentTime() {
    let currentDate = new Date();
    
    let currentSeconds = currentDate.getSeconds(),
        secondsInDegree = (((currentSeconds / 60) * 360) + 90);
    
    let currentMinute= currentDate.getMinutes(), 
        minuteInDegree = (((currentMinute / 60) * 360) + 90);
    
    let currentHour= currentDate.getHours(), 
        hourInDegree = (((currentHour / 12) * 360) + 90);

    secondsHand.style.transform = `rotate(${secondsInDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteInDegree}deg)`;
    hourHand.style.transform = `rotate(${hourInDegree}deg)`;
}
setInterval(getCurrentTime, 1000);


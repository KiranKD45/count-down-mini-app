const daysElement    = document.getElementById("days")
const hoursElement   = document.getElementById("hours")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")


const newYear = "1 jan 2024";
function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    // console.log(newYearDate);
    // console.log(currentDate);

    const totalSeconds =  (newYearDate -currentDate) / 1000;
    // console.log(totalSeconds);
    const days = Math.floor(totalSeconds/ (60*60*24));
    const hours = Math.floor(totalSeconds / (60*60)) % 24 ;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)% 60;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);

    function formatTime (time){
        return time < 10 ? `0${time}` :  time;
    }
     
    // console.log(days, hours ,minutes , seconds);

}
countdown();
setInterval(countdown, 1000);
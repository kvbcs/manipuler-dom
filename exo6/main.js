let convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;
let resultSeconds = document.querySelector("#resultSeconds")
let resultMinutes = document.querySelector("#resultMinutes")
let resultDays = document.querySelector("#resultDays")
let resultHours = document.querySelector("#resultHours")

convert.addEventListener("click", () => {
 let numberOfYears = document.getElementById("numberOfYears").value ;
resultDays.innerHTML = numberOfYears * daysInYear + " jours"
resultHours.innerHTML = numberOfYears * daysInYear * hoursInDay + " heures"
});

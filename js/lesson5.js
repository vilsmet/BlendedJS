// ЗАДАЧА 1 
// НАПИШІТЬ СЕКУНДОМІР

const refs={
startBtnEl: document.querySelector("#start"),
stopBtnEl: document.querySelector("#stop"),
secondsNumberEl:document.querySelector(".seconds"),
minutesNumberEl:document.querySelector(".minutes"),
hoursNumberEl:document.querySelector(".hours"),
daysNumberEl:document.querySelector(".days"),
};
let secondId=null;
let startCurrentTime=null;
let currentTime=null;
let passedSeconds=null;

function onStartBtnClick(){
    startCurrentTime= Date.now();
    console.log("Runed!", startCurrentTime);
    secondId=setInterval(updateStopwatch, 1000);
};
function onStopBtnClick(){
    console.log("Stoped!");
    clearInterval(secondId);
};
refs.startBtnEl.addEventListener("click",onStartBtnClick);
refs.stopBtnEl.addEventListener("click",onStopBtnClick);
function updateStopwatch() {   
    
    currentTime=Date.now();
    passedSeconds=Math.floor((currentTime-startCurrentTime)/1000);
    console.log(passedSeconds);
    const currentPasedSeconds=passedSeconds % 60;
    const currentPasedMinute=Math.floor(passedSeconds / 60);
    refs.secondsNumberEl.textContent= currentPasedSeconds<10?`0${currentPasedSeconds}`: currentPasedSeconds;
    refs.minutesNumberEl.textContent= currentPasedMinute<10?`0${currentPasedMinute}`: currentPasedMinute;
};
// Завдання додому : 
// Доповнити код для підрахунку годин та днів по аналогії

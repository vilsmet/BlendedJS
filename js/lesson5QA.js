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
let  secondsId=null;
let startCurrentTime=null;
let currentTime=null;
let passedSeconds=null;

refs.startBtnEl.disabled= false;
refs.stopBtnEl.disabled= true;

function onStartBtnClick(){
    refs.startBtnEl.disabled= true;
    refs.stopBtnEl.disabled= false;
    startCurrentTime= Date.now();

// строка нижче для прискореної перевірки роботи формул підрахунку занчення хвилин, годин,днів
    currentTime= 8639136;
     // для корректної роботи секундоміра ЗАКОМЕНТУЙ рядок вищче!!!!!!!!!!!!!!!!
    
    console.log("Runed!", startCurrentTime);

    //  secondsId=setInterval(updateStopwatch, 1000);
    // для корректної роботи секундоміра розкоментуй рядок вище

    // строка нижче для прискореної перевірки роботи формул підрахунку занчення хвилин, годин,днів
     secondsId=setInterval(updateStopwatch, 1);
        // для корректної роботи секундоміра ЗАКОМЕНТУЙ рядок вищче

};
function onStopBtnClick(){
    console.log("Stoped!");
    clearInterval(secondsId);
    refs.startBtnEl.disabled= false;
    refs.stopBtnEl.disabled= true;
};
refs.startBtnEl.addEventListener("click",onStartBtnClick);
refs.stopBtnEl.addEventListener("click",onStopBtnClick);
function updateStopwatch() {   
    
    currentTime+=1;
    passedSeconds=Math.floor((currentTime)/1);
    // для корректної роботи секундоміра ЗАКОМЕНТУЙ 2 рядка вище 
    // і розкоментуй 2 рядки нижче 
    // currentTime=Date.now();
    // passedSeconds=Math.floor((currentTime-startCurrentTime)/1000);

    console.log(passedSeconds);
    
    // 1minute has 60sec
    // 1 hour has 3600sec
    // 1 day has 86400sec
    
    const seconds=Math.floor((passedSeconds%(86400)%3600)%60);
    const minutes=Math.floor((passedSeconds%(86400)%3600)/60);
    const hours=Math.floor((passedSeconds%86400)/3600);
    const days=Math.floor(passedSeconds/86400);
    
    console.log(days,hours,minutes,seconds);
    refs.secondsNumberEl.textContent= seconds<10?`0${seconds}`: seconds;
    refs.minutesNumberEl.textContent= minutes<10?`0${minutes}`: minutes;
    refs.hoursNumberEl.textContent= hours<10?`0${hours}`: hours;
    refs.daysNumberEl.textContent= days<10?`0${days}`: days;
};


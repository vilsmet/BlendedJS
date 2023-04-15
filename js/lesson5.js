// ЗАДАЧА 1
// НАПИШІТЬ СЕКУНДОМІР

const refs = {
  startBtnEl: document.querySelector("#start"),
  stopBtnEl: document.querySelector("#stop"),
  secondsNumberEl: document.querySelector(".seconds"),
  minutesNumberEl: document.querySelector(".minutes"),
  hoursNumberEl: document.querySelector(".hours"),
  daysNumberEl: document.querySelector(".days"),
};
let secondsId = null;
let startCurrentTime = null;
let currentTime = null;
let passedSeconds = null;

refs.startBtnEl.disabled = false;
refs.stopBtnEl.disabled = true;

refs.startBtnEl.addEventListener("click", onStartBtnClick);
refs.stopBtnEl.addEventListener("click", onStopBtnClick);

function onStartBtnClick() {    
  refs.startBtnEl.disabled= true;
  refs.stopBtnEl.disabled= false;

  startCurrentTime = Date.now();  
  secondsId = setInterval(updateStopwatch, 1000);
}

function onStopBtnClick() {
  refs.startBtnEl.disabled= false;
  refs.stopBtnEl.disabled= true;
  clearInterval(secondsId);
}

function updateStopwatch() {
  currentTime = Date.now();
  // 1 sec has 1000ms
  passedSeconds = Math.floor((currentTime - startCurrentTime) / 1000);
  // 1 minute has 60sec
  // 1 hour has 3600sec
  // 1 day has 86400sec
  const seconds = Math.floor(((passedSeconds % 86400) % 3600) % 60);
  const minutes = Math.floor(((passedSeconds % 86400) % 3600) / 60);
  const hours = Math.floor((passedSeconds % 86400) / 3600);
  const days = Math.floor(passedSeconds / 86400);

  refs.secondsNumberEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  refs.minutesNumberEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
  refs.hoursNumberEl.textContent = hours < 10 ? `0${hours}` : hours;
  refs.daysNumberEl.textContent = days < 10 ? `0${days}` : days;
}

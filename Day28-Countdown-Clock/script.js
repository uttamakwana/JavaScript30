const clock = document.querySelector(".clock");
const clockEnd = document.querySelector(".clock-end");
const buttons = document.querySelectorAll("button");
const timeInput = document.querySelector("#time");
let countDown;

function timer(timeValue = 3600) {
  let seconds = timeValue;
  let now = Date.now();
  let then = now + seconds * 1000;
  displayTimer(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    let secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimer(secondsLeft);
  }, 1000);
}

function displayTimer(seconds) {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;
  clock.textContent = `${minute} : ${second < 10 ? "0" : ""}${second}`;
}

function displayEndTime(then) {
  const time = new Date(then);
  const hour = time.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  clockEnd.textContent = `${adjustedHour} : ${
    minute < 10 ? "0" : ""
  }${minute} : ${seconds < 10 ? "0" : ""}${seconds}`;
}

function changeTime(e) {
  console.log(e);
  timeValue = Number(e.key);
  timer(timeValue);
}

timeInput.addEventListener("keydown", changeTime);
timer();

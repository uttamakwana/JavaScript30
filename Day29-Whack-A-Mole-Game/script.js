const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const score = document.querySelector(".score");
const gameTime = document.querySelector("#game-time");
const span = document.querySelector(".time-left");
const button = document.querySelector("button");
let timeToRun;
span.innerText = timeToRun || 10;

function randomTime(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

let lastHole;
function randomHole() {
  const idOfHole = Math.floor(Math.random() * holes.length);
  const hole = holes[idOfHole];
  if (lastHole === hole) {
    return randomHole();
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(800, 200);
  const hole = randomHole();
  console.log(time, hole);

  setTimeout(() => hole.classList.remove("up"), time);

  hole.classList.add("up");
}

let countDown;

function startGame() {
  score.textContent = 0;
  timeToRun = gameTime.value || 10;
  let counter = 0;
  if (button.textContent === "Stop!") {
    button.style.backgroundColor = "green";
    span.innerText = gameTime.value;
    button.textContent = "Start!";
    clearInterval(countDown);
    return;
  }
  button.style.backgroundColor = "red";
  button.textContent = "Stop!";
  countDown = setInterval(() => {
    counter++;
    span.innerText = timeToRun - counter;
    peep();
    if (counter == timeToRun) {
      button.style.backgroundColor = "green";
      span.innerText = gameTime.value;
      button.textContent = "Start!";
      clearInterval(countDown);
    }
  }, 1000);
}

let scoreValue = 0;
function updateScore() {
  scoreValue++;
  console.log("first")
  console.log(scoreValue);
  score.textContent = scoreValue;
  this.classList.remove("up");
  console.log(this);
}

moles.forEach((mole) => mole.addEventListener("click", updateScore));

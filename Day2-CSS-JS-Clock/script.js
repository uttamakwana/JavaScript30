const secondHand = document.querySelector(".second-hand");
const minuteHnad = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  console.log(hour, minutes, seconds);
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const hoursDegree = (hour / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHnad.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
setInterval(setTime, 1000);

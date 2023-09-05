const rateContainer = document.querySelector(".rate-container");
const rateBox = document.querySelector(".rate");
const video = document.querySelector("video");

function handleRate(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  console.log(percent);
  const min = 0.4;
  const max = 4;
  rateBox.style.height = Math.round(percent * 100) + "%";
  const playbackRate = percent * (max - min) + min;
  console.log(playbackRate)
  rateBox.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

rateContainer.addEventListener("mousemove", handleRate);

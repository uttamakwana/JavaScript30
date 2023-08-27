const videos = Array.from(document.querySelectorAll('[data-time'));

const seconds = videos
    .map((video) => video.dataset.time)
    .map((time) => {
        const [min, sec] = time.split(":").map(Number);
        return min * 60 + sec;
    })
    .reduce((total, videoSeconds) => total + videoSeconds);

console.log(seconds);

let secondsLeft = seconds;

const hour = Math.floor(secondsLeft / 3600);

secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);

secondsLeft = secondsLeft % 60;

console.log("hour: " + hour + " minutes: " + minutes + " seconds left: " + secondsLeft);
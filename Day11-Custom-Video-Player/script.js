const player = document.querySelector(".player");

const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector('.progress__filled');

const toggleBtn = player.querySelector(".toggle");

const playerSlider = player.querySelectorAll(".player__slider");

const skipButton = player.querySelectorAll("[data-skip]");

// functions
function togglePlay(e) {
    // console.log(e);
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    toggleBtn.textContent = video.paused ? "►" : "❚ ❚"
}

function skip() {
    video.currentTime += Number(this.dataset.skip);
}

function changeSlider() {
    video[this.name] = this.value;
}

function updateProgressBar() {
    progressBar.style.flexBasis = (video.currentTime / video.duration) * 100 + "%";
}

function updateVideoTime(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// function fullScreen() {
//     if (!document.fullscreenElement) {
//         // If the video element is not in fullscreen mode, go fullscreen.
//         console.log("barnu")
//         if (video.requestFullscreen) {
//             console.log("first")
//             video.requestFullscreen();
//         } else if (video.mozRequestFullScreen) {
//             video.mozRequestFullScreen();
//         } else if (video.webkitRequestFullscreen) {
//             video.webkitRequestFullscreen();
//         } else if (video.msRequestFullscreen) {
//             video.msRequestFullscreen();
//         }
//     } else {
//         // If the video element is in fullscreen mode, exit fullscreen.
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) {
//             document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) {
//             document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) {
//             document.msExitFullscreen();
//         }
//     }
// }


function fullScreen() {
    if (!document.fullscreenElement) {
        // If not in fullscreen, enter fullscreen mode
        if (player.requestFullscreen) {
            player.requestFullscreen();
        } else if (player.mozRequestFullScreen) {
            player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
            player.webkitRequestFullscreen();
        } else if (player.msRequestFullscreen) {
            player.msRequestFullscreen();
        }
        player.classList.add("fullscreen"); // Apply the fullscreen styling
    } else {
        // If in fullscreen, exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        player.classList.remove("fullscreen"); // Remove the fullscreen styling
    }
}
window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {
        video.currentTime += 10;
    }
    if (e.key == "ArrowLeft") {
        video.currentTime -= 10;
    }
})
window.addEventListener("keypress", (e) => {
    if (e.keyCode == 32) {
        togglePlay();
    }
})
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", updateProgressBar);
toggleBtn.addEventListener("click", togglePlay);
skipButton.forEach(button => { button.addEventListener("click", skip) })
playerSlider.forEach(slider => { slider.addEventListener("change", changeSlider) });
progress.addEventListener("click", updateVideoTime);

let mouseDown = false;
progress.addEventListener("mousemove", (e) => {
    if (mouseDown) {
        updateVideoTime(e);
        updateProgressBar(e);
    }
});
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false);

let controlsTimeout;

function hideControls() {
    player.classList.add("controls-hidden");
}

function showControls() {
    player.classList.remove("controls-hidden");
    clearTimeout(controlsTimeout);
    controlsTimeout = setTimeout(hideControls, 1000); // Hide controls after 1 second of inactivity
}

// ... Existing event listeners ...

// Add event listeners for user interactions to show controls
player.addEventListener("mousemove", showControls);
player.addEventListener("keydown", showControls);
player.addEventListener("click", showControls);
player.addEventListener("focusin", showControls);

// Initial hide controls timeout
controlsTimeout = setTimeout(hideControls, 1000);

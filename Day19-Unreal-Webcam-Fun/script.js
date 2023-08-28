const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
            console.log(stream);
            video.srcObject = stream; // Set the stream directly as the source
            video.play();
        })
        .catch(error => {
            console.error('Error accessing webcam:', error);
        });
}


function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    console.log(width, height);

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);

        let pixels = ctx.getImageData(0, 0, width, height);
        console.log(pixels);
        // debugger;
        // pixels = redEffect(pixels);
        // pixels = rgbSplit(pixels);
        // ctx.globalAlpha = 0.1;
        // ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function redEffect(pixels) {

    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 100;
        pixels.data[i + 1] = pixels.data[i + 1] - 50;
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
    }

    return pixels;
}

function rgbSplit(pixels) {

    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0];
        pixels.data[i + 100] = pixels.data[i + 1];
        pixels.data[i - 150] = pixels.data[i + 2];
    }

    return pixels;
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const imageData = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = imageData;
    // link.textContent = "Download Photo";
    link.innerHTML = `
        <img src=${link.href} alt="Handsome Human" />
    `;
    link.setAttribute('download', 'your-photo.jpeg');
    strip.insertBefore(link, strip.firstChild);
}

// getVideo();
video.addEventListener("canplay", paintToCanvas);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
let addEmojiState = false;
let toggleTranscriptState = false;
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
let words = document.querySelector('.words');
words.appendChild(p);

// recognition.start();
recognition.addEventListener("result", e => {
    const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join("");

    if (addEmojiState && transcript.includes("dog")) {
        const modifiedTranscript = transcript.replace(/dog/gi, "🐕"); // Fix here
        console.log("dog");
        p.textContent = modifiedTranscript; // Assign the modified transcript
    } else {
        p.textContent = transcript; // Set the original transcript if no replacement needed
    }
    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }
    console.log(transcript);
});

recognition.addEventListener("end", () => {
    if (toggleTranscriptState) {
        recognition.start();
    }
});

function addEmoji() {
    console.log(addEmojiState)
    addEmojiState = !addEmojiState;

    const button = document.querySelector(".emoji-btn");
    if (addEmojiState) {
        button.style.background = "yellow";
        button.style.border = "1px solid black";
        button.textContent = "Don't add emoji";
    }
    else {
        button.style.background = "whitesmoke";
        button.style.border = "1px solid black";
        button.textContent = "Add emojis"
    }
}

function toggleTranscript() {
    toggleTranscriptState = !toggleTranscriptState;
    const button = document.querySelector(".transcript-btn");
    console.log(toggleTranscriptState);
    if (toggleTranscriptState) {
        recognition.start();
        button.textContent = "Stop 🛑";
    }
    else {
        recognition.stop();
        button.textContent = "Start 🏃"
    }
}
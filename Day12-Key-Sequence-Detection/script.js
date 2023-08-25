const pressedKey = [];
const secretCode = "uttam";
const para = document.querySelector("p");

window.addEventListener("keyup", function (e) {
    console.log(e.key);
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122) {
        pressedKey.push(e.key);
    }
    if(e.key === " ") {
        pressedKey.push(" ");
    }
    if (e.key == "Backspace") {
        pressedKey.pop();
    }
    console.log(pressedKey);
    pressedKey.splice(-secretCode.length - 1, pressedKey.length - secretCode.length);
    console.log(pressedKey);
    para.textContent = pressedKey.join("");
    if (pressedKey.join("") === secretCode) {
        alert(`You Win! Cause secret code is ${secretCode}`);
    }
})
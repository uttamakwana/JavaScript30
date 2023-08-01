function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  console.log(audio);
  audio.play();

  const box = document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(box);

  box.classList.add("active");
}
function removeTransition(e) {
  if (e.propertyName !== "scale") return;
  console.log(e.propertyName);
  // this will refer to the key in keys
  // it means it will only remove the active class on the box (key) where it was added
  this.classList.remove("active");
}

// accessing the keys/ box
const keys = document.querySelectorAll(".box");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

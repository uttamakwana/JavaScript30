const panels = document.querySelectorAll(".panel");
console.log(panels);

function toggleActive() {
  this.classList.toggle("active");
}

function toggleActiveText(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("active-text");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", toggleActive);
});

panels.forEach((panel) => {
  panel.addEventListener("transitionend", toggleActiveText);
});

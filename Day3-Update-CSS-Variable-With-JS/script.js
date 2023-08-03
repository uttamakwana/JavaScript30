const controls = document.querySelectorAll(".controls");

function handleUpdate() {
  //   console.log(this.value);
  // object that contains all the data-attributes in an element
  //   console.log(this.dataset);
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value + suffix}`
  );
  //   console.log(
  //     document.documentElement.style.setProperty("--color", this.value)
  //   );
  //   console.log(
  //     document.documentElement.style.setProperty("--spacing", this.value + suffix)
  //   );
  //   console.log(
  //     document.documentElement.style.setProperty("--blur", this.value + suffix)
  //   );
  //   console.log(suffix);
}

controls.forEach((control) => control.addEventListener("change", handleUpdate));
controls.forEach((control) =>
  control.addEventListener("mousemove", handleUpdate)
);

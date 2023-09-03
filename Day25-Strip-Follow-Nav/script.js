const triggers = document.querySelectorAll(".link");
const dropdownBackground = document.querySelector(".dropdown-background");
const nav = document.querySelector('nav');

function handleEnter(e) {
    this.classList.add("active");
    setTimeout(() =>
        this.classList.contains("active") && this.classList.add("active-enter"), 150);

    const dropdown = this.querySelector(".dropdown");
    console.dir(dropdown);
    const dropdownCoords = dropdown.getBoundingClientRect();
    console.log(this, dropdownCoords);
    const navCoords = nav.getBoundingClientRect();
    // console.log(nav);
    // console.log(navCoords);
    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        x: dropdownCoords.left - navCoords.left,
        y: dropdownCoords.top - navCoords.top
    }
    dropdownBackground.classList.add("open");
    dropdownBackground.style.height = coords.height + "px";
    dropdownBackground.style.width = coords.width + "px";
    dropdownBackground.style.transform = `translate(${coords.x}px, ${coords.y}px)`
}

function handleLeave(e) {
    this.classList.remove("active");
    setTimeout(() => {
        this.classList.remove("active-enter");
    }, 150);
    dropdownBackground.classList.remove("open");
}

triggers.forEach((trigger) => { trigger.addEventListener("mouseenter", handleEnter) });
triggers.forEach((trigger) => { trigger.addEventListener("mouseleave", handleLeave) });
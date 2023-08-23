const checkBoxs = document.querySelectorAll('input[type="checkbox"]');

let lastChecked;
function handleCheck(e) {
    let inBetween = false;
    // to make adjacent text strike through
    this.nextElementSibling.classList.toggle("checked");
    if (e.shiftKey && this.checked) {
        this.nextElementSibling.classList.add("checked");
        checkBoxs.forEach(checkBox => {
            if (checkBox === this || checkBox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkBox.checked = true;
                checkBox.nextElementSibling.classList.add("checked");
            }
        })
    }
    lastChecked = this;
}

checkBoxs.forEach(function (checkBox) {
    checkBox.addEventListener('click', handleCheck);
})
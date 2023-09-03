const divs = document.querySelectorAll('div');
const button = document.querySelector('.btn');

function triggerEvent(e) {
    console.log(this);
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling!
}

// Bubbling:-
// It means when I click on the innermot div "third" it also trigger the event on "one" and "second" as they are parents of it
// It means when I click on "third" it propogates towards the outer elements (parents) and if there are event listener it will immediately trigger the event on the elements
// to stop the propagtion -> e.stopPropagation();

// by default capture is set to false
// the below two methods are same
divs.forEach(div => div.addEventListener("click", triggerEvent));
divs.forEach(div => div.addEventListener("click", triggerEvent, { capture: false }));

// when I set capture to true what it does capture the event from the parent to child and if there are any parent event listener then it will immediately trigger the event
divs.forEach(div => div.addEventListener("click", triggerEvent, { capture: true }));


// when you want to run an event only once, set once property to true inside third object arugument of addEventListener method

button.addEventListener("click", (e) => {
    console.log(e);
    button.textContent = "You have subscribed!";
    button.setAttribute("disabled", "disabled");
}, { once: true })
const heading = document.querySelector("h1");
const hero = document.querySelector(".hero");
console.log(hero);
console.log(heading);

// function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function () {
//         var context = this, args = arguments;
//         var later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }

function shadow(e) {
    console.log(e);
    const { offsetWidth: width, offsetHeight: height } = hero;
    // console.log(width, height);
    const walk = 100;

    let { offsetX: x, offsetY: y } = e;
    // console.log(x - width, y - height);
    if (this !== e.target) {
        console.log(x, y);
        x = x + 80;
        // console.log(e.target.offsetLeft, e.target.offsetTop);
        y = y + 80;
    }

    const xShadow = Math.floor(((x / width * walk) - (walk / 2)) / 5);
    const yShadow = Math.floor(((y / height * walk) - (walk / 2)) / 5);

    console.log(x, y);
    console.log("shadows", xShadow, yShadow)

    heading.style.textShadow = `${xShadow}px ${yShadow}px 0px yellowgreen`;
}

// hero.addEventListener("mousemove", debounce(shadow));
hero.addEventListener("mousemove", shadow);
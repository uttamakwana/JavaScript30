function debounce(func, wait = 50, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

//? What is debound function does?
//* Answer :- Actually the scroll event listener will fire more then 100 times in a second when you scroll and we are also calling a function on scroll event. This will cause performance issues. To avoid performance issues we are using debound function which will only fire the function after 50ms.

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.log(e);
    // console.log(window.scrollY + window.innerHeight);
    // console.log(window.scrollY);
    // console.count(e);
    sliderImages.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - (image.height / 2)
        console.log(slideInAt);
        const imageBottom = image.offsetTop + image.height;
        const isNotScrolledPast = window.scrollY < imageBottom;
        const isHalfShown = slideInAt > image.offsetTop;

        if (isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        }
        else {
            image.classList.remove('active');
        }
    })
}

window.addEventListener("scroll", debounce(checkSlide));
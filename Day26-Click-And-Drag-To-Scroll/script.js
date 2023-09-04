const slider = document.querySelector('.items');
let isDown;
let startX;
let scrollLeft;

console.log(slider);

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // startX = e.pageX - slider.offsetLeft;
    // scrollLeft = slider.scrollLeft;
    console.log(e.pageX - slider.offsetLeft);
    scrollLeft = slider.scrollLeft;
    startX = e.pageX - slider.offsetLeft;
    console.log(slider.scrollLeft);
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    console.count("working!!");
    let x = e.pageX - slider.offsetLeft;
    let walk = (x - startX) * 1.5;
    console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
    // let x = e.pageX - slider.offsetLeft;
    // let walk = x - startX;
    // slider.scrollLeft = scrollLeft - walk;
})
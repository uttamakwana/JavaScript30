const links = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function handleMouseEnter() {
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
        width: linkCoords.width,
        height: linkCoords.height
    }
    highlight.style.top = coords.top + 'px';
    highlight.style.left = coords.left + 'px';
    highlight.style.width = coords.width + 'px';
    highlight.style.height = coords.height + 'px';  
}
links.forEach(link => link.addEventListener("mouseenter", handleMouseEnter));
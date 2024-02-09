const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];
const list = document.querySelector(".list-container");
function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, "").trim();
}
const updatedBands = bands.map((band) => strip(band));
const sortedBands = updatedBands.sort((a, b) => (a > b ? 1 : -1));
console.log(sortedBands);
list.innerHTML = sortedBands
  .map((band) => {
    return `<li>${band}</li>`;
  })
  .join(" ");

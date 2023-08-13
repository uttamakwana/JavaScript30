const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
const list = document.querySelector(".container__list");
const search = document.querySelector("#search");

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

console.log("table", cities);

function findCities(searchValue, cities) {
  return cities.filter((element) => {
    const regex = new RegExp(searchValue, "gi");
    return element.city.match(regex) || element.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayCities() {
  const matchArray = findCities(this.value, cities);

  const items = matchArray
    .map((element) => {

      const regex = new RegExp(this.value, 'gi');
      const cityName = element.city.replace(regex, `<span class="hl">${this.value}</span>`)
      const stateName = element.state.replace(regex, `<span class="hl">${this.value}</span>`)
      return `
        <li class="container__list__item">
        <div>
         <p class="city">City: ${cityName}</p>
         <p class="state">State: ${stateName}</p>
        </div>
        <span class="population">Population: ${numberWithCommas(element.population)}</span>
        </li>
    `;
    })
    .join("");

  list.innerHTML = items;
}

search.addEventListener("change", displayCities);
search.addEventListener("keyup", displayCities);

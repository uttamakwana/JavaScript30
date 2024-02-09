// console.log("Hello");

function makeItGreen() {
  const para = document.querySelector("p");
  // para.style.color = "green";
  // para.style.backgroundColor = "#bada55";
  // para.style.padding = "16px";
  para.classList.toggle("green");
}

console.log("Hello this is some %s text", "nice");
const text = "nicee";
console.log(`Hello this is some ${text} text`);
console.log(
  "%cThis is big text",
  "font-size: 20px; color: green; background-color: #bada55; padding: 16px"
);
console.warn("This is warning!");
console.error("This is an error!");
console.info("This is an info!");

const para = document.querySelector("p");
console.dir(para);
// console.assert(para, "This is an error!");

console.clear();

const persons = [
  { name: "Uttam", age: 20 },
  { name: "Dhaval", age: 23 },
  { name: "Bharatbhai", age: 47 },
  { name: "Krishnaben", age: 40 },
];
persons.forEach((person) => {
  console.groupCollapsed(`${person.name}`);
  console.log(`Name is : ${person.name}`);
  console.log(`Age is : ${person.age}`);
  console.groupEnd();
});
console.clear();

console.count("Uttam");
console.count("Uttam");
console.count("Uttam");
console.count("Uttam");
console.count("Uttam");
console.count("Uttam");
console.count("Dhaval");
console.count("Dhaval");
console.count("Uttam");
console.count("Uttam");
console.count("Dhaval");
console.count("Uttam");

console.clear();

console.time("Fetching data");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    console.timeEnd("Fetching data");
  });

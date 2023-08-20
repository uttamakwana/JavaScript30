const persons = [
    {
        name: "Uttam",
        birthYear: 2003
    },
    {
        name: "Dhaval",
        birthYear: 2000
    },
    {
        name: "Bharatbhai",
        birthYear: 1976
    },
    {
        name: "Krishnaben",
        birthYear: 1983
    },
]

// const isAdult = persons.some(function(person) {
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.birthYear >= 18) {
//         return person;
//     }
// })

// console.log(isAdult);

// 2nd way

// const isAdult = persons.some(person => (new Date).getFullYear() - person.birthYear >= 18);

// console.log(isAdult);

// const allAdult = persons.every(function (person) {
//     const currentYear = (new Date()).getFullYear();
//     return currentYear - person.birthYear >= 18;
// });

// console.log(allAdult);

// const person = persons.find(person => person.name === "Krishnaben");

// console.log(person);

const person = persons.findIndex(person => person.name === "Uttam");

console.log(person);

const newPersons = [...persons.slice(0, person), ...persons.slice(person + 1)]

console.log(newPersons);
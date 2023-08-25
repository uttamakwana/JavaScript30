// start with numbers and strings

// numbers
let age = 100;
let age2 = age;

// console.log(age, age2);

age = 200;
// console.log(age, age2);

// strings
let name = "Uttam";
let name2 = name;

// console.log(name, name2);

name = "Dhaval";

// console.log(name, name2);

// arrays
const names = ["Uttam", "Dhaval", "abc"];
console.log("Names: ", names)

const names2 = names;
// names[2] = "Bharatbhai";
// console.group();
// console.log(names);
// console.log(names2);
// console.groupEnd();

//! It change the original array. As have try to change the value not by copy but we are directly changing the original reference array

//? So how to make a copy of the original array?

// 1st way
const names3 = [...names];
names3[2] = "Bharatbhai";
console.group("Spread Method:-\nconst names3 = [...name]");
console.log(names);
console.log(names3);
console.groupEnd();

// 2nd way
const names4 = Array.from(names);
names4[2] = "Bharatbhai";
console.group("Array.from Method:-\nconst names4 = Array.from(names)");
console.log(names);
console.log(names4);
console.groupEnd();

// 3rd way
const names5 = names.slice();
names5[2] = "Bharatbhai";
console.group("Slice Method:-\nconst names5 = names.slice()");
console.log(names);
console.log(names5);
console.groupEnd();

// 4th way
const names6 = [].concat(names)
names6[2] = "Bharatbhai";
console.group("Concat Method:-\nconst names6 = [].concat(names)");
console.log(names);
console.log(names5);
console.groupEnd();


// objects

const person = {
    name: "Uttam",
    age: 100,
    social: {
        instagram: "uttamakwana",
        facebook: "uttamakwana",
        twitter: "uttamakwana"
    }
};

// it will change the original object
// const person2 = person;
// person2.name = "Dhaval";
// console.group("Direct Assign:-\nconst person2 = person");
// console.log("person:", person);
// console.log("person2:", person2);
// console.groupEnd();

// 1st way
const person3 = Object.assign({}, person, { age: 150, isMarried: true })
console.group("Direct Assign:-\nconst person2 = person");
console.log("person:", person);
console.log("person3:", person3);
console.groupEnd();
//! but remember its only 1 level deep. It means if there are object inside person object then it won't work

// 2nd way

const person4 = JSON.parse(JSON.stringify(person));
person4.age = 234;
person4.social.twitter = "notuttamakwana"
console.group("Deep Copy:-\nconst person4 = JSON.parse(JSON.stringify(person))"); console.log("person:", person);
console.log("person4:", person4);
console.groupEnd();

// 3rd way 

const person5 = { ...person };
person5.age = 2343;
console.group("Spread Method:-\nconst person5 = {...person}");
console.log("person:", person);
console.log("person5:", person5);
console.groupEnd();
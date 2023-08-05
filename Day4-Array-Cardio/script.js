const users = [
  {
    username: "john_doe",
    firstname: "John",
    lastname: "Doe",
    password: "john123!@#",
    email: "john.doe@example.com",
    age: 30,
    gender: "male",
  },
  {
    username: "jane_smith",
    firstname: "Jane",
    lastname: "Smith",
    password: "smith456!@#",
    email: "jane.smith@example.com",
    age: 28,
    gender: "female",
  },
  {
    username: "bob_jackson",
    firstname: "Bob",
    lastname: "Jackson",
    password: "bob789!@#",
    email: "bob.jackson@example.com",
    age: 35,
    gender: "male",
  },
  {
    username: "lisa_lee",
    firstname: "Lisa",
    lastname: "Lee",
    password: "lisa321!@#",
    email: "lisa.lee@example.com",
    age: 25,
    gender: "female",
  },
  {
    username: "michael_williams",
    firstname: "Michael",
    lastname: "Williams",
    password: "michael777!@#",
    email: "michael.williams@example.com",
    age: 32,
    gender: "male",
  },
  {
    username: "sarah_johnson",
    firstname: "Sarah",
    lastname: "Johnson",
    password: "sarah654!@#",
    email: "sarah.johnson@example.com",
    age: 29,
    gender: "female",
  },
  {
    username: "david_smith",
    firstname: "David",
    lastname: "Smith",
    password: "david333!@#",
    email: "david.smith@example.com",
    age: 31,
    gender: "male",
  },
  {
    username: "emily_wilson",
    firstname: "Emily",
    lastname: "Wilson",
    password: "emily999!@#",
    email: "emily.wilson@example.com",
    age: 27,
    gender: "female",
  },
  {
    username: "james_brown",
    firstname: "James",
    lastname: "Brown",
    password: "james222!@#",
    email: "james.brown@example.com",
    age: 34,
    gender: "male",
  },
  {
    username: "sophia_jones",
    firstname: "Sophia",
    lastname: "Jones",
    password: "sophia111!@#",
    email: "sophia.jones@example.com",
    age: 26,
    gender: "female",
  },
  {
    username: "william_jackson",
    firstname: "William",
    lastname: "Jackson",
    password: "william444!@#",
    email: "william.jackson@example.com",
    age: 33,
    gender: "male",
  },
  {
    username: "olivia_miller",
    firstname: "Olivia",
    lastname: "Miller",
    password: "olivia888!@#",
    email: "olivia.miller@example.com",
    age: 24,
    gender: "female",
  },
  {
    username: "robert_taylor",
    firstname: "Robert",
    lastname: "Taylor",
    password: "robert666!@#",
    email: "robert.taylor@example.com",
    age: 28,
    gender: "male",
  },
  {
    username: "ava_davis",
    firstname: "Ava",
    lastname: "Davis",
    password: "ava777!@#",
    email: "ava.davis@example.com",
    age: 31,
    gender: "female",
  },
  {
    username: "richard_martin",
    firstname: "Richard",
    lastname: "Martin",
    password: "richard333!@#",
    email: "richard.martin@example.com",
    age: 30,
    gender: "male",
  },
  {
    username: "mia_anderson",
    firstname: "Mia",
    lastname: "Anderson",
    password: "mia999!@#",
    email: "mia.anderson@example.com",
    age: 29,
    gender: "female",
  },
  {
    username: "charles_clark",
    firstname: "Charles",
    lastname: "Clark",
    password: "charles111!@#",
    email: "charles.clark@example.com",
    age: 32,
    gender: "male",
  },
  {
    username: "amelia_white",
    firstname: "Amelia",
    lastname: "White",
    password: "amelia222!@#",
    email: "amelia.white@example.com",
    age: 26,
    gender: "female",
  },
  {
    username: "thomas_hall",
    firstname: "Thomas",
    lastname: "Hall",
    password: "thomas444!@#",
    email: "thomas.hall@example.com",
    age: 33,
    gender: "male",
  },
];

// const male = users.filter((user) => user.gender === "male" && user.age > 30);
// console.table(male);

// const male = users.filter(function (user) {
//   if (user.age > 30 && user.gender === "male") {
//     return true;
//   }
// });
// console.table(male);

// const fullName = users.map((user) => `${user.firstname} ${user.lastname}`);

// console.table(fullName);

// const ageOrder = users.sort(function(prev, next) {
//     if(prev.age > next.age) {
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })

// console.table(ageOrder);

// const ageOfSum = users.reduce((prevTotal, user) => {
//   return prevTotal + user.age;
// }, 0);

// console.log(ageOfSum);

// const names = [
//   "Uttam, Makwana",
//   "Divyesh, Bhadrka",
//   "Raj, Ubhadiya",
//   "Aashutosh, Verma",
//   "Aaditya, Chaturvedi",
// ];

// const names2 = names.forEach(name => console.log(name));
// const sortedNameWithLastName = names.sort((previous, next) => {
//   const [alastName, afirstName] = previous.split(", ");
//   const [blastName, bfirstName] = next.split(", ");
//   return afirstName > bfirstName ? 1 : -1;
// });

// console.table(sortedNameWithLastName);

const vehicles = [
  "car",
  "van",
  "truck",
  "bike",
  "scooter",
  "car",
  "van",
  "truck",
  "bike",
  "scooter",
  "car",
  "van",
  "truck",
  "bike",
  "scooter",
  "car",
  "van",
  "truck",
  "bike",
  "scooter",
];

const numbers = vehicles.reduce((previous, vehicle) => {
  if (!previous[vehicle]) {
    previous[vehicle] = 0;
  }
  previous[vehicle]++;
  return previous;
}, {});

console.table(numbers);

console.log(1 + 23);

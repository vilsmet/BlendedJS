// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };
// function Person({ firstName, LastName, age, gender, interest })
// {
//     this.firstName = firstName;
//     this.LastName = LastName;
//     this.age = age;
//     this.gender = gender;
//     this.interest = interest;
//     this.bio = function () { console.log(`Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`); }
//     this.greeting = function () {console.log(`Привіт, я ${this.firstName}`);}
// }
// const person = new Person({ firstName: "Tanya", lastName: "Shevchenko", age: 25, gender: "female", interest: "movies"});
// console.log(person);
// console.log(person.bio());
// console.log(person.greeting())

function Person(user) {
    const {firstName, LastName, age, gender, interest} = user
  this.firstName = firstName;
  this.LastName = LastName;
  this.age = age;
  this.gender = gender;
  this.interest = interest;
    
  Person.prototype.bio = function () {
    console.log(
      `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
    );
  };
  Person.prototype.greeting = function () {
    console.log(`Привіт, я ${this.firstName}`);
  };
}
const person = new Person({
  firstName: "Tanya",
  lastName: "Shevchenko",
  age: 25,
  gender: "female",
  interest: "movies",
});
console.log(person);
person.bio();
person.greeting();
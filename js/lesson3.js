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

// function Person(user) {
//     const {firstName, LastName, age, gender, interest} = user
//   this.firstName = firstName;
//   this.LastName = LastName;
//   this.age = age;
//   this.gender = gender;
//   this.interest = interest;
    
//   Person.prototype.bio = function () {
//     console.log(
//       `Привіт ${this.firstName} мені ${this.age} років. Мені подобається ${this.interest}`
//     );
//   };
//   Person.prototype.greeting = function () {
//     console.log(`Привіт, я ${this.firstName}`);
//   };
// }
// const person = new Person({
//   firstName: "Tanya",
//   lastName: "Shevchenko",
//   age: 25,
//   gender: "female",
//   interest: "movies",
// });
// console.log(person);
// person.bio();
// person.greeting();




// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// class User {
//   constructor({ userName, age, numberOfPost }) {
//       this.userName = userName;
//       this.age = age;
//       this.numberOfPost = numberOfPost;
//   }
//   getInfo() {
//       return ` User ${ this.userName } is ${ this.age } years old and has ${ this.numberOfPost } posts`
//   }
//   greeting =()=>{return `${this.userName}`}
// }

// const user1 = new User({ userName: 'John', age: 30, numberOfPost: 15 })
// console.log(user1.getInfo())
// console.log(user1.greeting())
// console.log(user1)


// class UserCustomer extends User{
//   constructor({ userName, age, numberOfPost, friends }) {
//     super({ userName, age, numberOfPost })
//     this.friends = friends
 
  
//   }
//   getFriends(){
//     return `I have  ${this.friends} friends`
// }
// } 

// const client = new UserCustomer({ userName: 'Ana', age: 50, numberOfPost: 100, friends: 150 })

// console.log(client.getInfo())
// console.log(client.getFriends())
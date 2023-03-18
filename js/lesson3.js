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

// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")

/* class Storage{
    constructor(items) {
        this.items = items;
    }
    getItems() {
        return this.items;        
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const idx = this.items.indexOf(item);
        if (idx === -1) { return }
        else {
            this.items.splice(idx, 1);
        }
        // this.items.splice(this.items.indexOf(item),1); доопрацювати тернарний
    }
}
const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
console.table(items);
items.addItem("Манго");
console.table(items);
items.removeItem("Ківі");
console.table(items);
items.removeItem("Гарбуз");
console.table(items); */



/* Напиши клас Client який створює об'єкт із властивостями login і email.
Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.
 */

class Client {
    #login;
    #email;
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    get email() {
        return this.#email;
    }

    set login(newLogin) {
       this.#login = newLogin;
    }

    set email(newEmail) {
       this.#email = newEmail;
    }

}

const emailLogin = new Client('it12345', 'vika1234@i.ua');

console.log(emailLogin);


/* ЗАДАЧА НА ЗАМИКАННЯ
У вас є функція counter(), яка повинна 
ЗАДАЧА 5
Напиши клас Client який створює об'єкт з ​​властивостями login email. Оголоси приватні властивості #login #email,
доступ до яких зроби через геттер та сеттер login email

ЗАДАЧА 6
Напишіть дві функції letMeSeeYourName(callback) - запитує ім'я користувача
через prompt та викликає callback функцію
greet(name) - коллбек, що приймає ім'я і логірує в консоль
Рядок "Привіт <name>"
Реалізуй перевірку, що prompt не порожній
 */

/* ЗАДАЧА 7
От tutor_8 goit всем 12:01 PM
ЗАДАЧА 8
Виправте помилки, щоб код працював
 const product = {
 ціна: 5000,
 showPrice() {
 console.log(price);
 
ЗАДАЧА 9
Виправте помилки, щоб код працював
const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};

function callAction(action) {
  action();
}
callAction(product.showPrice);
 */
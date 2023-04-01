
// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement js/

// import car from "./date/cars.js"

// const list = document.querySelector(".js-goods");

// function createCarsList({ name, img, price, description }) {
//     const carItem = document.createElement("li");
//     const carImg = document.createElement("img");
//     carImg.src = img;
//     carImg.alt = name;
//     carImg.width = 200;
//     const carName = document.createElement('h2');
//     carName.textContent = name;
//     const carPrice = document.createElement('h2');
//     carPrice.textContent = price;
//     const carDescription = document.createElement('p');
//     carDescription.textContent = description;

//     carItem.append(carImg, carName, carPrice, carDescription)
//     return carItem
// }

// const carList = car.map(createCarsList);
// console.log(typeof(carList))

// list.append(...carList);



// ЗАДАЧА 4(Самостійно)
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

// const people1 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// }]

// const people2 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: ["Eva"],
// },
// {
//   name: 'Eva',
//   know: [],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// }]

// const people3 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// }]


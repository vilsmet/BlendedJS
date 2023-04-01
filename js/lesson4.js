
// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement js/

import car from "./date/cars.js"

const list = document.querySelector(".js-goods");

function createCarsList({ name, img, price, description }) {
    const carItem = document.createElement("li");
    const carImg = document.createElement("img");
    carImg.src = img;
    carImg.alt = name;
    carImg.width = 200;
    const carName = document.createElement('h2');
    carName.textContent = name;
    const carPrice = document.createElement('h2');
    carPrice.textContent = price;
    const carDescription = document.createElement('p');
    carDescription.textContent = description;

    carItem.append(carImg, carName, carPrice, carDescription)
    return carItem
}

const carList = car.map(createCarsList);
console.log(carList)

list.append(...carList);
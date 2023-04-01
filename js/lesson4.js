
// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement js/

/* import car from "./date/cars.js"

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

list.append(...carList); */



//ЗАДАЧА 2
//НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, 
//В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

<<<<<<< Updated upstream
const refs = {
  formEl: document.querySelector('.form'),
  priceEl: document.querySelector('#price'),
  quantityEl: document.querySelector('#quantity'),
  quantityLabelEl: document.querySelector('.amount'),
    totalEl: document.querySelector('.total'),
    btnEl: document.querySelector('.btn'),
    containerEl: document.querySelector('.container'),
}
=======
// const refs = {
//   formEl: document.querySelector('.form'),
//   priceEl: document.querySelector('#price'),
//   quantityEl: document.querySelector('#quantity'),
//   quantityLabelEl: document.querySelector('.amount'),
//   totalEl: document.querySelector('.total'),
// }
>>>>>>> Stashed changes

// // let currentQuantity = 0;
// // let currentPrice = 0;

// function calculator (evt) {
//   evt.preventDefault();

//   const totalPrice = refs.priceEl.value * refs.quantityEl.value;

//   refs.quantityLabelEl.textContent = refs.quantityEl.value;
//   refs.totalEl.textContent = totalPrice;
// }

<<<<<<< Updated upstream
function amount() {
    refs.quantityLabelEl.textContent = refs.quantityEl.value; 
    
}

refs.quantityEl.addEventListener('input', amount);

refs.formEl.addEventListener('submit', calculator);

window.addEventListener('DOMContentLoaded', calculator)

/* 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ */

const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};

refs.containerEl.style.backgroundColor = randomRgbColor();

=======
// refs.formEl.addEventListener('input', calculator);

// window.addEventListener('DOMContentLoaded', calculator)
ЗАДАЧА 3
3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
 <ul class="js-list"></ul>

const instruments = [{
  id: 1,
  img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
  name: "Молоток",
  price: 150
},
{
  id: 2,
  img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
  name: "Перфоратор",
  price: 3000
},{
  id: 3,
  img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
  name: "Рівень",
  price: 2000
}]
>>>>>>> Stashed changes


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


const refs = {
  formEl: document.querySelector('.form'),
  priceEl: document.querySelector('#price'),
  quantityEl: document.querySelector('#quantity'),
  quantityLabelEl: document.querySelector('.amount'),
    totalEl: document.querySelector('.total'),
    btnEl: document.querySelector('.btn'),
    containerEl: document.querySelector('.container'),
}

// // let currentQuantity = 0;
// // let currentPrice = 0;

// function calculator (evt) {
//   evt.preventDefault();

//   const totalPrice = refs.priceEl.value * refs.quantityEl.value;

//   refs.quantityLabelEl.textContent = refs.quantityEl.value;
//   refs.totalEl.textContent = totalPrice;
// }


// function amount() {
//     refs.quantityLabelEl.textContent = refs.quantityEl.value;
    
// }

// refs.quantityEl.addEventListener('input', amount);

// refs.formEl.addEventListener('submit', calculator);

// window.addEventListener('DOMContentLoaded', calculator)

// /* 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ */

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// refs.containerEl.style.backgroundColor = randomRgbColor();


// // refs.formEl.addEventListener('input', calculator);

// // window.addEventListener('DOMContentLoaded', calculator)
// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>
// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР
/* const galeryEl= document.querySelector(".js-list");
// console.log(galeryEl);
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

function createMarkup() {
const instrumentMarkup= instruments.map(({id,img,name,price})=>{return `
<li data-id="${id}">
    <img src="${img}" alt="${name}">
    <h2>${name}</h2>
    <p>${price}</p>
    <button type="submit" class="buy">Купити</button>
</li>`})
.join("");
galeryEl.insertAdjacentHTML("afterend",instrumentMarkup);
}
createMarkup();
// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР
// кнопка виводить у консоль повідомлення з id товару і що його куплено
const buttonBuyEl=document.querySelector(".buy");
function buyGoods(evt){
    console.log(evt.target);    
}
// buttonBuyEl.addEventListener("click", buyGoods);
galeryEl.addEventListener("click", buyGoods); */

/* 3) УМОВА
Зробити фіксований скрол на сторінці для менюшки,тобто , щоб наше меню фіксувалось зверху браузера при скролі, для того потрібно порахувати висоту хедера, відстежуємо позицію скролу та додавати клас fixed-nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо

 */

const navigation = document.querySelector('#navigation');
const header = document.querySelector('.header');

const headerHeight = header.clientHeight;

function addClass() {
  if (scrollY > headerHeight) {
    navigation.classList.add('fixed-nav');
  } else {
    navigation.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', addClass);

/* scrollY - визначає висоту
scrollX - визначає ширину */

/* ЗАДАЧА 4
ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО */
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

const people1 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
}]

const people2 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: ["Eva"],
},
{
  name: 'Eva',
  know: [],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]

const people3 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]

// // ЗАДАЧА 2
// // ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ
// //   https://www.thecocktaildb.com/api.php 
// // , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// // РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, 
// // КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР
// // (ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

// //   <div id='root'>
// //     <form id='form'>
// //         <input type="text" id="input">
// //       <button>Пошук</button>
// //     </form>
// //   </div>

// // idDrink
// // : 
// // "17253"
// // strAlcoholic
// // : 
// // "Alcoholic"
// // strCategory
// // : 
// // "Cocktail"
// // strCreativeCommonsConfirmed
// // : 
// // "No"
// // strDrink
// // : 
// // "Paloma"
// // strDrinkAlternate
// // : 
// // null
// // strDrinkThumb
// // : 
// // "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg"
// // strGlass
// // : 
// // "Collins glass"
// // strIBA
// // : 
// // null
// // strImageAttribution
// // : 
// // null
// // strImageSource
// // : 
// // null
// // strIngredient1
// // : 
// // "Grape Soda"
// // strIngredient2
// // : 
// // "Tequila"
// const formEl= document.querySelector('#form');
// const inputEl= document.querySelector('#input');
// const drinksListEL=document.querySelector('.dinks_list');

// formEl.addEventListener('submit', onFormSubmit)
// function onFormSubmit(evt){
//     evt.preventDefault();
//     const imputValue= inputEl.value;
//     console.log('imputValue:',imputValue);
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${imputValue}`)
//     .then(resp=>resp.json())
//     .then(data=>renderMarkup(data.drinks))
//     // .then(data=>console.log(data.drinks))
//     // .then(list=>console.log(drinksListEL
//     //     .insertAdjacentHTML('beforeend', createMarkup({strDrink,strCategory,strAlcoholic,strDrinkThumb}))))
//     .catch(e=>console.log(e));
    
// }
// function createMarkup({strDrink,strCategory,strAlcoholic,strDrinkThumb}){
// const markup=`
// <div class="coctailCard">
//     <img src="${strDrinkThumb}"
//      alt="${strDrink}"
//      class="drinkThumb">
//      <h2 class="drinkName">${strDrink}</h2>
//      <p class="Category">${strCategory}</p>
//      <p class="alcoholicStatus">${strAlcoholic}</p>
// </div>`
// drinksListEL.insertAdjacentHTML('beforeend', markup)
// }
// function renderMarkup(array){
//     array.forEach(element => createMarkup(element));
// }

// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
// //
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)
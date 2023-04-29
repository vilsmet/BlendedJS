// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ 
// https://pixabay.com/api/docs/ , 
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ 
// РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// Your API key: 35881425-29f70e74d3fcf7112678d9ed3
const BASE_URL='https://pixabay.com/api/';
const API_KEY='35881425-29f70e74d3fcf7112678d9ed3'
const ENDPOINT='';
const params= {
    "safesearch": "true",
    "image_type": "photo",
    "orientation": "horizontal",
    "category": "computer",
}
fetch(`${BASE_URL}?key=${API_KEY}&${params}`)
// fetch(`${BASE_URL}?key=${API_KEY}`)
// fetch(`${BASE_URL}?key=${API_KEY}`)
.then(resp=> resp.json())
.then(data=>renderGallery(data.hits))
.catch(error=>console.log(error));
// previewURL: 
function createImage(objPreviewUrl){
    const newImg = document.createElement("img");
    newImg.src= objPreviewUrl.previewURL;
    newImg.width= 300;
    galleryEl.appendChild(newImg);
}
const galleryEl= document.querySelector(".gallery");
function renderGallery(array){
    array.forEach(element => createImage(element));
}


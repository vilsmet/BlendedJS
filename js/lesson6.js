// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ 
// https://pixabay.com/api/docs/ , 
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ 
// РЕЗУЛЬТАТ (ВИКОРИСТАЙ МЕТОД createElement())

// Your API key: 35881425-29f70e74d3fcf7112678d9ed3
const BASE_URL='https://pixabay.com/api/';
const params= new URLSearchParams({
    "key":"35881425-29f70e74d3fcf7112678d9ed3",
    "safesearch": "true",
    "image_type": "photo",
    "orientation": "horizontal",
    "category": "computer",
    "per_page": 40,
})

fetch(`${BASE_URL}?${params}`)
.then(resp=> resp.json())
.then(data=>renderGallery(data.hits))
.catch(error=>console.log(error));

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


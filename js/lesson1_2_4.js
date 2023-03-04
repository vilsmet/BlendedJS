// Задача 4(умова по пам'яті варіант 2)
// Перевірити чи є рядок паліндромом (тобто читається зліва на право і з права на ліво однаково).
// якщо рядок є паліндромом вивести лог "рядок '__' - паліндром"
// якщо рядок не є паліндромом вивести значення "рядок '___' не є паліндромом"
//const str = "ротатор";//рядок 'ротатор' - паліндром
//const newString = "Hello";//рядок 'Hello' не є паліндромом

// вирішення 1
///////////////////////////////////////////////////////////////////////////////
// const str = "ротатор";//рядок 'ротатор' - паліндром
// const newString = "Hello";//рядок 'Hello' не є паліндромом
// function isPalindrom(word) {     
//     for (let i = 0, k = word.length - 1; i < (word.length / 2); i++, k--) {
//         if (word[i] !== word[k]) { return `рядок \'${word}\' не є паліндромом` };    
//     }
//     return `рядок \'${word}\'- паліндром`; 
// }
// console.log(isPalindrom(str));
// console.log(isPalindrom(newString));
//////////////////////////////////////////////////////
// вирішення 2
///////////////////////////////////////////////////////////////////////////////
// const str = "ротатор";//рядок 'ротатор' - паліндром
// const newString = "Hello";//рядок 'Hello' не є паліндромом
// function isPalindrom(word) {
//     const reverseWord = word.slice('').reverse().join('');
//         if (reverseWord !== word) { return `рядок \'${word}\' не є паліндромом` };    
//     return `рядок \'${word}\'- паліндром`;
// }
// console.log(isPalindrom(str));
// console.log(isPalindrom(newString));
//////////////////////////////////////////////////////

// function integer(x) {
//   if (Number.isInteger(x)) {
//     return "ціле";
//   }
//   return "не ціле";
// }
// console.log(integer(5))
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const potionNames = this.potions.map(potion => potion.name);

//     if (potionNames.includes(newPotion.name)) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`; 
//     };   
    
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     this.potions = this.potions.filter(potion => potion.name !== potionName);
    
//     if (!this.potions.find(potion => potion.name === potionName)) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const potion = this.potions.find(potion => potion.name === oldName);

//     if (!potion) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     potion.name = newName;
//   },
//   // Change code above this line
// };


const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    const allPizzas = [...this.pizzas];
    console.log(allPizzas)
    // console.log(pizzaName)

    if (allPizzas.includes(pizzaName)) {
      // console.log(pizzaName)
      return onSuccess(pizzaName);
    }
    return onError(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

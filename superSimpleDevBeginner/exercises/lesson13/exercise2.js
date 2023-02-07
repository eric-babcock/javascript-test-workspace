/* Write a function "pickApples" that 
   takes an array of strings representing 
   fruits and returns the array with the 
   first 2 occurrences of 'apple' removed. 
- Write one that removes 2 apples and
  1 orange
*/

// basket of fruit
let fruitBasket = ['cherry','apple','orange','apple','banana','apple'];
// things to remove from fruit basket
const pickFruit = ['apple','apple']//,'orange']

console.log(fruitBasket);

//var leftoverFruit = fruitBasket.pop('apple')
//fruitBasket.splice(fruitBasket.indexOf('apple'),1)
//fruitBasket.splice(fruitBasket.indexOf('apple'),1)

function pickApples() {

  pickFruit.forEach(item => {
    fruitBasket.splice(fruitBasket.indexOf(item),1);
  });
}

pickApples()
//console.log(leftoverFruit)
console.log(fruitBasket)
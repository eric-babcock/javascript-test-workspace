/* Write a function "pickLastApples" 
   similar to above that removes the 
   last 2 apples from an array. 
   (look up how to reverse an array)
*/

// basket of fruit
let fruitBasket = ['cherry','apple','orange','apple','banana','apple'];
// things to remove from fruit basket
const pickFruit = ['apple','apple']

console.log(fruitBasket);

//var leftoverFruit = fruitBasket.pop('apple')
//fruitBasket.splice(fruitBasket.indexOf('apple'),1)
//fruitBasket.splice(fruitBasket.indexOf('apple'),1)

function pickLastApples() {

  pickFruit.forEach(item => {
    fruitBasket.splice(fruitBasket.lastIndexOf(item),1);
  });
}

pickLastApples()
//console.log(leftoverFruit)
console.log(fruitBasket)
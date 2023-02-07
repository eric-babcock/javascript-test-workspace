/* Write a function "pickApples" that 
   takes an array of strings representing 
   fruits and returns the array with the 
   first 2 occurrences of 'apple' removed. 
- Write one that removes 2 apples and
  1 orange
*/
const fruitBasket = ['cherry','apple','orange','apple','banana','apple'];

console.log(fruitBasket);

const leftoverFruit = fruitBasket.filter(pickApples)

function pickApples(fruit){
  let pickedFruit = 0
  if(pickedFruit<2){
    if (fruit != "apple"){
      true;
      console.log('true');
      console.log(pickedFruit)
     } else {
      console.log('false');
      false;
      pickedFruit+=1;
      console.log(pickedFruit)
     }
  } else {

  }
  
}

console.log(leftoverFruit)
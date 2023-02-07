/* Write a function "pickApples" that 
   takes an array of strings representing 
   fruits and returns the array with the 
   first 2 occurrences of 'apple' removed. 
- Write one that removes 2 apples and
  1 orange
*/

// basket of fruit
let fruitBasket = ['cherry','apple','orange','apple','banana','apple'];

function pickApples(fruit) {
  let applesPicked = 0;

  let leftoverFruit = fruit.filter(fruitPiece =>{
    if (applesPicked >=2) {
      //returning true keeps item
      return true;
    } else if (fruitPiece === 'apple') {
      applesPicked = applesPicked+1;
      return false;
    } else {
      return true;
    }
  });
  return leftoverFruit;
}

const leftoverFruits = pickApples(fruitBasket)
console.log(pickApples(leftoverFruits))

function pickFruit(fruit) {
  let applesPicked = 0;
  let orangesPicked = 0;

  let leftoverFruit = fruit.filter(fruitPiece =>{
    if (fruitPiece === 'apple') {
      if (applesPicked >= 2) {
        return true;
      } else {
        applesPicked += 1
        return false
      }
    } else if (fruitPiece === 'orange') {
      if (orangesPicked >=1){
        return true
      } else {
        orangesPicked +=1
        return false
      }
    } else {
      return true;
    }
    
  });
  return leftoverFruit;
};

const picked = pickFruit(fruitBasket);

console.log(picked)


/* this version of the program is quite drab. Mine is much more succint using more functions but easier to read and change */
/*Write a function "removeRed" that takes 
  an array of objects, "foodArray" , with 
  the format:[{name:'apple',color:'red'},
  {name:'Egg',color:'white}] and removes 
  all red-colored foods from the array
*/ 

const foodArray = [{name:'apple', 
              color:'red'},
              {name:'Egg',
              color:'white'},
              {name:'spaghetti sauce',
              color:'red'},
              {name:'hollandaise',
              color:'yellow'},
            ]

//console.log(foodArray)
const goodFoods = foodArray.filter(removeRed);

console.table(goodFoods)

function removeRed(foodItem){
  return (foodItem.color != 'red')
}


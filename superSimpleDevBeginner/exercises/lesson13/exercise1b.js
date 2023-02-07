/* Write a function "max" that takes an 
   array and numbers and returns the 
   largest number.
 - write one that returns the smallest
 - write one that returns the smallest
   that is greater than 0
 */

const numbersArray = [1,5,-2,4,3,5,0];

function max(numArray){
  let max = -Infinity;

  numArray.forEach(element => {
    if (element>max) {
      max=element;
    }
  });
  return max;
}

function min(numbers){
  let min =Infinity;
  numbers.forEach(element => {
    if (element<min) {
      min = element;
    }
  });
  return min;
}



function minNatural(numbers){
  let min = Infinity;


  numbers.forEach( element =>{
    if (element <= 0) {
      return;
    } else if (element < min) {
      min = element;
    }
  });
  return min;
}




console.log(max(numbersArray))
console.log(min(numbersArray))
console.log(minNatural(numbersArray))

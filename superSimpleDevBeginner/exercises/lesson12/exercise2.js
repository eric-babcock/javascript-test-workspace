/*Write a function "aboveFreezing" 
that takes an array of numbers, and
returns an array with only temperatures
that are above the Freezing point
of water. Temperature can be in 
Celsius or Fahrenheit
*/

const temps = [100,34,20,90,120,110,109,56,45,34,-19, -40,-2,-1,-10]

const result = temps.filter(aboveFreezing)

function aboveFreezing(temperature) {
    return temperature >0;
}

console.log(temps)
console.log(result)
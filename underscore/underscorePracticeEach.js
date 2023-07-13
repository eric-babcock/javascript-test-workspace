import {each, map} from 'underscore'

var numbers = [1, 2, 3, 4];

var listOfNumbers = _.each(numbers, function(x) { listOfNumbers += x + ' ' });
document.getElementById("list").innerHTML = listOfNumbers;

console.log(listOfNumbers)
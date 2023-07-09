import { map, each } from 'underscore';
// Collection Functions (Arrays or Objects)

const numbers = [1,2,3];

const sanitizePosition = (items) => map(item, index) => ({...item, position:index}));

const egepanEvaluationApprovals = sanitizePosition([
  {
  text: 'Stimme voll zu'
},
  {
    text: 'Stimme eher zu'
  },
  {
    text: 'Stimme überhaupt nicht zu'
  }
  ]);
//const alert = ['one','two','three'];
console.log(numbers)

// each
/*const list2 = _.each(LIST,alert);

const listOfNumbers = (number) => {}
_.each(numbers,function (x) { listOfNumbers += ' '});
console.log(listOfNumbers)
*/

/* map */

//console.log(LIST.map(LIST,function (num) {return num*3;}))
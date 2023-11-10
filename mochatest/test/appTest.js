/* standard js assertion library
  const assert = require('assert').assert;
 */
// We want Chai

// Imports
const assert = require('chai').assert;
const {sayHello,addNumbers} = require("../app");
//const {sayHello} = require("../app");

// Results
sayHelloResult = sayHello();
addNumbersResult = addNumbers(5,5);

//code
describe('The App function', function(){
  describe('sayHello() should',function(){
    it('return hello', function(){
      assert.equal(sayHelloResult,'hello');
    });

    it('be of type string', function (){
      assert.typeOf(sayHelloResult,'string');
    })
  })
  describe('addNumbers() should', function(){
    it('be above 9', function(){
      assert.isAbove(addNumbersResult,5);
    })

    it('return type number', function(){
      assert.typeOf(addNumbersResult,'number')
    })
  })
});
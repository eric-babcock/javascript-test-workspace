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
describe('App', function(){
  it('function sayHello should return hello', function(){
    assert.equal(sayHelloResult,'hello');
  });

  it('function sayHello should return type string', function (){
    assert.typeOf(sayHelloResult,'string');
  })

  it('addNumbers should be above 5', function(){
    assert.isAbove(addNumbersResult,5);
  })

  it('function addNumbers should return type number', function(){
    assert.typeOf(addNumbersResult,'number')
  })
});
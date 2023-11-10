/* standard js assertion library
  const assert = require('assert').assert;
 */

// We want Chai
const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
describe('App', function(){
  it('function sayHello should return hello', function(){
    let result = sayHello();
    assert.equal(result,'hello');
  });

  it('function sayHello should return type string', function (){
    let result = sayHello();
    assert.typeOf(result,'string');
  })

  it('addNumbers should be above 5', function(){
    let result = addNumbers(5,5);
    assert.isAbove(result,5);
  })

  it('function addNumbers should return type number', function(){
    let result = addNumbers(5,5);
    assert.typeOf(result,'number')
  })
});
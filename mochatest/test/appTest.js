/* standard js assertion library
  const assert = require('assert').assert;
 */

// We want Chai
const assert = require('chai').assert;
const sayHello = require('../app').sayHello;

describe('App', function(){
  it('app should return hello', function(){
    let result = sayHello();
    assert.equal(result,'hello');
  })
})
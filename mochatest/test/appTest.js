/* standard js assertion library
  const assert = require('assert').assert;
 */

// We want Chai
const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
  it('app should return hello', function(){
    assert.equal(app(),'hello1');
  })
})
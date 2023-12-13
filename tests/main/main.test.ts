import { assert } from 'chai'
import { describe, it } from 'mocha'

describe('Main Functionality', function() {
    it('Should pass this simple test', function(){
        assert.equal(1 === 1, false, 'Testing Chai assert.equal()')
    })
})
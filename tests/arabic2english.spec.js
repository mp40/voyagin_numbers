const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  arabic2english
} = require('../arabic2english')

describe('converting single arabic numbers to english', () => {
  it('should convert 1 to "one"', () => {
    expect(arabic2english(1)).to.equal('one')
  })
  it('should convert 2 to "two"',()=>{
    expect(arabic2english(2).to.equal('two'))
  })
})

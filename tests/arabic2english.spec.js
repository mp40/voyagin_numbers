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
  it('should convert 2 to "two"', () => {
    expect(arabic2english(2)).to.equal('two')
  })
  it('should convert 3 to "three"', () => {
    expect(arabic2english(3)).to.equal('three')
  })
  it('should convert 4 to "four"', () => {
    expect(arabic2english(4).to.equal('four'))
  })
})

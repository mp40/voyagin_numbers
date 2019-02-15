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
    expect(arabic2english(4)).to.equal('four')
  })
  it('should convert 5 to "five"', () => {
    expect(arabic2english(5)).to.equal('five')
  })
  it('should convert 6 to "six"', () => {
    expect(arabic2english(6)).to.equal('six')
  })
  it('should convert 7 to "seven"', () => {
    expect(arabic2english(7)).to.equal('seven')
  })
  it('should convert 8 to "eight"', () => {
    expect(arabic2english(8)).to.equal('eight')
  })
  it('should convert 9 to "nine"', () => {
    expect(arabic2english(9)).to.equal('nine')
  })
  it('should convert 0 to "zero"', () => {
    expect(arabic2english(0)).to.equal('zero')
  })
})

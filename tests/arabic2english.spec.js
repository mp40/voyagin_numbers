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
  it('should convert "1" to "one"', () => {
    expect(arabic2english(1)).to.equal('one')
  })
})

const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  test
} = require('../arabic2english')

describe('tests', () => {
  it('should prove test environment is set up', () => {
    expect(test()).to.equal('working')
  })
})

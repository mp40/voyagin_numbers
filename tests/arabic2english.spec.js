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

describe('converting single Arabic numbers to English', () => {
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
describe('converting Arabic 10-19 to English ', () => {
  it('should convert 10 to "ten"', () => {
    expect(arabic2english(10)).to.equal('ten')
  })
  it('should convert 11 to "eleven"', () => {
    expect(arabic2english(11)).to.equal('eleven')
  })
  it('should convert 12 to "twelve"', () => {
    expect(arabic2english(12)).to.equal('twelve')
  })
  it('should convert 13 to "thirteen"', () => {
    expect(arabic2english(13)).to.equal('thirteen')
  })
  it('should convert 14 to "fourteen"', () => {
    expect(arabic2english(14)).to.equal('fourteen')
  })
  it('should convert 15 to "fifteen"', () => {
    expect(arabic2english(15)).to.equal('fifteen')
  })
  it('should convert 16 to "sixteen"', () => {
    expect(arabic2english(16)).to.equal('sixteen')
  })
  it('should convert 17 to "seventeen"', () => {
    expect(arabic2english(17)).to.equal('seventeen')
  })
  it('should convert 18 to "eighteen"', () => {
    expect(arabic2english(18)).to.equal('eighteen')
  })
  it('should convert 19 to "nineteen"', () => {
    expect(arabic2english(19)).to.equal('nineteen')
  })
})
describe('converting Arabic 20-29 to English ', () => {
  it('should convert 20 to "twenty"', () => {
    expect(arabic2english(20)).to.equal('twenty')
  })
  it('should convert 21 to "twenty one"', () => {
    expect(arabic2english(21)).to.equal('twenty one')
  })
  it('should convert 28 to "twenty eight"', () => {
    expect(arabic2english(20)).to.equal('twenty')
  })
  it('should convert 29 to "twenty nine"', () => {
    expect(arabic2english(21)).to.equal('twenty one')
  })
})
describe('converting Arabic 30-39 to English', () => {
  it('should convert 30 to "thirty"', () => {
    expect(arabic2english(30)).to.equal('thirty')
  })
  it('should convert 39 to "thirty nine"', () => {
    expect(arabic2english(39)).to.equal('thirty nine')
  })
})
describe('converting Arabic 40-49 to English', () => {
  it('should convert 40 to "forty"', () => {
    expect(arabic2english(40)).to.equal('forty')
  })
  it('should convert 49 to "forty nine"', () => {
    expect(arabic2english(49)).to.equal('forty nine')
  })
})
describe('converting Arabic 50-99 to English', () => {
  it('should convert 50 to "fifty"', () => {
    expect(arabic2english(50)).to.equal('fifty')
  })
  it('should convert 60 to "sixty"', () => {
    expect(arabic2english(60)).to.equal('sixty')
  })
  it('should convert 70 to "seventy"', () => {
    expect(arabic2english(70)).to.equal('seventy')
  })
  it('should convert 80 to "eighty"', () => {
    expect(arabic2english(80)).to.equal('eighty')
  })
  it('should convert 90 to "ninety"', () => {
    expect(arabic2english(90)).to.equal('ninety')
  })
  it('should convert 99 to "ninety nine"', () => {
    expect(arabic2english(99)).to.equal('ninety nine')
  })
})
describe('converting Arabic numbers 100 to 999 to English', () => {
  it('should convert 100 to "one hundred"', () => {
    expect(arabic2english(100)).to.equal('one hundred')
  })
})

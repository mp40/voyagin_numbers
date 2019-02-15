const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  arabicToenglish
} = require('../arabicToenglish')

describe('converting single Arabic numbers to English', () => {
  it('should convert 1 to "one"', () => {
    expect(arabicToenglish(1)).to.equal('one')
  })
  it('should convert 2 to "two"', () => {
    expect(arabicToenglish(2)).to.equal('two')
  })
  it('should convert 3 to "three"', () => {
    expect(arabicToenglish(3)).to.equal('three')
  })
  it('should convert 4 to "four"', () => {
    expect(arabicToenglish(4)).to.equal('four')
  })
  it('should convert 5 to "five"', () => {
    expect(arabicToenglish(5)).to.equal('five')
  })
  it('should convert 6 to "six"', () => {
    expect(arabicToenglish(6)).to.equal('six')
  })
  it('should convert 7 to "seven"', () => {
    expect(arabicToenglish(7)).to.equal('seven')
  })
  it('should convert 8 to "eight"', () => {
    expect(arabicToenglish(8)).to.equal('eight')
  })
  it('should convert 9 to "nine"', () => {
    expect(arabicToenglish(9)).to.equal('nine')
  })
  it('should convert 0 to "zero"', () => {
    expect(arabicToenglish(0)).to.equal('zero')
  })
})
describe('converting Arabic 10-19 to English ', () => {
  it('should convert 10 to "ten"', () => {
    expect(arabicToenglish(10)).to.equal('ten')
  })
  it('should convert 11 to "eleven"', () => {
    expect(arabicToenglish(11)).to.equal('eleven')
  })
  it('should convert 12 to "twelve"', () => {
    expect(arabicToenglish(12)).to.equal('twelve')
  })
  it('should convert 13 to "thirteen"', () => {
    expect(arabicToenglish(13)).to.equal('thirteen')
  })
  it('should convert 14 to "fourteen"', () => {
    expect(arabicToenglish(14)).to.equal('fourteen')
  })
  it('should convert 15 to "fifteen"', () => {
    expect(arabicToenglish(15)).to.equal('fifteen')
  })
  it('should convert 16 to "sixteen"', () => {
    expect(arabicToenglish(16)).to.equal('sixteen')
  })
  it('should convert 17 to "seventeen"', () => {
    expect(arabicToenglish(17)).to.equal('seventeen')
  })
  it('should convert 18 to "eighteen"', () => {
    expect(arabicToenglish(18)).to.equal('eighteen')
  })
  it('should convert 19 to "nineteen"', () => {
    expect(arabicToenglish(19)).to.equal('nineteen')
  })
})
describe('converting Arabic 20-29 to English ', () => {
  it('should convert 20 to "twenty"', () => {
    expect(arabicToenglish(20)).to.equal('twenty')
  })
  it('should convert 21 to "twenty one"', () => {
    expect(arabicToenglish(21)).to.equal('twenty one')
  })
  it('should convert 28 to "twenty eight"', () => {
    expect(arabicToenglish(20)).to.equal('twenty')
  })
  it('should convert 29 to "twenty nine"', () => {
    expect(arabicToenglish(21)).to.equal('twenty one')
  })
})
describe('converting Arabic 30-39 to English', () => {
  it('should convert 30 to "thirty"', () => {
    expect(arabicToenglish(30)).to.equal('thirty')
  })
  it('should convert 39 to "thirty nine"', () => {
    expect(arabicToenglish(39)).to.equal('thirty nine')
  })
})
describe('converting Arabic 40-49 to English', () => {
  it('should convert 40 to "forty"', () => {
    expect(arabicToenglish(40)).to.equal('forty')
  })
  it('should convert 49 to "forty nine"', () => {
    expect(arabicToenglish(49)).to.equal('forty nine')
  })
})
describe('converting Arabic 50-99 to English', () => {
  it('should convert 50 to "fifty"', () => {
    expect(arabicToenglish(50)).to.equal('fifty')
  })
  it('should convert 60 to "sixty"', () => {
    expect(arabicToenglish(60)).to.equal('sixty')
  })
  it('should convert 70 to "seventy"', () => {
    expect(arabicToenglish(70)).to.equal('seventy')
  })
  it('should convert 80 to "eighty"', () => {
    expect(arabicToenglish(80)).to.equal('eighty')
  })
  it('should convert 90 to "ninety"', () => {
    expect(arabicToenglish(90)).to.equal('ninety')
  })
  it('should convert 99 to "ninety nine"', () => {
    expect(arabicToenglish(99)).to.equal('ninety nine')
  })
})
describe('converting Arabic numbers 100 to 999 to English', () => {
  describe('converting 100 to 199', () => {
    it('should convert 100 to "one hundred"', () => {
      expect(arabicToenglish(100)).to.equal('one hundred')
    })
    it('should convert 101 to one hundred and one', () => {
      expect(arabicToenglish(101)).to.equal('one hundred and one')
    })
    it('should convert 111 to "one hundred and eleven"', () => {
      expect(arabicToenglish(111)).to.equal('one hundred and eleven')
    })
    it('should convert 199 to "one hundred and ninety nine"', () => {
      expect(arabicToenglish(199)).to.equal('one hundred and ninety nine')
    })
  })
  describe('converting 200 to 299', () => {
    it('should convert 200 to "two hundred"', () => {
      expect(arabicToenglish(200)).to.equal('two hundred')
    })
    it('should convert 202 to "two hundred and two"', () => {
      expect(arabicToenglish(202)).to.equal('two hundred and two')
    })
    it('should convert 222 to "two hundred and twenty two"', () => {
      expect(arabicToenglish(222)).to.equal('two hundred and twenty two')
    })
  })
  describe('converting 900 to 999', () => {
    it('should convert 900 to "nine hundred"', () => {
      expect(arabicToenglish(900)).to.equal('nine hundred')
    })
    it('should convert 999 to "nine hundred and ninety nine"', () => {
      expect(arabicToenglish(999)).to.equal('nine hundred and ninety nine')
    })
  })
})

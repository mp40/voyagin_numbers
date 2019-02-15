const {
  expect
} = require('chai')

const {
  describe,
  it
} = require('mocha')

const {
  arabicToEnglish
} = require('../arabicToEnglish')

describe('converting single Arabic numbers to English', () => {
  it('should convert 1 to "one"', () => {
    expect(arabicToEnglish(1)).to.equal('one')
  })
  it('should convert 2 to "two"', () => {
    expect(arabicToEnglish(2)).to.equal('two')
  })
  it('should convert 3 to "three"', () => {
    expect(arabicToEnglish(3)).to.equal('three')
  })
  it('should convert 4 to "four"', () => {
    expect(arabicToEnglish(4)).to.equal('four')
  })
  it('should convert 5 to "five"', () => {
    expect(arabicToEnglish(5)).to.equal('five')
  })
  it('should convert 6 to "six"', () => {
    expect(arabicToEnglish(6)).to.equal('six')
  })
  it('should convert 7 to "seven"', () => {
    expect(arabicToEnglish(7)).to.equal('seven')
  })
  it('should convert 8 to "eight"', () => {
    expect(arabicToEnglish(8)).to.equal('eight')
  })
  it('should convert 9 to "nine"', () => {
    expect(arabicToEnglish(9)).to.equal('nine')
  })
  it('should convert 0 to "zero"', () => {
    expect(arabicToEnglish(0)).to.equal('zero')
  })
})
describe('converting Arabic 10-19 to English ', () => {
  it('should convert 10 to "ten"', () => {
    expect(arabicToEnglish(10)).to.equal('ten')
  })
  it('should convert 11 to "eleven"', () => {
    expect(arabicToEnglish(11)).to.equal('eleven')
  })
  it('should convert 12 to "twelve"', () => {
    expect(arabicToEnglish(12)).to.equal('twelve')
  })
  it('should convert 13 to "thirteen"', () => {
    expect(arabicToEnglish(13)).to.equal('thirteen')
  })
  it('should convert 14 to "fourteen"', () => {
    expect(arabicToEnglish(14)).to.equal('fourteen')
  })
  it('should convert 15 to "fifteen"', () => {
    expect(arabicToEnglish(15)).to.equal('fifteen')
  })
  it('should convert 16 to "sixteen"', () => {
    expect(arabicToEnglish(16)).to.equal('sixteen')
  })
  it('should convert 17 to "seventeen"', () => {
    expect(arabicToEnglish(17)).to.equal('seventeen')
  })
  it('should convert 18 to "eighteen"', () => {
    expect(arabicToEnglish(18)).to.equal('eighteen')
  })
  it('should convert 19 to "nineteen"', () => {
    expect(arabicToEnglish(19)).to.equal('nineteen')
  })
})
describe('converting Arabic 20-29 to English ', () => {
  it('should convert 20 to "twenty"', () => {
    expect(arabicToEnglish(20)).to.equal('twenty')
  })
  it('should convert 21 to "twenty one"', () => {
    expect(arabicToEnglish(21)).to.equal('twenty one')
  })
  it('should convert 28 to "twenty eight"', () => {
    expect(arabicToEnglish(20)).to.equal('twenty')
  })
  it('should convert 29 to "twenty nine"', () => {
    expect(arabicToEnglish(21)).to.equal('twenty one')
  })
})
describe('converting Arabic 30-39 to English', () => {
  it('should convert 30 to "thirty"', () => {
    expect(arabicToEnglish(30)).to.equal('thirty')
  })
  it('should convert 39 to "thirty nine"', () => {
    expect(arabicToEnglish(39)).to.equal('thirty nine')
  })
})
describe('converting Arabic 40-49 to English', () => {
  it('should convert 40 to "forty"', () => {
    expect(arabicToEnglish(40)).to.equal('forty')
  })
  it('should convert 49 to "forty nine"', () => {
    expect(arabicToEnglish(49)).to.equal('forty nine')
  })
})
describe('converting Arabic 50-99 to English', () => {
  it('should convert 50 to "fifty"', () => {
    expect(arabicToEnglish(50)).to.equal('fifty')
  })
  it('should convert 60 to "sixty"', () => {
    expect(arabicToEnglish(60)).to.equal('sixty')
  })
  it('should convert 70 to "seventy"', () => {
    expect(arabicToEnglish(70)).to.equal('seventy')
  })
  it('should convert 80 to "eighty"', () => {
    expect(arabicToEnglish(80)).to.equal('eighty')
  })
  it('should convert 90 to "ninety"', () => {
    expect(arabicToEnglish(90)).to.equal('ninety')
  })
  it('should convert 99 to "ninety nine"', () => {
    expect(arabicToEnglish(99)).to.equal('ninety nine')
  })
})
describe('converting Arabic numbers 100 to 999 to English', () => {
  describe('converting 100 to 199', () => {
    it('should convert 100 to "one hundred"', () => {
      expect(arabicToEnglish(100)).to.equal('one hundred')
    })
    it('should convert 101 to one hundred and one', () => {
      expect(arabicToEnglish(101)).to.equal('one hundred and one')
    })
    it('should convert 111 to "one hundred and eleven"', () => {
      expect(arabicToEnglish(111)).to.equal('one hundred and eleven')
    })
    it('should convert 199 to "one hundred and ninety nine"', () => {
      expect(arabicToEnglish(199)).to.equal('one hundred and ninety nine')
    })
  })
  describe('converting 200 to 299', () => {
    it('should convert 200 to "two hundred"', () => {
      expect(arabicToEnglish(200)).to.equal('two hundred')
    })
    it('should convert 202 to "two hundred and two"', () => {
      expect(arabicToEnglish(202)).to.equal('two hundred and two')
    })
    it('should convert 222 to "two hundred and twenty two"', () => {
      expect(arabicToEnglish(222)).to.equal('two hundred and twenty two')
    })
  })
  describe('converting 900 to 999', () => {
    it('should convert 900 to "nine hundred"', () => {
      expect(arabicToEnglish(900)).to.equal('nine hundred')
    })
    it('should convert 999 to "nine hundred and ninety nine"', () => {
      expect(arabicToEnglish(999)).to.equal('nine hundred and ninety nine')
    })
  })
})
describe('converting Arablic numbers 1000 to 999,999', () => {
  describe('converting Arabic numbers 1000 to 9999', () => {
    it('should convert 1000 to "one thousand"', () => {
      expect(arabicToEnglish(1000)).to.equal('one thousand')
    })
  })
})

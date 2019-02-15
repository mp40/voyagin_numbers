function arabicToEnglish (num) {
  let result = convertToEnglish(Math.abs(num))
  return num > -1 ? result : `negative ${result}`
}

function convertToEnglish (num) {
  if (num < 20) {
    return oneToNineteen(num)
  }
  if (num < 100) {
    const decade = Math.floor(num / 10) * 10
    return num - decade > 0 ? `${twentyToNinety(decade)} ${oneToNineteen(num - decade)}` : `${twentyToNinety(decade)}`
  }
  if (num < 1000) {
    const hundreds = Math.floor(num / 100) * 100
    if (num === hundreds) {
      return `${oneToNineteen(hundreds / 100)} hundred`
    } else {
      const remainder = convertToEnglish(num - hundreds)
      return `${oneToNineteen(hundreds / 100)} hundred and ${remainder}`
    }
  }
  if (num < 1000000) {
    const thousands = Math.floor(num / 1000) * 1000
    if (num === thousands) {
      return `${convertToEnglish(thousands / 1000)} thousand`
    } else {
      let remainder = convertToEnglish(num - thousands)
      if (num - thousands < 100) {
        remainder = 'and ' + remainder
      }
      return `${convertToEnglish(thousands / 1000)} thousand ${remainder}`
    }
  }
}
function twentyToNinety (num) {
  const decadeWords = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ]
  return decadeWords[num / 10 - 2]
}

function oneToNineteen (num) {
  const numWords = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ]
  return numWords[num]
}

module.exports = {
  arabicToEnglish
}

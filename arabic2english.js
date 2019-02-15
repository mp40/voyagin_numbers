function arabic2english (num) {
  if (num < 20) {
    return one2nineteen(num)
  }
  if (num < 100) {
    const decade = Math.floor(num / 10) * 10
    return num - decade > 0 ? `${twenty2ninety(decade)} ${one2nineteen(num - decade)}` : `${twenty2ninety(decade)}`
  }
  if (num < 1000) {
    const hundreds = Math.floor(num / 100) * 100
    if (num === hundreds) {
      return `${one2nineteen(hundreds / 100)} hundred`
    } else {
      let remainder = arabic2english(num - hundreds)
      return `${one2nineteen(hundreds / 100)} hundred and ${remainder}`
    }
  }
}
function twenty2ninety (num) {
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

function one2nineteen (num) {
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
  arabic2english
}

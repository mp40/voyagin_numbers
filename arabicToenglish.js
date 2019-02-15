function arabicToenglish (num) {
  if (num < 20) {
    return oneTonineteen(num)
  }
  if (num < 100) {
    const decade = Math.floor(num / 10) * 10
    return num - decade > 0 ? `${twentyToninety(decade)} ${oneTonineteen(num - decade)}` : `${twentyToninety(decade)}`
  }
  if (num < 1000) {
    const hundreds = Math.floor(num / 100) * 100
    if (num === hundreds) {
      return `${oneTonineteen(hundreds / 100)} hundred`
    } else {
      let remainder = arabicToenglish(num - hundreds)
      return `${oneTonineteen(hundreds / 100)} hundred and ${remainder}`
    }
  }
}
function twentyToninety (num) {
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

function oneTonineteen (num) {
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
  arabicToenglish
}

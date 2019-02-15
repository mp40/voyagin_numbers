function arabic2english (num) {
  if (num < 20) {
    return one2nineteen(num)
  }
  const decadeWords = ['twenty', 'thirty']
  let decade = decadeWords[Math.floor(num / 10) - 2]
  return num - Math.floor(num / 10) * 10 > 0 ? `${decade} ${one2nineteen(num - 20)}` : `${decade}`
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

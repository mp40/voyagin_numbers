function arabic2english (num) {
  if (num < 20) {
    return one2nineteen(num)
  }
  return num - 20 > 0 ? `twenty ${one2nineteen(num - 20)}` : 'twenty'
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

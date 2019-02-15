function arabic2english (num) {
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
  if (num < 20) {
    return numWords[num]
  } else {
    let result = num - 20 > 0 ? 'twenty' + ' ' + numWords[num - 20] : 'twenty'
    return result
  }
}

module.exports = {
  arabic2english
}

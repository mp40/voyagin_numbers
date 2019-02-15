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
    return 'twenty'
  }
}

module.exports = {
  arabic2english
}

function arabic2english (num) {
  const numWords = ['one', 'two', 'three', 'four']
  return numWords[num - 1]
}

module.exports = {
  arabic2english
}

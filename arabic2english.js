function arabic2english (num) {
  if (num === 1) {
    return 'one'
  } else if (num === 2) {
    return 'two'
  } else {
    return 'three'
  }
}

module.exports = {
  arabic2english
}

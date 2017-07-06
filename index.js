'use strict'

module.exports = (arr = [], k) => {
  if (k) {
    return arr.sort((a, b) => {
      return a[k] > b[k] ? 1 : -1
    })
  }

  return arr.sort()
}

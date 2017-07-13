'use strict'

module.exports = (arr = [], k) => arr.sort(k ? (a, b) => a[k] > b[k] ? 1 : -1 : undefined)

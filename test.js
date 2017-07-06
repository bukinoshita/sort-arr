'use strict'

import test from 'ava'
import m from './'

test(t => {
  const arr = ['banana', 'apple', 'juice']
  const arrObj = [
    { band: 'Lights', members: 1 },
    { band: 'Blink-182', members: 3 },
    { band: 'Jamestown Story', members: 1 }
  ]

  t.is(m(arr)[0], 'apple')
  t.is(m(arr)[2], 'juice')
  t.is(m(arrObj, 'band')[0].band, 'Blink-182')
  t.is(m(arrObj, 'band')[2].band, 'Lights')
  t.is(m(arrObj, 'members')[0].members, 1)
  t.is(m(arrObj, 'members')[2].members, 3)
})

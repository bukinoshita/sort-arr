# sort-arr [![Build Status](https://travis-ci.org/bukinoshita/sort-arr.svg?branch=master)](https://travis-ci.org/bukinoshita/sort-arr)

> A tiny (132b), fast and simplified array sort


## Install

```
$ npm install --save sort-arr
```


## Usage

```js
const sortArr = require('sort-arr')

const arr = [
  { band: 'Lights', members: 1 },
  { band: 'Blink-182', members: 3 },
  { band: 'Jamestown Story', members: 1 }
]

sortArr(arr, 'band')
/* => [
  { band: 'Blink-182', members: 3 },
  { band: 'Jamestown Story', members: 1 },
  { band: 'Lights', members: 1 }
]
*/
```


## API

### sortArr(arr, key)

Returns an `array`

#### arr

Type: `array`<br/>

Array to be sorted

#### key

Type: `string`<br/>

Name of the object key


## Benchmarks

```
// Fastest is sort-arr

sort-array
  --> 35,105 ops/sec ±4.24% (84 runs sampled) | Diff: N/A

array-sort
  --> 202,801 ops/sec ±7.68% (75 runs sampled) | Diff: 477.70% faster

sort-arr
  --> 953,347 ops/sec ±7.20% (78 runs sampled) | Diff: 370.09% faster
```


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)

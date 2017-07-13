# sort-arr [![Build Status](https://travis-ci.org/bukinoshita/sort-arr.svg?branch=master)](https://travis-ci.org/bukinoshita/sort-arr)

> A tiny (110B), fast and simplified array sort


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
  --> 35,101 ops/sec ±4.01% (85 runs sampled) | Diff: N/A

array-sort
  --> 186,025 ops/sec ±8.78% (70 runs sampled) | Diff: 429.97% faster

sort-arr
  --> 1,014,953 ops/sec ±6.87% (76 runs sampled) | Diff: 445.60% faster
```


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)

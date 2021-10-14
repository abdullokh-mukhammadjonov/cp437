# CP437

CP437 is a Javascript library for representing legacy CP437(CCSID 437) table

## Installation

```bash
npm install cp437
```

## Usage

```javascript
const cp437 = require('cp437')

// find by symbol
console.log('// find by symbol')
console.log(`('£', 'hex') -> ${cp437.bySymbol('£', 'hex')}`)
console.log(`('£', 'dec') -> ${cp437.bySymbol('£', 'dec')}`)
console.log(`('â', 'hex') -> ${cp437.bySymbol('â', 'hex')}`)
console.log(' ')

// find by hex
console.log('// find by hex')
console.log(`('B0', 'symbol') -> ${cp437.byHex('B0', 'symbol')}`)
console.log(`('EC', 'symbol') -> ${cp437.byHex('EC', 'symbol')}`)
console.log(' ')

// find by dec
console.log('// find by dec')
console.log(`('175', 'symbol') -> ${cp437.byDec('175', 'symbol')}`)
console.log(`('155', 'hex') -> ${cp437.byDec('155', 'hex')}`)
```
### Output
```
// find by symbol
('£', 'hex') -> 9C
('£', 'dec') -> 156
('â', 'hex') -> 83

// find by hex
('B0', 'symbol') -> ░
('EC', 'symbol') -> ∞

// find by dec
('175', 'symbol') -> »
('155', 'hex') -> 9B
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
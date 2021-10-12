// scraped from https://www.ascii-codes.com/
const cp437_table = require("./tables/cp437.json")




/// CP437 to ASCII
const cp437 = {
  bySymbol: (sym, resultType) => {
    const cp437_char = cp437_table.find(el => el.symbol === sym)

    if(cp437_char) {
      if(resultType) return cp437_char[resultType]
      return {...cp437_char, table: 'cp437'}
    }

    return 'Symbol was not found. Try searching by HEX'
  },
  byHex: (hex, resultType) => {
    const cp437_char = cp437_table.find(el => el.hex === hex)

    if(cp437_char) {
      if(resultType) return cp437_char[resultType]
      return {...cp437_char, table: 'cp437'}
    }

    return 'Character was not found in cp437 table'
  },

  byDec: (dec, resultType) => {
    const cp437_char = cp437_table.find(el => el.dec === dec)

    if(cp437_char) {
      if(resultType) return cp437_char[resultType]
      return {...cp437_char, table: 'cp437'}
    }

    return 'Character was not found in cp437 table'
  }

}

module.exports = cp437
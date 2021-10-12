// const axios = require("axios");
// const cheerio = require("cheerio");
// const pretty = require("pretty");
// const fs = require('fs')
// const cp437 = require("./cp437.json")
// const ascii = require("./ascii.json")

// let row = {}
// let ascii = []


// const $ = cheerio.load(markup);

// const table = $("tr")

// console.log(table.length); // 2
// let i=0;
// table.each(function (idx, el) {
//   // console.log(`${$(el).children() } |`)
//   // $(el).children().each(function (i, chil) {
//   //   console.log(`${$(chil).text() } |`)
//   // })
//   // console.log(`${$(el).children() } |`)
//   $(el).children().each(function (i, chil) {
//     // console.log(`${$(chil).text() } |`)
//     switch(i){
//       case 0:
//         row.dec = $(chil).text()
//         i++;
//         break;
//       case 1:
//         row.oct = $(chil).text()
//         i++;
//         break;
//       case 2:
//         row.hex = $(chil).text()
//         i++;
//         break;
//       case 3:
//         row.bin = $(chil).text()
//         i++;
//         break;
//       case 4:
//         row.symbol = $(chil).text()
//         i++;
//         break;
//       case 5:
//         row.html_num = $(chil).text()
//         i++
//         break;        
//       case 6:
//         row.html_name = $(chil).text()
//         i++
//         break;      
//       case 7:
//         row.description = $(chil).text()
//         ascii.push({...row})
//         row = {}
//         i=0;
//         break;
//       default:
//         console.log("WRONG INCREMENT")
//     }
//   })

// });





// fs.writeFileSync('./ascii.json', JSON.stringify(ascii), { encoding: "utf8" })
// const ascii_parsed = JSON.parse(ascii)
// const cp437_parsed = JSON.parse(cp437)

// const blank = [32, 127, 129, 141, 143, 144, 157, 160, 173]
// ascii.forEach((el) => {
//   if(el.symbol === '' && !blank.includes(Number(el.dec)))
//     console.log("Found :", el)
// })


// const filled = () => {
//   for(let i=0; i<cp437.length; i++){
//     const ascii_match = ascii.find(el => el.description === cp437[i].description)
//     if(ascii_match){
//       cp437[i].symbol = ascii_match.symbol
//     }
//   }
//   fs.writeFileSync('./cp437.json', JSON.stringify(cp437), { encoding: "utf8" })
// }

// filled()

// console.log(ascii.length);
// console.log(cp437);
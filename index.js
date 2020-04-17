const MultiCase = require('./lib/MultiCase')

const mcase = new MultiCase('data.json')

console.log(mcase.generate("Привет, { Dimitri.Nominative }."))
console.log(mcase.generate("Ты о { Dimitri.Prepositional }?"))
console.log(mcase.generate("Скажи об этом { Dimitri.Dative }!"))
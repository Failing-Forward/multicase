const MultiCase = require('./lib/MultiCase')

const mcase = new MultiCase('data.json')

console.log(mcase.generate("Привет, { Dimitri.Nominative }.")) // Привет, Дмитрий.
console.log(mcase.generate("Ты о { Dimitri.Prepositional }?")) // Ты о Дмитрии?
console.log(mcase.generate("Скажи об этом { Dimitri.Dative }!")) // Скажи об этом Дмитрию!
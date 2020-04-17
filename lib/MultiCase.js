const fs = require('fs')
const { get } = require('lodash')
const reg = /{[\W]?([\w\W]+?)[\W]?}/g;

module.exports = class MultiCase {
  constructor(filename) {
    this.data = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8' }))
  }

  generate(string) {
    let result
    let params = []
    while ((result = reg.exec(string)) !== null)
      params.push({ raw: result[0], val: get(this.data, result[1].trim()) })

    params.forEach(p => {
      string = string.replace(p.raw, p.val)
    })
      
    return string
  }
}
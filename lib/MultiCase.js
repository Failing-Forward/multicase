const fs = require('fs')
const _ = require('lodash')
const reg = /{[\W]?([\w\W]+?)[\W]?}/g;

module.exports = class MultiCase {
  constructor(filename) {
    this.data = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8' }))
  }

  generate(string) {
    let result
    while ((result = reg.exec(string)) !== null)
      string = string.replace(result[0], _.get(this.data, result[1].trim()))
    return string
  }
}
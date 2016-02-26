var assert = require('assert')
  , envs   = require('../lib/envs')

var parsedHash = envs.keyValue(
  '#commented heading. \n' +
  'key = "quoted#hash" \n' +
  'key2 = stripped#comment \n' +
  'key3 = base64=== \n' + ''
  //'key4 = "quoted \\n newline" \n'
)

assert.equal(parsedHash['key'], 'quoted#hash')
assert.equal(parsedHash['key2'], 'stripped')
assert.equal(parsedHash['key3'], 'base64===')
//assert.equal(parsedHash['key4'].replace(/\\n/g, '\n'), 'quoted \n newline')
//console.log('--------------------------------------->' + parsedHash['key4'].replace(/\\n/g, '\n') )

const util    = require('util')
const levelup = require('levelup')

function packager (leveldown) {
  function Level (location, options, callback) {
    if (util.isFunction(options)
      callback = options
    if (!util.isObject(options))
      options  = {}

    options.db = leveldown

    levelup.call(this, location, options, callback)
  }
  util.inherits(Level, levelup);

  [ 'destroy', 'repair' ].forEach(function (m) {
    if (util.isFunction(leveldown[m]) {
      Level[m] = function (location, callback) {
        leveldown[m](location, callback || function () {})
      }
    }
  })

  return Level
}

module.exports = packager

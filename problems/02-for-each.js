exports.problem = function () { /*
Exercise 2: Use forEach to print all the names in an array

Let's repeat the previous exercise using the forEach function.

module.exports = function (names) {
  // print all the names into console using forEach
  // Syntax: arr.forEach(callback[, thisArg])
}
*/}.toString().split('\n').slice(1,-1).join('\n')

exports.solution = function () { /*
module.exports = function (names) {
  names.forEach(function (name) {
    console.log(name);
  });
}

Notice that forEach lets us specify what we want to happen to each item in the array, 
but hides how the array is traversed.
*/}.toString().split('\n').slice(1,-1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var exec = require('child_process').exec
var intercept = require("intercept-stdout")
var inputParams = ["Ben", "Jafar", "Matt", "Priya", "Brian"]

exports.verify = verify({ modeReset: false }, function (args,t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var captured_text = "";
  var unhook_intercept = intercept(function(txt) {
    captured_text += txt
    return ''
  })

  f(inputParams)

  unhook_intercept();

  t.equal(captured_text.replace(' ', ''), inputParams.join('\n') + '\n')
  t.end()
})

exports.run = function (args) {
  var f = require(path.resolve(args[0]))
  var ps = exec(f(inputParams))
  ps.stderr.pipe(process.stderr)
  ps.stdout.pipe(process.stdout)
  ps.once('exit', function (code) {
    if (code) process.exit(code)
  })
}
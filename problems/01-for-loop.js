exports.problem = function () { /*
Working with Arrays

The Array is Javascript's only collection type. Arrays are everywhere. We're going to add the five functions to the Array type, and in the 
process make it much more powerful and useful. As a matter of fact, Array already has the map, filter, and reduce functions! However
we're going to reimplement these functions as a learning exercise.

This section will follow a pattern. First we'll solve problems the way you probably learned in school, or on your own by reading other 
people's code. In other words, we'll transform collections into new collections using loops and statements. Then we'll implement one of 
the five functions, and then use it to solve the same problem again without the loop. Once we've learned the five functions, you'll learn 
how to combine them to solve complex problems with very little code.

Traversing an Array

Exercise: Print all the names in an array

module.exports = function (names) {
  // print all the names into console using for loop
}
*/}.toString().split('\n').slice(1,-1).join('\n')

exports.solution = function () { /*
module.exports = function (names) {
  var counter;

  for(counter = 0; counter < names.length; counter++) {
    console.log(names[counter]);
  }
}
*/}.toString().split('\n').slice(1,-1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var exec = require('child_process').exec
var intercept = require("intercept-stdout")

exports.verify = verify({ modeReset: false }, function (args,t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var captured_text = "";
  var unhook_intercept = intercept(function(txt) {
    captured_text += txt
    return ''
  })

  f(["Ben", "Jafar", "Matt", "Priya", "Brian"])

  unhook_intercept();

  t.equal(captured_text.replace(' ', ''), ["Ben", "Jafar", "Matt", "Priya", "Brian"].join('\n') + '\n')
  t.end()
})

exports.run = function (args) {
  var f = require(path.resolve(args[0]))
  var ps = exec(f(["Ben", "Jafar", "Matt", "Priya", "Brian"]))
  ps.stderr.pipe(process.stderr)
  ps.stdout.pipe(process.stdout)
  ps.once('exit', function (code) {
    if (code) process.exit(code)
  })
}
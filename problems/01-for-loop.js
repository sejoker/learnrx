module.exports = function () { /*
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
var spawn = require('child_process').spawn
var concat = require('concat-stream')

exports.verify = verify({ modeReset: true }, function (args,t) {
  t.plan(4)
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var ps = spawn(process.execPath, f(["Ben", "Jafar", "Matt", "Priya", "Brian"]))
  ps.stderr.pipe(process.stderr)

  ps.stdout.pipe(concat(function (body) {
    t.equal(body.toString().replace(' ', ''), 'BenJafarMattPriyaBrian\n')
  }))
  ps.on('exit', function (code) {
    t.equal(code, 0, 'successful exit code')
  })
}
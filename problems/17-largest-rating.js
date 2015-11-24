exports.problem = function () { /*
Exercise 17: Retrieve the largest rating.

Let's use our new reduce function to isolate the largest value in an array of ratings.

module.exports = function (ratings) {

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.
    reduce   // Complete this expression
}
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (ratings) {
  return ratings.
    reduce(function (acc, curr) {
      if (acc > curr) {
        return acc;
      }
      else {
        return curr;
      }
    });
}
// Nice work. Now let's try combining reduce() with our other functions to build more complex queries.
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var ratings = [2,3,1,4,5]

require('../src/reduce')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')
  t.deepEqual(f(ratings), [5])
  t.end()
})
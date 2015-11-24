exports.problem = function () { /*
Exercise 18: Retrieve url of the largest boxart

Let's try combining reduce() with map() to reduce multiple boxart objects to a single value:
the url of the largest box art.

module.exports = function (boxarts) {
  
  // You should return an array containing only the URL of the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts.
    reduce   // Complete this expression
}
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (boxarts) {
  return boxarts.
    reduce(function (acc,curr) {
      if (acc.width * acc.height > curr.width * curr.height) {
        return acc;
      }
      else {
        return curr;
      }
    }).
    map(function (boxart) {
      return boxart.url;
    });
}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var boxarts = [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ]

require('../src/reduce')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')
  t.deepEqual(f(boxarts), ["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"])
  t.end()
})
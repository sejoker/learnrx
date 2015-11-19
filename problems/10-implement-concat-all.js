exports.problem = function () { /*
Flattening trees with nested forEach expressions is easy because we can explicitly add items to the array.
Unfortunately it's exactly this type of low-level operation that we've been trying to abstract away with
functions like map() and filter(). Can we define a function that's abstract enough to express our intent
to flatten a tree, without specifying too much information about how to carry out the operation?

Exercise 10: Implement concatAll()

Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array
in the array and collects the results in a new, flat array. Notice that the concatAll() function expects
each item in the array to be another array.

Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    results.push.apply(results, subArray);
  });

  return results;
};
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  require(path.resolve(args[0]))
  t.deepEqual([ [1,2,3], [4,5,6], [7,8,9] ].concatAll(), [1,2,3,4,5,6,7,8,9])
  t.end()
})
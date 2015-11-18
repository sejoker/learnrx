exports.problem = function () { /*
Notice that, like map(), every filter() operation shares some operations in common:

Traverse the array
Add objects that pass the test to a new array
Why not abstract away how these operations are carried out?

Exercise 7: Implement filter()

To make filtering easier, let's add a filter() function to the Array type. The filter()
function accepts a predicate. A predicate is a function that accepts an item in the array,
and returns a boolean indicating whether the item should be retained in the new array.

Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"

*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    if (predicateFunction(itemInArray)) {
    results.push(itemInArray);
    }
  });

  return results;
};
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var originalForEach = Array.prototype.forEach
var useForEach = false
Array.prototype.forEach = function () {
  useForEach = true
  return originalForEach.apply(this, arguments)
}

exports.verify = verify({ modeReset: true }, function (args, t) {
  useForEach = false
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  
  require(path.resolve(args[0]))
  
  var inputParams = [1,2,3]
  var result = inputParams.filter(function (x) { return x > 2 })
  t.deepEqual(result, [3], 'expected that [1,2,3].filter(function(x) { return x > 2}) would equal [3]')
  t.deepEqual(inputParams, [1,2,3], 'original array stays unchanged')
  t.ok(useForEach, 'you did use Array.forEach')
  t.end()
})
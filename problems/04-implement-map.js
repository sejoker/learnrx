exports.problem = function () { /*
Exercise 4: Implement map()

To make projections easier, let's add a map() function to the Array type. 
Map accepts the projection function to be applied to each item in the source 
array, and returns the projected array.

Array.prototype.map = function (projectionFunction) {
  var results = [];
  this.forEach(function(itemInArray) {

    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------

  });

  return results;
};

// JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]'
*/}.toString().split('\n').slice(1,-1).join('\n')

exports.solution = function () { /*
Array.prototype.map = function (projectionFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    results.push(projectionFunction(itemInArray));

  });

  return results;
};
*/}.toString().split('\n').slice(1,-1).join('\n')

var verify = require('adventure-verify')
var path = require('path')

var originalForEach = Array.prototype.forEach
var useForEach = false

Array.prototype.forEach = function () {
  useForEach = true
  return originalForEach.apply(this, arguments)
}

exports.verify = verify({ modeReset: true}, function (args, t) {
  useForEach = false
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  require(path.resolve(args[0]))
  var arr = [1,2,3]
  var result = arr.map(function (x) { return x + 1 })
  t.deepEqual(arr, [1,2,3], 'Original array stays unchanged')
  t.deepEqual(result, [2,3,4], 'Expected that [1,2,3].map(function(x) { return x + 1}) would equal [2,3,4].')
  t.ok(useForEach, 'you did use Array.forEach')
  t.end()
})


exports.problem = function () { /*
Exercise 22: Implement zip

Let's add a static zip() function to the Array type. The zip function accepts a combiner function,
traverses each array at the same time, and calls the combiner function on the current item on the
left-hand-side and right-hand-side. The zip function requires an item from each array in order to
call the combiner function, therefore the array returned by zip will only be as large as the
smallest input array.

Array.zip = function (left, right, combinerFunction) {
  var counter,
    results = [];

  for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
  }

  return results;
};
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
Array.zip = function (left, right, combinerFunction) {
  var counter,
    results = [];

  for(counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter],right[counter]));
  }

  return results;
};
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  require(path.resolve(args[0]))
  var left = [1,2,3],
    right = [4,5,6],
    sum = Array.zip(left, right, function(left, right){ return left + right; }),
    expected = [5,7,9]

  t.deepEqual(sum, expected)
  t.end()
})
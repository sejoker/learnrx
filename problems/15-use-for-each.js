exports.problem = function () { /*
It's a very common pattern to see several nested concatMap operations, with the last operation being a map.
You can think of this pattern as the functional version of a nested forEach.

Reducing Arrays

Sometimes we need to perform an operation on more than one item in the array at the same time. For example,
let's say we need to find the largest integer in an array. We can't use a filter() operation, because it only
examines one item at a time. To find the largest integer we need to compare items in the array to each other. 

One approach could be to select an item in the array as the assumed largest number (perhaps the first item),
and then compare that value to every other item in the array. Each time we come across a number that was larger
than our assumed largest number, we'd replace it with the larger value, and continue the process until the entire
array was traversed.

If we replaced the specific size comparison with a closure, we could write a function that handled the array
traversal process for us. At each step our function would apply the closure to the last value and the current
value and use the result as the last value the next time. Finally we'd be left with only one value. This
process is known as reducing because we reduce many values to a single value.

Exercise 15: Use forEach to find the largest box art

In this example we use forEach to find the largest box art. Each time we examine a new boxart we update a variable
with the currently known maximumSize. If the boxart is smaller than the maximum size, we discard it. If it's larger,
we keep track of it. Finally we're left with a single boxart which must necessarily be the largest.

module.exports = function (boxarts) { 
  var currentSize,
    maxSize = -1,
    largestBoxart;

  boxarts.forEach(function (boxart) {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

  return largestBoxart;
}

// To process to the next exercise run
// `learnrx verify next`
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.verify = function (args,cb) {
  if (args.join('').toLowerCase() !== 'next') {
    console.log('run `learnrx verify next` to proceed');
    return cb(false)
  }

  return cb(true)
}
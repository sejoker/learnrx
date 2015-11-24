exports.problem = function () { /*
This process is a reduction because we're using the information we derived from the last computation
to calculate the current value. However in the example above, we still have to specify the method of
traversal. Wouldn't it be nice if we could just specify what operation we wanted to perform on the
last and current value? Let's create a helper function to perform reductions on arrays.

Exercise 16: Implement reduce()

Let's add a reduce() function to the Array type. Like map

// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

Array.prototype.reduce = function (combiner, initialValue) {
  var counter,
    accumulatedValue;

  // If the array is empty, do nothing
  if (this.length === 0) {
    return this;
  }
  else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    }
    else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    }
    else {
      throw "Invalid arguments.";
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one value.
    while(counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter])
      counter++;
    }

    return [accumulatedValue];
  }
};

// NOTE: The ES5 spec has reduce return a single value instead of an array with a single value.

// You can ignore this difference for now, but our reduce behaves this way for the same reason
// you are forbidden from using bracket array access notation.
*/}.toString().split('\n').slice(1, -1).join('\n')


exports.verify = function (args,cb) {
  if (args.join('').toLowerCase() !== 'next') {
    console.log('run `learnrx verify next` to proceed');
    return cb(false)
  }

  return cb(true)
}
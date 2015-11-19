Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this.
    map(function (item) {
      return projectionFunctionThatReturnsArray(item);
    }).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
};
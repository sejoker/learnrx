Array.prototype.concatAll = function () {
  var results = []
  this.forEach(function(subArray) {
    results.push.apply(results, subArray)
  })

  return results
}

Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this.
    map(function (item) {
      return projectionFunctionThatReturnsArray(item);
    }).
    concatAll();
};
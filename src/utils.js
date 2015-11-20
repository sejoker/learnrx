Array.prototype.sortBy = function (keySelector) {
  return this.slice().sort(function(a,b) {
    var aKey = keySelector(a),
      bKey = keySelector(b)

    if (aKey > bKey) {
      return 1
    }
    else if (bKey > aKey) {
      return -1
    }
    else {
      return 0
    }
  })
}

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
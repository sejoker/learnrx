Array.prototype.map = function (projectionFunction) {
  var results = [];
  this.forEach(function (itemInArray) {
    results.push(projectionFunction(itemInArray));

  });

  return results;
};
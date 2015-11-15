Array.prototype.sortBy = function (keySelector) {
  return this.slice().sort(function(a,b) {
    var aKey = keySelector(a),
      bKey = keySelector(b);

    if (aKey > bKey) {
      return 1;
    }
    else if (bKey > aKey) {
      return -1;
    }
    else {
      return 0;
    }
  });
};
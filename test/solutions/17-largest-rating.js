module.exports = function (ratings) {
  return ratings.
    reduce(function (acc, curr) {
      if (acc > curr) {
        return acc;
      }
      else {
        return curr;
      }
    });
}

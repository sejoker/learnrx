module.exports = function (boxarts) {
  return boxarts.
    reduce(function (acc,curr) {
      if (acc.width * acc.height > curr.width * curr.height) {
        return acc;
      }
      else {
        return curr;
      }
    }).
    map(function (boxart) {
      return boxart.url;
    });
}
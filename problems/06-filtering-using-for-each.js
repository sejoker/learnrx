exports.problem = function () { /*
Filtering Arrays

Like projection, filtering an array is also a very common operation.
To filter an array we apply a test to each item in the array and collect
the items that pass into a new array.

Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

Use forEach() to loop through the videos in the newReleases array and,
if a video has a rating of 5.0, add it to the videos array. 

module.exports = function(videos) {

  var topRated = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------

  return topRated;
}

// Input example:
// [
//   {
//     "id": 70111470,
//     "title": "Die Hard",
//     "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//     "rating": [4.0],
//     "bookmark": []
//   }
// ]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (videos) {
  
  var topRated = [];

  videos.forEach(function(video) {
    if (video.rating === 5.0) {
      topRated.push(video);
    }
  });

  return topRated;
}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var originalForEach = Array.prototype.forEach
var useForEach = false
Array.prototype.forEach = function () {
  useForEach = true
  return originalForEach.apply(this, arguments)
}

var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ]

exports.verify = verify({ modeReset: true }, function (args, t) {
  useForEach = false
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = newReleases.filter(function (video) { return video.rating === 5.0 });
  t.deepEqual(f(newReleases), expected)
  t.ok(useForEach, 'you did use Array.forEach')
  t.end()
})
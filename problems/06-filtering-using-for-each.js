exports.problem = function () { /*
Filtering Arrays

Like projection, filtering an array is also a very common operation. To filter an array we apply a test to each item in the array and collect the items that pass into a new array.
Exercise 6: Use forEach() to collect only those videos with a rating of 5.0

Use forEach() to loop through the videos in the newReleases array and, if a video has a rating of 5.0, add it to the videos array. 

module.exports = function() {
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
  ],
  videos = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------

  return videos;
}
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function() {
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
    ],
    videos = [];

  newReleases.forEach(function(video) {
    if (video.rating === 5.0) {
      videos.push(video);
    }
  });

  return videos;
}

// Notice that, like map(), every filter() operation shares some operations in common:

// Traverse the array
// Add objects that pass the test to a new array
// Why not abstract away how these operations are carried out?

*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
require('../src/utils')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var videos = require(path.resolve(args[0]))().sortBy(function (video) { return video.id })
  var expected = '[{"id":675465,"title":"Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture.jpg","uri":"http://api.netflix.com/catalog/titles/movies/70111470","rating":5,"bookmark":[{"id":432534,"time":65876586}]},{"id":654356453,"title":"Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys.jpg","uri":"http://api.netflix.com/catalog/titles/movies/70111470","rating":5,"bookmark":[{"id":432534,"time":65876586}]}]';
  t.equal(JSON.stringify(videos), expected)
  t.end()
})
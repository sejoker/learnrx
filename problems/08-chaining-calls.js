exports.problem = function () { /*
Query Data by Chaining Method Calls
Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0

module.exports = function(videos) {
  
  // ------------ INSERT CODE HERE! -----------------------------------
  // Chain the filter and map functions to select the id of all videos
  // with a rating of 5.0.

  return videos // Complete this expression
  // ------------ INSERT CODE HERE! -----------------------------------
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
  return videos.
    filter(function(video) {
      return video.rating === 5.0;
    }).
    map(function(video) {
      return video.id;
    });
}

// Chaining together map() and filter() gives us a lot of expressive power.
// These high level functions let us express what data we want, but leave the underlying
// libraries a great deal of flexibility in terms of how our queries are executed.
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
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
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  var expected = newReleases.
    filter(function(video) {
      return video.rating === 5.0;
    }).
    map(function(video) {
      return video.id;
    })

  t.equal(typeof f, 'function', 'you exported a function')
  t.deepEqual(f(newReleases), expected)
  t.end()
})
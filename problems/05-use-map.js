exports.problem = function () { /*
Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

Let's repeat the exercise of collecting {id, title} pairsfor each video in
the newReleases array, but this time we'll use our map function. 

module.exports = function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  return newReleases.map // finish this expression!
  // ------------ INSERT CODE HERE! -----------------------------------

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
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ];

  return newReleases.map(function(video) { return {id: video.id, title: video.title}; });
}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
require('../src/utils')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  var videoAndTitlePairs = require(path.resolve(args[0]))()
  var expected = '[{\"id\":675465,\"title\":\"Fracture\"},{\"id\":65432445,\"title\":\"The Chamber\"},{\"id\":70111470,\"title\":\"Die Hard\"},{\"id\":654356453,\"title\":\"Bad Boys\"}]'
  // Sorting by video id
  videoAndTitlePairs = videoAndTitlePairs.sortBy(function (video) { return video.id })
  t.equal(JSON.stringify(videoAndTitlePairs), expected)
  t.end()
})
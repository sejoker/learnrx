exports.problem = function () { /*
Projecting Arrays

Applying a function to a value and creating a new value is called a projection. To project 
one array into another, we apply a projection function to each item in the array and collect 
the results in a new array.

Exercise 3: Project an array of videos into an array of {id,title} pairs using forEach()

For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

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
  ],
  videoAndTitlePairs = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate {id, title} pairs from each video.
  // Put the results into the videoAndTitlePairs array using the Array's
  // push() method. Example: videoAndTitlePairs.push(newItem);
  // ------------ INSERT CODE HERE! -----------------------------------


  return videoAndTitlePairs;
}  
*/}.toString().split('\n').slice(1,-1).join('\n')

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
    ],
    videoAndTitlePairs = [];

  newReleases.forEach(function(video) {
    videoAndTitlePairs.push({id:video.id, title: video.title});
  });

  return videoAndTitlePairs;
}
*/}.toString().split('\n').slice(1,-1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
require('../src/utils')

exports.verify = verify({ modeReset: false }, function (args,t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = '[{\"id\":675465,\"title\":\"Fracture\"},{\"id\":65432445,\"title\":\"The Chamber\"},{\"id\":70111470,\"title\":\"Die Hard\"},{\"id\":654356453,\"title\":\"Bad Boys\"}]';
  var videoAndTitlePairs = f()

  videoAndTitlePairs = videoAndTitlePairs.sortBy(function(video) { return video.id });
  t.equal(JSON.stringify(videoAndTitlePairs), expected)
  t.end()
})
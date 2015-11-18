exports.problem = function () { /*
Querying Trees

Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge because we need
to flatten them into arrays in order to apply filter() and map() operations on them. In this section
we'll define a concatAll() function that we can combine with map() and filter() to query trees.

Exercise 9: Flatten the movieLists array into an array of video ids

Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional
movieLists array.

module.exports = function (movieLists) {
  
  var allVideoIdsInMovieLists = [];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return allVideoIdsInMovieLists;

}

// Input example:
// [
//   {
//     name: "New Releases",
//     videos: [
//       {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id:432534, time:65876586 }]
//       }
//     ]
//   }
// ]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (movieLists) {
  
  var allVideoIdsInMovieLists = [];

  movieLists.forEach(function(movieList) {
    movieList.videos.forEach(function(video) {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  return allVideoIdsInMovieLists;

}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var movieLists = [
      {
        name: "New Releases",
        videos: [
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
          }
        ]
      },
      {
        name: "Dramas",
        videos: [
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
      }
    ]

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = movieLists.reduce(function (prev, current) {
    current.videos.forEach(function(video) {
      prev.push(video.id);
    })
    return prev
  }, [])
  t.deepEqual(f(movieLists), expected)
  t.end()
})
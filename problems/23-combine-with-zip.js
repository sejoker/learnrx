exports.problem = function () { /*
Exercise 23: Combine videos and bookmarks by index

Let's repeat exercise 21, but this time lets use your new zip() function.
For each video and bookmark pair, create a {videoId, bookmarkId} pair.

module.exports = function(videos, bookmarks) {
  return Array.
    zip( //... finish this expression
}

// Input example:
// videos :
// [
//       {
//         "id": 70111470,
//         "title": "Die Hard",
//         "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//         "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//       }
// ]
//
// bookmarks : [ {id: 470, time: 23432}]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (videos, bookmarks) {
  return Array.zip(videos, bookmarks,
      function (video, bookmark) {
        return { videoId: video.id, bookmarkId: bookmark.id };
      });
}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')

var videos = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
      }
    ],
    bookmarks = [
      {id: 470, time: 23432},
      {id: 453, time: 234324},
      {id: 445, time: 987834}
    ]

require('../src/zip')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = [
    {"videoId":70111470,"bookmarkId":470},
    {"videoId":654356453,"bookmarkId":453},
    {"videoId":65432445,"bookmarkId":445}
  ]
  
  t.deepEqual(f(videos, bookmarks), expected)
  t.end()
})
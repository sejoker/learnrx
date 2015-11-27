exports.problem = function () { /*
Zipping Arrays

Sometimes we need to combine two arrays by progressively taking an item from each
and combining the pair. If you visualize a zipper, where each side is an array,
and each tooth is an item, you'll have a good idea of how the zip operation works.

Exercise 21: Combine videos and bookmarks by index

Use a for loop to traverse the videos and bookmarks array at the same time. For each
video and bookmark pair, create a {videoId, bookmarkId} pair and add it to the
videoIdAndBookmarkIdPairs array.

module.exports = function(videos, bookmarks) {
  var counter,
  videoIdAndBookmarkIdPairs = [];

  for(var counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    // Insert code here to create a {videoId, bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
  }

  return videoIdAndBookmarkIdPairs;
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
  var counter,
  videoIdAndBookmarkIdPairs = [];

  for(var counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    videoIdAndBookmarkIdPairs.push({
      videoId: videos[counter].id,
      bookmarkId: bookmarks[counter].id
    });
  }

  return videoIdAndBookmarkIdPairs;
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
    ];

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
exports.problem = function () { /*
Wow! Great work. Mastering the combination of map() and concatAll() is key to effective functional programming.
You're half way there! Let's try a more complicated example...

Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

You've managed to flatten a tree that's two levels deep, let's try for three! Let's say that instead of a single
boxart url on each video, we had a collection of boxart objects, each with a different size and url. Create
a query that selects {id, title, boxart} for every video in the movieLists. This time though, the boxart property
in the result will be the url of the boxart object with dimensions of 150x200px. Let's see if you can solve this
problem with map(), concatAll(), and filter().

There's just more one thing: you can't use indexers. In other words, this is illegal:

// var itemInArray = movieLists[0];

Furthermore, you're not allowed to use indexers in any of the remaining exercises unless you're implementing one
of the five functions. There is a very good reason for this restriction, and that reason will eventually be
explained. For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)

module.exports = function (movieLists) {

  // Use one or more map, concatAll, and filter calls to create an array with the following items
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists // Complete this expression!

}

// Input example:
// [
//   {
//     name: "Instant Queue",
//     videos : [
//       {
//         "id": 654356453,
//         "title": "Bad Boys",
//         "boxarts": [
//           { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
//           { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
//         ],
//         "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 5.0,
//         "bookmark": [{ id:432534, time:65876586 }]
//       }
//     ]
//   }
// ]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (movieLists) {
  return movieLists.
    map(function (movieList) {
      return movieList.videos.
        map(function (video) {
          return video.boxarts.
            filter(function (boxart) {
              return boxart.width === 150;
            }).
            map(function (boxart) {
              return {id: video.id, title: video.title, boxart: boxart.url};
            });
          }).
          concatAll();
      }).
      concatAll();
}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var movieLists = [
      {
        name: "Instant Queue",
        videos : [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [
              { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      }
    ]

function queryTree(movieLists) {
  return movieLists.
    map(function (movieList) {
      return movieList.videos.
        map(function (video) {
          return video.boxarts.
            filter(function (boxart) {
              return boxart.width === 150;
            }).
            map(function (boxart) {
              return {id: video.id, title: video.title, boxart: boxart.url};
            });
          }).
          concatAll();
      }).
      concatAll();
}

require('../src/utils')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  t.deepEqual(f(movieLists), queryTree(movieLists))
  var useArrayIndex = ('' + f).indexOf('[0]') !== -1
  t.ok(!useArrayIndex, 'no access to an array through an index')
  if (useArrayIndex) {
    t.comment("You're not allowed to index into the array. You might be creating the object too early. Instead of using an indexer to get the boxart out of the array, try adding a call to map() and creating the object inside the projection function.")
  }
  t.end()
})
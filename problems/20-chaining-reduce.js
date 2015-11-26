exports.problem = function () { /*
Exercise 20: Retrieve the id, title, and smallest box art url for every video.

This is a variation of the problem we solved earlier, where we retrieved the url
of the boxart with a width of 150px. This time we'll use reduce() instead of
filter() to retrieve the smallest box art in the boxarts array.

module.exports = function(movieLists) {
  
  // Use one or more concatMap, map, and reduce calls to create an array with the following items (order doesn't matter)
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.
    concatMap(function(movieList) {

    })

}

// Input example:
// [
//   {
//     name: "Thrillers",
//     videos: [
//       {
//         "id": 65432445,
//         "title": "The Chamber",
//         "boxarts": [
//           { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
//           { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
//         ],
//         "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//         "rating": 4.0,
//         "bookmark": []
//       }
//     ]
//   }
// ]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (movieLists) {
  return movieLists.concatMap(function (movieList) {
    return movieList.videos.concatMap(function (video) {
      return video.boxarts.
      reduce(function (acc,curr) {
      if (acc.width * acc.height < curr.width * curr.height) {
        return acc;
      }
      else {
        return curr;
      }
      }).
      map(function (boxart) {
        return {id: video.id, title: video.title, boxart: boxart.url};
      });
    });
  });
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
            { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "Thrillers",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
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
            { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ]

require('../src/reduce')
require('../src/utils')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')
  var expected = [
            {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
            {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
            {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" }
          ]
  t.deepEqual(f(movieLists), expected)
  var useArrayIndex = ('' + f).indexOf('[0]') !== -1
  t.ok(!useArrayIndex, 'no access to an array through an index')
  if (useArrayIndex) {
    t.comment("You're not allowed to index into the array. You might be creating the object too early. Instead of using an indexer to get the boxart out of the array, try adding a call to map() and creating the object inside the projection function.")
  }
  t.end()
})
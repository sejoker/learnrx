exports.problem = function () { /*
Exercise 24: Retrieve each video's id, title, middle interesting moment time, and smallest
box art url.

This is a variation of the problem we solved earlier. This time each video has an interesting
moments collection, each representing a time during which a screenshot is interesting or
representative of the title as a whole. Notice that both the boxarts and interestingMoments
arrays are located at the same depth in the tree. Retrieve the time of the middle interesting
moment and the smallest box art url simultaneously with zip(). Return an {id, title, time, url}
object for each video.

module.exports = function (movieLists) {  
  //------------ COMPLETE THIS EXPRESSION --------------
  return movieLists.
    concatMap(function(movieList) {

    });

}

// Input example :
// [{
//   name: "Instant Queue",
//   videos: [
//     {
//       "id": 65432445,
//       "title": "The Chamber",
//       "boxarts": [
//         { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
//         { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
//       ],
//       "url": "http://api.netflix.com/catalog/titles/movies/70111470",
//       "rating": 4.0,
//       "interestingMoments": [
//         { type: "End", time:132423 },
//         { type: "Start", time: 54637425 },
//         { type: "Middle", time: 3452343}
//       ]
//     }
//   ]
// }]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (movieLists) {  
  return movieLists.concatMap( function(movieList) {
    return movieList.videos.concatMap(function (video) {
      return Array.zip(
        video.boxarts.reduce(function (acc,curr) {
          if (acc.width * acc.height < curr.width * curr.height) {
                return acc;
          }
          else {
              return curr;
          }
          }),
        video.interestingMoments.filter(function (interestingMoment) {
          return interestingMoment.type === "Middle";
        }),
          function (boxart, interestingMoment) {
          return {
            id: video.id,
            title: video.title,
            time: interestingMoment.time,
            url: boxart.url
            };
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
            "interestingMoments": [
              { type: "End", time:213432 },
              { type: "Start", time: 64534 },
              { type: "Middle", time: 323133}
            ]
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
            "interestingMoments": [
              { type: "End", time:54654754 },
              { type: "Start", time: 43524243 },
              { type: "Middle", time: 6575665}
            ]
          }
        ]
      },
      {
        name: "Instant Queue",
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
            "interestingMoments": [
              { type: "End", time:132423 },
              { type: "Start", time: 54637425 },
              { type: "Middle", time: 3452343}
            ]
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
            "interestingMoments": [
              { type: "End", time:45632456 },
              { type: "Start", time: 234534 },
              { type: "Middle", time: 3453434}
            ]
          }
        ]
      }
    ]

require('../src/reduce')
require('../src/concat')
require('../src/zip')


exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')
  expected = [
    {
      "id":70111470,
      "title":"Die Hard",
      "time":323133,
      "url":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
    },
    {
      "id":654356453,
      "title":"Bad Boys",
      "time":6575665,
      "url":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
    },
    {
      "id":65432445,
      "title":"The Chamber",
      "time":3452343,
      "url":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
    },
    {
      "id":675465,
      "title":"Fracture",
      "time":3453434,
      "url":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
    }
  ]

  t.deepEqual(f(movieLists), expected)
  t.end()
})
exports.problem = function () { /*
Powerful Queries

Now that we've learned the five operators let's flex our muscles and write some powerful queries.
Exercise 25: Converting from Arrays to Trees

When information is organized in a tree like a JSON expression, relationships point from parent
to child. In relational systems like databases, relationships point from children to their parents.
Both ways of organizing information are equivalent, and depending on the circumstances, we might
get data organized in one way or another. It may surprise you to learn that you can use the 5 query
functions you already know to easily convert between these representations. In other words, not
only can you query arrays from trees, you can query trees from arrays.

We have 2 arrays each containing lists, and videos respectively. Each video has a listId field
indicating its parent list. We want to build an array of list objects, each with a name and a videos
array. The videos array will contain the video's id and title. In other words we want to build
the following structure:
// [
//   {
//     "name": "New Releases",
//     "videos": [
//       {
//         "id": 65432445,
//         "title": "The Chamber"
//       },
//       {
//         "id": 675465,
//         "title": "Fracture"
//       }
//     ]
//   },
//   {
//     "name": "Thrillers",
//     "videos": [
//       {
//         "id": 70111470,
//         "title": "Die Hard"
//       },
//       {
//         "id": 654356453,
//         "title": "Bad Boys"
//       }
//     ]
//   }
// ]

Note: please make sure when creating objects (both lists and videos) that you add properties in
the same order as above. This doesn't impact the correctness of your code, but the verifier
expects properties to be created in this order.

module.exports = function (lists, videos) { 
  return lists. // complete this expression
}

// Input example:
// lists: 
// [
//   {
//     "id": 5434364,
//     "name": "New Releases"
//   }
// ]
// videos: 
// [
//   {
//     "listId": 5434364,
//     "id": 65432445,
//     "title": "The Chamber"
//   }
// ]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (lists, videos) { 
 return lists.map(function (list) {
    return {
      name: list.name,
      videos:
        videos.
          filter(function (video) {
            return video.listId === list.id;
          }).
          map(function (video) {
            return {id: video.id, title: video.title};
          })
    };
  });
}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')

var lists = [
      {
        "id": 5434364,
        "name": "New Releases"
      },
      {
        "id": 65456475,
        "name": "Thrillers"
      }
    ],
    videos = [
      {
        "listId": 5434364,
        "id": 65432445,
        "title": "The Chamber"
      },
      {
        "listId": 5434364,
        "id": 675465,
        "title": "Fracture"
      },
      {
        "listId": 65456475,
        "id": 70111470,
        "title": "Die Hard"
      },
      {
        "listId": 65456475,
        "id": 654356453,
        "title": "Bad Boys"
      }
    ]

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = [
    { "name": "New Releases",
      "videos":
        [
          { 
            "id":65432445,
            "title":"The Chamber"
          },
          { 
            "id":675465,
            "title":"Fracture"
          }
        ]
    },
    {
      "name":"Thrillers",
      "videos":
        [
          {
            "id":70111470,
            "title":"Die Hard"
          },
          {
            "id":654356453,
            "title":"Bad Boys"
          }
        ]
    }
  ]

  t.deepEqual(f(lists, videos), expected)
  t.end()
})
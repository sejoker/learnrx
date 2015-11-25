exports.problem = function () { /*
Exercise 19: Reducing with an initial value

Sometimes when we reduce an array, we want the reduced value to be a different type than the items
stored in the array. Let's say we have an array of videos and we want to reduce them to a single
map where the key is the video id and the value is the video's title.

var objectAssign = require('object-assign');

module.exports = function (videos) {
  
  // Expecting output in this format...
  // [
  //   {
  //     "65432445": "The Chamber",
  //     "675465": "Fracture"
  //   }
  // ]
  return videos.
    reduce(function(accumulatedMap, video) {

      // We are using ES6 Object.assign() ponyfill here.
      // Install it with npm install object-assign.
      // You can use built-in Object.assign starting from node 4.
      // The Object.assign() method is used to copy the values of all
      // enumerable own properties from one or more source objects to
      // a target object. It will return the target object.

      var copyOfAccumulatedMap = objectAssign(accumulatedMap);

      // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
      // ----- NEW MAP USING THE VIDEO ID AS THE KEY   ----

      return copyOfAccumulatedMap;
    },
    // Use an empty map as the initial value instead of the first item in
    // the list.
    {});
}

// Input example: [
//   {
//     "id": 65432445,
//     "title": "The Chamber"
//   }
// ]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
var objectAssign = require('object-assign');

module.exports = function (videos) {
  return videos.
    reduce(function(accumulatedMap, video) {
      var copyOfAccumulatedMap = objectAssign(accumulatedMap);
      copyOfAccumulatedMap[video.id] = video.title;
      return copyOfAccumulatedMap;
    },
    {});
}

// Nice work. Now let's try combining reduce() with our other functions to build more complex queries.
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var videos = [
    {
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "id": 675465,
      "title": "Fracture"
    },
    {
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "id": 654356453,
      "title": "Bad Boys"
    }
  ]

require('../src/reduce')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = [
            {
              "65432445": "The Chamber",
              "675465": "Fracture",
              "70111470": "Die Hard",
              "654356453": "Bad Boys"
            }
          ]
  t.deepEqual(f(videos), expected)
  t.end()
})
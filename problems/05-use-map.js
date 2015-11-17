exports.problem = function () { /*
Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs

Let's repeat the exercise of collecting {id, title} pairs for each video in
the newReleases array, but this time we'll use our map function. 

module.exports = function(videos) {
  
  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  return videos.map // finish this expression!
  // ------------ INSERT CODE HERE! -----------------------------------

}

// Input example:
// [
//   {
//     "id": 70111470,
//     "title": "Die Hard",
//     "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
//     "rating": [4.0],
//     "bookmark": []
//   }
// ]
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (videos) {
  return newReleases.map(function (video) { 
      return { id: video.id, title: video.title };
  });
}

// Notice that map allows us to specify what projection we want to apply to an array,
// but hides how the operation is carried out. 
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var originalMap = Array.prototype.map
var useMap = false

Array.prototype.map = function () {
  useMap = true
  return originalMap.apply(this, arguments)
}

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
]

exports.verify = verify({ modeReset: true }, function (args, t) {
  useMap = false
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')

  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = newReleases.reduce(function (prev, video) { 
      prev.push({ id: video.id, title: video.title })
      return prev
    }, [])
  
  t.deepEqual(f(newReleases), expected)
  t.ok(useMap, 'You did use Array.map')
  t.end()
})
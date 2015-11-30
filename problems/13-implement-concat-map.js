exports.problem = function () { /*
Fantastic job! Now you've learned to use concatAll() alongside map() and filter() to queries trees. Notice that map() and
concatAll() are very commonly chained together. Let's create a small helper function to help us with this common pattern.

Exercise 13: Implement concatMap()

Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels
deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's
just a map operation, followed by a concatAll.

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this.
    map(function(item) {
      // ------------   INSERT CODE HERE!  ----------------------------
      // Apply the projection function to each item. The projection
      // function will return an new child array. This will create a
      // two-dimensional array.
      // ------------   INSERT CODE HERE!  ----------------------------
    }).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
};

// var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
// // collect all the words for each number, in every language, in a single, flat list
// var allWords = [0,1,2].
//   concatMap(function(index) {
//     return spanishFrenchEnglishWords[index];
//   });

// return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';


*/}.toString().split('\n').slice(1, -1).join('\n')


exports.solution = function () { /*
Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return this.
    map(function (item) {
      return projectionFunctionThatReturnsArray(item);
    }).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
};
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')

require('../src/concat')

exports.verify = verify({ modeReset: true }, function (args, t) {
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  require(path.resolve(args[0]))
  var 
    spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ],
    expected = ["cero","rien","zero","uno","un","one","dos","deux","two"]


  var allWords = [0,1,2].
    concatMap(function(index) {
      return spanishFrenchEnglishWords[index]
    })

  t.deepEqual(allWords, expected)
  t.end()
})
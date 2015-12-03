exports.problem = function () { /*
Exercise 27: Stock Ticker

Let's try an easier question. Let's say we have a collection of all of the prices for NASDAQ
stocks over time. Every time the price of a stock changes on the NASDAQ ticker an entry is
added to this collection. Let's say that ten days ago you bought shares in Microsoft, and now
you want to print all of the MSFT share prices since then. Filter the collection for MSFT
trades starting from ten days ago and print each price record (including the time stamp)
using the print() function. Note: this is not a trick question. It's as easy as it seems. 

// The pricesNASDAQ collection looks something like this...
// var pricesNASDAQ = [
//   ... from the NASDAQ's opening day
//   {name: "ANGI", price: 31.22, timeStamp: new Date(2011,11,15) },
//   {name: "MSFT", price: 32.32, timeStamp: new Date(2011,11,15) },
//   {name: "GOOG", price: 150.43, timeStamp: new Date(2011,11,15)},
//   {name: "ANGI", price: 28.44, timeStamp: new Date(2011,11,16)},
//   {name: "GOOG", price: 199.33, timeStamp: new Date(2011,11,16)},
//   ...and up to the present.
// ];


module.exports = function (pricesNASDAQ, printRecord) {
  var microsoftPrices,
    now = new Date(),
    tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

  // use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
  microsoftPrices =
    pricesNASDAQ.
      filter(function (priceRecord) {   // finish this expression

  // Print the trades to the output console
  microsoftPrices.
    forEach(function (priceRecord) {
      printRecord(priceRecord);
    });
}
    
*/}.toString().split('\n').slice(1, -1).join('\n')

exports.solution = function () { /*
module.exports = function (pricesNASDAQ, printRecord) {
  var microsoftPrices,
    now = new Date(),
    tenDaysAgo = new Date( now.getFullYear(), now.getMonth(), now.getDate() - 10);

  // use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
  microsoftPrices =
    pricesNASDAQ.
      filter(function (priceRecord) {
        return priceRecord.name === 'MSFT' && priceRecord.timeStamp > tenDaysAgo;
      });

  // Print the trades to the output console
  microsoftPrices.
    forEach(function (priceRecord) {
      printRecord(priceRecord);
    });
}
*/}.toString().split('\n').slice(1, -1).join('\n')

var verify = require('adventure-verify')
var path = require('path')
var Rx = require('rx');

var stockSymbols = ["MSFT", "GOOG","NFLX","OSTK"],
    input = [{name: "MSFT", price: 32.32, timeStamp: new Date() }, {name: "GOOG", price: 150.43, timeStamp: new Date(2011,11,15)}]

exports.verify = verify({ modeReset: true }, function (args, t) {
  //t.plan(4);
  t.equal(args.length, 1, 'learnrx verify YOURFILE.js')
  var f = require(path.resolve(args[0]))
  t.equal(typeof f, 'function', 'you exported a function')

  var expected = [input[0]],
    counter = 0,
    items = [],
    confirmPrint = function (item) {
      items.push(item);
    },
    print = function(item) {
      var res = "MSFT " + item.price + " at " + item.timeStamp.toString();
      t.ok(true)
      counter++;
      if (counter <= 3) {
        console.log(res)
      } else {
        t.ok(true)
      }
    },
    stocks =
      Rx.Observable.
        interval(250).
        take(3).
        map(function() {
          var symbol = stockSymbols[Math.floor(Math.random() * stockSymbols.length)];
          return {name: symbol, price: 30 + ((Math.floor(Math.random() * 100))/200), timeStamp: new Date()};
        })

  f(input, confirmPrint)
  t.deepEqual(items, expected)
  t.end()
  //setTimeout(function() { f(stocks, print) }, 1000)

})
exports.problem = function () { /*
This is a series of interactive exercises for learning Microsoft's Reactive Extensions (Rx) Library for JavaScript. 
So why is the title "Functional Programming in JavaScript"? Well it turns out that the key to learning Rx is 
training yourself to use functional programming to manipulate collections.  Functional programming provides 
developers with the tools to abstract common collection operations into reusable, composable building blocks. 
You'll be surprised to learn that most of the operations you perform on collections can be accomplished with
five simple functions (some native to JavaScript and some included in the RxJS library:

1. map
2. filter
3. concatAll
4. reduce
5. zip

Here's my promise to you: if you learn these 5 functions your code will become shorter, more self-descriptive,
and more durable. Also, for reasons that might not be obvious right now, you'll learn that these five functions
hold the key to simplifying asynchronous programming. Once you've finished this tutorial you'll also have all
the tools you need to easily avoid race conditions, propagate and handle asynchronous errors, and sequence
events and AJAX requests. In short,
these 5 functions will probably be the most powerful, flexible, and useful functions you'll ever learn.

To process to the next exercise run
`learnrx verify next`
*/}.toString().split('\n').slice(1,-1).join('\n')

exports.verify = function (args,cb) {
  if (args.join('').toLowerCase() !== 'next') {
    console.log('run `learnrx verify next` to proceed');
    return cb(false)
  }

  return cb(true)
}

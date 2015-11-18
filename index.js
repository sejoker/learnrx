#!/usr/bin/env node
var adventure = require('adventure')
var shop = adventure({
  name: 'learnrx',
  bg: 'white',
  fg: 'magenta',
  title: 'Functional Programming in JavaScript'
})

var fs = require('fs')
var path = require('path')
var problems = fs.readdirSync(path.resolve(__dirname, 'problems'))
problems.filter(function (problem) {
  return problem.match(/^[^.].*\.js$/)
}).forEach(function (problem) {
  var name = problem.replace(/\.js$/, '').split('-').map(function (p) {
    return p.charAt(0).toUpperCase() + p.slice(1)
  }).join(' ')
  shop.add(name, function () {
    return require('./problems/' + problem)
  })
})

shop.execute(process.argv.slice(2))
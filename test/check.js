var spawn = require('child_process').spawn
var path = require('path')
var test = require('tape')
var fs = require('fs')
var adventures = fs.readdirSync(path.resolve(__dirname, '..', 'problems'))

adventures.slice(1).forEach(function (name) {

    if (name === '15-use-for-each.js') {
        return;
    }

    test(name, function (t) {
        t.plan(2)
        var solution = path.join(__dirname, 'solutions', name)
        
        var ps = run([ 'select', name.replace(/\.js$/, '') ])
        ps.on('exit', selected)
        ps.stderr.pipe(process.stderr)
        
        function selected (code) {
            t.equal(code, 0)
            var ps = run([ 'verify', solution ])
            ps.on('exit', verified)
            ps.stderr.pipe(process.stderr)
            ps.stdout.pipe(process.stderr)
        }
        
        function verified (code) {
            t.equal(code, 0)
        }
    })
})

function run (args) {
    args.unshift(path.join(__dirname, '../index.js'))
    return spawn(process.execPath, args)
}
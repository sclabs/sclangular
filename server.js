// dev server for testing the app

var express = require('express');
var app = express();

// mimic dev server functionality
app.route('/backend/someModule/list/').get(function(req, res, next) {
    res.sendFile('server/objects.json', { root: __dirname });
});
app.route('/backend/otherModule/list/').get(function(req, res, next) {
    res.sendFile('server/things.json', { root: __dirname });
});

// add in the livereload stuff
app.use(require('connect-livereload')());

// assets contains static files, gotta let the client request these normally
app.use('/assets', express.static(__dirname + '/assets'));

// if the client asks for anything else give them index.html
app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000);
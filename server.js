var express = require('express');

var app = express.createServer(express.logger());

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
});
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/vis.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

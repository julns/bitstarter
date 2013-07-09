var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buf = new Buffer(256);

    var ind = fs.readFileSync('index.html');

    var len =  buf.write(ind);

  response.send('buf.toString('utf8', 0, len)');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

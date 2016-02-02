var http = require('http');

const PORT = 7000;

var badPhrase = ['You are so noob', 'You are a loser', 'You will fail at life'];

var handleRequest = function (req, res) {
  var randomNum = Math.floor(Math.random()*goodPhrase.length) + 1
  res.end(badPhrase[randomNum]);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});
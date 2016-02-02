var http = require('http');

const PORT = 7000;

var goodPhrase = ['You are so cool', 'You aren\'t a loser', 'Don\'t let your dreams become dreams, JUST DO IT!'];

var handleRequest = function (req, res) {
  var randomNum = Math.floor(Math.random()*goodPhrase.length) + 1
  res.end(goodPhrase[randomNum]);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});
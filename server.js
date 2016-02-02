var http = require('http');

const PORT = 7000;

var goodPhrase = ['You are so cool', 'You aren\'t a loser', 'Don\'t let your dreams become dreams, JUST DO IT!'];

var handleRequest = function (req, res) {
  var randomNum = Math.floor(Math.random()*goodPhrase.length);
  res.end(goodPhrase[randomNum]);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server is listening at http://localhost:%s", PORT);
});


const PORT2 = 7500;

var badPhrase = ['You are so noob', 'You are a loser', 'You will fail at life'];

var handleRequest2 = function (req, res) {
  var randomNum = Math.floor(Math.random()*badPhrase.length);
  res.end(badPhrase[randomNum]);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
  console.log("Server is listening at http://localhost:%s", PORT2);
});
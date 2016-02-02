var http = require('http');
var Twitter = require('twitter');
var keys = require("./keys.js");

// function getTweets () {
//   var client = new Twitter({
//     consumer_key: keys.twitterKeys.consumer_key,
//     consumer_secret: keys.twitterKeys.consumer_secret,
//     access_token_key: keys.twitterKeys.access_token_key,
//     access_token_secret: keys.twitterKeys.access_token_secret
//   });

//   client.get('statuses/user_timeline', {screen_name: 'paulducsantos'},  function(error, tweet, response){
//     if(error) throw error;
//     for (var i = 0; i < 20; i++) {
//       console.log(tweet[i].text);
//       writeToFile("\n" + tweet[i].text + "\n");
//       console.log("Tweeted on: " + tweet[i].created_at + "\n");
//       writeToFile("Tweeted on: " + tweet[i].created_at + "\n")
//     }
//     // console.log(tweet[0].id);  // Tweet body. 
//     //console.log(response);  // Raw response object. 
//   });
// }



const PORT = 7000;

var goodPhrase = ['You are so cool', 'You aren\'t a loser', 'Don\'t let your dreams become dreams, JUST DO IT!'];

var handleRequest = function (req, res) {
  var randomNum = Math.floor(Math.random()*goodPhrase.length);
  res.end(goodPhrase[randomNum], getTweets());
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
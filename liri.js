require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");


//concert-this
artist = "weeknd";

request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(JSON.parse(body));
  }
});

//spotify-this-song

//movie-this

//do-what-it-says

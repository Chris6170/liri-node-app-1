require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");

/*
//concert-this
artist = "weeknd";

request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body));
    }
});


//movie-this
movie = "venom";

request("http://www.omdbapi.com/?apikey=trilogy&t=" + movie, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(JSON.parse(body));
    }
});




*/

//spotify-this-song
song = "madura"
var SpotifyAPI = require('node-spotify-api');
var spotify = new SpotifyAPI(keys.spotify);

spotify.search({ type: 'track', query: song, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

  console.log(data.tracks.items);
  });




//do-what-it-says

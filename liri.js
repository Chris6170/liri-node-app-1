require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var moment = require('moment');

var userRequest = process.argv[2]
var userFilter = process.argv[3]
var usage = "\nUsage: node liri.js OPTION FILTER\n\nValid OPTIONs are:\nconcert-this\nspotify-this-song\nmovie-this\ndo-what-it-says"
var validOptions = ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]

if (validOptions.indexOf(userRequest) === -1) {
    console.log(usage)
    return;
}

if (userRequest === "concert-this") {
    request("https://rest.bandsintown.com/artists/" + userFilter + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);

            for (var i = 0; i < data.length; i++) {
                console.log("----- Venue #" + i + " -----");
                console.log("Name: " + data[0].venue.name);
                console.log("Location: " + data[0].venue.city + ", " + data[0].venue.country);
                console.log("Date: " + moment(data[0].datetime).format('MM/DD/YYYY'));
            }
        }
    });
}

if (userRequest === "spotify-this-song") {
    var SpotifyAPI = require('node-spotify-api');
    var spotify = new SpotifyAPI(keys.spotify);

    spotify.search({ type: 'track', query: userFilter, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artists:")
        for (var i = 0; i < data.tracks.items[0].artists.length; i++) {
            console.log(data.tracks.items[0].artists[i].name);
        }
        console.log("Song Name:")
        console.log(data.tracks.items[0].name);
        console.log("Preview URL:")
        console.log(data.tracks.items[0].preview_url);
        console.log("Album:")
        console.log(data.tracks.items[0]);

    });

}

if (userRequest === "movie-this") {
    request("http://www.omdbapi.com/?apikey=trilogy&t=" + userFilter, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body));
        }
    });
   /* * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.*/
}

if (userRequest === "do-what-it-says") {
  fs.readFIle("random.txt")
}
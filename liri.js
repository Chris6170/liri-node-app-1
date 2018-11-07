require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");

var userRequest = process.argv[2]
var userFilter = process.argv[3]


if (userRequest === "concert-this") {
    request("https://rest.bandsintown.com/artists/" + userFilter + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body));
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

        console.log(data.tracks.items);
    });

}

if (userRequest === "movie-this") {
    request("http://www.omdbapi.com/?apikey=trilogy&t=" + userFilter, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(body));
        }
    });
}

if (userRequest === "do-what-it-says") {

}



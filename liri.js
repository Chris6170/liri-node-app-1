require("dotenv").config();
var keys = require("./keys.js");
var request = require("request");
var moment = require('moment');
var fs = require("fs");


var userRequest = process.argv[2]
var userFilter = process.argv[3]
var usage = "\nUsage: node liri.js OPTION FILTER\n\nValid OPTIONs are:\nconcert-this '<artist/band name here>'\nExample: concert-this 'ozuna'\n\nspotify-this-song '<song title here>'\nExample: spotify-this-song 'thriller'\n\nmovie-this '<movie name here>'\nExample: movie-this 'harry potter'\n\ndo-what-it-says\nExample: do-what-it-says"
var validOptions = ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]

if (validOptions.indexOf(userRequest) === -1) {
    console.log(usage)
    return;
}


if (userRequest === "concert-this") {
    concertThis(userFilter)
}

function concertThis(filter) {
    request("https://rest.bandsintown.com/artists/" + filter + "/events?app_id=codingbootcamp", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);

            for (var i = 0; i < data.length; i++) {
                var output = "----- Venue #" + i + " -----" + "\n" +
                    "Name: " + data[i].venue.name + "\n" +
                    "Lineup: " + data[i].lineup + "\n" +
                    "Location: " + data[i].venue.city + ", " + data[0].venue.country + "\n" +
                    "Date: " + moment(data[i].datetime).format('MM/DD/YYYY') + "\n";

                console.log(output)
                logIt(output)
            }
        }
    });
}


if (userRequest === "spotify-this-song") {
    spotifyThis(userFilter)
}

function spotifyThis(filter) {
    var SpotifyAPI = require('node-spotify-api');
    var spotify = new SpotifyAPI(keys.spotify);

    var song = filter;

    if (filter === undefined || filter.length === 0) {
        song = "The Sign"
    }

    spotify.search({ type: 'track', query: song, limit: 5 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        for (var a = 0; a < data.tracks.items.length; a++) {
            var output = "----- Song #" + eval(a + 1) + " -----" + "\n";
            var artists = [];
            for (var b = 0; b < data.tracks.items[a].artists.length; b++) {
                artists.push(data.tracks.items[a].artists[b].name);
            }
            output = output + "Artists: " + artists + "\n" +
                "Song Name: " + data.tracks.items[a].name + "\n" +
                "Preview URL: " + data.tracks.items[a].preview_url + "\n" +
                "Album: " + data.tracks.items[a].album.name + "\n";

            console.log(output)
            logIt(output)
        }



    });

}

if (userRequest === "movie-this") {
    movieThis(userFilter)
}

function movieThis(filter) {
    var movie = filter;

    if (filter === undefined || filter.length === 0) {
        movie = "Mr. Nobody"
    }

    request("http://www.omdbapi.com/?apikey=trilogy&t=" + movie, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            data = JSON.parse(body);

            var output = "Title: " + data.Title + "\n" +
                "Year: " + data.Year + "\n" +
                "imdbRating: " + data.imdbRating + "\n" +
                "Country: " + data.Country + "\n";
            for (var i = 0; i < data.Ratings.length; i++) {
                if (data.Ratings[i].Source === "Rotten Tomatoes") {
                    output = output + "Rotten Tomatoes Rating: " + data.Ratings[i].Value + "\n";
                }

            }
            output = output + "Language: " + data.Language + "\n" +
                "Plot: " + data.Plot + "\n" +
                "Actors: " + data.Actors + "\n";

            console.log(output)
            logIt(output)
        }
    });

}

if (userRequest === "do-what-it-says") {
    var requestFromFile = "";
    var filterFromFile = "";

    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        var dataArr = data.split(",");
        requestFromFile = dataArr[0];
        requestAsFunctionName = requestFromFile.split("-")[0] + "This"
        filterFromFile = dataArr[1];
        eval(requestAsFunctionName + "(" + filterFromFile + ")")
    });
}



function logIt(textBody) {
    fs.appendFile("log.txt", textBody + "\n\n", function (err) {
        if (err) {
            console.log(err);
        }
    });
}



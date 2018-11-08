This is a node.js application for searching for concerts, songs, or movies. The APIs being used here are:

Spotify for songs, Bands in Town for concerts, and OMDB for movies

Please Note:

>In order for the spotify-this-song option to work, you will need to provide your own .env file, containing proper credentials in the following format:

```
SPOTIFY_ID=""

SPOTIFY_SECRET=""
```

How to use it:
```
Usage: node liri.js OPTION FILTER

Valid OPTIONs/FILTERs are:
concert-this '<artist/band name here>'
Example: concert-this 'ozuna'

spotify-this-song '<song title here>'
Example: spotify-this-song 'thriller'

movie-this '<movie name here>'
Example: movie-this 'harry potter'

do-what-it-says
Example: do-what-it-says
```

Examples of usage:
```
*node liri.js concert-this weeknd*
----- Venue #0 -----
Name: Abu Dhabi F1
Lineup: The Weeknd
Location: Abu Dhabi, United Arab Emirates
Date: 11/23/2018

----- Venue #1 -----
Name: AsiaWorld Expo Arena
Lineup: The Weeknd
Location: Hong Kong, United Arab Emirates
Date: 11/30/2018

----- Venue #2 -----
Name: IMPACT
Lineup: The Weeknd
Location: Ban Mai, United Arab Emirates
Date: 12/02/2018

----- Venue #3 -----
Name: Indoor Stadium
Lineup: The Weeknd
Location: Singapore, United Arab Emirates
Date: 12/05/2018
```

```
*node liri.js spotify-this-song 'rolling stone'*
----- Song #1 -----
Artists: Bob Dylan
Song Name: Like a Rolling Stone
Preview URL: https://p.scdn.co/mp3-preview/f0eec1a1dbd31bf51cf323d2981535ec4fc5a568?cid=4c4391b8af494a6392c63f8a64ece8e9
Album: Highway 61 Revisited

----- Song #2 -----
Artists: The Weeknd
Song Name: Rolling Stone
Preview URL: null
Album: Trilogy

----- Song #3 -----
Artists: Falling In Reverse
Song Name: Rolling Stone
Preview URL: https://p.scdn.co/mp3-preview/75cf7a3b74f94fddfa692f21dce919536d0c910a?cid=4c4391b8af494a6392c63f8a64ece8e9
Album: Fashionably Late (Deluxe Edition)
```

```
*node liri.js movie-this 'venom'*
Title: Venom
Year: 2018
imdbRating: 7.0
Country: USA, China
Language: English
Plot: When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.
Actors: Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze
```

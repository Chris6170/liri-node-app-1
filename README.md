This is a node.js application for searching for concerts, songs, or movies. The APIs being used here are:

Spotify for songs, Bands in Town for concerts, and OMDB for movies



In order for the spotify-this-song option to work, you will need to provide your own .env file, containing proper credentials in the following format:

SPOTIFY_ID=""

SPOTIFY_SECRET=""


```
Usage: node liri.js OPTION FILTER

Valid OPTIONs are:
concert-this '<artist/band name here>'
Example: concert-this 'ozuna'

spotify-this-song '<song title here>'
Example: spotify-this-song 'thriller'

movie-this '<movie name here>'
Example: movie-this 'harry potter'

do-what-it-says
Example: do-what-it-says
```

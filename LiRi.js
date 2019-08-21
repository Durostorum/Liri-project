require("dotenv").config();
var fs = require('fs')
var moment = require('moment')
moment().format()
var keys = require("./keys.js")
const axios = require('axios')
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify)



// MOVIE_THIS FUNCTION
function omdbfunction () {
    var movieName = [];
    for ( var i = 3; i < process.argv.length; i++){
        movieName.push(process.argv[i])
    } if (movieName == ""){
        movieName = "Mr Nobody"
        console.log("_____________________\n\nIt's on NETFLIX TOO\n_____________________")
    }
  //MOVIE_THIS API REQUEST
  axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(function(response) {
      
      var movieInfo = response.data;
      var printMovie = 
      "--------------------------------------------------------------------" +
          "\n Name: " + movieInfo.Title + 
          "\n\n imdbRating: " + movieInfo.imdbRating +
          "\n Rotten Tomatoes: " + movieInfo.Ratings[1].Source + ' ' + movieInfo.Ratings[1].Value +
          "\n Country: " + movieInfo.Country +
          "\n Language: " + movieInfo.Language +
          "\n Plot: " + movieInfo.Plot +
          "\n Actors: " + movieInfo.Actors +
          "\n\n--------------------------------------------------------------------" ;
      console.log(printMovie)
  })
  }

//DO-WHAT IT SAYS function
function liriDo () {
    fs.readFile('random.txt', 'utf8', function(error, data){
        if (error){
            console.log(error)
        }else if (data){
            var dataArr = data.split(",");
            console.log(dataArr[1])
            spotifySong(dataArr[1])
        }
        
    })
}



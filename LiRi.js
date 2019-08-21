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
           // spotifySong(dataArr[1])
        }
        
    })
}



// CONCERT-THIS FUNCTION
function siriConcert() {
    var nodeArtist = process.argv;
    var newArtist = ""
    for ( var i = 3; i < nodeArtist.length; i++){
        if ( i > 2 && i < nodeArtist.length) {
            newArtist = newArtist + nodeArtist[i];
        } else {
          newArtist += nodeArtist[i];
        }
      }
        
    //CONCEERT-THIS API CALL
axios.get("https://rest.bandsintown.com/artists/" + newArtist + "/events?app_id=codingbootcamp").then(function(response) {
    var concertInfo = response.data;
    for( var x = 0; x < concertInfo.length; x++){
        var concertInfo = "\n--------------------------------------------------------------------" +
        "\nWhere: " + concertInfo[x].venue.name + 
        "\nCity: " + concertInfo[x].venue.city +
        "\nWhen: " + moment(concertInfo[x].datetime).format("MM/DD/YYYY") +
        "\n_____________";
        console.log(concertInfo)
       // logData(concertInfo)
        }
    })
}
require("dotenv").config();
var fs = require('fs')
var moment = require('moment')
moment().format()
var keys = require("./keys.js")
const axios = require('axios')
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify)









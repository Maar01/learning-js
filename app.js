/**
 * Created by mario on 9/01/17.
 */


var express = require('express');
var body_parser = require('body-parser');

var app = express();
var api = require('./routes/favoritos');

app.use( body_parser.urlencoded( {extended:false} ) );
app.use( body_parser.json() );
app.use( '/api', api );

module.exports = app;
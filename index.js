'use strict'

var mongoose = require('mongoose');
var  app = require('./app');
var port = process.env.PORT || 3678;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cursoJavascript', (err, res) => {

    if ( err ) {
      throw err;
    } else {
        console.log("Conexión a mongo exitosa");
        app.listen( port, function() {
            console.log(`This is working: API REST Favoritos http://localhost:${port}`);// imprime valor dentro de cadena?
        });
    }
});
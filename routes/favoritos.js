/**
 * Created by mario on 9/01/17.
 */
'use strict'

var express = require( 'express' );
var FavoritoController = require('../controllers/favoritoController');
var api =  express.Router();

api.get ('/prueba/:nombre?', FavoritoController.prueba );
api.get ('/favorito/:id?', FavoritoController.getFavoritos );
api.get ('/favorito/:id?', FavoritoController.getFavorito );
api.post('/favorito/', FavoritoController.saveFavorito );
api.put ( '/favorito', FavoritoController.updateFavorito );
api.delete( '/favorito/:id', FavoritoController.deleteFavorito );

module.exports = api;
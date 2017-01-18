/**
 * Created by mario on 9/01/17.
 */

'use strict'

var FavoritoModel = require('../models/favoritoModel');


function prueba( request, respuesta ) {

    //var nombre = request.params.nombre;

    respuesta
        .status( 200 )
        .send( { message: "Hola mundo with node.js and express "  } );


}

function getFavoritos( request, response ){
    FavoritoModel.find();

    response.status(200).send({data: favoritoId});

}

function getFavorito( request, response ){
    FavoritoModel.find();

    response.status(200).send({data: favoritoId});

}

function saveFavorito( request, response ) {
    var favorito_nuevo = new FavoritoModel();
    var params = request.body;
    favorito_nuevo.title = params.title;
    favorito_nuevo.description = params.description;
    favorito_nuevo.url = params.url;

    favorito_nuevo.save( ( error, favoritoStored ) => {
        if ( error ) {
            response.status(500).send( { message :'Error al guardar el favorito' } );
        } else {
            response.status(200).send( { favorito : favoritoStored } );
        }
    } );
}

function updateFavorito( request, response ) {
    var params = request.body;
    response.status(200).send({favorito : params});
}

function deleteFavorito( request, response ){
    var favoritoId = request.params.id;

    response.status( 200 ).send( {data: "Prueba delete"} );

}

module.exports = {
    prueba,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito,
    getFavorito
}
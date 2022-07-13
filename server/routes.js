// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push');


const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  //res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  //console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

// Almacenamos la suscripcion
router.post("/subscribe", (req, res) => {
  res.json("subscribe");
} )

// Almacenamos la suscripcion
router.get("/key", (req, res) => {
  /*
    * push.getKey() es un modulo que hemos creado para obtener la public key.
    * Este modulo esta en el archivo server/push.js
  */
  const key = push.getKey()

  res.send(key);
} )


// Enviar una notificacion push a las personas que queramos
// Se controla del lado del server
router.post("/push", (req, res) => {
  res.json("push");
} )



module.exports = router;
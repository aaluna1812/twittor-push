// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


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
  res.json( mensajes );
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
router.post("/suscribe", (req, res) => {
  res.json("suscribe");
} )

// Almacenamos la suscripcion
router.get("/key", (req, res) => {
  res.json("key publico");
} )


// Enviar una notificacion push a las personas que queramos
// Se controla del lado del server
router.post("/push", (req, res) => {
  res.json("push");
} )



module.exports = router;